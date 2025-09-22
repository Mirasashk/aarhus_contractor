import React, { useState, useRef } from 'react';

const DocumentUpload = ({
	onDocumentsChange,
	currentDocuments = [],
	disabled = false,
	className = '',
}) => {
	const [isDragOver, setIsDragOver] = useState(false);
	const fileInputRef = useRef(null);

	const handleFileSelect = (files) => {
		if (!files || files.length === 0) return;

		const validFiles = [];
		const errors = [];

		Array.from(files).forEach((file) => {
			// Validate file type (allow common document types)
			const allowedTypes = [
				'application/pdf',
				'application/msword',
				'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				'application/vnd.ms-excel',
				'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
				'application/vnd.ms-powerpoint',
				'application/vnd.openxmlformats-officedocument.presentationml.presentation',
				'text/plain',
				'image/jpeg',
				'image/png',
				'image/gif',
			];

			if (!allowedTypes.includes(file.type)) {
				errors.push(`${file.name}: Unsupported file type`);
				return;
			}

			// Validate file size (max 10MB per file)
			if (file.size > 10 * 1024 * 1024) {
				errors.push(`${file.name}: File size must be less than 10MB`);
				return;
			}

			validFiles.push(file);
		});

		if (errors.length > 0) {
			alert('File validation errors:\n' + errors.join('\n'));
		}

		if (validFiles.length > 0) {
			// Create document objects with preview info
			const newDocuments = validFiles.map((file) => ({
				file: file,
				name: file.name,
				size: file.size,
				type: file.type,
				url: null, // Will be set after upload
			}));

			// Merge with existing documents
			const updatedDocuments = [...currentDocuments, ...newDocuments];
			onDocumentsChange(updatedDocuments);
		}
	};

	const handleFileInputChange = (e) => {
		const files = e.target.files;
		handleFileSelect(files);
		// Reset the input so the same file can be selected again
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragOver(false);

		if (disabled) return;

		const files = e.dataTransfer.files;
		handleFileSelect(files);
	};

	const handleDragOver = (e) => {
		e.preventDefault();
		if (!disabled) {
			setIsDragOver(true);
		}
	};

	const handleDragLeave = (e) => {
		e.preventDefault();
		setIsDragOver(false);
	};

	const handleRemoveDocument = (index) => {
		const updatedDocuments = currentDocuments.filter((_, i) => i !== index);
		onDocumentsChange(updatedDocuments);
	};

	const handleClick = () => {
		if (!disabled && fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const formatFileSize = (bytes) => {
		if (bytes === 0) return '0 Bytes';
		const k = 1024;
		const sizes = ['Bytes', 'KB', 'MB', 'GB'];
		const i = Math.floor(Math.log(bytes) / Math.log(k));
		return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
	};

	const getFileIcon = (fileType) => {
		if (fileType.includes('pdf')) {
			return (
				<svg
					className='w-5 h-5 text-red-500'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path
						fillRule='evenodd'
						d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
						clipRule='evenodd'
					/>
				</svg>
			);
		} else if (fileType.includes('word') || fileType.includes('document')) {
			return (
				<svg
					className='w-5 h-5 text-blue-500'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path
						fillRule='evenodd'
						d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
						clipRule='evenodd'
					/>
				</svg>
			);
		} else if (
			fileType.includes('excel') ||
			fileType.includes('spreadsheet')
		) {
			return (
				<svg
					className='w-5 h-5 text-green-500'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path
						fillRule='evenodd'
						d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
						clipRule='evenodd'
					/>
				</svg>
			);
		} else if (fileType.includes('image')) {
			return (
				<svg
					className='w-5 h-5 text-purple-500'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path
						fillRule='evenodd'
						d='M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z'
						clipRule='evenodd'
					/>
				</svg>
			);
		} else {
			return (
				<svg
					className='w-5 h-5 text-gray-500'
					fill='currentColor'
					viewBox='0 0 20 20'
				>
					<path
						fillRule='evenodd'
						d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z'
						clipRule='evenodd'
					/>
				</svg>
			);
		}
	};

	return (
		<div className={`document-upload-container ${className}`}>
			{/* Upload Area */}
			<div
				className={`
					relative border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
					${
						isDragOver
							? 'border-blue-400 bg-blue-50'
							: 'border-gray-300 hover:border-gray-400'
					}
					${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
				`}
				onDrop={handleDrop}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onClick={handleClick}
			>
				<input
					ref={fileInputRef}
					type='file'
					accept='.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.jpg,.jpeg,.png,.gif'
					multiple
					onChange={handleFileInputChange}
					className='hidden'
					disabled={disabled}
				/>

				<div className='space-y-2'>
					<svg
						className='mx-auto h-12 w-12 text-gray-400'
						stroke='currentColor'
						fill='none'
						viewBox='0 0 48 48'
					>
						<path
							d='M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02'
							strokeWidth={2}
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
					<div className='text-sm text-gray-600'>
						<span className='font-medium text-blue-600 hover:text-blue-500'>
							Click to upload documents
						</span>{' '}
						or drag and drop
					</div>
					<p className='text-xs text-gray-500'>
						PDF, DOC, DOCX, XLS, XLSX, PPT, PPTX, TXT, JPG, PNG, GIF
						up to 10MB each
					</p>
				</div>
			</div>

			{/* Document List */}
			{currentDocuments.length > 0 && (
				<div className='mt-4 space-y-2'>
					<h4 className='text-sm font-medium text-gray-700'>
						Selected Documents:
					</h4>
					{currentDocuments.map((doc, index) => (
						<div
							key={index}
							className='flex items-center justify-between p-3 bg-gray-50 rounded-lg border'
						>
							<div className='flex items-center space-x-3'>
								{getFileIcon(doc.type)}
								<div>
									<p className='text-sm font-medium text-gray-900'>
										{doc.name}
									</p>
									<p className='text-xs text-gray-500'>
										{formatFileSize(doc.size)}
									</p>
								</div>
							</div>
							<div className='flex items-center space-x-2'>
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
								{!disabled && (
									<button
										type='button'
										onClick={() =>
											handleRemoveDocument(index)
										}
										className='text-red-600 hover:text-red-800 text-sm font-medium'
									>
										Remove
									</button>
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default DocumentUpload;
