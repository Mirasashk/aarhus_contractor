const { auth } = require('../firebase');

/**
 * Middleware to verify Firebase ID token
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const verifyToken = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;

		if (!authHeader || !authHeader.startsWith('Bearer ')) {
			return res.status(401).json({
				error: 'Unauthorized',
				message: 'No valid authorization header found',
			});
		}

		const idToken = authHeader.split('Bearer ')[1];

		// Verify the ID token
		const decodedToken = await auth.verifyIdToken(idToken);
		req.user = decodedToken;

		next();
	} catch (error) {
		console.error('Error verifying token:', error);
		return res.status(401).json({
			error: 'Unauthorized',
			message: 'Invalid or expired token',
		});
	}
};

module.exports = {
	verifyToken,
};
