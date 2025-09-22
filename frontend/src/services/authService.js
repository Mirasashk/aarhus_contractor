import {
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { auth } from '../firebase/firebase';

/**
 * Authentication Service
 * Handles Firebase authentication and token management
 */

/**
 * Get current Firebase ID token
 * @returns {Promise<string|null>} Firebase ID token or null
 */
export const getCurrentToken = async () => {
	try {
		if (auth.currentUser) {
			const token = await auth.currentUser.getIdToken();
			return token;
		}
		return null;
	} catch (error) {
		console.error('Error getting current token:', error);
		return null;
	}
};

/**
 * Set authentication token in storage
 * @param {string} token - Firebase ID token
 */
export const setAuthToken = (token) => {
	localStorage.setItem('firebase_token', token);
};

/**
 * Get authentication token from storage
 * @returns {string|null} Stored token or null
 */
export const getAuthToken = () => {
	return (
		localStorage.getItem('firebase_token') ||
		sessionStorage.getItem('firebase_token')
	);
};

/**
 * Clear authentication token from storage
 */
export const clearAuthToken = () => {
	localStorage.removeItem('firebase_token');
	sessionStorage.removeItem('firebase_token');
};

/**
 * Sign in with email and password
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise<Object>} User credential object
 */
export const signIn = async (email, password) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const token = await userCredential.user.getIdToken();
		setAuthToken(token);
		return userCredential;
	} catch (error) {
		console.error('Error signing in:', error);
		throw error;
	}
};

/**
 * Sign out user
 * @returns {Promise<void>}
 */
export const signOutUser = async () => {
	try {
		await signOut(auth);
		clearAuthToken();
	} catch (error) {
		console.error('Error signing out:', error);
		throw error;
	}
};

/**
 * Listen to authentication state changes
 * @param {Function} callback - Callback function to handle auth state changes
 * @returns {Function} Unsubscribe function
 */
export const onAuthStateChange = (callback) => {
	return onAuthStateChanged(auth, async (user) => {
		if (user) {
			try {
				const token = await user.getIdToken();
				setAuthToken(token);
			} catch (error) {
				console.error(
					'Error getting token on auth state change:',
					error
				);
			}
		} else {
			clearAuthToken();
		}
		callback(user);
	});
};

/**
 * Check if user is authenticated
 * @returns {boolean} True if user is authenticated
 */
export const isAuthenticated = () => {
	return !!auth.currentUser && !!getAuthToken();
};

/**
 * Get current user
 * @returns {Object|null} Current user object or null
 */
export const getCurrentUser = () => {
	return auth.currentUser;
};

/**
 * Refresh authentication token
 * @returns {Promise<string|null>} New token or null
 */
export const refreshToken = async () => {
	try {
		if (auth.currentUser) {
			const token = await auth.currentUser.getIdToken(true); // Force refresh
			setAuthToken(token);
			return token;
		}
		return null;
	} catch (error) {
		console.error('Error refreshing token:', error);
		return null;
	}
};

// Export all functions as default object
const authService = {
	getCurrentToken,
	setAuthToken,
	getAuthToken,
	clearAuthToken,
	signIn,
	signOut: signOutUser,
	onAuthStateChange,
	isAuthenticated,
	getCurrentUser,
	refreshToken,
};

export default authService;
