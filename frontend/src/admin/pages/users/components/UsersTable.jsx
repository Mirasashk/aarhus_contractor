import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../../../../components/AppIcon';

/**
 * UsersTable Component
 * Displays all users in a responsive table format
 */
const UsersTable = ({
	users = [],
	loading = false,
	error = null,
	updateUser,
	deleteUser,
	searchTerm,
	roleFilter,
	statusFilter,
	sortBy,
	sortOrder,
}) => {
	const navigate = useNavigate();

	/**
	 * Filter and sort users based on props
	 */
	const filteredAndSortedUsers = React.useMemo(() => {
		let filtered = users;

		// Apply search filter
		if (searchTerm) {
			filtered = filtered.filter(
				(user) =>
					user.firstName
						?.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					user.lastName
						?.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					user.email
						?.toLowerCase()
						.includes(searchTerm.toLowerCase()) ||
					user.employeeId
						?.toLowerCase()
						.includes(searchTerm.toLowerCase())
			);
		}

		// Apply role filter
		if (roleFilter && roleFilter !== 'all') {
			filtered = filtered.filter((user) => user.role === roleFilter);
		}

		// Apply status filter
		if (statusFilter && statusFilter !== 'all') {
			filtered = filtered.filter((user) => {
				if (statusFilter === 'active') return user.isActive;
				if (statusFilter === 'inactive') return !user.isActive;
				return true;
			});
		}

		// Apply sorting
		if (sortBy) {
			filtered.sort((a, b) => {
				let aValue = a[sortBy];
				let bValue = b[sortBy];

				// Handle nested properties
				if (sortBy === 'name') {
					aValue = `${a.firstName} ${a.lastName}`;
					bValue = `${b.firstName} ${b.lastName}`;
				}

				if (typeof aValue === 'string') {
					aValue = aValue.toLowerCase();
					bValue = bValue.toLowerCase();
				}

				if (sortOrder === 'asc') {
					return aValue > bValue ? 1 : -1;
				} else {
					return aValue < bValue ? 1 : -1;
				}
			});
		}

		return filtered;
	}, [users, searchTerm, roleFilter, statusFilter, sortBy, sortOrder]);

	/**
	 * Handle user status toggle
	 */
	const handleToggleStatus = async (user) => {
		try {
			await updateUser(user.uid, { isActive: !user.isActive });
		} catch (error) {
			console.error('Error updating user status:', error);
		}
	};

	/**
	 * Handle user deletion
	 */
	const handleDeleteUser = async (userId) => {
		if (window.confirm('Are you sure you want to delete this user?')) {
			try {
				await deleteUser(userId);
			} catch (error) {
				console.error('Error deleting user:', error);
			}
		}
	};

	/**
	 * Navigate to user detail page
	 */
	const handleViewUser = (userId) => {
		navigate(`/admin/users/${userId}`);
	};

	/**
	 * Format date for display
	 */
	const formatDate = (dateString) => {
		if (!dateString) return 'N/A';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
		});
	};

	/**
	 * Get role badge color
	 */
	const getRoleBadgeColor = (role) => {
		const colors = {
			admin: 'bg-red-100 text-red-800',
			manager: 'bg-blue-100 text-blue-800',
			employee: 'bg-green-100 text-green-800',
			contractor: 'bg-yellow-100 text-yellow-800',
		};
		return colors[role] || 'bg-gray-100 text-gray-800';
	};

	if (loading) {
		return (
			<div className='flex justify-center items-center p-8'>
				<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
				<span className='ml-2'>Loading users...</span>
			</div>
		);
	}

	if (error) {
		return (
			<div className='bg-red-50 border border-red-200 rounded-md p-4'>
				<div className='flex'>
					<div className='ml-3'>
						<h3 className='text-sm font-medium text-red-800'>
							Error
						</h3>
						<div className='mt-2 text-sm text-red-700'>
							<p>{error}</p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='bg-white shadow overflow-hidden sm:rounded-md'>
			<div className='overflow-x-auto'>
				<table className='min-w-full divide-y divide-gray-200'>
					<thead className='bg-gray-50'>
						<tr>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								User
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Contact
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Role
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Status
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Created
							</th>
							<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
								Actions
							</th>
						</tr>
					</thead>
					<tbody className='bg-white divide-y divide-gray-200'>
						{filteredAndSortedUsers.map((user) => (
							<tr
								key={user.uid}
								className='hover:bg-gray-50'
							>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='flex items-center'>
										<div className='flex-shrink-0 h-10 w-10'>
											{user.photoURL ? (
												<img
													className='h-10 w-10 rounded-full'
													src={user.photoURL}
													alt={`${user.firstName} ${user.lastName}`}
												/>
											) : (
												<div className='h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center'>
													<span className='text-sm font-medium text-gray-700'>
														{user.firstName?.[0]}
														{user.lastName?.[0]}
													</span>
												</div>
											)}
										</div>
										<div className='ml-4'>
											<div className='text-sm font-medium text-gray-900'>
												{`${user.firstName} ${user.lastName}`}
											</div>
										</div>
									</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<div className='text-sm text-gray-900'>
										<div>{user.email}</div>
										{user.phone && (
											<div className='text-gray-500'>
												{user.phone}
											</div>
										)}
									</div>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(
											user.role
										)}`}
									>
										{user.role}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap'>
									<span
										className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
											user.isActive
												? 'bg-green-100 text-green-800'
												: 'bg-red-100 text-red-800'
										}`}
									>
										{user.isActive ? 'Active' : 'Inactive'}
									</span>
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
									{formatDate(user.createdAt.toDate())}
								</td>
								<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
									<div className='flex space-x-2'>
										<button
											onClick={() =>
												handleViewUser(user.id)
											}
											className='text-blue-600 hover:text-blue-900'
										>
											<Icon name='Eye' />
										</button>
										<button
											onClick={() =>
												handleToggleStatus(user)
											}
											className={`${
												user.isActive
													? 'text-yellow-600 hover:text-yellow-900'
													: 'text-green-600 hover:text-green-900'
											}`}
										>
											{user.isActive ? (
												<Icon name='CircleX' />
											) : (
												<Icon name='CircleCheck' />
											)}
										</button>
										<button
											onClick={() =>
												handleDeleteUser(user.uid)
											}
											className='text-red-600 hover:text-red-900'
										>
											<Icon name='Trash' />
										</button>
									</div>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			{filteredAndSortedUsers.length === 0 && (
				<div className='text-center py-12'>
					<p className='text-gray-500'>No users found</p>
				</div>
			)}
		</div>
	);
};

export default UsersTable;
