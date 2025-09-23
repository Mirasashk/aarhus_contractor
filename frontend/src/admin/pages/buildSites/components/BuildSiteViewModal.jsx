import React from 'react';

const BuildSiteViewModal = ({ isOpen, onClose, buildSite }) => {
	if (!isOpen || !buildSite) return null;

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

	const formatAddress = () => {
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
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50'>
			<div className='relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white'>
				<div className='mt-3'>
					<div className='flex justify-between items-center mb-6'>
						<h3 className='text-xl font-semibold text-gray-900'>
							Build Site Details
						</h3>
						<button
							onClick={onClose}
							className='text-gray-400 hover:text-gray-600'
						>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</button>
					</div>

					<div className='space-y-6'>
						{/* Header Section */}
						<div className='flex items-start space-x-4'>
							<div className='h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0'>
								<svg
									className='h-8 w-8 text-blue-600'
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
							<div className='flex-1'>
								<h4 className='text-2xl font-bold text-gray-900 mb-2'>
									{buildSite.name || 'N/A'}
								</h4>
								<p className='text-gray-600 text-lg'>
									{formatAddress()}
								</p>
								{buildSite.website && (
									<div className='mt-2'>
										<a
											href={buildSite.website}
											target='_blank'
											rel='noopener noreferrer'
											className='text-blue-600 hover:text-blue-800 hover:underline text-sm'
										>
											{buildSite.website}
										</a>
									</div>
								)}
							</div>
						</div>

						{/* Contact Information */}
						<div className='bg-gray-50 rounded-lg p-4'>
							<h5 className='text-lg font-semibold text-gray-900 mb-3'>
								Contact Information
							</h5>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								{buildSite.phone && (
									<div>
										<label className='text-sm font-medium text-gray-500'>
											Phone
										</label>
										<p className='text-gray-900'>
											<a
												href={`tel:${buildSite.phone}`}
												className='hover:text-blue-600'
											>
												{buildSite.phone}
											</a>
										</p>
									</div>
								)}
								{buildSite.email && (
									<div>
										<label className='text-sm font-medium text-gray-500'>
											Email
										</label>
										<p className='text-gray-900'>
											<a
												href={`mailto:${buildSite.email}`}
												className='text-blue-600 hover:text-blue-800 hover:underline'
											>
												{buildSite.email}
											</a>
										</p>
									</div>
								)}
							</div>
						</div>

						{/* Location Details */}
						<div className='bg-gray-50 rounded-lg p-4'>
							<h5 className='text-lg font-semibold text-gray-900 mb-3'>
								Location Details
							</h5>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label className='text-sm font-medium text-gray-500'>
										Address
									</label>
									<p className='text-gray-900'>
										{buildSite.address || 'N/A'}
									</p>
								</div>
								<div>
									<label className='text-sm font-medium text-gray-500'>
										City
									</label>
									<p className='text-gray-900'>
										{buildSite.city || 'N/A'}
									</p>
								</div>
								<div>
									<label className='text-sm font-medium text-gray-500'>
										State
									</label>
									<p className='text-gray-900'>
										{buildSite.state || 'N/A'}
									</p>
								</div>
								<div>
									<label className='text-sm font-medium text-gray-500'>
										ZIP Code
									</label>
									<p className='text-gray-900'>
										{buildSite.zip || 'N/A'}
									</p>
								</div>
								<div>
									<label className='text-sm font-medium text-gray-500'>
										Country
									</label>
									<p className='text-gray-900'>
										{buildSite.country || 'N/A'}
									</p>
								</div>
							</div>
						</div>

						{/* Notes */}
						{buildSite.notes && (
							<div className='bg-gray-50 rounded-lg p-4'>
								<h5 className='text-lg font-semibold text-gray-900 mb-3'>
									Notes
								</h5>
								<p className='text-gray-700 whitespace-pre-wrap'>
									{buildSite.notes}
								</p>
							</div>
						)}

						{/* Timestamps */}
						<div className='bg-gray-50 rounded-lg p-4'>
							<h5 className='text-lg font-semibold text-gray-900 mb-3'>
								Timestamps
							</h5>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
								<div>
									<label className='text-sm font-medium text-gray-500'>
										Created
									</label>
									<p className='text-gray-900'>
										{formatDate(buildSite.createdAt)}
									</p>
								</div>
								<div>
									<label className='text-sm font-medium text-gray-500'>
										Last Updated
									</label>
									<p className='text-gray-900'>
										{formatDate(buildSite.updatedAt)}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='flex justify-end pt-6'>
						<button
							onClick={onClose}
							className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
						>
							Close
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BuildSiteViewModal;
