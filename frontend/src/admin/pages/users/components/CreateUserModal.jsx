import React, { useState } from 'react';

/**
 * CreateUserModal Component
 * Modal for creating new users
 */
const CreateUserModal = ({ isOpen, onClose, createUser }) => {
	const [formData, setFormData] = useState({
		email: '',
		firstName: '',
		lastName: '',
		phone: '',
		role: 'employee',
		isActive: true,
		photoURL: '',
	});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	/**
	 * Handle form input changes
	 */
	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: type === 'checkbox' ? checked : value,
		}));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: '',
			}));
		}
	};

	/**
	 * Validate form data
	 */
	const validateForm = () => {
		const newErrors = {};

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Email is invalid';
		}

		if (!formData.firstName.trim()) {
			newErrors.firstName = 'First name is required';
		}

		if (!formData.lastName.trim()) {
			newErrors.lastName = 'Last name is required';
		}

		if (
			formData.phone &&
			!/^[\+]?[1-9][\d]{0,15}$/.test(
				formData.phone.replace(/[\s\-\(\)]/g, '')
			)
		) {
			newErrors.phone = 'Phone number is invalid';
		}

		if (formData.photoURL && !isValidUrl(formData.photoURL)) {
			newErrors.photoURL = 'Photo URL is invalid';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	/**
	 * Check if URL is valid
	 */
	const isValidUrl = (string) => {
		try {
			new URL(string);
			return true;
		} catch (_) {
			return false;
		}
	};

	/**
	 * Handle form submission
	 */
	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);
		try {
			await createUser(formData);
			handleClose();
		} catch (error) {
			console.error('Error creating user:', error);
			// Handle specific error messages from the API
			if (error.response?.data?.details) {
				const apiErrors = {};
				error.response.data.details.forEach((detail) => {
					// Map API validation errors to form fields
					if (detail.includes('email')) {
						apiErrors.email = detail;
					} else if (detail.includes('first name')) {
						apiErrors.firstName = detail;
					} else if (detail.includes('last name')) {
						apiErrors.lastName = detail;
					} else if (detail.includes('phone')) {
						apiErrors.phone = detail;
					}
				});
				setErrors(apiErrors);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	/**
	 * Handle modal close
	 */
	const handleClose = () => {
		setFormData({
			email: '',
			firstName: '',
			lastName: '',
			phone: '',
			role: 'employee',
			isActive: true,
			photoURL: '',
		});
		setErrors({});
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 z-50 overflow-y-auto'>
			<div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
				{/* Background overlay */}
				<div
					className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
					onClick={handleClose}
				></div>

				{/* Modal panel */}
				<div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
					<form onSubmit={handleSubmit}>
						<div className='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
							<div className='sm:flex sm:items-start'>
								<div className='mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10'>
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
											d='M12 6v6m0 0v6m0-6h6m-6 0H6'
										/>
									</svg>
								</div>
								<div className='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full'>
									<h3 className='text-lg leading-6 font-medium text-gray-900'>
										Create New User
									</h3>
									<div className='mt-2'>
										<p className='text-sm text-gray-500'>
											Add a new user to the system. All
											fields marked with * are required.
										</p>
									</div>
								</div>
							</div>

							{/* Form fields */}
							<div className='mt-6 space-y-4'>
								{/* Email */}
								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Email Address *
									</label>
									<input
										type='email'
										name='email'
										value={formData.email}
										onChange={handleInputChange}
										className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
											errors.email
												? 'border-red-300'
												: 'border-gray-300'
										}`}
										placeholder='user@example.com'
									/>
									{errors.email && (
										<p className='mt-1 text-sm text-red-600'>
											{errors.email}
										</p>
									)}
								</div>

								{/* Name fields */}
								<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
									<div>
										<label className='block text-sm font-medium text-gray-700'>
											First Name *
										</label>
										<input
											type='text'
											name='firstName'
											value={formData.firstName}
											onChange={handleInputChange}
											className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
												errors.firstName
													? 'border-red-300'
													: 'border-gray-300'
											}`}
											placeholder='John'
										/>
										{errors.firstName && (
											<p className='mt-1 text-sm text-red-600'>
												{errors.firstName}
											</p>
										)}
									</div>

									<div>
										<label className='block text-sm font-medium text-gray-700'>
											Last Name *
										</label>
										<input
											type='text'
											name='lastName'
											value={formData.lastName}
											onChange={handleInputChange}
											className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
												errors.lastName
													? 'border-red-300'
													: 'border-gray-300'
											}`}
											placeholder='Doe'
										/>
										{errors.lastName && (
											<p className='mt-1 text-sm text-red-600'>
												{errors.lastName}
											</p>
										)}
									</div>
								</div>

								{/* Phone and Role */}
								<div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
									<div>
										<label className='block text-sm font-medium text-gray-700'>
											Phone Number
										</label>
										<input
											type='tel'
											name='phone'
											value={formData.phone}
											onChange={handleInputChange}
											className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
												errors.phone
													? 'border-red-300'
													: 'border-gray-300'
											}`}
											placeholder='+1234567890'
										/>
										{errors.phone && (
											<p className='mt-1 text-sm text-red-600'>
												{errors.phone}
											</p>
										)}
									</div>

									<div>
										<label className='block text-sm font-medium text-gray-700'>
											Role
										</label>
										<select
											name='role'
											value={formData.role}
											onChange={handleInputChange}
											className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
										>
											<option value='employee'>
												Employee
											</option>
											<option value='manager'>
												Manager
											</option>
											<option value='admin'>Admin</option>
											<option value='contractor'>
												Contractor
											</option>
										</select>
									</div>
								</div>

								{/* Photo URL */}
								<div>
									<label className='block text-sm font-medium text-gray-700'>
										Photo URL
									</label>
									<input
										type='url'
										name='photoURL'
										value={formData.photoURL}
										onChange={handleInputChange}
										className={`mt-1 block w-full border rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
											errors.photoURL
												? 'border-red-300'
												: 'border-gray-300'
										}`}
										placeholder='https://example.com/photo.jpg'
									/>
									{errors.photoURL && (
										<p className='mt-1 text-sm text-red-600'>
											{errors.photoURL}
										</p>
									)}
								</div>

								{/* Active status */}
								<div className='flex items-center'>
									<input
										type='checkbox'
										name='isActive'
										checked={formData.isActive}
										onChange={handleInputChange}
										className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
									/>
									<label className='ml-2 block text-sm text-gray-900'>
										User is active
									</label>
								</div>
							</div>
						</div>

						{/* Modal footer */}
						<div className='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
							<button
								type='submit'
								disabled={isSubmitting}
								className='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 disabled:cursor-not-allowed'
							>
								{isSubmitting ? 'Creating...' : 'Create User'}
							</button>
							<button
								type='button'
								onClick={handleClose}
								className='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
							>
								Cancel
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default CreateUserModal;
