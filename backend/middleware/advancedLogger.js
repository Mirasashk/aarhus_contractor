/**
 * Advanced Request Logger Middleware
 * Provides configurable logging with different levels
 */

/**
 * Advanced request logger with configurable levels
 * @param {Object} options - Logger configuration options
 * @returns {Function} Express middleware function
 */
const createAdvancedLogger = (options = {}) => {
	const {
		level = 'info', // 'debug', 'info', 'warn', 'error'
		logBody = true,
		logHeaders = true,
		logQuery = true,
		logResponse = true,
		logTiming = true,
		sensitiveFields = [
			'password',
			'token',
			'secret',
			'key',
			'authorization',
		],
		sensitiveHeaders = ['authorization', 'cookie', 'x-api-key'],
		maxBodySize = 1000, // Max body size to log in characters
	} = options;

	return (req, res, next) => {
		// Only log in development mode
		if (process.env.NODE_ENV !== 'development') {
			return next();
		}

		const timestamp = new Date().toISOString();
		const method = req.method;
		const url = req.url;
		const fullUrl = `${req.protocol}://${req.get('host')}${url}`;
		const userAgent = req.get('User-Agent') || 'Unknown';
		const ip = req.ip || req.connection.remoteAddress || 'Unknown';
		const origin = req.get('Origin') || 'No Origin';
		const referer = req.get('Referer') || 'No Referer';

		// Log level colors
		const colors = {
			debug: '🔍',
			info: 'ℹ️',
			warn: '⚠️',
			error: '❌',
			success: '✅',
		};

		// Main request log
		console.log(`\n${colors[level]} [${timestamp}] ${method} ${url}`);
		console.log(`   Full URL: ${fullUrl}`);
		console.log(`   IP: ${ip}`);
		console.log(`   Origin: ${origin}`);
		console.log(`   Referer: ${referer}`);
		console.log(`   User-Agent: ${userAgent}`);

		// Log headers if enabled
		if (logHeaders) {
			const filteredHeaders = Object.keys(req.headers)
				.filter((key) => !sensitiveHeaders.includes(key.toLowerCase()))
				.reduce((obj, key) => {
					obj[key] = req.headers[key];
					return obj;
				}, {});

			if (Object.keys(filteredHeaders).length > 0) {
				console.log(
					`   Headers:`,
					JSON.stringify(filteredHeaders, null, 2)
				);
			}
		}

		// Log query parameters if enabled
		if (logQuery && Object.keys(req.query).length > 0) {
			console.log(`   Query:`, JSON.stringify(req.query, null, 2));
		}

		// Log body if enabled and method allows it
		if (logBody && ['POST', 'PUT', 'PATCH'].includes(method) && req.body) {
			const filteredBody = Object.keys(req.body)
				.filter(
					(key) =>
						!sensitiveFields.some((field) =>
							key.toLowerCase().includes(field.toLowerCase())
						)
				)
				.reduce((obj, key) => {
					obj[key] = req.body[key];
					return obj;
				}, {});

			if (Object.keys(filteredBody).length > 0) {
				const bodyStr = JSON.stringify(filteredBody, null, 2);
				const truncatedBody =
					bodyStr.length > maxBodySize
						? bodyStr.substring(0, maxBodySize) + '... (truncated)'
						: bodyStr;
				console.log(`   Body:`, truncatedBody);
			}
		}

		// Set start time for response timing
		if (logTiming) {
			req.startTime = Date.now();
		}

		// Log response when it finishes
		if (logResponse) {
			const originalSend = res.send;
			res.send = function (data) {
				const statusCode = res.statusCode;
				const statusColor =
					statusCode >= 200 && statusCode < 300
						? colors.success
						: statusCode >= 400 && statusCode < 500
						? colors.warn
						: statusCode >= 500
						? colors.error
						: colors.info;

				console.log(
					`   ${statusColor} Response: ${statusCode} ${
						res.statusMessage || ''
					}`
				);

				// Log response size
				if (data && typeof data === 'string') {
					const size = Buffer.byteLength(data, 'utf8');
					console.log(`   Response Size: ${size} bytes`);
				}

				// Log response time
				if (logTiming && req.startTime) {
					const responseTime = Date.now() - req.startTime;
					console.log(`   Response Time: ${responseTime}ms`);

					// Color code response time
					if (responseTime > 1000) {
						console.log(`   ⚠️  Slow response detected!`);
					}
				}

				console.log('─'.repeat(80));

				originalSend.call(this, data);
			};
		}

		next();
	};
};

/**
 * Simple request logger (default configuration)
 */
const simpleLogger = createAdvancedLogger({
	level: 'info',
	logBody: true,
	logHeaders: false,
	logQuery: true,
	logResponse: true,
	logTiming: true,
});

/**
 * Debug logger (verbose configuration)
 */
const debugLogger = createAdvancedLogger({
	level: 'debug',
	logBody: true,
	logHeaders: true,
	logQuery: true,
	logResponse: true,
	logTiming: true,
	maxBodySize: 2000,
});

/**
 * Minimal logger (single line per request)
 */
const minimalLogger = (req, res, next) => {
	// Only log in development mode
	if (process.env.NODE_ENV !== 'development') {
		return next();
	}

	const method = req.method;
	const url = req.url;
	const timestamp = new Date().toISOString().split('T')[1].split('.')[0]; // HH:MM:SS format

	// Set start time for response timing
	req.startTime = Date.now();

	// Log response when it finishes
	const originalSend = res.send;
	res.send = function (data) {
		const statusCode = res.statusCode;
		const responseTime = req.startTime ? Date.now() - req.startTime : 0;

		// Single line log with color coding
		const statusColor =
			statusCode >= 200 && statusCode < 300
				? '✅'
				: statusCode >= 400 && statusCode < 500
				? '⚠️'
				: statusCode >= 500
				? '❌'
				: 'ℹ️';

		console.log(
			`${statusColor} [${timestamp}] ${method} ${url} → ${statusCode} (${responseTime}ms)`
		);

		originalSend.call(this, data);
	};

	next();
};

module.exports = {
	createAdvancedLogger,
	simpleLogger,
	debugLogger,
	minimalLogger,
};
