import api from './api';
import { API_ENDPOINTS } from '../config/api';

/**
 * Users API Service
 * Handles all user-related API calls
 */

/**
 * Get all users
 * @returns {Promise<Object>} API response with users data
 */
export const getAllUsers = async () => {
	try {
		const response = await api.get(API_ENDPOINTS.USERS.GET_ALL);
		return response.data;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
};

/**
 * Get user by ID
 * @param {string} userId - User ID
 * @returns {Promise<Object>} API response with user data
 */
export const getUserById = async (userId) => {
	try {
		const response = await api.get(API_ENDPOINTS.USERS.GET_BY_ID(userId));
		return response.data;
	} catch (error) {
		console.error(`Error fetching user ${userId}:`, error);
		throw error;
	}
};

/**
 * Create a new user
 * @param {Object} userData - User data to create
 * @returns {Promise<Object>} API response with created user data
 */
export const createUser = async (userData) => {
	try {
		const response = await api.post(API_ENDPOINTS.USERS.CREATE, userData);
		return response.data;
	} catch (error) {
		console.error('Error creating user:', error);
		throw error;
	}
};

/**
 * Update user
 * @param {string} userId - User ID
 * @param {Object} updateData - Data to update
 * @returns {Promise<Object>} API response with updated user data
 */
export const updateUser = async (userId, updateData) => {
	try {
		const response = await api.put(
			API_ENDPOINTS.USERS.UPDATE(userId),
			updateData
		);
		return response.data;
	} catch (error) {
		console.error(`Error updating user ${userId}:`, error);
		throw error;
	}
};

/**
 * Delete user
 * @param {string} userId - User ID
 * @returns {Promise<Object>} API response
 */
export const deleteUser = async (userId) => {
	try {
		const response = await api.delete(API_ENDPOINTS.USERS.DELETE(userId));
		return response.data;
	} catch (error) {
		console.error(`Error deleting user ${userId}:`, error);
		throw error;
	}
};

/**
 * Update user photo URL
 * @param {string} userId - User ID
 * @param {string} photoURL - Photo URL
 * @returns {Promise<Object>} API response
 */
export const updateUserPhoto = async (userId, photoURL) => {
	try {
		const response = await api.patch(
			`${API_ENDPOINTS.USERS.BASE}/${userId}/photo`,
			{ photoURL }
		);
		return response.data;
	} catch (error) {
		console.error(`Error updating user photo ${userId}:`, error);
		throw error;
	}
};

/**
 * Health check
 * @returns {Promise<Object>} API response with health status
 */
export const healthCheck = async () => {
	try {
		const response = await api.get(API_ENDPOINTS.HEALTH);
		return response.data;
	} catch (error) {
		console.error('Error checking API health:', error);
		throw error;
	}
};

// Export all functions as default object
const usersApi = {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
	updateUserPhoto,
	healthCheck,
};

export default usersApi;
