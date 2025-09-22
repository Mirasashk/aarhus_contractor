import React from 'react';
import {
	FunnelIcon,
	MagnifyingGlassIcon,
	ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

const FeedbackFilters = ({
	filter,
	setFilter,
	searchTerm,
	setSearchTerm,
	totalCount,
	filteredCount,
	feedback = [],
}) => {
	// Calculate counts for each status
	const newCount = feedback.filter((item) => item.status === 'new').length;
	const completedCount = feedback.filter(
		(item) => item.status === 'completed'
	).length;

	const filterOptions = [
		{ value: 'all', label: 'All Feedback', count: totalCount },
		{ value: 'new', label: 'New', count: newCount },
		{ value: 'completed', label: 'Completed', count: completedCount },
	];

	return (
		<div className='bg-white shadow rounded-lg border border-gray-400 p-6'>
			<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0 sm:space-x-4'>
				{/* Search */}
				{/* <div className='flex-1 max-w-lg'>
					<div className='relative'>
						<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
							<MagnifyingGlassIcon className='h-5 w-5 text-gray-400' />
						</div>
						<input
							type='text'
							placeholder='Search feedback...'
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							className='block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
						/>
					</div>
				</div> */}

				{/* Filter Tabs */}
				<div className='flex space-x-1 bg-gray-100 p-1 rounded-lg'>
					{filterOptions.map((option) => (
						<button
							key={option.value}
							onClick={() => setFilter(option.value)}
							className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
								filter === option.value
									? 'bg-white text-indigo-700 shadow-sm'
									: 'text-gray-500 hover:text-gray-700'
							}`}
						>
							{option.label}
							{option.count > 0 && (
								<span
									className={`ml-1 px-1.5 py-0.5 text-xs rounded-full ${
										filter === option.value
											? 'bg-indigo-100 text-indigo-600'
											: 'bg-gray-200 text-gray-600'
									}`}
								>
									{option.count}
								</span>
							)}
						</button>
					))}
				</div>
			</div>

			{/* Results Summary */}
			{searchTerm && (
				<div className='mt-4 flex items-center text-sm text-gray-500'>
					<FunnelIcon className='h-4 w-4 mr-1' />
					<span>
						Showing {filteredCount} of {totalCount} feedback items
						{searchTerm && ` matching "${searchTerm}"`}
					</span>
				</div>
			)}

			{/* Quick Stats */}
			<div className='mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4'>
				<div className='flex items-center p-3 bg-blue-50 rounded-lg'>
					<ChatBubbleBottomCenterTextIcon className='h-12 w-12 text-blue-600 mr-20 pr-2' />
					<div>
						<p className='text-sm font-medium text-blue-900'>
							Total Feedback
						</p>
						<p className='text-2xl font-bold text-blue-600'>
							{totalCount}
						</p>
					</div>
				</div>

				<div className='flex items-center p-3 bg-yellow-50 rounded-lg'>
					<div className='h-5 w-5 bg-yellow-400 rounded-full mr-2'></div>
					<div>
						<p className='text-sm font-medium text-yellow-900'>
							New
						</p>
						<p className='text-2xl font-bold text-yellow-600'>
							{newCount}
						</p>
					</div>
				</div>

				<div className='flex items-center p-3 bg-green-50 rounded-lg'>
					<div className='h-5 w-5 bg-green-400 rounded-full mr-2'></div>
					<div>
						<p className='text-sm font-medium text-green-900'>
							Completed
						</p>
						<p className='text-2xl font-bold text-green-600'>
							{completedCount}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FeedbackFilters;
