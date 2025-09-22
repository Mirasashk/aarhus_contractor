import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useUsersContext } from '../../../../contexts/UsersContext';

/**
 * UserDetail Component
 * Displays and allows editing of a specific user
 */
const UserDetail = () => {
	const { userId } = useParams();
	const navigate = useNavigate();
	const { users, updateUser, deleteUser, loading } = useUsersContext();

	const [user, setUser] = useState(null);
	const [isEditing, setIsEditing] = useState(false);
	const [editForm, setEditForm] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phone: '',
		role: 'employee',
		isActive: true,
	});
	const [isSaving, setIsSaving] = useState(false);

	/**
	 * Find user by ID
	 */
	useEffect(() => {
		if (users && userId) {
			console.log('users', users);
			console.log('userId', userId);
			const foundUser = users.find((u) => u.id === userId);
			if (foundUser) {
				setUser(foundUser);
				setEditForm({
					firstName: foundUser.firstName || '',
					lastName: foundUser.lastName || '',
					email: foundUser.email || '',
					phone: foundUser.phone || '',
					role: foundUser.role || 'employee',
					isActive: foundUser.isActive !== false,
				});
			}
		}
	}, [users, userId]);

	/**
	 * Handle form input changes
	 */
	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setEditForm((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));
	};

	/**
	 * Handle save changes
	 */
	const handleSave = async () => {
		if (!user) return;

		setIsSaving(true);
		try {
			await updateUser(user.uid, editForm);
			setIsEditing(false);
			// Refresh user data
			const updatedUser = users.find((u) => u.uid === userId);
			if (updatedUser) {
				setUser(updatedUser);
			}
		} catch (error) {
			console.error('Error updating user:', error);
			alert('Failed to update user. Please try again.');
		} finally {
			setIsSaving(false);
		}
	};

	/**
	 * Handle cancel editing
	 */
	const handleCancel = () => {
		setIsEditing(false);
		setEditForm({
			firstName: user?.firstName || '',
			lastName: user?.lastName || '',
			email: user?.email || '',
			phone: user?.phone || '',
			role: user?.role || 'employee',
			isActive: user?.isActive !== false,
		});
	};

	/**
	 * Handle delete user
	 */
	const handleDelete = async () => {
		if (!user) return;

		if (
			window.confirm(
				'Are you sure you want to delete this user? This action cannot be undone.'
			)
		) {
			try {
				await deleteUser(user.uid);
				navigate('/admin/users');
			} catch (error) {
				console.error('Error deleting user:', error);
				alert('Failed to delete user. Please try again.');
			}
		}
	};

	/**
	 * Handle toggle status
	 */
	const handleToggleStatus = async () => {
		if (!user) return;

		try {
			await updateUser(user.uid, { isActive: !user.isActive });
			// Refresh user data
			const updatedUser = users.find((u) => u.uid === userId);
			if (updatedUser) {
				setUser(updatedUser);
				setEditForm((prev) => ({
					...prev,
					isActive: updatedUser.isActive,
				}));
			}
		} catch (error) {
			console.error('Error updating user status:', error);
			alert('Failed to update user status. Please try again.');
		}
	};

	/**
	 * Format date for display
	 */
	const formatDate = (dateString) => {
		if (!dateString) return 'N/A';
		return new Date(dateString).toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
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
				<span className='ml-2'>Loading user...</span>
			</div>
		);
	}

	if (!user) {
		return (
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
				<div className='text-center'>
					<h1 className='text-2xl font-bold text-gray-900 mb-4'>
						User Not Found
					</h1>
					<p className='text-gray-600 mb-4'>
						The user you're looking for doesn't exist.
					</p>
					<button
						onClick={() => navigate('/admin/users')}
						className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700'
					>
						Back to Users
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			{/* Header */}
			<div className='mb-8'>
				<div className='flex items-center justify-between'>
					<div className='flex items-center space-x-4'>
						<button
							onClick={() => navigate('/admin/users')}
							className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
						>
							<svg
								className='w-4 h-4 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M15 19l-7-7 7-7'
								/>
							</svg>
							Back to Users
						</button>
						<div>
							<h1 className='text-3xl font-bold text-gray-900'>
								{user.firstName} {user.lastName}
							</h1>
							<p className='mt-2 text-sm text-gray-600'>
								User Details & Management
							</p>
						</div>
					</div>
					<div className='flex space-x-3'>
						{!isEditing ? (
							<>
								<button
									onClick={() => setIsEditing(true)}
									className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
								>
									<svg
										className='w-4 h-4 mr-2'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
										/>
									</svg>
									Edit User
								</button>
								<button
									onClick={handleToggleStatus}
									className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
										user.isActive
											? 'bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500'
											: 'bg-green-600 hover:bg-green-700 focus:ring-green-500'
									}`}
								>
									{user.isActive ? 'Deactivate' : 'Activate'}
								</button>
								<button
									onClick={handleDelete}
									className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
								>
									<svg
										className='w-4 h-4 mr-2'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16'
										/>
									</svg>
									Delete User
								</button>
							</>
						) : (
							<>
								<button
									onClick={handleSave}
									disabled={isSaving}
									className='inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50'
								>
									{isSaving ? 'Saving...' : 'Save Changes'}
								</button>
								<button
									onClick={handleCancel}
									className='inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
								>
									Cancel
								</button>
							</>
						)}
					</div>
				</div>
			</div>

			{/* User Details Card */}
			<div className='bg-white shadow overflow-hidden sm:rounded-lg'>
				<div className='px-4 py-5 sm:px-6'>
					<div className='flex items-center space-x-4'>
						{user.photoURL ? (
							<img
								className='h-16 w-16 rounded-full'
								src={user.photoURL}
								alt={`${user.firstName} ${user.lastName}`}
							/>
						) : (
							<div className='h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center'>
								<span className='text-xl font-medium text-gray-700'>
									{user.firstName?.[0]}
									{user.lastName?.[0]}
								</span>
							</div>
						)}
						<div>
							<h3 className='text-lg leading-6 font-medium text-gray-900'>
								User Information
							</h3>
							<p className='mt-1 max-w-2xl text-sm text-gray-500'>
								Personal details and account information
							</p>
						</div>
					</div>
				</div>
				<div className='border-t border-gray-200'>
					<dl>
						<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								Full name
							</dt>
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
								{isEditing ? (
									<div className='grid grid-cols-2 gap-2'>
										<input
											type='text'
											name='firstName'
											value={editForm.firstName}
											onChange={handleInputChange}
											className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
											placeholder='First name'
										/>
										<input
											type='text'
											name='lastName'
											value={editForm.lastName}
											onChange={handleInputChange}
											className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
											placeholder='Last name'
										/>
									</div>
								) : (
									`${user.firstName} ${user.lastName}`
								)}
							</dd>
						</div>
						<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								Email address
							</dt>
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
								{isEditing ? (
									<input
										type='email'
										name='email'
										value={editForm.email}
										onChange={handleInputChange}
										className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
									/>
								) : (
									user.email
								)}
							</dd>
						</div>
						<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								Phone number
							</dt>
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
								{isEditing ? (
									<input
										type='tel'
										name='phone'
										value={editForm.phone}
										onChange={handleInputChange}
										className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
										placeholder='Phone number'
									/>
								) : (
									user.phone || 'Not provided'
								)}
							</dd>
						</div>
						<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								Role
							</dt>
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
								{isEditing ? (
									<select
										name='role'
										value={editForm.role}
										onChange={handleInputChange}
										className='block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
									>
										<option value='employee'>
											Employee
										</option>
										<option value='manager'>Manager</option>
										<option value='admin'>Admin</option>
										<option value='contractor'>
											Contractor
										</option>
									</select>
								) : (
									<span
										className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRoleBadgeColor(
											user.role
										)}`}
									>
										{user.role}
									</span>
								)}
							</dd>
						</div>
						<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								Status
							</dt>
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
								{isEditing ? (
									<label className='flex items-center'>
										<input
											type='checkbox'
											name='isActive'
											checked={editForm.isActive}
											onChange={handleInputChange}
											className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
										/>
										<span className='ml-2 text-sm text-gray-700'>
											Active
										</span>
									</label>
								) : (
									<span
										className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
											user.isActive
												? 'bg-green-100 text-green-800'
												: 'bg-red-100 text-red-800'
										}`}
									>
										{user.isActive ? 'Active' : 'Inactive'}
									</span>
								)}
							</dd>
						</div>
						<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								User ID
							</dt>
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 font-mono'>
								{user.id}
							</dd>
						</div>
						<div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
							<dt className='text-sm font-medium text-gray-500'>
								Created
							</dt>
							<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
								{formatDate(user.createdAt?.toDate())}
							</dd>
						</div>
						{user.lastSignInAt && (
							<div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
								<dt className='text-sm font-medium text-gray-500'>
									Last sign in
								</dt>
								<dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
									{formatDate(user.lastSignInAt?.toDate())}
								</dd>
							</div>
						)}
					</dl>
				</div>
			</div>
		</div>
	);
};

export default UserDetail;
