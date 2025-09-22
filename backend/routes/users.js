const express = require('express');
const {
	getAllUsers,
	getUserById,
	createUser,
	updateUser,
	deleteUser,
} = require('../controllers/usersController');
const { verifyToken } = require('../middleware/auth');
const {
	validateUserCreation,
	validateUserUpdate,
} = require('../middleware/validation');

const router = express.Router();

// Apply authentication middleware to all routes
router.use(verifyToken);

// GET /api/users - Get all users
router.get('/', getAllUsers);

// GET /api/users/:uid - Get specific user by UID
router.get('/:uid', getUserById);

// POST /api/users - Create new user
router.post('/', validateUserCreation, createUser);

// PUT /api/users/:uid - Update user
router.put('/:uid', validateUserUpdate, updateUser);

// DELETE /api/users/:uid - Delete user
router.delete('/:uid', deleteUser);

module.exports = router;
