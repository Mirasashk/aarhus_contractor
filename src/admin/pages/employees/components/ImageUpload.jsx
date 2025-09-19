import React, { useState, useRef } from 'react';

const ImageUpload = ({
	onImageSelect,
	onImageRemove,
	currentImageUrl = null,
	disabled = false,
	className = '',
}) => {
	const [previewUrl, setPreviewUrl] = useState(currentImageUrl);
	const [isDragOver, setIsDragOver] = useState(false);
	const fileInputRef = useRef(null);

	const handleFileSelect = (file) => {
		if (!file) return;

		// Validate file type
		if (!file.type.startsWith('image/')) {
			alert('Please select an image file');
			return;
		}

		// Validate file size (max 5MB)
		if (file.size > 5 * 1024 * 1024) {
			alert('Image size must be less than 5MB');
			return;
		}

		// Create preview URL
		const reader = new FileReader();
		reader.onload = (e) => {
			setPreviewUrl(e.target.result);
		};
		reader.readAsDataURL(file);

		// Call the parent callback
		onImageSelect(file);
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		handleFileSelect(file);
	};

	const handleDrop = (e) => {
		e.preventDefault();
		setIsDragOver(false);

		if (disabled) return;

		const file = e.dataTransfer.files[0];
		handleFileSelect(file);
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

	const handleRemoveImage = () => {
		setPreviewUrl(null);
		if (fileInputRef.current) {
			fileInputRef.current.value = '';
		}
		onImageRemove();
	};

	const handleClick = () => {
		if (!disabled && fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	return (
		<div className={`image-upload-container ${className}`}>
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
					accept='image/*'
					onChange={handleFileInputChange}
					className='hidden'
					disabled={disabled}
				/>

				{previewUrl ? (
					<div className='relative'>
						<img
							src={previewUrl}
							alt='Preview'
							className='mx-auto h-32 w-32 rounded-full object-cover'
						/>
						{!disabled && (
							<button
								type='button'
								onClick={(e) => {
									e.stopPropagation();
									handleRemoveImage();
								}}
								className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600'
							>
								×
							</button>
						)}
					</div>
				) : (
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
								Click to upload
							</span>{' '}
							or drag and drop
						</div>
						<p className='text-xs text-gray-500'>
							PNG, JPG, GIF up to 5MB
						</p>
					</div>
				)}
			</div>

			{previewUrl && (
				<div className='mt-2 text-center'>
					<button
						type='button'
						onClick={handleRemoveImage}
						disabled={disabled}
						className='text-sm text-red-600 hover:text-red-800 disabled:opacity-50'
					>
						Remove image
					</button>
				</div>
			)}
		</div>
	);
};

export default ImageUpload;
