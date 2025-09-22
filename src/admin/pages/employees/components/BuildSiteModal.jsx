import React, { useState, useEffect } from 'react';
import BuildSite from '../../../utils/models/BuildSite';
import { buildSiteService } from '../../../../firebase/buildSiteService';

const BuildSiteModal = ({ isOpen, onClose, onSave, buildSite = null }) => {
	const [formData, setFormData] = useState({
		name: '',
		address: '',
		city: '',
		state: '',
		zip: '',
		country: '',
		phone: '',
		email: '',
		website: '',
		notes: '',
	});
	const [errors, setErrors] = useState({});

	useEffect(() => {
		if (buildSite) {
			setFormData({
				name: buildSite.name || '',
				address: buildSite.address || '',
				city: buildSite.city || '',
				state: buildSite.state || '',
				zip: buildSite.zip || '',
				country: buildSite.country || '',
				phone: buildSite.phone || '',
				email: buildSite.email || '',
				website: buildSite.website || '',
				notes: buildSite.notes || '',
			});
		} else {
			setFormData({
				name: '',
				address: '',
				city: '',
				state: '',
				zip: '',
				country: '',
				phone: '',
				email: '',
				website: '',
				notes: '',
			});
		}
		setErrors({});
	}, [buildSite, isOpen]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: '',
			}));
		}
	};

	// Helper function to format website URL
	const formatWebsiteUrl = (url) => {
		if (!url) return '';
		// If URL doesn't start with http:// or https://, add https://
		if (!url.match(/^https?:\/\//)) {
			return `https://${url}`;
		}
		return url;
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.address.trim()) {
			newErrors.address = 'Address is required';
		}

		if (!formData.city.trim()) {
			newErrors.city = 'City is required';
		}

		if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		// Updated website validation - accept simple domain names or full URLs
		if (formData.website && formData.website.trim()) {
			// Simple validation: must contain at least one dot and valid characters
			const urlPattern =
				/^(https?:\/\/)?[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.([a-zA-Z]{2,})(\/.*)?$/;
			if (!urlPattern.test(formData.website)) {
				newErrors.website =
					'Please enter a valid website URL (e.g., example.com)';
			}
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		try {
			// Format the website URL
			const formattedWebsite = formatWebsiteUrl(formData.website);

			const buildSiteData = {
				name: formData.name,
				address: formData.address,
				city: formData.city,
				state: formData.state,
				zip: formData.zip,
				country: formData.country,
				phone: formData.phone,
				email: formData.email,
				website: formattedWebsite,
				notes: formData.notes,
			};

			let result;
			if (buildSite) {
				// Update existing build site
				result = await buildSiteService.updateBuildSite(
					buildSite.id,
					buildSiteData
				);
			} else {
				// Create new build site
				result = await buildSiteService.createBuildSite(buildSiteData);
			}

			if (result.success) {
				// Create BuildSite object for the parent component
				const now = new Date().toISOString();
				const newBuildSite = new BuildSite(
					result.buildSiteId || buildSite?.id,
					buildSiteData.name,
					buildSiteData.address,
					buildSiteData.city,
					buildSiteData.state,
					buildSiteData.zip,
					buildSiteData.country,
					buildSiteData.phone,
					buildSiteData.email,
					buildSiteData.website,
					buildSiteData.notes,
					buildSite?.createdAt || now,
					now
				);

				onSave(newBuildSite);
				onClose();
			} else {
				alert(
					`Error ${buildSite ? 'updating' : 'creating'} build site: ${
						result.error
					}`
				);
			}
		} catch (error) {
			console.error('Error saving build site:', error);
			alert(
				`Failed to ${
					buildSite ? 'update' : 'create'
				} build site. Please try again.`
			);
		}
	};

	const handleClose = () => {
		setFormData({
			name: '',
			address: '',
			city: '',
			state: '',
			zip: '',
			country: '',
			phone: '',
			email: '',
			website: '',
			notes: '',
		});
		setErrors({});
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50'>
			<div className='relative top-20 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white'>
				<div className='mt-3'>
					<div className='flex justify-between items-center mb-4'>
						<h3 className='text-lg font-medium text-gray-900'>
							{buildSite
								? 'Edit Build Site'
								: 'Create New Build Site'}
						</h3>
						<button
							onClick={handleClose}
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

					<form
						onSubmit={handleSubmit}
						className='space-y-4'
					>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
							<div className='md:col-span-2'>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Name *
								</label>
								<input
									type='text'
									name='name'
									value={formData.name}
									onChange={handleChange}
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.name
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='Enter build site name'
								/>
								{errors.name && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.name}
									</p>
								)}
							</div>

							<div className='md:col-span-2'>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Address *
								</label>
								<input
									type='text'
									name='address'
									value={formData.address}
									onChange={handleChange}
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.address
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='Enter street address'
								/>
								{errors.address && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.address}
									</p>
								)}
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									City *
								</label>
								<input
									type='text'
									name='city'
									value={formData.city}
									onChange={handleChange}
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.city
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='Enter city'
								/>
								{errors.city && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.city}
									</p>
								)}
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									State
								</label>
								<input
									type='text'
									name='state'
									value={formData.state}
									onChange={handleChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									placeholder='Enter state'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									ZIP Code
								</label>
								<input
									type='text'
									name='zip'
									value={formData.zip}
									onChange={handleChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									placeholder='Enter ZIP code'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Country
								</label>
								<input
									type='text'
									name='country'
									value={formData.country}
									onChange={handleChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									placeholder='Enter country'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Phone
								</label>
								<input
									type='tel'
									name='phone'
									value={formData.phone}
									onChange={handleChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									placeholder='Enter phone number'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Email
								</label>
								<input
									type='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.email
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='Enter email address'
								/>
								{errors.email && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.email}
									</p>
								)}
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Website
								</label>
								<input
									type='text'
									name='website'
									value={formData.website}
									onChange={handleChange}
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.website
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='example.com or https://example.com'
								/>
								{errors.website && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.website}
									</p>
								)}
							</div>

							<div className='md:col-span-2'>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Notes
								</label>
								<textarea
									name='notes'
									value={formData.notes}
									onChange={handleChange}
									rows={3}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
									placeholder='Enter any additional notes'
								/>
							</div>
						</div>

						<div className='flex justify-end space-x-3 pt-4'>
							<button
								type='button'
								onClick={handleClose}
								className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500'
							>
								Cancel
							</button>
							<button
								type='submit'
								className='px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							>
								{buildSite
									? 'Update Build Site'
									: 'Create Build Site'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default BuildSiteModal;
