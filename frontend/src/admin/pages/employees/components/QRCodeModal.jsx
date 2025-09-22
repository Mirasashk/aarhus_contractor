import React, { useState, useEffect } from 'react';

const QRCodeModal = ({ isOpen, onClose, employee }) => {
	const [qrCodeDataUrl, setQrCodeDataUrl] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (isOpen && employee?.qrCode) {
			setIsLoading(true);
			setError(null);

			// Load the QR code image
			const img = new Image();
			img.crossOrigin = 'anonymous';
			img.onload = () => {
				// Convert image to data URL for download
				const canvas = document.createElement('canvas');
				const ctx = canvas.getContext('2d');
				canvas.width = img.width;
				canvas.height = img.height;
				ctx.drawImage(img, 0, 0);
				const dataUrl = canvas.toDataURL('image/png');
				setQrCodeDataUrl(dataUrl);
				setIsLoading(false);
			};
			img.onerror = () => {
				setError('Failed to load QR code image');
				setIsLoading(false);
			};
			img.src = employee.qrCode;
		}
	}, [isOpen, employee]);

	const handleDownload = () => {
		if (!qrCodeDataUrl) return;

		// Create filename: firstname-lastname-QRCODE.png
		const nameParts = employee.name.trim().split(' ');
		const firstName = nameParts[0] || 'Employee';
		const lastName = nameParts.slice(1).join('-') || 'Unknown';
		const fileName = `${firstName}-${lastName}-QRCODE.png`;

		// Create download link
		const link = document.createElement('a');
		link.download = fileName;
		link.href = qrCodeDataUrl;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleClose = () => {
		setQrCodeDataUrl(null);
		setError(null);
		setIsLoading(false);
		onClose();
	};

	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50'>
			<div className='relative top-20 mx-auto p-5 border w-11/12 md:w-1/2 lg:w-1/3 shadow-lg rounded-md bg-white'>
				<div className='mt-3'>
					<div className='flex justify-between items-center mb-4'>
						<h3 className='text-lg font-medium text-gray-900'>
							QR Code - {employee?.name}
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

					<div className='text-center'>
						{isLoading && (
							<div className='flex justify-center items-center py-12'>
								<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
								<span className='ml-2 text-gray-600'>
									Loading QR code...
								</span>
							</div>
						)}

						{error && (
							<div className='text-center py-12'>
								<div className='text-red-600 mb-4'>
									<svg
										className='mx-auto h-12 w-12'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
										/>
									</svg>
								</div>
								<h3 className='text-lg font-medium text-gray-900 mb-2'>
									Error loading QR code
								</h3>
								<p className='text-gray-500 mb-4'>{error}</p>
							</div>
						)}

						{!isLoading && !error && employee?.qrCode && (
							<>
								<div className='mb-6'>
									<img
										src={employee.qrCode}
										alt={`QR Code for ${employee.name}`}
										className='mx-auto border border-gray-200 rounded-lg shadow-sm'
										style={{
											maxWidth: '300px',
											maxHeight: '300px',
										}}
									/>
								</div>

								<div className='space-y-3'>
									<div className='text-sm text-gray-600'>
										<p>
											<strong>Employee:</strong>{' '}
											{employee.name}
										</p>
										<p>
											<strong>Role:</strong>{' '}
											{employee.role}
										</p>
										<p>
											<strong>Firm:</strong>{' '}
											{employee.firm}
										</p>
									</div>

									<button
										onClick={handleDownload}
										disabled={!qrCodeDataUrl}
										className='w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center'
									>
										<svg
											className='w-5 h-5 mr-2'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
											/>
										</svg>
										Download QR Code
									</button>
								</div>
							</>
						)}

						{!isLoading && !error && !employee?.qrCode && (
							<div className='text-center py-12'>
								<div className='text-gray-400 mb-4'>
									<svg
										className='mx-auto h-12 w-12'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z'
										/>
									</svg>
								</div>
								<h3 className='text-lg font-medium text-gray-900 mb-2'>
									No QR Code Available
								</h3>
								<p className='text-gray-500'>
									This employee doesn't have a QR code
									generated yet.
								</p>
							</div>
						)}
					</div>

					<div className='flex justify-end mt-6'>
						<button
							onClick={handleClose}
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

export default QRCodeModal;
