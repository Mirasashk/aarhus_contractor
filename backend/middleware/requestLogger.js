/**
 * Request Logger Middleware
 * Logs incoming requests only in development mode
 */

/**
 * Request logger middleware
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const requestLogger = (req, res, next) => {
	// Only log in development mode
	if (process.env.NODE_ENV === 'development') {
		const timestamp = new Date().toISOString();
		const method = req.method;
		const url = req.url;
		const userAgent = req.get('User-Agent') || 'Unknown';
		const ip = req.ip || req.connection.remoteAddress || 'Unknown';
		const origin = req.get('Origin') || 'No Origin';
		const referer = req.get('Referer') || 'No Referer';

		// Log basic request info
		console.log(`\n🌐 [${timestamp}] Incoming Request:`);
		console.log(`   Method: ${method}`);
		console.log(`   URL: ${url}`);
		console.log(`   IP: ${ip}`);
		console.log(`   Origin: ${origin}`);
		console.log(`   Referer: ${referer}`);
		console.log(`   User-Agent: ${userAgent}`);

		// Log headers (excluding sensitive ones)
		const sensitiveHeaders = ['authorization', 'cookie', 'x-api-key'];
		const filteredHeaders = Object.keys(req.headers)
			.filter((key) => !sensitiveHeaders.includes(key.toLowerCase()))
			.reduce((obj, key) => {
				obj[key] = req.headers[key];
				return obj;
			}, {});

		if (Object.keys(filteredHeaders).length > 0) {
			console.log(`   Headers:`, filteredHeaders);
		}

		// Log query parameters
		if (Object.keys(req.query).length > 0) {
			console.log(`   Query:`, req.query);
		}

		// Log body for POST/PUT/PATCH requests (excluding sensitive data)
		if (['POST', 'PUT', 'PATCH'].includes(method) && req.body) {
			const sensitiveFields = ['password', 'token', 'secret', 'key'];
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
				console.log(`   Body:`, filteredBody);
			}
		}

		// Log response when it finishes
		const originalSend = res.send;
		res.send = function (data) {
			const statusCode = res.statusCode;
			const statusColor =
				statusCode >= 200 && statusCode < 300
					? '✅'
					: statusCode >= 400 && statusCode < 500
					? '⚠️'
					: statusCode >= 500
					? '❌'
					: 'ℹ️';

			console.log(
				`   ${statusColor} Response: ${statusCode} ${
					res.statusMessage || ''
				}`
			);

			// Log response size
			if (data) {
				const size = Buffer.byteLength(data, 'utf8');
				console.log(`   Response Size: ${size} bytes`);
			}

			console.log(`   Response Time: ${Date.now() - req.startTime}ms`);
			console.log('─'.repeat(80));

			originalSend.call(this, data);
		};

		// Set start time for response time calculation
		req.startTime = Date.now();
	}

	next();
};

/**
 * Error logger middleware
 * @param {Error} err - Error object
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const errorLogger = (err, req, res, next) => {
	// Only log in development mode
	if (process.env.NODE_ENV === 'development') {
		const timestamp = new Date().toISOString();
		const method = req.method;
		const url = req.url;

		console.log(`\n❌ [${timestamp}] Error in Request:`);
		console.log(`   Method: ${method}`);
		console.log(`   URL: ${url}`);
		console.log(`   Error: ${err.message}`);
		console.log(`   Stack: ${err.stack}`);
		console.log('─'.repeat(80));
	}

	next(err);
};

module.exports = {
	requestLogger,
	errorLogger,
};
