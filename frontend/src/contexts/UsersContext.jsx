import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react';
import usersApi from '../services/usersApi';

/**
 * Users Context
 * Provides global state management for users data
 */
const UsersContext = createContext();

/**
 * Users Provider Component
 * Manages users state and provides it to child components
 */
export const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [lastFetch, setLastFetch] = useState(null);

	/**
	 * Fetch all users
	 */
	const fetchUsers = useCallback(
		async (forceRefresh = false) => {
			// Don't fetch if we have recent data and not forcing refresh
			const now = Date.now();
			const fiveMinutes = 5 * 60 * 1000; // 5 minutes in milliseconds

			if (
				!forceRefresh &&
				lastFetch &&
				now - lastFetch < fiveMinutes &&
				users.length > 0
			) {
				return;
			}

			setLoading(true);
			setError(null);

			try {
				const response = await usersApi.getAllUsers();
				setUsers(response.users || []);
				setLastFetch(now);
			} catch (err) {
				setError(err.message || 'Failed to fetch users');
				console.error('Error fetching users:', err);
			} finally {
				setLoading(false);
			}
		},
		[lastFetch, users.length]
	);

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

	/**
	 * Refresh users data
	 */
	const refreshUsers = useCallback(() => {
		fetchUsers(true);
	}, [fetchUsers]);

	// Fetch users on mount
	useEffect(() => {
		fetchUsers();
	}, [fetchUsers]);

	const value = {
		users,
		loading,
		error,
		fetchUsers,
		fetchUserById,
		createUser,
		updateUser,
		deleteUser,
		clearError,
		refreshUsers,
	};

	return (
		<UsersContext.Provider value={value}>{children}</UsersContext.Provider>
	);
};

/**
 * Hook to use users context
 */
export const useUsersContext = () => {
	const context = useContext(UsersContext);
	if (!context) {
		throw new Error('useUsersContext must be used within a UsersProvider');
	}
	return context;
};

export default UsersContext;
