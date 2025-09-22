import React, { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import {
	CheckCircleIcon,
	XCircleIcon,
	EyeIcon,
	EyeSlashIcon,
	CalendarIcon,
	UserIcon,
	GlobeAltIcon,
	DevicePhoneMobileIcon,
	ComputerDesktopIcon,
	DeviceTabletIcon,
	EllipsisVerticalIcon,
	ExclamationTriangleIcon,
	ClockIcon,
	ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';
import ScreenshotGallery from './ScreenshotGallery';

const FeedbackItem = ({ feedback }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);
	const [isActionMenuOpen, setIsActionMenuOpen] = useState(false);

	const handleStatusUpdate = async (newStatus) => {
		setIsUpdating(true);
		setIsActionMenuOpen(false);
		try {
			await updateDoc(doc(db, 'feedback', feedback.id), {
				status: newStatus,
				updatedAt: new Date(),
			});
		} catch (error) {
			console.error('Error updating feedback status:', error);
		} finally {
			setIsUpdating(false);
		}
	};

	const actionItems = [
		{
			value: 'completed',
			label: 'Mark Complete',
			icon: CheckCircleIcon,
			color: 'text-green-600 hover:bg-green-50',
		},
		{
			value: 'in-progress',
			label: 'In Progress',
			icon: ClockIcon,
			color: 'text-blue-600 hover:bg-blue-50',
		},
		{
			value: 'need-details',
			label: 'Need More Details',
			icon: ChatBubbleLeftRightIcon,
			color: 'text-yellow-600 hover:bg-yellow-50',
		},
		{
			value: 'urgent',
			label: 'Mark Urgent',
			icon: ExclamationTriangleIcon,
			color: 'text-red-600 hover:bg-red-50',
		},
		{
			value: 'new',
			label: 'Reopen',
			icon: XCircleIcon,
			color: 'text-gray-600 hover:bg-gray-50',
		},
	];

	const formatDate = (timestamp) => {
		if (!timestamp) return 'Unknown date';
		const date = timestamp.toDate
			? timestamp.toDate()
			: new Date(timestamp);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'short',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
		});
	};

	const getDeviceInfo = (viewport) => {
		if (!viewport) return { icon: DevicePhoneMobileIcon, type: 'Unknown' };

		const { width, height } = viewport;
		const maxDimension = Math.max(width, height);

		if (maxDimension >= 1024) {
			return { icon: ComputerDesktopIcon, type: 'Desktop' };
		} else if (maxDimension >= 768) {
			return { icon: DeviceTabletIcon, type: 'Tablet' };
		} else {
			return { icon: DevicePhoneMobileIcon, type: 'Mobile' };
		}
	};

	const getStatusBadge = (status) => {
		const baseClasses =
			'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium';

		switch (status) {
			case 'new':
				return (
					<span
						className={`${baseClasses} bg-blue-200 text-blue-800`}
					>
						New
					</span>
				);
			case 'completed':
				return (
					<span
						className={`${baseClasses} bg-green-100 text-green-800`}
					>
						Completed
					</span>
				);
			case 'in-progress':
				return (
					<span
						className={`${baseClasses} bg-blue-100 text-blue-800`}
					>
						In Progress
					</span>
				);
			case 'need-details':
				return (
					<span
						className={`${baseClasses} bg-yellow-100 text-yellow-800`}
					>
						Need Details
					</span>
				);
			case 'urgent':
				return (
					<span className={`${baseClasses} bg-red-100 text-red-800`}>
						Urgent
					</span>
				);
			default:
				return (
					<span
						className={`${baseClasses} bg-gray-100 text-gray-800`}
					>
						{status}
					</span>
				);
		}
	};

	return (
		<div className='relative bg-white shadow-lg rounded-lg border border-gray-400 hover:shadow-md transition-shadow'>
			<div className='p-6'>
				<div className='flex items-start justify-between'>
					<div className='flex-1 min-w-0'>
						<div className='flex items-center space-x-3 mb-2'>
							{getStatusBadge(feedback.status)}
							<span className='text-sm text-gray-500'>
								{formatDate(feedback.createdAt)}
							</span>
						</div>

						<div className='mb-3'>
							<p className='text-gray-900 text-sm leading-relaxed'>
								{feedback.message}
							</p>
						</div>

						<div className='flex flex-wrap items-center gap-4 text-xs text-gray-500'>
							{feedback.email && (
								<div className='flex items-center space-x-1'>
									<UserIcon className='h-4 w-4' />
									<span>{feedback.email}</span>
								</div>
							)}

							{feedback.url && (
								<div className='flex items-center space-x-1'>
									<GlobeAltIcon className='h-4 w-4' />
									<span
										className='truncate max-w-xs'
										title={feedback.url}
									>
										{feedback.url}
									</span>
								</div>
							)}

							{feedback.viewport && (
								<div className='flex items-center space-x-1'>
									{(() => {
										const deviceInfo = getDeviceInfo(
											feedback.viewport
										);
										const DeviceIcon = deviceInfo.icon;
										return (
											<DeviceIcon className='h-4 w-4' />
										);
									})()}
									<span>
										{feedback.viewport.width}×
										{feedback.viewport.height}
									</span>
								</div>
							)}
						</div>
					</div>

					<div className='flex items-center space-x-2 ml-4'>
						{feedback.screenshots &&
							feedback.screenshots.length > 0 && (
								<button
									onClick={() => setIsExpanded(!isExpanded)}
									className='inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-xs font-medium rounded text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									{isExpanded ? (
										<>
											<EyeSlashIcon className='h-4 w-4 mr-1' />
											Hide Screenshots
										</>
									) : (
										<>
											<EyeIcon className='h-4 w-4 mr-1' />
											View Screenshots (
											{feedback.screenshots.length})
										</>
									)}
								</button>
							)}
					</div>
				</div>

				{isExpanded &&
					feedback.screenshots &&
					feedback.screenshots.length > 0 && (
						<div className='mt-4 pt-4 border-t border-gray-200'>
							<ScreenshotGallery
								screenshots={feedback.screenshots}
							/>
						</div>
					)}
			</div>

			{/* Action Menu - Bottom Right Corner */}
			<div className='absolute bottom-4 right-4'>
				<div className='relative'>
					<button
						onClick={() => setIsActionMenuOpen(!isActionMenuOpen)}
						disabled={isUpdating}
						className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg'
					>
						{isUpdating ? (
							<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white'></div>
						) : (
							<EllipsisVerticalIcon className='h-5 w-5' />
						)}
					</button>

					{isActionMenuOpen && (
						<div className='absolute bottom-12 right-0 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-10'>
							{actionItems.map((action) => {
								const ActionIcon = action.icon;
								return (
									<button
										key={action.value}
										onClick={() =>
											handleStatusUpdate(action.value)
										}
										className={`w-full flex items-center px-4 py-2 text-sm ${action.color} hover:bg-opacity-10`}
									>
										<ActionIcon className='h-4 w-4 mr-3' />
										{action.label}
									</button>
								);
							})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default FeedbackItem;
