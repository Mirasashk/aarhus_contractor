import React from 'react';

/**
 * UsersStats Component
 * Displays user statistics and metrics
 */
const UsersStats = ({ users = [], loading = false }) => {
	/**
	 * Calculate user statistics
	 */
	const stats = React.useMemo(() => {
		if (!users || users.length === 0) {
			return {
				total: 0,
				active: 0,
				inactive: 0,
				byRole: {},
				recentUsers: 0,
				avgUsersPerDay: 0,
			};
		}

		const now = new Date();
		const thirtyDaysAgo = new Date(
			now.getTime() - 30 * 24 * 60 * 60 * 1000
		);
		const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

		const total = users.length;
		const active = users.filter((user) => user.isActive).length;
		const inactive = total - active;

		// Group by role
		const byRole = users.reduce((acc, user) => {
			const role = user.role || 'unknown';
			acc[role] = (acc[role] || 0) + 1;
			return acc;
		}, {});

		// Recent users (last 7 days)
		const recentUsers = users.filter((user) => {
			const createdAt = new Date(user.createdAt);
			return createdAt >= sevenDaysAgo;
		}).length;

		// Average users per day (last 30 days)
		const usersInLast30Days = users.filter((user) => {
			const createdAt = new Date(user.createdAt);
			return createdAt >= thirtyDaysAgo;
		}).length;
		const avgUsersPerDay = (usersInLast30Days / 30).toFixed(1);

		return {
			total,
			active,
			inactive,
			byRole,
			recentUsers,
			avgUsersPerDay,
		};
	}, [users]);

	/**
	 * Get role display name
	 */
	const getRoleDisplayName = (role) => {
		const roleNames = {
			admin: 'Admins',
			manager: 'Managers',
			employee: 'Employees',
			contractor: 'Contractors',
			unknown: 'Unknown',
		};
		return roleNames[role] || role;
	};

	/**
	 * Get role color
	 */
	const getRoleColor = (role) => {
		const colors = {
			admin: 'bg-red-500',
			manager: 'bg-blue-500',
			employee: 'bg-green-500',
			contractor: 'bg-yellow-500',
			unknown: 'bg-gray-500',
		};
		return colors[role] || 'bg-gray-500';
	};

	if (loading) {
		return (
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
				{[...Array(4)].map((_, i) => (
					<div
						key={i}
						className='bg-white p-6 rounded-lg shadow animate-pulse'
					>
						<div className='h-4 bg-gray-200 rounded w-3/4 mb-2'></div>
						<div className='h-8 bg-gray-200 rounded w-1/2'></div>
					</div>
				))}
			</div>
		);
	}

	return (
		<div className='mb-8'>
			{/* Main Stats Cards */}
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
				<div className='bg-white overflow-hidden shadow rounded-lg'>
					<div className='p-5'>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<div className='w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z'
										/>
									</svg>
								</div>
							</div>
							<div className='ml-5 w-0 flex-1'>
								<dl>
									<dt className='text-sm font-medium text-gray-500 truncate'>
										Total Users
									</dt>
									<dd className='text-lg font-medium text-gray-900'>
										{stats.total}
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-white overflow-hidden shadow rounded-lg'>
					<div className='p-5'>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<div className='w-8 h-8 bg-green-500 rounded-md flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
							</div>
							<div className='ml-5 w-0 flex-1'>
								<dl>
									<dt className='text-sm font-medium text-gray-500 truncate'>
										Active Users
									</dt>
									<dd className='text-lg font-medium text-gray-900'>
										{stats.active}
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-white overflow-hidden shadow rounded-lg'>
					<div className='p-5'>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<div className='w-8 h-8 bg-red-500 rounded-md flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
							</div>
							<div className='ml-5 w-0 flex-1'>
								<dl>
									<dt className='text-sm font-medium text-gray-500 truncate'>
										Inactive Users
									</dt>
									<dd className='text-lg font-medium text-gray-900'>
										{stats.inactive}
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>

				<div className='bg-white overflow-hidden shadow rounded-lg'>
					<div className='p-5'>
						<div className='flex items-center'>
							<div className='flex-shrink-0'>
								<div className='w-8 h-8 bg-purple-500 rounded-md flex items-center justify-center'>
									<svg
										className='w-5 h-5 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
										/>
									</svg>
								</div>
							</div>
							<div className='ml-5 w-0 flex-1'>
								<dl>
									<dt className='text-sm font-medium text-gray-500 truncate'>
										Recent (7 days)
									</dt>
									<dd className='text-lg font-medium text-gray-900'>
										{stats.recentUsers}
									</dd>
								</dl>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Role Distribution */}
			<div className='bg-white shadow rounded-lg p-6'>
				<h3 className='text-lg font-medium text-gray-900 mb-4'>
					Users by Role
				</h3>
				<div className='space-y-4'>
					{Object.entries(stats.byRole).map(([role, count]) => (
						<div
							key={role}
							className='flex items-center justify-between'
						>
							<div className='flex items-center'>
								<div
									className={`w-3 h-3 rounded-full ${getRoleColor(
										role
									)} mr-3`}
								></div>
								<span className='text-sm font-medium text-gray-700'>
									{getRoleDisplayName(role)}
								</span>
							</div>
							<div className='flex items-center'>
								<span className='text-sm font-medium text-gray-900 mr-2'>
									{count}
								</span>
								<div className='w-20 bg-gray-200 rounded-full h-2'>
									<div
										className={`h-2 rounded-full ${getRoleColor(
											role
										)}`}
										style={{
											width: `${
												(count / stats.total) * 100
											}%`,
										}}
									></div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Additional Metrics */}
			<div className='mt-6 grid grid-cols-1 md:grid-cols-2 gap-6'>
				<div className='bg-white shadow rounded-lg p-6'>
					<h4 className='text-md font-medium text-gray-900 mb-2'>
						Growth Rate
					</h4>
					<p className='text-sm text-gray-600'>
						Average new users per day (last 30 days)
					</p>
					<p className='text-2xl font-bold text-blue-600 mt-2'>
						{stats.avgUsersPerDay}
					</p>
				</div>

				<div className='bg-white shadow rounded-lg p-6'>
					<h4 className='text-md font-medium text-gray-900 mb-2'>
						Activity Rate
					</h4>
					<p className='text-sm text-gray-600'>
						Percentage of active users
					</p>
					<p className='text-2xl font-bold text-green-600 mt-2'>
						{stats.total > 0
							? Math.round((stats.active / stats.total) * 100)
							: 0}
						%
					</p>
				</div>
			</div>
		</div>
	);
};

export default UsersStats;
