import React, { useState } from 'react';

const PinForm = ({ onSubmit, error }) => {
	const [pin, setPin] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		onSubmit(pin);
		setPin('');
	};

	return (
		<div className='min-h-screen bg-sky-700 flex flex-col justify-center px-4 py-8 sm:px-6 lg:px-8'>
			<div className='mx-auto w-full max-w-sm'>
				<div className='bg-white rounded-xl shadow-lg p-6 sm:p-8'>
					{/* Header */}
					<div className='text-center mb-8'>
						<div className='mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4'>
							<svg
								className='w-6 h-6 text-blue-600'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
								/>
							</svg>
						</div>
						<h1 className='text-2xl font-bold text-gray-900 mb-2'>
							Access Required
						</h1>
						<p className='text-sm text-gray-600'>
							Enter your PIN to view this profile
						</p>
					</div>

					{/* Form */}
					<form
						onSubmit={handleSubmit}
						className='space-y-6'
					>
						<div>
							<label
								htmlFor='pin'
								className='block text-sm font-medium text-gray-700 mb-2'
							>
								PIN Code
							</label>
							<input
								type='password'
								id='pin'
								value={pin}
								onChange={(e) => setPin(e.target.value)}
								placeholder='Enter 4-digit PIN'
								className='w-full px-4 py-3 text-lg text-center border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400'
								required
								maxLength={4}
								autoComplete='off'
							/>
						</div>

						{error && (
							<div className='bg-red-50 border border-red-200 rounded-lg p-3'>
								<div className='flex items-center'>
									<svg
										className='w-4 h-4 text-red-500 mr-2'
										fill='currentColor'
										viewBox='0 0 20 20'
									>
										<path
											fillRule='evenodd'
											d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
											clipRule='evenodd'
										/>
									</svg>
									<span className='text-sm text-red-600'>
										{error}
									</span>
								</div>
							</div>
						)}

						<button
							type='submit'
							className='w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200 text-base'
						>
							Access Profile
						</button>
					</form>

					{/* Footer */}
					<div className='mt-8 text-center'>
						<p className='text-xs text-gray-500'>
							Secure access • Protected content
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PinForm;
