// Users Service - CRUD operations for users collection in Firestore
import {
	collection,
	doc,
	getDocs,
	getDoc,
	addDoc,
	setDoc,
	updateDoc,
	deleteDoc,
	query,
	where,
	orderBy,
	limit,
	startAfter,
	onSnapshot,
	writeBatch,
} from 'firebase/firestore';
import { db } from './config';

/**
 * Users Service - Complete CRUD operations for users collection
 */
export const usersService = {
	/**
	 * Get all users from the users collection
	 * @param {Object} options - Query options
	 * @param {Array} options.constraints - Firestore query constraints
	 * @param {number} options.limitCount - Limit number of results
	 * @param {string} options.orderByField - Field to order by
	 * @param {string} options.orderDirection - 'asc' or 'desc'
	 * @returns {Promise<Object>} Success/error result with users data
	 */
	getAllUsers: async (options = {}) => {
		try {
			const {
				constraints = [],
				limitCount = null,
				orderByField = 'createdAt',
				orderDirection = 'desc',
			} = options;

			// Build query
			let q = collection(db, 'users');

			// Add constraints
			const queryConstraints = [...constraints];

			// Add ordering
			if (orderByField) {
				queryConstraints.push(orderBy(orderByField, orderDirection));
			}

			// Add limit
			if (limitCount) {
				queryConstraints.push(limit(limitCount));
			}

			// Apply all constraints
			if (queryConstraints.length > 0) {
				q = query(q, ...queryConstraints);
			}

			const querySnapshot = await getDocs(q);
			const users = [];

			querySnapshot.forEach((doc) => {
				users.push({
					id: doc.id,
					...doc.data(),
				});
			});

			return {
				success: true,
				data: users,
				count: users.length,
			};
		} catch (error) {
			console.error('Error getting all users:', error);
			return {
				success: false,
				error: error.message,
				data: [],
				count: 0,
			};
		}
	},

	/**
	 * Get a single user by ID
	 * @param {string} userId - User document ID
	 * @returns {Promise<Object>} Success/error result with user data
	 */
	getUserById: async (userId) => {
		try {
			if (!userId) {
				return {
					success: false,
					error: 'User ID is required',
				};
			}

			const userRef = doc(db, 'users', userId);
			const userSnap = await getDoc(userRef);

			if (userSnap.exists()) {
				return {
					success: true,
					data: {
						id: userSnap.id,
						...userSnap.data(),
					},
				};
			} else {
				return {
					success: false,
					error: 'User not found',
				};
			}
		} catch (error) {
			console.error('Error getting user by ID:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	/**
	 * Get users by email
	 * @param {string} email - User email
	 * @returns {Promise<Object>} Success/error result with user data
	 */
	getUserByEmail: async (email) => {
		try {
			if (!email) {
				return {
					success: false,
					error: 'Email is required',
				};
			}

			const q = query(
				collection(db, 'users'),
				where('email', '==', email)
			);

			const querySnapshot = await getDocs(q);
			const users = [];

			querySnapshot.forEach((doc) => {
				users.push({
					id: doc.id,
					...doc.data(),
				});
			});

			return {
				success: true,
				data: users,
				count: users.length,
			};
		} catch (error) {
			console.error('Error getting user by email:', error);
			return {
				success: false,
				error: error.message,
				data: [],
				count: 0,
			};
		}
	},

	/**
	 * Get users by role
	 * @param {string} role - User role
	 * @returns {Promise<Object>} Success/error result with users data
	 */
	getUsersByRole: async (role) => {
		try {
			if (!role) {
				return {
					success: false,
					error: 'Role is required',
				};
			}

			const q = query(collection(db, 'users'), where('role', '==', role));

			const querySnapshot = await getDocs(q);
			const users = [];

			querySnapshot.forEach((doc) => {
				users.push({
					id: doc.id,
					...doc.data(),
				});
			});

			return {
				success: true,
				data: users,
				count: users.length,
			};
		} catch (error) {
			console.error('Error getting users by role:', error);
			return {
				success: false,
				error: error.message,
				data: [],
				count: 0,
			};
		}
	},

	/**
	 * Get active users only
	 * @returns {Promise<Object>} Success/error result with users data
	 */
	getActiveUsers: async () => {
		try {
			const q = query(
				collection(db, 'users'),
				where('isActive', '==', true)
			);

			const querySnapshot = await getDocs(q);
			const users = [];

			querySnapshot.forEach((doc) => {
				users.push({
					id: doc.id,
					...doc.data(),
				});
			});

			return {
				success: true,
				data: users,
				count: users.length,
			};
		} catch (error) {
			console.error('Error getting active users:', error);
			return {
				success: false,
				error: error.message,
				data: [],
				count: 0,
			};
		}
	},

	/**
	 * Create a new user
	 * @param {Object} userData - User data to create
	 * @param {string} userData.email - User email
	 * @param {string} userData.firstName - User first name
	 * @param {string} userData.lastName - User last name
	 * @param {string} userData.employeeId - Employee ID
	 * @param {string} userData.role - User role
	 * @param {string} userData.phone - User phone number
	 * @param {string} userData.photoURL - User photo URL
	 * @param {number} userData.pin - User PIN
	 * @param {boolean} userData.isActive - Whether user is active
	 * @param {string} userId - Optional custom user ID
	 * @returns {Promise<Object>} Success/error result with created user data
	 */
	createUser: async (userData, userId = null) => {
		try {
			// Validate required fields
			const requiredFields = [
				'email',
				'firstName',
				'lastName',
				'employeeId',
			];
			const missingFields = requiredFields.filter(
				(field) => !userData[field]
			);

			if (missingFields.length > 0) {
				return {
					success: false,
					error: `Missing required fields: ${missingFields.join(
						', '
					)}`,
				};
			}

			// Check if user with email already exists
			const existingUser = await usersService.getUserByEmail(
				userData.email
			);
			if (existingUser.success && existingUser.data.length > 0) {
				return {
					success: false,
					error: 'User with this email already exists',
				};
			}

			// Prepare user data with timestamps
			const newUserData = {
				...userData,
				createdAt: new Date(),
				updatedAt: new Date(),
				isActive:
					userData.isActive !== undefined ? userData.isActive : true,
				role: userData.role || 'employee',
				activity: userData.activity || [],
				unlockedBy: userData.unlockedBy || [],
			};

			let userRef;
			if (userId) {
				// Create with custom ID
				userRef = doc(db, 'users', userId);
				await setDoc(userRef, newUserData);
			} else {
				// Create with auto-generated ID
				userRef = await addDoc(collection(db, 'users'), newUserData);
			}

			return {
				success: true,
				data: {
					id: userRef.id,
					...newUserData,
				},
				message: 'User created successfully',
			};
		} catch (error) {
			console.error('Error creating user:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	/**
	 * Update an existing user
	 * @param {string} userId - User document ID
	 * @param {Object} updateData - Data to update
	 * @returns {Promise<Object>} Success/error result
	 */
	updateUser: async (userId, updateData) => {
		try {
			if (!userId) {
				return {
					success: false,
					error: 'User ID is required',
				};
			}

			// Check if user exists
			const userExists = await usersService.getUserById(userId);
			if (!userExists.success) {
				return {
					success: false,
					error: 'User not found',
				};
			}

			// Prepare update data with timestamp
			const updatedData = {
				...updateData,
				updatedAt: new Date(),
			};

			// Remove fields that shouldn't be updated
			delete updatedData.createdAt;
			delete updatedData.id;

			const userRef = doc(db, 'users', userId);
			await updateDoc(userRef, updatedData);

			// Get updated user data
			const updatedUser = await usersService.getUserById(userId);

			return {
				success: true,
				data: updatedUser.data,
				message: 'User updated successfully',
			};
		} catch (error) {
			console.error('Error updating user:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	/**
	 * Delete a user
	 * @param {string} userId - User document ID
	 * @returns {Promise<Object>} Success/error result
	 */
	deleteUser: async (userId) => {
		try {
			if (!userId) {
				return {
					success: false,
					error: 'User ID is required',
				};
			}

			// Check if user exists
			const userExists = await usersService.getUserById(userId);
			if (!userExists.success) {
				return {
					success: false,
					error: 'User not found',
				};
			}

			const userRef = doc(db, 'users', userId);
			await deleteDoc(userRef);

			return {
				success: true,
				message: 'User deleted successfully',
			};
		} catch (error) {
			console.error('Error deleting user:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	/**
	 * Soft delete a user (set isActive to false)
	 * @param {string} userId - User document ID
	 * @returns {Promise<Object>} Success/error result
	 */
	deactivateUser: async (userId) => {
		try {
			return await usersService.updateUser(userId, { isActive: false });
		} catch (error) {
			console.error('Error deactivating user:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	/**
	 * Reactivate a user (set isActive to true)
	 * @param {string} userId - User document ID
	 * @returns {Promise<Object>} Success/error result
	 */
	activateUser: async (userId) => {
		try {
			return await usersService.updateUser(userId, { isActive: true });
		} catch (error) {
			console.error('Error activating user:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	/**
	 * Search users by name or email
	 * @param {string} searchTerm - Search term
	 * @returns {Promise<Object>} Success/error result with users data
	 */
	searchUsers: async (searchTerm) => {
		try {
			if (!searchTerm || searchTerm.trim().length < 2) {
				return {
					success: false,
					error: 'Search term must be at least 2 characters',
					data: [],
					count: 0,
				};
			}

			const term = searchTerm.toLowerCase().trim();
			const allUsers = await usersService.getAllUsers();

			if (!allUsers.success) {
				return allUsers;
			}

			const filteredUsers = allUsers.data.filter((user) => {
				const firstName = (user.firstName || '').toLowerCase();
				const lastName = (user.lastName || '').toLowerCase();
				const email = (user.email || '').toLowerCase();
				const employeeId = (user.employeeId || '').toLowerCase();

				return (
					firstName.includes(term) ||
					lastName.includes(term) ||
					email.includes(term) ||
					employeeId.includes(term) ||
					`${firstName} ${lastName}`.includes(term)
				);
			});

			return {
				success: true,
				data: filteredUsers,
				count: filteredUsers.length,
			};
		} catch (error) {
			console.error('Error searching users:', error);
			return {
				success: false,
				error: error.message,
				data: [],
				count: 0,
			};
		}
	},

	/**
	 * Get users with pagination
	 * @param {Object} options - Pagination options
	 * @param {number} options.pageSize - Number of users per page
	 * @param {string} options.lastDocId - Last document ID for pagination
	 * @param {string} options.orderByField - Field to order by
	 * @param {string} options.orderDirection - 'asc' or 'desc'
	 * @returns {Promise<Object>} Success/error result with paginated users data
	 */
	getUsersPaginated: async (options = {}) => {
		try {
			const {
				pageSize = 10,
				lastDocId = null,
				orderByField = 'createdAt',
				orderDirection = 'desc',
			} = options;

			let q = query(
				collection(db, 'users'),
				orderBy(orderByField, orderDirection),
				limit(pageSize + 1) // Get one extra to check if there are more pages
			);

			const querySnapshot = await getDocs(q);
			const users = [];
			let lastDoc = null;

			querySnapshot.forEach((doc) => {
				if (users.length < pageSize) {
					users.push({
						id: doc.id,
						...doc.data(),
					});
				}
				lastDoc = doc;
			});

			const hasMore = querySnapshot.docs.length > pageSize;

			return {
				success: true,
				data: users,
				count: users.length,
				hasMore,
				lastDocId: lastDoc ? lastDoc.id : null,
			};
		} catch (error) {
			console.error('Error getting paginated users:', error);
			return {
				success: false,
				error: error.message,
				data: [],
				count: 0,
				hasMore: false,
				lastDocId: null,
			};
		}
	},

	/**
	 * Batch create multiple users
	 * @param {Array} usersData - Array of user data objects
	 * @returns {Promise<Object>} Success/error result with created users data
	 */
	batchCreateUsers: async (usersData) => {
		try {
			if (!Array.isArray(usersData) || usersData.length === 0) {
				return {
					success: false,
					error: 'Users data array is required',
				};
			}

			const batch = writeBatch(db);
			const createdUsers = [];

			for (const userData of usersData) {
				const userRef = doc(collection(db, 'users'));
				const newUserData = {
					...userData,
					createdAt: new Date(),
					updatedAt: new Date(),
					isActive:
						userData.isActive !== undefined
							? userData.isActive
							: true,
					role: userData.role || 'employee',
					activity: userData.activity || [],
					unlockedBy: userData.unlockedBy || [],
				};

				batch.set(userRef, newUserData);
				createdUsers.push({
					id: userRef.id,
					...newUserData,
				});
			}

			await batch.commit();

			return {
				success: true,
				data: createdUsers,
				count: createdUsers.length,
				message: `${createdUsers.length} users created successfully`,
			};
		} catch (error) {
			console.error('Error batch creating users:', error);
			return {
				success: false,
				error: error.message,
				data: [],
				count: 0,
			};
		}
	},

	/**
	 * Listen to real-time updates for users collection
	 * @param {Function} callback - Callback function to handle updates
	 * @param {Array} constraints - Firestore query constraints
	 * @returns {Function} Unsubscribe function
	 */
	subscribeToUsers: (callback, constraints = []) => {
		try {
			let q = collection(db, 'users');

			if (constraints.length > 0) {
				q = query(q, ...constraints);
			}

			return onSnapshot(
				q,
				(querySnapshot) => {
					const users = [];
					querySnapshot.forEach((doc) => {
						users.push({
							id: doc.id,
							...doc.data(),
						});
					});

					callback({
						success: true,
						data: users,
						count: users.length,
					});
				},
				(error) => {
					console.error('Error in users subscription:', error);
					callback({
						success: false,
						error: error.message,
						data: [],
						count: 0,
					});
				}
			);
		} catch (error) {
			console.error('Error setting up users subscription:', error);
			return () => {}; // Return empty unsubscribe function
		}
	},

	/**
	 * Get user statistics
	 * @returns {Promise<Object>} Success/error result with user statistics
	 */
	getUserStats: async () => {
		try {
			const allUsers = await usersService.getAllUsers();

			if (!allUsers.success) {
				return allUsers;
			}

			const users = allUsers.data;
			const totalUsers = users.length;
			const activeUsers = users.filter((user) => user.isActive).length;
			const inactiveUsers = totalUsers - activeUsers;

			// Count by role
			const roleCounts = users.reduce((acc, user) => {
				const role = user.role || 'unknown';
				acc[role] = (acc[role] || 0) + 1;
				return acc;
			}, {});

			// Count by creation month (last 12 months)
			const now = new Date();
			const monthlyCounts = {};

			for (let i = 0; i < 12; i++) {
				const month = new Date(
					now.getFullYear(),
					now.getMonth() - i,
					1
				);
				const monthKey = month.toISOString().substring(0, 7); // YYYY-MM
				monthlyCounts[monthKey] = 0;
			}

			users.forEach((user) => {
				if (user.createdAt) {
					const userDate = user.createdAt.toDate
						? user.createdAt.toDate()
						: new Date(user.createdAt);
					const monthKey = userDate.toISOString().substring(0, 7);
					if (monthlyCounts.hasOwnProperty(monthKey)) {
						monthlyCounts[monthKey]++;
					}
				}
			});

			return {
				success: true,
				data: {
					totalUsers,
					activeUsers,
					inactiveUsers,
					roleCounts,
					monthlyCounts,
				},
			};
		} catch (error) {
			console.error('Error getting user statistics:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},
};

// Export query helpers for convenience
export const userQueryHelpers = {
	where,
	orderBy,
	limit,
	startAfter,
};

// Export the service as default
export default usersService;
