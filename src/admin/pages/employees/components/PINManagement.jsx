import React, { useState, useEffect } from 'react';
import { pinService } from '../../../../firebase/pinService';

const PINManagement = () => {
	const [currentPIN, setCurrentPIN] = useState('');
	const [newPIN, setNewPIN] = useState('');
	const [confirmPIN, setConfirmPIN] = useState('');
	const [pinHistory, setPinHistory] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isSaving, setIsSaving] = useState(false);
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	useEffect(() => {
		loadCurrentPIN();
		loadPINHistory();
	}, []);

	const loadCurrentPIN = async () => {
		try {
			const result = await pinService.getCurrentPIN();
			if (result.success) {
				setCurrentPIN(result.pin);
			} else {
				setError(result.error);
			}
		} catch (error) {
			console.error('Error loading current PIN:', error);
			setError('Failed to load current PIN');
		}
	};

	const loadPINHistory = async () => {
		try {
			const result = await pinService.getPINHistory();
			if (result.success) {
				setPinHistory(result.pins);
			} else {
				console.error('Error loading PIN history:', result.error);
			}
		} catch (error) {
			console.error('Error loading PIN history:', error);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSetNewPIN = async (e) => {
		e.preventDefault();
		setError('');
		setSuccess('');

		// Validation
		if (!newPIN || !confirmPIN) {
			setError('Please fill in all fields');
			return;
		}

		if (newPIN !== confirmPIN) {
			setError('PINs do not match');
			return;
		}

		if (!/^\d{4}$/.test(newPIN)) {
			setError('PIN must be exactly 4 digits');
			return;
		}

		setIsSaving(true);

		try {
			const result = await pinService.setPIN(newPIN);
			if (result.success) {
				setSuccess('PIN updated successfully');
				setCurrentPIN(newPIN);
				setNewPIN('');
				setConfirmPIN('');
				// Reload PIN history
				loadPINHistory();
			} else {
				setError(result.error);
			}
		} catch (error) {
			console.error('Error setting PIN:', error);
			setError('Failed to update PIN. Please try again.');
		} finally {
			setIsSaving(false);
		}
	};

	const formatDate = (dateString) => {
		if (!dateString) return 'Unknown';
		const date = new Date(dateString);
		return date.toLocaleString();
	};

	if (isLoading) {
		return (
			<div className='flex justify-center items-center py-12'>
				<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600'></div>
				<span className='ml-2 text-gray-600'>
					Loading PIN settings...
				</span>
			</div>
		);
	}

	return (
		<div className='space-y-6'>
			{/* Current PIN Display */}
			<div className='bg-white rounded-lg shadow p-6'>
				<h3 className='text-lg font-medium text-gray-900 mb-4'>
					Current Access PIN
				</h3>
				<div className='flex items-center space-x-4'>
					<div className='text-2xl font-mono font-bold text-blue-600 bg-blue-50 px-4 py-2 rounded-lg'>
						{currentPIN}
					</div>
					<div className='text-sm text-gray-500'>
						This PIN is used by managers and site leaders to access
						employee profiles
					</div>
				</div>
			</div>

			{/* Set New PIN Form */}
			<div className='bg-white rounded-lg shadow p-6'>
				<h3 className='text-lg font-medium text-gray-900 mb-4'>
					Set New PIN
				</h3>
				<form
					onSubmit={handleSetNewPIN}
					className='space-y-4'
				>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								New PIN (4 digits)
							</label>
							<input
								type='password'
								value={newPIN}
								onChange={(e) => setNewPIN(e.target.value)}
								className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Enter new 4-digit PIN'
								maxLength={4}
								disabled={isSaving}
							/>
						</div>
						<div>
							<label className='block text-sm font-medium text-gray-700 mb-1'>
								Confirm PIN
							</label>
							<input
								type='password'
								value={confirmPIN}
								onChange={(e) => setConfirmPIN(e.target.value)}
								className='w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
								placeholder='Confirm new PIN'
								maxLength={4}
								disabled={isSaving}
							/>
						</div>
					</div>

					{error && (
						<div className='bg-red-50 border border-red-200 rounded-md p-3'>
							<p className='text-red-600 text-sm'>{error}</p>
						</div>
					)}

					{success && (
						<div className='bg-green-50 border border-green-200 rounded-md p-3'>
							<p className='text-green-600 text-sm'>{success}</p>
						</div>
					)}

					<button
						type='submit'
						disabled={isSaving}
						className='px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center'
					>
						{isSaving && (
							<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
						)}
						{isSaving ? 'Updating PIN...' : 'Update PIN'}
					</button>
				</form>
			</div>

			{/* PIN History */}
			<div className='bg-white rounded-lg shadow p-6'>
				<h3 className='text-lg font-medium text-gray-900 mb-4'>
					PIN History
				</h3>
				{pinHistory.length > 0 ? (
					<div className='overflow-x-auto'>
						<table className='min-w-full divide-y divide-gray-200'>
							<thead className='bg-gray-50'>
								<tr>
									<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										PIN
									</th>
									<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Created At
									</th>
									<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
										Status
									</th>
								</tr>
							</thead>
							<tbody className='bg-white divide-y divide-gray-200'>
								{pinHistory.map((pin, index) => (
									<tr key={pin.id}>
										<td className='px-6 py-4 whitespace-nowrap'>
											<span className='text-sm font-mono font-medium text-gray-900'>
												{pin.pin}
											</span>
										</td>
										<td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
											{formatDate(pin.createdAt)}
										</td>
										<td className='px-6 py-4 whitespace-nowrap'>
											{index === 0 ? (
												<span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
													Current
												</span>
											) : (
												<span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800'>
													Previous
												</span>
											)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				) : (
					<p className='text-gray-500 text-sm'>
						No PIN history available
					</p>
				)}
			</div>
		</div>
	);
};

export default PINManagement;
