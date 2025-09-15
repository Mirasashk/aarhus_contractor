import React, { useState } from 'react';
import {
	ChevronLeftIcon,
	ChevronRightIcon,
	XMarkIcon,
	ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';

const ScreenshotGallery = ({ screenshots }) => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isFullscreen, setIsFullscreen] = useState(false);

	const nextImage = () => {
		setCurrentIndex((prev) => (prev + 1) % screenshots.length);
	};

	const prevImage = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + screenshots.length) % screenshots.length
		);
	};

	const downloadImage = (screenshot) => {
		const link = document.createElement('a');
		link.href = screenshot.url;
		link.download = screenshot.fileName || `screenshot-${Date.now()}.png`;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	if (!screenshots || screenshots.length === 0) {
		return null;
	}

	const currentScreenshot = screenshots[currentIndex];

	return (
		<>
			<div className='space-y-4'>
				<div className='flex items-center justify-between'>
					<h4 className='text-sm font-medium text-gray-900'>
						Screenshots ({screenshots.length})
					</h4>
					<button
						onClick={() => setIsFullscreen(true)}
						className='text-sm text-indigo-600 hover:text-indigo-500 font-medium'
					>
						View Fullscreen
					</button>
				</div>

				{/* Thumbnail Grid */}
				<div className='max-h-32 overflow-y-auto'>
					<div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2'>
						{screenshots.map((screenshot, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`relative aspect-video rounded-lg overflow-hidden border-2 transition-all group ${
									index === currentIndex
										? 'border-indigo-500 ring-2 ring-indigo-200'
										: 'border-gray-200 hover:border-gray-300'
								}`}
							>
								<img
									src={screenshot.url}
									alt={`Screenshot ${index + 1}`}
									className='w-full h-24 object-contain'
								/>
								<div className='absolute inset-0 transition-all flex items-center justify-center'>
									<ArrowDownTrayIcon className='h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity' />
								</div>
							</button>
						))}
					</div>
				</div>

				{/* Main Image Display */}
				<div className='relative bg-gray-100 rounded-lg overflow-hidden'>
					<div className='flex items-center justify-center'>
						<img
							src={currentScreenshot.url}
							alt={`Screenshot ${currentIndex + 1}`}
							className='max-w-5/6 h-auto max-h-96 object-contain border-2 border-gray-200'
						/>
					</div>

					{screenshots.length > 1 && (
						<>
							<button
								onClick={prevImage}
								className='absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all'
							>
								<ChevronLeftIcon className='h-5 w-5' />
							</button>
							<button
								onClick={nextImage}
								className='absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all'
							>
								<ChevronRightIcon className='h-5 w-5' />
							</button>
						</>
					)}

					<div className='absolute bottom-2 right-2'>
						<button
							onClick={() => downloadImage(currentScreenshot)}
							className='bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all'
							title='Download screenshot'
						>
							<ArrowDownTrayIcon className='h-5 w-5' />
						</button>
					</div>

					<div className='absolute bottom-2 left-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm'>
						{currentIndex + 1} of {screenshots.length}
					</div>
				</div>
			</div>

			{/* Fullscreen Modal */}
			{isFullscreen && (
				<div className='fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4'>
					<div className='relative max-w-7xl max-h-full'>
						<button
							onClick={() => setIsFullscreen(false)}
							className='absolute top-4 right-4 z-10 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all'
						>
							<XMarkIcon className='h-6 w-6' />
						</button>

						<img
							src={currentScreenshot.url}
							alt={`Screenshot ${currentIndex + 1}`}
							className='max-w-full max-h-full object-contain'
						/>

						{screenshots.length > 1 && (
							<>
								<button
									onClick={prevImage}
									className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all'
								>
									<ChevronLeftIcon className='h-6 w-6' />
								</button>
								<button
									onClick={nextImage}
									className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-all'
								>
									<ChevronRightIcon className='h-6 w-6' />
								</button>
							</>
						)}

						<div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded'>
							{currentIndex + 1} of {screenshots.length}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ScreenshotGallery;
