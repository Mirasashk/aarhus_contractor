import React from 'react';
import PINManagement from './PINManagement';

const PINManagementModal = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className='fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50'>
			<div className='relative top-4 mx-auto p-5 border w-11/12 md:w-3/4 lg:w-2/3 shadow-lg rounded-md bg-white'>
				<div className='mt-3'>
					<div className='flex justify-between items-center mb-4'>
						<h3 className='text-lg font-medium text-gray-900'>
							Manage Access PIN
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

					<div className='max-h-[80vh] overflow-y-auto'>
						<PINManagement />
					</div>

					<div className='flex justify-end space-x-3 pt-4'>
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

export default PINManagementModal;
