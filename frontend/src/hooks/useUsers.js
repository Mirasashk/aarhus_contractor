import { useState, useEffect, useCallback } from 'react';
import usersApi from '../services/usersApi';

/**
 * Custom hook for managing users
 * Provides state management and API calls for user operations
 */
export const useUsers = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	/**
	 * Fetch all users
	 */
	const fetchUsers = useCallback(async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await usersApi.getAllUsers();
			setUsers(response.users || []);
		} catch (err) {
			setError(err.message || 'Failed to fetch users');
			console.error('Error fetching users:', err);
		} finally {
			setLoading(false);
		}
	}, []);

	/**
	 * Fetch user by ID
	 */
	const fetchUserById = useCallback(async (userId) => {
		setLoading(true);
		setError(null);

		try {
			const response = await usersApi.getUserById(userId);
			return response.user;
		} catch (err) {
			setError(err.message || 'Failed to fetch user');
			console.error('Error fetching user:', err);
			throw err;
		} finally {
			setLoading(false);
		}
	}, []);

	/**
	 * Create a new user
	 */
	const createUser = useCallback(async (userData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await usersApi.createUser(userData);
			// Add the new user to the list
			setUsers((prevUsers) => [...prevUsers, response.user]);
			return response.user;
		} catch (err) {
			setError(err.message || 'Failed to create user');
			console.error('Error creating user:', err);
			throw err;
		} finally {
			setLoading(false);
		}
	}, []);

	/**
	 * Update user
	 */
	const updateUser = useCallback(async (userId, updateData) => {
		setLoading(true);
		setError(null);

		try {
			const response = await usersApi.updateUser(userId, updateData);
			// Update the user in the list
			setUsers((prevUsers) =>
				prevUsers.map((user) =>
					user.uid === userId ? { ...user, ...response.user } : user
				)
			);
			return response.user;
		} catch (err) {
			setError(err.message || 'Failed to update user');
			console.error('Error updating user:', err);
			throw err;
		} finally {
			setLoading(false);
		}
	}, []);

	/**
	 * Delete user
	 */
	const deleteUser = useCallback(async (userId) => {
		setLoading(true);
		setError(null);

		try {
			await usersApi.deleteUser(userId);
			// Remove the user from the list
			setUsers((prevUsers) =>
				prevUsers.filter((user) => user.uid !== userId)
			);
		} catch (err) {
			setError(err.message || 'Failed to delete user');
			console.error('Error deleting user:', err);
			throw err;
		} finally {
			setLoading(false);
		}
	}, []);

	/**
	 * Clear error state
	 */
	const clearError = useCallback(() => {
		setError(null);
	}, []);

	// Fetch users on mount only if not already loaded
	useEffect(() => {
		if (users.length === 0 && !loading) {
			fetchUsers();
		}
	}, [fetchUsers, users.length, loading]);

	return {
		users,
		loading,
		error,
		fetchUsers,
		fetchUserById,
		createUser,
		updateUser,
		deleteUser,
		clearError,
	};
};

/**
 * Custom hook for managing a single user
 * Useful for user detail pages or forms
 */
export const useUser = (userId) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	/**
	 * Fetch user by ID
	 */
	const fetchUser = useCallback(async (id) => {
		if (!id) return;

		setLoading(true);
		setError(null);

		try {
			const response = await usersApi.getUserById(id);
			setUser(response.user);
		} catch (err) {
			setError(err.message || 'Failed to fetch user');
			console.error('Error fetching user:', err);
		} finally {
			setLoading(false);
		}
	}, []);

	/**
	 * Update user
	 */
	const updateUser = useCallback(
		async (updateData) => {
			if (!userId) return;

			setLoading(true);
			setError(null);

			try {
				const response = await usersApi.updateUser(userId, updateData);
				setUser(response.user);
				return response.user;
			} catch (err) {
				setError(err.message || 'Failed to update user');
				console.error('Error updating user:', err);
				throw err;
			} finally {
				setLoading(false);
			}
		},
		[userId]
	);

	/**
	 * Clear error state
	 */
	const clearError = useCallback(() => {
		setError(null);
	}, []);

	// Fetch user when userId changes
	useEffect(() => {
		if (userId) {
			fetchUser(userId);
		}
	}, [userId, fetchUser]);

	return {
		user,
		loading,
		error,
		fetchUser,
		updateUser,
		clearError,
	};
};

export default useUsers;
