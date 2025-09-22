import axios from 'axios';
import { API_CONFIG } from '../config/api';

/**
 * Axios instance for API communication
 */
const api = axios.create({
	baseURL: API_CONFIG.BASE_URL,
	timeout: API_CONFIG.TIMEOUT,
	headers: {
		'Content-Type': 'application/json',
	},
});

/**
 * Request interceptor to add authentication token
 */
api.interceptors.request.use(
	(config) => {
		// Get Firebase ID token from localStorage or sessionStorage
		const token =
			localStorage.getItem('firebase_token') ||
			sessionStorage.getItem('firebase_token');

		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		// Log request in development
		if (import.meta.env.DEV) {
			console.log('🚀 API Request:', {
				method: config.method?.toUpperCase(),
				url: config.url,
				baseURL: config.baseURL,
				headers: config.headers,
			});
		}

		return config;
	},
	(error) => {
		console.error('❌ Request Error:', error);
		return Promise.reject(error);
	}
);

/**
 * Response interceptor to handle common responses and errors
 */
api.interceptors.response.use(
	(response) => {
		// Log response in development
		if (import.meta.env.DEV) {
			console.log('✅ API Response:', {
				status: response.status,
				url: response.config.url,
				data: response.data,
			});
		}

		return response;
	},
	async (error) => {
		const originalRequest = error.config;

		// Log error in development
		if (import.meta.env.DEV) {
			console.error('❌ API Error:', {
				status: error.response?.status,
				url: error.config?.url,
				message: error.message,
				data: error.response?.data,
			});
		}

		// Handle 401 Unauthorized - token might be expired
		if (error.response?.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;

			try {
				// Try to refresh the token
				const refreshedToken = await refreshFirebaseToken();

				if (refreshedToken) {
					// Update the token in storage
					localStorage.setItem('firebase_token', refreshedToken);

					// Retry the original request with new token
					originalRequest.headers.Authorization = `Bearer ${refreshedToken}`;
					return api(originalRequest);
				}
			} catch (refreshError) {
				console.error('Failed to refresh token:', refreshError);
				// Redirect to login or clear auth state
				handleAuthError();
			}
		}

		// Handle other common errors
		if (error.response?.status === 403) {
			console.error('Access forbidden - insufficient permissions');
		} else if (error.response?.status === 404) {
			console.error('Resource not found');
		} else if (error.response?.status >= 500) {
			console.error('Server error');
		}

		return Promise.reject(error);
	}
);

/**
 * Refresh Firebase token
 * This function should be implemented based on your Firebase setup
 */
const refreshFirebaseToken = async () => {
	try {
		// Import Firebase auth
		const { getAuth } = await import('firebase/auth');
		const auth = getAuth();

		if (auth.currentUser) {
			const token = await auth.currentUser.getIdToken(true); // Force refresh
			return token;
		}
		return null;
	} catch (error) {
		console.error('Error refreshing Firebase token:', error);
		return null;
	}
};

/**
 * Handle authentication error
 * Clear auth state and redirect to login
 */
const handleAuthError = () => {
	// Clear stored tokens
	localStorage.removeItem('firebase_token');
	sessionStorage.removeItem('firebase_token');

	// You can add additional cleanup here
	// For example, clear Redux state, redirect to login, etc.

	// For now, just log the action
	console.log('Authentication error - clearing auth state');
};

export default api;
