import React, { useState } from 'react';
import Employee from '../../../utils/models/Employee';
import QRCodeModal from './QRCodeModal';

const EmployeesTable = ({ employees, onEdit, onDelete, onView }) => {
	const [sortField, setSortField] = useState('name');
	const [sortDirection, setSortDirection] = useState('asc');
	const [qrModalOpen, setQrModalOpen] = useState(false);
	const [selectedEmployee, setSelectedEmployee] = useState(null);

	const handleSort = (field) => {
		if (sortField === field) {
			setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
		} else {
			setSortField(field);
			setSortDirection('asc');
		}
	};

	const sortedEmployees = [...employees].sort((a, b) => {
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

	const getRatingStars = (rating) => {
		const stars = [];
		const fullStars = Math.floor(rating || 0);
		const hasHalfStar = (rating || 0) % 1 !== 0;

		for (let i = 0; i < 5; i++) {
			if (i < fullStars) {
				stars.push('★');
			} else if (i === fullStars && hasHalfStar) {
				stars.push('☆');
			} else {
				stars.push('☆');
			}
		}
		return stars.join('');
	};

	const handleQRCodeClick = (employee) => {
		setSelectedEmployee(employee);
		setQrModalOpen(true);
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
							onClick={() => handleSort('firm')}
						>
							Firm{' '}
							{sortField === 'firm' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('role')}
						>
							Role{' '}
							{sortField === 'role' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('buildSite')}
						>
							Build Site{' '}
							{sortField === 'buildSite' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('rating')}
						>
							Rating{' '}
							{sortField === 'rating' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th
							className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100'
							onClick={() => handleSort('createdAt')}
						>
							Created{' '}
							{sortField === 'createdAt' &&
								(sortDirection === 'asc' ? '↑' : '↓')}
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
							QR Code
						</th>
						<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
							Actions
						</th>
					</tr>
				</thead>
				<tbody className='bg-white divide-y divide-gray-200'>
					{sortedEmployees.map((employee) => (
						<tr
							key={employee.id}
							className='hover:bg-gray-50'
						>
							<td className='px-6 py-4 whitespace-nowrap'>
								<div className='flex items-center'>
									{employee.image ? (
										<img
											className='h-10 w-10 rounded-full object-cover mr-3'
											src={employee.image}
											alt={employee.name}
										/>
									) : (
										<div className='h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center mr-3'>
											<span className='text-gray-600 font-medium'>
												{employee.name
													?.charAt(0)
													?.toUpperCase() || '?'}
											</span>
										</div>
									)}
									<div>
										<div className='text-sm font-medium text-gray-900'>
											{employee.name || 'N/A'}
										</div>
										<div className='text-sm text-gray-500'>
											{employee.birthdate
												? new Date(
														employee.birthdate
												  ).toLocaleDateString()
												: 'N/A'}
										</div>
									</div>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
								{employee.firm || 'N/A'}
							</td>
							<td className='px-6 py-4 whitespace-nowrap'>
								<span className='inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800'>
									{employee.role || 'N/A'}
								</span>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
								{employee.buildSite || 'N/A'}
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-900'>
								<div className='flex items-center'>
									<span className='text-yellow-400 mr-1'>
										{getRatingStars(employee.rating)}
									</span>
									<span className='text-gray-600'>
										{employee.rating
											? employee.rating.toFixed(1)
											: 'N/A'}
									</span>
								</div>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
								{formatDate(employee.createdAt)}
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<button
									onClick={() => handleQRCodeClick(employee)}
									className='text-purple-600 hover:text-purple-900 bg-purple-50 hover:bg-purple-100 px-2 py-1 rounded text-xs flex items-center'
								>
									<svg
										className='w-4 h-4 mr-1'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z'
										/>
									</svg>
									QR Code
								</button>
							</td>
							<td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
								<div className='flex space-x-2'>
									<button
										onClick={() => onView(employee)}
										className='text-indigo-600 hover:text-indigo-900 bg-indigo-50 hover:bg-indigo-100 px-2 py-1 rounded text-xs'
									>
										View
									</button>
									<button
										onClick={() => onEdit(employee)}
										className='text-yellow-600 hover:text-yellow-900 bg-yellow-50 hover:bg-yellow-100 px-2 py-1 rounded text-xs'
									>
										Edit
									</button>
									<button
										onClick={() => onDelete(employee)}
										className='text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-2 py-1 rounded text-xs'
									>
										Delete
									</button>
								</div>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			{employees.length === 0 && (
				<div className='text-center py-8 text-gray-500'>
					No employees found. Add some employees to get started.
				</div>
			)}

			<QRCodeModal
				isOpen={qrModalOpen}
				onClose={() => setQrModalOpen(false)}
				employee={selectedEmployee}
			/>
		</div>
	);
};

export default EmployeesTable;
