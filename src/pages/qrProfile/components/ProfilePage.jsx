import React from 'react';
import Logo from '/assets/images/Logo_White.png';

const ProfilePage = ({ employee }) => {
	if (!employee) {
		return (
			<div className='min-h-screen bg-sky-700 flex items-center justify-center px-4'>
				<div className='w-screen h-screen flex items-center justify-center bg-sky-700'>
					<div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white'></div>
				</div>
			</div>
		);
	}

	const formatDate = (dateString) => {
		if (!dateString) return 'Not provided';
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
		});
	};

	const formatAge = (birthdate) => {
		if (!birthdate) return 'Not provided';
		const today = new Date();
		const birth = new Date(birthdate);
		let age = today.getFullYear() - birth.getFullYear();
		const monthDiff = today.getMonth() - birth.getMonth();
		if (
			monthDiff < 0 ||
			(monthDiff === 0 && today.getDate() < birth.getDate())
		) {
			age--;
		}
		return `${age} years old`;
	};

	const renderRating = (rating) => {
		if (!rating) return 'Not rated';
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(
				<svg
					key={i}
					className='w-4 h-4 text-yellow-400 fill-current'
					viewBox='0 0 20 20'
				>
					<path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
				</svg>
			);
		}

		if (hasHalfStar) {
			stars.push(
				<svg
					key='half'
					className='w-4 h-4 text-yellow-400 fill-current'
					viewBox='0 0 20 20'
				>
					<defs>
						<linearGradient id='half'>
							<stop
								offset='50%'
								stopColor='currentColor'
							/>
							<stop
								offset='50%'
								stopColor='#E5E7EB'
							/>
						</linearGradient>
					</defs>
					<path
						fill='url(#half)'
						d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z'
					/>
				</svg>
			);
		}

		const emptyStars = 5 - Math.ceil(rating);
		for (let i = 0; i < emptyStars; i++) {
			stars.push(
				<svg
					key={`empty-${i}`}
					className='w-4 h-4 text-gray-300 fill-current'
					viewBox='0 0 20 20'
				>
					<path d='M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z' />
				</svg>
			);
		}

		return (
			<div className='flex items-center space-x-1'>
				{stars}
				<span className='ml-2 text-sm text-gray-600'>({rating}/5)</span>
			</div>
		);
	};

	return (
		<div className='min-h-screen bg-sky-700'>
			{/* Header */}
			<div className=' shadow-sm '>
				<div className='px-4 py-6 sm:px-6'>
					<div className='flex items-center justify-center space-x-4'>
						{/* Profile Image */}
						<img
							src={Logo}
							alt='Logo'
							className='h-16'
						/>
					</div>
				</div>
			</div>

			{/* Content */}
			<div className='px-4 py-6 sm:px-6'>
				<div className='space-y-6'>
					{/* Name etc Information */}
					<div className='bg-white rounded-lg shadow-sm border p-4 sm:p-6 flex'>
						{/* Profile Image */}
						<div className='flex-shrink-0'>
							{employee.image ? (
								<img
									className='w-16 h-16 rounded-full object-cover border-2 border-gray-200'
									src={employee.image}
									alt={employee.name}
								/>
							) : (
								<div className='w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center'>
									<svg
										className='w-8 h-8 text-gray-600'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
											clipRule='evenodd'
										/>
									</svg>
								</div>
							)}
						</div>

						{/* Name and Role */}
						<div className='flex-1 min-w-0 pl-4'>
							<h1 className='text-xl font-bold text-gray-900 truncate'>
								{employee.name || 'Unknown Name'}
							</h1>
							<p className='text-sm text-gray-600 truncate'>
								{employee.role || 'No role specified'}
							</p>
							{employee.firm && (
								<p className='text-xs text-gray-500 truncate mt-1'>
									{employee.firm}
								</p>
							)}
						</div>
					</div>

					{/* Personal Information */}
					<div className='bg-white rounded-lg shadow-sm border p-4 sm:p-6'>
						<h2 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
							<svg
								className='w-5 h-5 text-blue-600 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
								/>
							</svg>
							Personal Information
						</h2>
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Birthdate
								</label>
								<p className='text-sm text-gray-900'>
									{formatDate(employee.birthdate)}
								</p>
								<p className='text-xs text-gray-500'>
									{formatAge(employee.birthdate)}
								</p>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Firm
								</label>
								<p className='text-sm text-gray-900'>
									{employee.firm || 'Not specified'}
								</p>
							</div>
						</div>
					</div>

					{/* Work Information */}
					<div className='bg-white rounded-lg shadow-sm border p-4 sm:p-6'>
						<h2 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
							<svg
								className='w-5 h-5 text-green-600 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6'
								/>
							</svg>
							Work Information
						</h2>
						<div className='space-y-4'>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Role
								</label>
								<p className='text-sm text-gray-900'>
									{employee.role || 'Not specified'}
								</p>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Build Site
								</label>
								<p className='text-sm text-gray-900'>
									{employee.buildSite || 'Not assigned'}
								</p>
							</div>
							{/* <div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Performance Rating
								</label>
								<div className='mt-1'>
									{renderRating(employee.rating)}
								</div>
							</div> */}
						</div>
					</div>

					{/* Documents */}
					{employee.documents && employee.documents.length > 0 && (
						<div className='bg-white rounded-lg shadow-sm border p-4 sm:p-6'>
							<h2 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
								<svg
									className='w-5 h-5 text-purple-600 mr-2'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
									/>
								</svg>
								Documents
							</h2>
							<div className='space-y-2'>
								{employee.documents.map((doc, index) => (
									<div
										key={index}
										className='flex items-center justify-between p-3 bg-gray-50 rounded-lg'
									>
										<div className='flex items-center'>
											<svg
												className='w-5 h-5 text-gray-400 mr-3'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
												/>
											</svg>
											<span className='text-sm text-gray-900'>
												{doc.name ||
													`Document ${index + 1}`}
											</span>
										</div>
										{doc.url && (
											<a
												href={doc.url}
												target='_blank'
												rel='noopener noreferrer'
												className='text-blue-600 hover:text-blue-800 text-sm font-medium'
											>
												View
											</a>
										)}
									</div>
								))}
							</div>
						</div>
					)}

					{/* Notes */}
					{/* {employee.notes && (
						<div className='bg-white rounded-lg shadow-sm border p-4 sm:p-6'>
							<h2 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
								<svg
									className='w-5 h-5 text-orange-600 mr-2'
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
								Notes
							</h2>
							<p className='text-sm text-gray-700 leading-relaxed'>
								{employee.notes}
							</p>
						</div>
					)} */}

					{/* Timestamps */}
					{/* <div className='bg-white rounded-lg shadow-sm border p-4 sm:p-6'>
						<h2 className='text-lg font-semibold text-gray-900 mb-4 flex items-center'>
							<svg
								className='w-5 h-5 text-gray-600 mr-2'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
							Record Information
						</h2>
						<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Created
								</label>
								<p className='text-sm text-gray-900'>
									{formatDate(employee.createdAt)}
								</p>
							</div>
							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Last Updated
								</label>
								<p className='text-sm text-gray-900'>
									{formatDate(employee.updatedAt)}
								</p>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default ProfilePage;
