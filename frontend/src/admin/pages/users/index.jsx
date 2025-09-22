import React, { useState } from 'react';
import { useUsersContext } from '../../../contexts/UsersContext';
import UsersStats from './components/UsersStats';
import SearchAndFilters from './components/SearchAndFilters';
import UsersTable from './components/UsersTable';
import CreateUserModal from './components/CreateUserModal';

/**
 * Users Page
 * Main page for user management with stats, search, and table
 */
const Users = () => {
	// Get users data once at the parent level
	const {
		users,
		loading,
		error,
		createUser,
		updateUser,
		deleteUser,
		refreshUsers,
	} = useUsersContext();

	const [searchTerm, setSearchTerm] = useState('');
	const [roleFilter, setRoleFilter] = useState('all');
	const [statusFilter, setStatusFilter] = useState('all');
	const [sortBy, setSortBy] = useState('');
	const [sortOrder, setSortOrder] = useState('asc');
	const [showCreateModal, setShowCreateModal] = useState(false);

	/**
	 * Handle search change
	 */
	const handleSearchChange = (term) => {
		setSearchTerm(term);
	};

	/**
	 * Handle role filter change
	 */
	const handleRoleFilterChange = (role) => {
		setRoleFilter(role);
	};

	/**
	 * Handle status filter change
	 */
	const handleStatusFilterChange = (status) => {
		setStatusFilter(status);
	};

	/**
	 * Handle sort change
	 */
	const handleSortChange = (field, order) => {
		setSortBy(field);
		setSortOrder(order);
	};

	/**
	 * Handle clear filters
	 */
	const handleClearFilters = () => {
		setSearchTerm('');
		setRoleFilter('all');
		setStatusFilter('all');
		setSortBy('');
		setSortOrder('asc');
	};

	/**
	 * Handle create user modal
	 */
	const handleCreateUser = () => {
		setShowCreateModal(true);
	};

	/**
	 * Handle close create modal
	 */
	const handleCloseCreateModal = () => {
		setShowCreateModal(false);
	};

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8'>
			{/* Page Header */}
			<div className='mb-8'>
				<div className='flex justify-between items-center'>
					<div>
						<h1 className='text-3xl font-bold text-gray-900'>
							Users Management
						</h1>
						<p className='mt-2 text-sm text-gray-600'>
							Manage user accounts, roles, and permissions
						</p>
					</div>
					<button
						onClick={handleCreateUser}
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
								d='M12 6v6m0 0v6m0-6h6m-6 0H6'
							/>
						</svg>
						Add New User
					</button>
				</div>
			</div>

			{/* User Statistics */}
			<UsersStats
				users={users}
				loading={loading}
			/>

			{/* Search and Filters */}
			<SearchAndFilters
				onSearchChange={handleSearchChange}
				onRoleFilterChange={handleRoleFilterChange}
				onStatusFilterChange={handleStatusFilterChange}
				onSortChange={handleSortChange}
				onClearFilters={handleClearFilters}
				searchTerm={searchTerm}
				roleFilter={roleFilter}
				statusFilter={statusFilter}
				sortBy={sortBy}
				sortOrder={sortOrder}
			/>

			{/* Users Table */}
			<UsersTable
				users={users}
				loading={loading}
				error={error}
				updateUser={updateUser}
				deleteUser={deleteUser}
				searchTerm={searchTerm}
				roleFilter={roleFilter}
				statusFilter={statusFilter}
				sortBy={sortBy}
				sortOrder={sortOrder}
			/>

			{/* Create User Modal */}
			<CreateUserModal
				isOpen={showCreateModal}
				onClose={handleCloseCreateModal}
				createUser={createUser}
			/>
		</div>
	);
};

export default Users;
