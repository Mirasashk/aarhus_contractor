import React, { useState } from 'react';
import BuildSite from '../../../utils/models/BuildSite';
import Icon from '../../../../components/AppIcon';

const BuildSitesTable = ({ buildSites, onEdit, onDelete, onView }) => {
	const [sortField, setSortField] = useState('name');
	const [sortDirection, setSortDirection] = useState('asc');

	const handleSort = (field) => {
		if (sortField === field) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
		} else {
			setSortField(field);
			setSortDirection('asc');
		}
	};

	const sortedBuildSites = [...buildSites].sort((a, b) => {
		const aValue = a[sortField];
		const bValue = b[sortField];

		if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
		if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
		return 0;
	});

	const formatDate = (dateString) => {
		if (!dateString) return 'N/A';
		return new Date(dateString).toLocaleDateString();
	};

	const formatAddress = (buildSite) => {
		const parts = [
			buildSite.address,
			buildSite.city,
			buildSite.state,
			buildSite.zip,
			buildSite.country,
		].filter(Boolean);
		return parts.join(', ') || 'N/A';
	};

	return (
		<div className='overflow-x-auto'>
			<table className='min-w-full bg-white border border-gray-200 rounded-lg shadow-sm'>
				<thead className='bg-gray-50'>
					<tr>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('name')}
						>
							Name{' '}
							{sortField === 'name' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('address')}
						>
							Address{' '}
							{sortField === 'address' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('city')}
						>
							City{' '}
							{sortField === 'city' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('phone')}
						>
							Phone{' '}
							{sortField === 'phone' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('email')}
						>
							Email{' '}
							{sortField === 'email' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>

						<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody className='bg-white divide-y divide-gray-200'>
					{sortedBuildSites.map((buildSite) => (
						<tr
							key={buildSite.id}
							className='hover:bg-gray-50'
						>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									<div className='h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center mr-3'>
										<svg
											className='h-6 w-6 text-blue-600'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
											/>
										</svg>
									</div>
									<div>
										<div className='text-sm font-medium text-gray-900'>
											{buildSite.name || 'N/A'}
										</div>
										{buildSite.website && (
											<div className='text-sm text-blue-600'>
												<a
													href={buildSite.website}
													target='_blank'
													rel='noopener noreferrer'
													className='hover:underline'
												>
													{buildSite.website}
												</a>
											</div>
										)}
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
								<div className='max-w-xs'>
									<div className='truncate'>
										{buildSite.address || 'N/A'}
									</div>
									<div className='text-xs text-gray-500'>
										{buildSite.city && buildSite.state
											? `${buildSite.city}, ${buildSite.state}`
											: buildSite.city ||
											  buildSite.state ||
											  ''}
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
								{buildSite.city || 'N/A'}
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
								{buildSite.phone || 'N/A'}
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
								{buildSite.email ? (
									<a
										href={`mailto:${buildSite.email}`}
										className='text-blue-600 hover:underline'
									>
										{buildSite.email}
									</a>
								) : (
									'N/A'
								)}
							</td>

							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<div className='flex space-x-2'>
									<button
										onClick={() => onView(buildSite)}
										className='text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-2 py-1 rounded text-xs'
									>
										<Icon name='Eye' />
									</button>
									<button
										onClick={() => onEdit(buildSite)}
										className='text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-2 py-1 rounded text-xs'
									>
										<Icon name='Edit' />
									</button>
									<button
										onClick={() => onDelete(buildSite)}
										className='text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded text-xs'
									>
										<Icon name='Trash' />
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{buildSites.length === 0 && (
				<div className='text-center py-8 text-gray-500'>
					No build sites found. Add some build sites to get started.
				</div>
			)}
		</div>
	);
};

export default BuildSitesTable;
