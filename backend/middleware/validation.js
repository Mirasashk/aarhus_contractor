const { validateUserData } = require('../utils/userUtils');

/**
 * Middleware to validate user data for creation
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateUserCreation = (req, res, next) => {
	try {
		const userData = req.body;

		// Validate the user data
		const validation = validateUserData(userData);

		if (!validation.isValid) {
			return res.status(400).json({
				success: false,
				error: 'Validation failed',
				details: validation.errors,
			});
		}

		// Add validated data to request
		req.validatedUserData = userData;
		next();
	} catch (error) {
		console.error('Error in user validation middleware:', error);
		return res.status(500).json({
			success: false,
			error: 'Validation error',
			message: 'Failed to validate user data',
		});
	}
};

/**
 * Middleware to validate user update data
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */
const validateUserUpdate = (req, res, next) => {
	try {
		const updateData = req.body;

		// For updates, we only validate provided fields
		if (Object.keys(updateData).length === 0) {
			return res.status(400).json({
				success: false,
				error: 'No update data provided',
			});
		}

		// Validate each provided field
		const validation = validateUserData(updateData);

		// For updates, we're more lenient - only fail if there are actual validation errors
		// but allow partial updates
		if (validation.errors.length > 0) {
			// Check if errors are for required fields that are missing
			const requiredFields = [
				'email',
				'firstName',
				'lastName',
				'employeeId',
			];
			const hasRequiredFieldErrors = validation.errors.some((error) =>
				requiredFields.some((field) => error.includes(field))
			);

			if (hasRequiredFieldErrors) {
				return res.status(400).json({
					success: false,
					error: 'Validation failed',
					details: validation.errors,
				});
			}
		}

		req.validatedUpdateData = updateData;
		next();
	} catch (error) {
		console.error('Error in user update validation middleware:', error);
		return res.status(500).json({
			success: false,
			error: 'Validation error',
			message: 'Failed to validate update data',
		});
	}
};

module.exports = {
	validateUserCreation,
	validateUserUpdate,
};
