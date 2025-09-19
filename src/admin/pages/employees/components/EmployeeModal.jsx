import React, { useState, useEffect } from 'react';
import Employee from '../../../utils/models/Employee';
import ImageUpload from './ImageUpload';
import DocumentUpload from './DocumentUpload';
import { employeeService } from '../../../../firebase/employeeService';

const EmployeeModal = ({
	isOpen,
	onClose,
	onSave,
	employee = null,
	buildSites = [],
}) => {
	const [formData, setFormData] = useState({
		name: '',
		firm: '',
		birthdate: '',
		buildSite: '',
		role: '',
		image: '',
		notes: '',
		rating: '',
	});
	const [errors, setErrors] = useState({});
	const [selectedImageFile, setSelectedImageFile] = useState(null);
	const [selectedDocuments, setSelectedDocuments] = useState([]);
	const [isUploading, setIsUploading] = useState(false);
	const [uploadProgress, setUploadProgress] = useState(0);

	useEffect(() => {
		if (employee) {
			setFormData({
				name: employee.name || '',
				firm: employee.firm || '',
				birthdate: employee.birthdate
					? new Date(employee.birthdate).toISOString().split('T')[0]
					: '',
				buildSite: employee.buildSite || '',
				role: employee.role || '',
				image: employee.image || '',
				notes: employee.notes || '',
				rating: employee.rating || '',
			});
			// Convert existing documents to the format expected by DocumentUpload
			setSelectedDocuments(
				employee.documents?.map((doc) => ({
					name: doc.name,
					url: doc.url,
					size: doc.size,
					type: doc.type,
				})) || []
			);
		} else {
			setFormData({
				name: '',
				firm: '',
				birthdate: '',
				buildSite: '',
				role: '',
				image: '',
				notes: '',
				rating: '',
			});
			setSelectedDocuments([]);
		}
		setErrors({});
		setSelectedImageFile(null);
		setIsUploading(false);
		setUploadProgress(0);
	}, [employee, isOpen]);

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

	const handleImageSelect = (file) => {
		setSelectedImageFile(file);
		// Clear any image-related errors
		if (errors.image) {
			setErrors((prev) => ({
				...prev,
				image: '',
			}));
		}
	};

	const handleImageRemove = () => {
		setSelectedImageFile(null);
		setFormData((prev) => ({
			...prev,
			image: '',
		}));
	};

	const handleDocumentsChange = (documents) => {
		setSelectedDocuments(documents);
		// Clear any document-related errors
		if (errors.documents) {
			setErrors((prev) => ({
				...prev,
				documents: '',
			}));
		}
	};

	const validateForm = () => {
		const newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.firm.trim()) {
			newErrors.firm = 'Firm is required';
		}

		if (!formData.role.trim()) {
			newErrors.role = 'Role is required';
		}

		if (
			formData.rating &&
			(isNaN(formData.rating) ||
				formData.rating < 0 ||
				formData.rating > 5)
		) {
			newErrors.rating = 'Rating must be a number between 0 and 5';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateForm()) {
			return;
		}

		setIsUploading(true);
		setUploadProgress(0);

		try {
			const employeeData = {
				name: formData.name,
				firm: formData.firm,
				birthdate: formData.birthdate,
				buildSite: formData.buildSite,
				role: formData.role,
				notes: formData.notes,
				rating: formData.rating ? parseFloat(formData.rating) : null,
				qrCode: employee?.qrCode || null,
			};

			let result;
			if (employee) {
				// Update existing employee
				result = await employeeService.updateEmployee(
					employee.id,
					employeeData,
					selectedImageFile,
					selectedDocuments
				);
			} else {
				// Create new employee
				result = await employeeService.createEmployee(
					employeeData,
					selectedImageFile,
					selectedDocuments
				);
			}

			if (result.success) {
				// Create Employee object for the parent component
				const now = new Date().toISOString();
				const newEmployee = new Employee(
					result.employeeId || employee.id,
					formData.name,
					formData.firm,
					formData.birthdate,
					formData.buildSite,
					formData.role,
					result.imageUrl || formData.image,
					result.documents || selectedDocuments || [],
					formData.notes,
					formData.rating ? parseFloat(formData.rating) : null,
					result.qrCodeUrl || employee?.qrCode || null,
					employee?.createdAt || now,
					now
				);

				onSave(newEmployee);
				onClose();
			} else {
				// Handle error
				setErrors({ submit: result.error });
			}
		} catch (error) {
			console.error('Error saving employee:', error);
			setErrors({
				submit: 'An unexpected error occurred. Please try again.',
			});
		} finally {
			setIsUploading(false);
			setUploadProgress(0);
		}
	};

	const handleClose = () => {
		setFormData({
			name: '',
			firm: '',
			birthdate: '',
			buildSite: '',
			role: '',
			image: '',
			notes: '',
			rating: '',
		});
		setErrors({});
		setSelectedImageFile(null);
		setSelectedDocuments([]);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50'>
			<div className='relative top-4 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-1/2 shadow-lg rounded-md bg-white'>
				<div className='mt-3'>
					<div className='flex justify-between items-center mb-4'>
						<h3 className='text-lg font-medium text-gray-900'>
							{employee ? 'Edit Employee' : 'Add New Employee'}
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
							<div>
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
									placeholder='Enter employee name'
								/>
								{errors.name && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.name}
									</p>
								)}
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Firm *
								</label>
								<input
									type='text'
									name='firm'
									value={formData.firm}
									onChange={handleChange}
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.firm
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='Enter firm name'
								/>
								{errors.firm && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.firm}
									</p>
								)}
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Birthdate
								</label>
								<input
									type='date'
									name='birthdate'
									value={formData.birthdate}
									onChange={handleChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								/>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Role *
								</label>
								<input
									type='text'
									name='role'
									value={formData.role}
									onChange={handleChange}
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.role
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='Enter employee role'
								/>
								{errors.role && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.role}
									</p>
								)}
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Build Site
								</label>
								<select
									name='buildSite'
									value={formData.buildSite}
									onChange={handleChange}
									className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								>
									<option value=''>
										Select a build site
									</option>
									{buildSites.map((site) => (
										<option
											key={site.id}
											value={site.name}
										>
											{site.name}
										</option>
									))}
								</select>
							</div>

							<div>
								<label className='block text-sm font-medium text-gray-700 mb-1'>
									Rating (0-5)
								</label>
								<input
									type='number'
									name='rating'
									value={formData.rating}
									onChange={handleChange}
									min='0'
									max='5'
									step='0.1'
									className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
										errors.rating
											? 'border-red-500'
											: 'border-gray-300'
									}`}
									placeholder='Enter rating (0-5)'
								/>
								{errors.rating && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.rating}
									</p>
								)}
							</div>

							<div className='md:col-span-2'>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Profile Image
								</label>
								<ImageUpload
									onImageSelect={handleImageSelect}
									onImageRemove={handleImageRemove}
									currentImageUrl={formData.image}
									disabled={isUploading}
									className='mb-2'
								/>
								{errors.image && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.image}
									</p>
								)}
							</div>

							<div className='md:col-span-2'>
								<label className='block text-sm font-medium text-gray-700 mb-2'>
									Documents
								</label>
								<DocumentUpload
									onDocumentsChange={handleDocumentsChange}
									currentDocuments={selectedDocuments}
									disabled={isUploading}
									className='mb-2'
								/>
								{errors.documents && (
									<p className='text-red-500 text-xs mt-1'>
										{errors.documents}
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

						{errors.submit && (
							<div className='bg-red-50 border border-red-200 rounded-md p-3 mb-4'>
								<p className='text-red-600 text-sm'>
									{errors.submit}
								</p>
							</div>
						)}

						{isUploading && (
							<div className='bg-blue-50 border border-blue-200 rounded-md p-3 mb-4'>
								<div className='flex items-center'>
									<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600 mr-2'></div>
									<p className='text-blue-600 text-sm'>
										{employee
											? 'Updating employee'
											: 'Creating employee'}
										...
										{selectedImageFile &&
											' (Uploading image...)'}
										{selectedDocuments.some(
											(doc) => doc.file
										) && ' (Uploading documents...)'}
										{!employee &&
											' (Generating QR code...)'}
									</p>
								</div>
							</div>
						)}

						<div className='flex justify-end space-x-3 pt-4'>
							<button
								type='button'
								onClick={handleClose}
								disabled={isUploading}
								className='px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed'
							>
								Cancel
							</button>
							<button
								type='submit'
								disabled={isUploading}
								className='px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center'
							>
								{isUploading && (
									<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
								)}
								{employee ? 'Update Employee' : 'Add Employee'}
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default EmployeeModal;
