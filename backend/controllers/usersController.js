const { auth, db } = require('../firebase');
const {
	formatFirebaseUsers,
	formatFirebaseUser,
	sanitizeUserForResponse,
	generatePin,
	generateEmployeeId,
} = require('../utils/userUtils');
const User = require('../models/User');

/**
 * Get all users from Firebase Auth
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getAllUsers = async (req, res) => {
	try {
		// List all users (default max is 1000)
		const listUsersResult = await auth.listUsers();

		// Format user data using our User model
		const users = formatFirebaseUsers(listUsersResult.users);

		res.json({
			success: true,
			count: users.length,
			users: users,
		});
	} catch (error) {
		console.error('Error fetching users:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to fetch users',
			message: error.message,
		});
	}
};

/**
 * Get a specific user by UID
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const getUserById = async (req, res) => {
	try {
		const { uid } = req.params;

		if (!uid) {
			return res.status(400).json({
				success: false,
				error: 'User ID is required',
			});
		}

		const userRecord = await auth.getUser(uid);

		// Format user data using our User model
		const user = formatFirebaseUser(userRecord);

		res.json({
			success: true,
			user: user,
		});
	} catch (error) {
		console.error('Error fetching user:', error);

		if (error.code === 'auth/user-not-found') {
			return res.status(404).json({
				success: false,
				error: 'User not found',
			});
		}

		res.status(500).json({
			success: false,
			error: 'Failed to fetch user',
			message: error.message,
		});
	}
};

/**
 * Create a new user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const createUser = async (req, res) => {
	try {
		const userData = req.validatedUserData;

		// Check if user already exists with this email
		try {
			await auth.getUserByEmail(userData.email);
			return res.status(409).json({
				success: false,
				error: 'User already exists',
				message: 'A user with this email already exists',
			});
		} catch (error) {
			// User doesn't exist, which is what we want
			if (error.code !== 'auth/user-not-found') {
				throw error;
			}
		}

		// Generate PIN if not provided
		if (!userData.pin) {
			userData.pin = generatePin();
		}

		// Create user in Firebase Auth
		const isValidUrl = (value) => {
			try {
				if (!value || typeof value !== 'string') return false;
				new URL(value);
				return true;
			} catch (_) {
				return false;
			}
		};

		const authCreateData = {
			email: userData.email,
			password: userData.password || 'TempPassword123!', // Default password
			displayName: `${userData.firstName} ${userData.lastName}`.trim(),
			disabled:
				userData.isActive !== undefined ? !userData.isActive : false,
		};

		if (isValidUrl(userData.photoURL)) {
			authCreateData.photoURL = userData.photoURL;
		}

		const userRecord = await auth.createUser(authCreateData);

		// Create User model instance with additional data
		const user = new User({
			...userData,
		});

		// Persist user custom data in Firestore keyed by Auth UID
		await db
			.collection('users')
			.doc(userRecord.uid)
			.set(user.toObject(), { merge: true });

		// Set custom claims for role
		if (userData.role) {
			await auth.setCustomUserClaims(userRecord.uid, {
				role: userData.role,
			});
		}

		// Format the response
		const formattedUser = formatFirebaseUser(userRecord);
		const userWithCustomData = {
			...formattedUser,
			...user.toObject(),
			uid: userRecord.uid, // Include the Firebase Auth UID
		};

		res.status(201).json({
			success: true,
			message: 'User created successfully',
			user: sanitizeUserForResponse(userWithCustomData),
		});
	} catch (error) {
		console.error('Error creating user:', error);

		// Handle specific Firebase Auth errors
		if (error.code === 'auth/email-already-exists') {
			return res.status(409).json({
				success: false,
				error: 'Email already exists',
				message: 'A user with this email already exists',
			});
		}

		if (error.code === 'auth/invalid-email') {
			return res.status(400).json({
				success: false,
				error: 'Invalid email',
				message: 'The email address is invalid',
			});
		}

		if (error.code === 'auth/weak-password') {
			return res.status(400).json({
				success: false,
				error: 'Weak password',
				message: 'The password is too weak',
			});
		}

		res.status(500).json({
			success: false,
			error: 'Failed to create user',
			message: error.message,
		});
	}
};

/**
 * Update a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateUser = async (req, res) => {
	try {
		const { uid } = req.params;
		const updateData = req.validatedUpdateData;

		if (!uid) {
			return res.status(400).json({
				success: false,
				error: 'User ID is required',
			});
		}

		// Check if user exists
		let userRecord;
		try {
			userRecord = await auth.getUser(uid);
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				return res.status(404).json({
					success: false,
					error: 'User not found',
				});
			}
			throw error;
		}

		// Prepare update data for Firebase Auth
		const authUpdateData = {};
		if (updateData.email) authUpdateData.email = updateData.email;
		if (updateData.firstName || updateData.lastName) {
			authUpdateData.displayName = `${
				updateData.firstName || userRecord.displayName?.split(' ')[0]
			} ${
				updateData.lastName ||
				userRecord.displayName?.split(' ').slice(1).join(' ')
			}`.trim();
		}
		if (updateData.photoURL !== undefined)
			authUpdateData.photoURL = updateData.photoURL;
		if (updateData.isActive !== undefined)
			authUpdateData.disabled = !updateData.isActive;

		// Update Firebase Auth user if there are auth-related changes
		if (Object.keys(authUpdateData).length > 0) {
			await auth.updateUser(uid, authUpdateData);
		}

		// Update custom claims if role is being updated
		if (updateData.role) {
			await auth.setCustomUserClaims(uid, {
				role: updateData.role,
			});
		}

		// Get updated user record
		const updatedUserRecord = await auth.getUser(uid);
		const formattedUser = formatFirebaseUser(updatedUserRecord);

		// Merge with custom data
		const userWithCustomData = {
			...formattedUser,
			...updateData,
			updatedAt: new Date().toISOString(),
		};

		res.json({
			success: true,
			message: 'User updated successfully',
			user: sanitizeUserForResponse(userWithCustomData),
		});
	} catch (error) {
		console.error('Error updating user:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to update user',
			message: error.message,
		});
	}
};

/**
 * Delete a user
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const deleteUser = async (req, res) => {
	try {
		const { uid } = req.params;

		if (!uid) {
			return res.status(400).json({
				success: false,
				error: 'User ID is required',
			});
		}

		// Check if user exists
		try {
			await auth.getUser(uid);
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				return res.status(404).json({
					success: false,
					error: 'User not found',
				});
			}
			throw error;
		}

		// Delete user from Firebase Auth
		await auth.deleteUser(uid);

		res.json({
			success: true,
			message: 'User deleted successfully',
		});
	} catch (error) {
		console.error('Error deleting user:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to delete user',
			message: error.message,
		});
	}
};

/**
 * Update user photo URL
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
const updateUserPhoto = async (req, res) => {
	try {
		const { uid } = req.params;
		const { photoURL } = req.body;

		if (!uid) {
			return res.status(400).json({
				success: false,
				error: 'User ID is required',
			});
		}

		if (!photoURL) {
			return res.status(400).json({
				success: false,
				error: 'Photo URL is required',
			});
		}

		// Check if user exists
		try {
			await auth.getUser(uid);
		} catch (error) {
			if (error.code === 'auth/user-not-found') {
				return res.status(404).json({
					success: false,
					error: 'User not found',
				});
			}
			throw error;
		}

		// Update Firebase Auth user photoURL
		await auth.updateUser(uid, {
			photoURL: photoURL,
		});

		// Update Firestore user document
		await db.collection('users').doc(uid).update({
			photoURL: photoURL,
			updatedAt: new Date().toISOString(),
		});

		res.json({
			success: true,
			message: 'User photo updated successfully',
		});
	} catch (error) {
		console.error('Error updating user photo:', error);
		res.status(500).json({
			success: false,
			error: 'Failed to update user photo',
			message: error.message,
		});
	}
};

module.exports = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	updateUserPhoto,
};
