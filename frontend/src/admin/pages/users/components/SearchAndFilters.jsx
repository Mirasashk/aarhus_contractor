import React, { useState } from 'react';

/**
 * SearchAndFilters Component
 * Provides search functionality and filtering options for users
 */
const SearchAndFilters = ({
	onSearchChange,
	onRoleFilterChange,
	onStatusFilterChange,
	onSortChange,
	onClearFilters,
	searchTerm,
	roleFilter,
	statusFilter,
	sortBy,
	sortOrder,
}) => {
	const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);

	/**
	 * Handle search input change
	 */
	const handleSearchChange = (e) => {
		onSearchChange(e.target.value);
	};

	/**
	 * Handle role filter change
	 */
	const handleRoleFilterChange = (e) => {
		onRoleFilterChange(e.target.value);
	};

	/**
	 * Handle status filter change
	 */
	const handleStatusFilterChange = (e) => {
		onStatusFilterChange(e.target.value);
	};

	/**
	 * Handle sort change
	 */
	const handleSortChange = (field) => {
		const newOrder = sortBy === field && sortOrder === 'asc' ? 'desc' : 'asc';
		onSortChange(field, newOrder);
	};

	/**
	 * Clear all filters
	 */
	const handleClearFilters = () => {
		onSearchChange('');
		onRoleFilterChange('all');
		onStatusFilterChange('all');
		onSortChange('', '');
		onClearFilters();
	};

	/**
	 * Get sort icon
	 */
	const getSortIcon = (field) => {
		if (sortBy !== field) {
			return (
				<svg
					className="w-4 h-4 text-gray-400"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
					/>
				</svg>
			);
		}
		return sortOrder === 'asc' ? (
			<svg
				className="w-4 h-4 text-blue-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M5 15l7-7 7 7"
				/>
			</svg>
		) : (
			<svg
				className="w-4 h-4 text-blue-500"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={2}
					d="M19 9l-7 7-7-7"
				/>
			</svg>
		);
	};

	/**
	 * Check if any filters are active
	 */
	const hasActiveFilters = () => {
		return (
			searchTerm ||
			roleFilter !== 'all' ||
			statusFilter !== 'all' ||
			sortBy
		);
	};

	return (
		<div className="bg-white shadow rounded-lg p-6 mb-6">
			<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
				{/* Search Bar */}
				<div className="flex-1 max-w-lg">
					<div className="relative">
						<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
							<svg
								className="h-5 w-5 text-gray-400"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</div>
						<input
							type="text"
							placeholder="Search users by name, email, or employee ID..."
							value={searchTerm}
							onChange={handleSearchChange}
							className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
						/>
					</div>
				</div>

				{/* Filter Controls */}
				<div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
					{/* Role Filter */}
					<select
						value={roleFilter}
						onChange={handleRoleFilterChange}
						className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					>
						<option value="all">All Roles</option>
						<option value="admin">Admin</option>
						<option value="manager">Manager</option>
						<option value="employee">Employee</option>
						<option value="contractor">Contractor</option>
					</select>

					{/* Status Filter */}
					<select
						value={statusFilter}
						onChange={handleStatusFilterChange}
						className="block w-full sm:w-auto px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
					>
						<option value="all">All Status</option>
						<option value="active">Active</option>
						<option value="inactive">Inactive</option>
					</select>

					{/* Advanced Filters Toggle */}
					<button
						onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
						className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						<svg
							className="w-4 h-4 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
							/>
						</svg>
						Advanced
					</button>

					{/* Clear Filters */}
					{hasActiveFilters() && (
						<button
							onClick={handleClearFilters}
							className="inline-flex items-center px-3 py-2 border border-red-300 shadow-sm text-sm leading-4 font-medium rounded-md text-red-700 bg-white hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
						>
							<svg
								className="w-4 h-4 mr-2"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
							Clear
						</button>
					)}
				</div>
			</div>

			{/* Advanced Filters */}
			{showAdvancedFilters && (
				<div className="mt-6 pt-6 border-t border-gray-200">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
						{/* Sort Options */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Sort By
							</label>
							<div className="space-y-2">
								{[
									{ value: 'name', label: 'Name' },
									{ value: 'email', label: 'Email' },
									{ value: 'role', label: 'Role' },
									{ value: 'createdAt', label: 'Created Date' },
								].map((option) => (
									<button
										key={option.value}
										onClick={() => handleSortChange(option.value)}
										className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md border ${
											sortBy === option.value
												? 'border-blue-500 bg-blue-50 text-blue-700'
												: 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
										}`}
									>
										<span>{option.label}</span>
										{getSortIcon(option.value)}
									</button>
								))}
							</div>
						</div>

						{/* Quick Filters */}
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Quick Filters
							</label>
							<div className="space-y-2">
								<button
									onClick={() => {
										onStatusFilterChange('active');
										onRoleFilterChange('all');
									}}
									className="w-full text-left px-3 py-2 text-sm text-green-700 bg-green-50 rounded-md hover:bg-green-100"
								>
									Active Users Only
								</button>
								<button
									onClick={() => {
										onRoleFilterChange('admin');
										onStatusFilterChange('all');
									}}
									className="w-full text-left px-3 py-2 text-sm text-red-700 bg-red-50 rounded-md hover:bg-red-100"
								>
									Admins Only
								</button>
								<button
									onClick={() => {
										onStatusFilterChange('inactive');
										onRoleFilterChange('all');
									}}
									className="w-full text-left px-3 py-2 text-sm text-yellow-700 bg-yellow-50 rounded-md hover:bg-yellow-100"
								>
									Inactive Users
								</button>
							</div>
						</div>

						{/* Filter Summary */}
						<div className="md:col-span-2">
							<label className="block text-sm font-medium text-gray-700 mb-2">
								Active Filters
							</label>
							<div className="flex flex-wrap gap-2">
								{searchTerm && (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
										Search: "{searchTerm}"
									</span>
								)}
								{roleFilter !== 'all' && (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
										Role: {roleFilter}
									</span>
								)}
								{statusFilter !== 'all' && (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
										Status: {statusFilter}
									</span>
								)}
								{sortBy && (
									<span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
										Sort: {sortBy} ({sortOrder})
									</span>
								)}
								{!hasActiveFilters() && (
									<span className="text-sm text-gray-500">
										No filters applied
									</span>
								)}
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default SearchAndFilters;
