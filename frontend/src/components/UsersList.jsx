import React, { useState } from 'react';
import { useUsers } from '../hooks/useUsers';
import { API_CONFIG } from '../config/api';

/**
 * UsersList Component
 * Example component demonstrating how to use the users API
 */
const UsersList = () => {
	const {
		users,
		loading,
		error,
		fetchUsers,
		createUser,
		updateUser,
		deleteUser,
	} = useUsers();
	const [showCreateForm, setShowCreateForm] = useState(false);
	const [newUser, setNewUser] = useState({
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		role: 'employee',
		isActive: true,
	});

	/**
	 * Handle form submission for creating a new user
	 */
	const handleCreateUser = async (e) => {
		e.preventDefault();
		try {
			await createUser(newUser);
			setNewUser({
				email: '',
				firstName: '',
				lastName: '',
				phone: '',
				role: 'employee',
				isActive: true,
			});
			setShowCreateForm(false);
		} catch (error) {
			console.error('Error creating user:', error);
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
	 * Handle user status toggle
	 */
	const handleToggleUserStatus = async (user) => {
		try {
			await updateUser(user.uid, { isActive: !user.isActive });
		} catch (error) {
			console.error('Error updating user:', error);
		}
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
						<div className='mt-4'>
							<button
								onClick={fetchUsers}
								className='bg-red-100 px-3 py-2 rounded-md text-sm font-medium text-red-800 hover:bg-red-200'
							>
								Try Again
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			<div className='mb-8'>
				<div className='flex justify-between items-center'>
					<h1 className='text-3xl font-bold text-gray-900'>
						Users Management
					</h1>
					<button
						onClick={() => setShowCreateForm(!showCreateForm)}
						className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
					>
						{showCreateForm ? 'Cancel' : 'Add New User'}
					</button>
				</div>
				<p className='mt-2 text-sm text-gray-600'>
					Connected to:{' '}
					<code className='bg-gray-100 px-2 py-1 rounded'>
						{API_CONFIG.BASE_URL}
					</code>
				</p>
			</div>

			{/* Create User Form */}
			{showCreateForm && (
				<div className='bg-white shadow rounded-lg p-6 mb-8'>
					<h2 className='text-lg font-medium text-gray-900 mb-4'>
						Create New User
					</h2>
					<form
						onSubmit={handleCreateUser}
						className='space-y-4'
					>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Email
								</label>
								<input
									type='email'
									value={newUser.email}
									onChange={(e) =>
										setNewUser({
											...newUser,
											email: e.target.value,
										})
									}
									required
									className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Role
								</label>
								<select
									value={newUser.role}
									onChange={(e) =>
										setNewUser({
											...newUser,
											role: e.target.value,
										})
									}
									className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								>
									<option value='employee'>Employee</option>
									<option value='manager'>Manager</option>
									<option value='admin'>Admin</option>
									<option value='contractor'>
										Contractor
									</option>
								</select>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700'>
									First Name
								</label>
								<input
									type='text'
									value={newUser.firstName}
									onChange={(e) =>
										setNewUser({
											...newUser,
											firstName: e.target.value,
										})
									}
									required
									className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Last Name
								</label>
								<input
									type='text'
									value={newUser.lastName}
									onChange={(e) =>
										setNewUser({
											...newUser,
											lastName: e.target.value,
										})
									}
									required
									className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700'>
									Phone
								</label>
								<input
									type='tel'
									value={newUser.phone}
									onChange={(e) =>
										setNewUser({
											...newUser,
											phone: e.target.value,
										})
									}
									className='mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500'
								/>
							</div>
							<div className='flex items-center'>
								<input
									type='checkbox'
									id='isActive'
									checked={newUser.isActive}
									onChange={(e) =>
										setNewUser({
											...newUser,
											isActive: e.target.checked,
										})
									}
									className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
								/>
								<label
									htmlFor='isActive'
									className='ml-2 block text-sm text-gray-900'
								>
									Active
								</label>
							</div>
						</div>
						<div className='flex justify-end space-x-3'>
							<button
								type='button'
								onClick={() => setShowCreateForm(false)}
								className='bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md text-sm font-medium'
							>
								Cancel
							</button>
							<button
								type='submit'
								className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium'
							>
								Create User
							</button>
						</div>
					</form>
				</div>
			)}

			{/* Users List */}
			<div className='bg-white shadow overflow-hidden sm:rounded-md'>
				<ul className='divide-y divide-gray-200'>
					{users.map((user) => (
						<li
							key={user.uid}
							className='px-6 py-4'
						>
							<div className='flex items-center justify-between'>
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
										<div className='flex items-center'>
											<p className='text-sm font-medium text-gray-900'>
												{user.firstName} {user.lastName}
											</p>
											<span
												className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
													user.isActive
														? 'bg-green-100 text-green-800'
														: 'bg-red-100 text-red-800'
												}`}
											>
												{user.isActive
													? 'Active'
													: 'Inactive'}
											</span>
										</div>
										<p className='text-sm text-gray-500'>
											{user.email}
										</p>
										<p className='text-sm text-gray-500'>
											{user.role} • Employee ID:{' '}
											{user.employeeId}
										</p>
									</div>
								</div>
								<div className='flex items-center space-x-2'>
									<button
										onClick={() =>
											handleToggleUserStatus(user)
										}
										className={`px-3 py-1 text-xs font-medium rounded-full ${
											user.isActive
												? 'bg-red-100 text-red-800 hover:bg-red-200'
												: 'bg-green-100 text-green-800 hover:bg-green-200'
										}`}
									>
										{user.isActive
											? 'Deactivate'
											: 'Activate'}
									</button>
									<button
										onClick={() =>
											handleDeleteUser(user.uid)
										}
										className='px-3 py-1 text-xs font-medium text-red-800 bg-red-100 rounded-full hover:bg-red-200'
									>
										Delete
									</button>
								</div>
							</div>
						</li>
					))}
				</ul>
				{users.length === 0 && (
					<div className='text-center py-12'>
						<p className='text-gray-500'>No users found</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default UsersList;
