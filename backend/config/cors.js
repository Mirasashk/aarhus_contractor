/**
 * CORS Configuration
 * Handles environment-based CORS settings
 */

/**
 * Get allowed origins based on environment
 * @returns {Array} Array of allowed origins
 */
const getAllowedOrigins = () => {
	const isProduction = process.env.NODE_ENV === 'production';

	if (isProduction) {
		return [
			'https://aarhuscontractor.dk',
			'https://www.aarhuscontractor.dk',
			// Add any other production domains here
		];
	} else {
		return [
			'http://localhost:4028',
			'http://127.0.0.1:4028',
			'http://localhost:3000', // Fallback for other dev servers
			'http://127.0.0.1:3000',
			// Add any other development domains here
		];
	}
};

/**
 * CORS options configuration
 */
const corsOptions = {
	origin: function (origin, callback) {
		// Allow requests with no origin (like mobile apps, curl, Postman, etc.)
		if (!origin) {
			return callback(null, true);
		}

		const allowedOrigins = getAllowedOrigins();

		// Check if the origin is in the allowed list
		if (allowedOrigins.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			// Log the rejected origin for debugging
			console.warn(`CORS: Origin ${origin} not allowed`);
			callback(new Error(`Origin ${origin} not allowed by CORS`));
		}
	},
	credentials: true, // Allow cookies and authorization headers
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
	allowedHeaders: [
		'Origin',
		'X-Requested-With',
		'Content-Type',
		'Accept',
		'Authorization',
		'Cache-Control',
		'Pragma',
		'X-API-Key', // If you need custom headers
	],
	exposedHeaders: [
		'X-Total-Count', // If you want to expose custom headers
		'X-Page-Count',
	],
	optionsSuccessStatus: 200, // Some legacy browsers choke on 204
	maxAge: 86400, // Cache preflight response for 24 hours
};

/**
 * Development CORS options (more permissive for debugging)
 */
const devCorsOptions = {
	origin: true, // Allow all origins in development
	credentials: true,
	methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
	allowedHeaders: [
		'Origin',
		'X-Requested-With',
		'Content-Type',
		'Accept',
		'Authorization',
		'Cache-Control',
		'Pragma',
	],
	optionsSuccessStatus: 200,
};

/**
 * Get CORS options based on environment
 * @returns {Object} CORS options object
 */
const getCorsOptions = () => {
	const isDevelopment = process.env.NODE_ENV === 'development';
	return isDevelopment ? devCorsOptions : corsOptions;
};

module.exports = {
	corsOptions: getCorsOptions(),
	getAllowedOrigins,
};
