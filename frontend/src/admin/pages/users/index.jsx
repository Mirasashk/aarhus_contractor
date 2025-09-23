import React, { useEffect, useState } from 'react';
import { useUsersContext } from '../../../contexts/UsersContext';
import UsersStats from './components/UsersStats';
import SearchAndFilters from './components/SearchAndFilters';
import UsersTable from './components/UsersTable';
import CreateUserModal from './components/CreateUserModal';
import { employeesService } from '../../../firebase/employeesService';

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
	const [showPreCreateModal, setShowPreCreateModal] = useState(false);
	const [showEmployeeSelect, setShowEmployeeSelect] = useState(false);
	const [employees, setEmployees] = useState([]);
	const [employeesLoading, setEmployeesLoading] = useState(false);
	const [employeesError, setEmployeesError] = useState(null);
	const [selectedEmployeeId, setSelectedEmployeeId] = useState('');
	const [initialUserData, setInitialUserData] = useState(null);

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
		setShowPreCreateModal(true);
	};

	/**
	 * Handle close create modal
	 */
	const handleCloseCreateModal = () => {
		setShowCreateModal(false);
		setInitialUserData(null);
	};

	const handleCreateUserSubmit = async (data) => {
		const result = await createUser(data);
		await refreshUsers();
		return result;
	};

	// Load active employees when employee select modal opens
	useEffect(() => {
		const loadEmployees = async () => {
			setEmployeesLoading(true);
			setEmployeesError(null);
			try {
				const res = await employeesService.getActiveEmployees();
				if (res.success) setEmployees(res.data);
				else setEmployeesError(res.error || 'Failed to load employees');
			} catch (e) {
				setEmployeesError(e.message || 'Failed to load employees');
			} finally {
				setEmployeesLoading(false);
			}
		};

		if (showEmployeeSelect) {
			loadEmployees();
		}
	}, [showEmployeeSelect]);

	const handlePreCreateChoice = (fromEmployees) => {
		setShowPreCreateModal(false);
		if (fromEmployees) {
			setShowEmployeeSelect(true);
		} else {
			setInitialUserData(null);
			setShowCreateModal(true);
		}
	};

	const handleEmployeeSelectConfirm = () => {
		const emp = employees.find((e) => e.id === selectedEmployeeId);
		if (emp) {
			const mapped = {
				firstName: emp.name?.split(' ')[0] || '',
				lastName: emp.name?.split(' ').slice(1).join(' ') || '',
				email: emp.email || '',
				phone: emp.phone || '',
				photoURL: emp.image || '',
				role: 'employee',
				isActive: true,
			};
			setInitialUserData(mapped);
		}
		setShowEmployeeSelect(false);
		setShowCreateModal(true);
	};

	const handleEmployeeSelectCancel = () => {
		setShowEmployeeSelect(false);
		setSelectedEmployeeId('');
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
				createUser={handleCreateUserSubmit}
				updateUser={updateUser}
				initialData={initialUserData}
			/>

			{/* Pre-create choice modal */}
			{showPreCreateModal && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
					<div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md'>
						<h2 className='text-lg font-semibold text-gray-900'>
							Create from employees?
						</h2>
						<p className='mt-2 text-sm text-gray-600'>
							Would you like to prefill from active employees?
						</p>
						<div className='mt-4 flex justify-end gap-2'>
							<button
								onClick={() => handlePreCreateChoice(false)}
								className='px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
							>
								No
							</button>
							<button
								onClick={() => handlePreCreateChoice(true)}
								className='px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700'
							>
								Yes
							</button>
						</div>
					</div>
				</div>
			)}

			{/* Employee select modal */}
			{showEmployeeSelect && (
				<div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
					<div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-lg'>
						<h2 className='text-lg font-semibold text-gray-900'>
							Select Employee
						</h2>
						<div className='mt-4'>
							{employeesLoading ? (
								<p className='text-sm text-gray-600'>
									Loading employees...
								</p>
							) : employeesError ? (
								<p className='text-sm text-red-600'>
									{employeesError}
								</p>
							) : employees.length === 0 ? (
								<p className='text-sm text-gray-600'>
									No active employees found.
								</p>
							) : (
								<select
									value={selectedEmployeeId}
									onChange={(e) =>
										setSelectedEmployeeId(e.target.value)
									}
									className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
								>
									<option value=''>Select an employee</option>
									{employees.map((emp) => (
										<option
											key={emp.id}
											value={emp.id}
										>
											{`${emp.name || ''}`}
											{emp.email ? `- ${emp.email}` : ''}
										</option>
									))}
								</select>
							)}
						</div>
						<div className='mt-6 flex justify-end gap-2'>
							<button
								onClick={handleEmployeeSelectCancel}
								className='px-4 py-2 rounded-md border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
							>
								Cancel
							</button>
							<button
								disabled={!selectedEmployeeId}
								onClick={handleEmployeeSelectConfirm}
								className='px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
							>
								Continue
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Users;
