/**
 * User Model
 * Defines the structure and validation for user data
 */

class User {
	constructor(data = {}) {
		this.activity = data.activity || [];
		this.createdAt = data.createdAt || new Date();
		this.email = data.email || '';
		this.employeeId = data.employeeId || '';
		this.firstName = data.firstName || '';
		this.isActive = data.isActive !== undefined ? data.isActive : true;
		this.lastName = data.lastName || '';
		this.phone = data.phone || '';
		this.photoURL = data.photoURL || '';
		this.pin = data.pin || null;
		this.role = data.role || 'employee';
		this.unlockedBy = data.unlockedBy || [];
		this.updatedAt = data.updatedAt || new Date();
	}

	/**
	 * Validate user data
	 * @returns {Object} Validation result with isValid and errors
	 */
	validate() {
		const errors = [];

		// Required fields validation
		if (!this.email || !this.email.trim()) {
			errors.push('Email is required');
		} else if (!this.isValidEmail(this.email)) {
			errors.push('Email format is invalid');
		}

		if (!this.firstName || !this.firstName.trim()) {
			errors.push('First name is required');
		}

		if (!this.lastName || !this.lastName.trim()) {
			errors.push('Last name is required');
		}

		// Optional field validation
		if (this.phone && !this.isValidPhone(this.phone)) {
			errors.push('Phone number format is invalid');
		}

		if (
			this.pin !== null &&
			(!Number.isInteger(this.pin) || this.pin < 1000 || this.pin > 9999)
		) {
			errors.push('PIN must be a 4-digit number');
		}

		if (this.role && !this.isValidRole(this.role)) {
			errors.push('Invalid role specified');
		}

		// Array validation
		if (!Array.isArray(this.activity)) {
			errors.push('Activity must be an array');
		}

		if (!Array.isArray(this.unlockedBy)) {
			errors.push('UnlockedBy must be an array');
		}

		// Boolean validation
		if (typeof this.isActive !== 'boolean') {
			errors.push('IsActive must be a boolean value');
		}

		return {
			isValid: errors.length === 0,
			errors: errors,
		};
	}

	/**
	 * Validate email format
	 * @param {string} email - Email to validate
	 * @returns {boolean} True if valid email format
	 */
	isValidEmail(email) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}

	/**
	 * Validate phone number format
	 * @param {string} phone - Phone number to validate
	 * @returns {boolean} True if valid phone format
	 */
	isValidPhone(phone) {
		// Basic phone validation - can be customized based on requirements
		const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
		return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
	}

	/**
	 * Validate role
	 * @param {string} role - Role to validate
	 * @returns {boolean} True if valid role
	 */
	isValidRole(role) {
		const validRoles = ['admin', 'manager', 'employee', 'contractor'];
		return validRoles.includes(role);
	}

	/**
	 * Validate URL format
	 * @param {string} url - URL to validate
	 * @returns {boolean} True if valid URL format
	 */
	isValidURL(url) {
		try {
			new URL(url);
			return true;
		} catch {
			return false;
		}
	}

	/**
	 * Convert user to plain object
	 * @returns {Object} User data as plain object
	 */
	toObject() {
		return {
			activity: this.activity,
			createdAt: this.createdAt,
			email: this.email,
			employeeId: this.employeeId,
			firstName: this.firstName,
			isActive: this.isActive,
			lastName: this.lastName,
			phone: this.phone,
			photoURL: this.photoURL,
			pin: this.pin,
			role: this.role,
			unlockedBy: this.unlockedBy,
			updatedAt: this.updatedAt,
		};
	}

	/**
	 * Create user from Firebase Auth user record
	 * @param {Object} userRecord - Firebase Auth user record
	 * @returns {User} User instance
	 */
	static fromFirebaseUser(userRecord) {
		return new User({
			email: userRecord.email || '',
			firstName: userRecord.displayName
				? userRecord.displayName.split(' ')[0]
				: '',
			lastName: userRecord.displayName
				? userRecord.displayName.split(' ').slice(1).join(' ')
				: '',
			photoURL: userRecord.photoURL || '',
			isActive: !userRecord.disabled,
			createdAt: userRecord.metadata.creationTime,
			updatedAt:
				userRecord.metadata.lastSignInTime ||
				userRecord.metadata.creationTime,
			// Default values for fields not in Firebase Auth
			employeeId: '',
			phone: '',
			pin: null,
			role: 'employee',
			activity: [],
			unlockedBy: [],
		});
	}

	/**
	 * Update user with new data
	 * @param {Object} updateData - Data to update
	 * @returns {User} Updated user instance
	 */
	update(updateData) {
		Object.keys(updateData).forEach((key) => {
			if (this.hasOwnProperty(key) && key !== 'createdAt') {
				this[key] = updateData[key];
			}
		});
		this.updatedAt = new Date().toISOString();
		return this;
	}
}

module.exports = User;
