const User = require('../models/User');

/**
 * Format Firebase Auth user record to our User model
 * @param {Object} userRecord - Firebase Auth user record
 * @returns {Object} Formatted user object
 */
const formatFirebaseUser = (userRecord) => {
	const user = User.fromFirebaseUser(userRecord);
	return user.toObject();
};

/**
 * Format multiple Firebase Auth user records
 * @param {Array} userRecords - Array of Firebase Auth user records
 * @returns {Array} Array of formatted user objects
 */
const formatFirebaseUsers = (userRecords) => {
	return userRecords.map((userRecord) => formatFirebaseUser(userRecord));
};

/**
 * Validate user data before creating/updating
 * @param {Object} userData - User data to validate
 * @returns {Object} Validation result
 */
const validateUserData = (userData) => {
	const user = new User(userData);
	return user.validate();
};

/**
 * Sanitize user data for API response
 * @param {Object} user - User object
 * @returns {Object} Sanitized user object
 */
const sanitizeUserForResponse = (user) => {
	// Remove sensitive data if needed
	const sanitized = { ...user };

	// You can add logic here to remove sensitive fields
	// For example, remove PIN from response if not admin
	// if (!isAdmin) {
	//   delete sanitized.pin;
	// }

	return sanitized;
};

/**
 * Check if user has required role
 * @param {Object} user - User object
 * @param {string} requiredRole - Required role
 * @returns {boolean} True if user has required role or higher
 */
const hasRole = (user, requiredRole) => {
	const roleHierarchy = {
		contractor: 1,
		employee: 2,
		manager: 3,
		admin: 4,
	};

	const userLevel = roleHierarchy[user.role] || 0;
	const requiredLevel = roleHierarchy[requiredRole] || 0;

	return userLevel >= requiredLevel;
};

/**
 * Generate a random 4-digit PIN
 * @returns {number} Random 4-digit PIN
 */
const generatePin = () => {
	return Math.floor(1000 + Math.random() * 9000);
};

/**
 * Generate employee ID
 * @param {string} firstName - User's first name
 * @param {string} lastName - User's last name
 * @returns {string} Generated employee ID
 */
const generateEmployeeId = (firstName, lastName) => {
	const firstInitial = firstName.charAt(0).toUpperCase();
	const lastInitial = lastName.charAt(0).toUpperCase();
	const timestamp = Date.now().toString().slice(-4);
	return `${firstInitial}${lastInitial}${timestamp}`;
};

module.exports = {
	formatFirebaseUser,
	formatFirebaseUsers,
	validateUserData,
	sanitizeUserForResponse,
	hasRole,
	generatePin,
	generateEmployeeId,
};
