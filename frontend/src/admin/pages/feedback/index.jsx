import React from 'react';
import { FeedbackList } from './components';

const Feedback = () => {
	return (
		<div className='space-y-6'>
			<div>
				<h1 className='text-2xl font-bold text-gray-900'>
					Feedback Management
				</h1>
				<p className='mt-1 text-sm text-gray-500'>
					View and manage user feedback submitted through the website.
				</p>
			</div>

			<FeedbackList />
		</div>
	);
};

export default Feedback;
