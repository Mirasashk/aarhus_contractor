/**
 * API Configuration
 * Handles environment-based API URL configuration
 */

// Determine if we're in development or production
const isDevelopment = import.meta.env.DEV;
const isProduction = import.meta.env.PROD;

// Get API URLs from environment variables
const DEV_API_URL =
	import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';
const PROD_API_URL =
	import.meta.env.VITE_API_BASE_URL_PROD || 'https://api.aarhuscontractor.dk';

// Select the appropriate API URL based on environment
export const API_BASE_URL = isDevelopment ? DEV_API_URL : PROD_API_URL;

// API endpoints configuration
export const API_ENDPOINTS = {
	// Auth endpoints
	AUTH: {
		LOGIN: '/auth/login',
		LOGOUT: '/auth/logout',
		REFRESH: '/auth/refresh',
		VERIFY: '/auth/verify',
	},

	// User endpoints
	USERS: {
		BASE: '/api/users',
		GET_ALL: '/api/users',
		GET_BY_ID: (id) => `/api/users/${id}`,
		CREATE: '/api/users',
		UPDATE: (id) => `/api/users/${id}`,
		DELETE: (id) => `/api/users/${id}`,
	},

	// Health check
	HEALTH: '/health',
};

// API configuration object
export const API_CONFIG = {
	BASE_URL: API_BASE_URL,
	TIMEOUT: 10000, // 10 seconds
	RETRY_ATTEMPTS: 3,
	RETRY_DELAY: 1000, // 1 second
};

// Log API configuration in development
if (isDevelopment) {
	console.log('🔧 API Configuration:', {
		environment: isDevelopment ? 'development' : 'production',
		baseURL: API_BASE_URL,
		timeout: API_CONFIG.TIMEOUT,
	});
}

export default API_CONFIG;
