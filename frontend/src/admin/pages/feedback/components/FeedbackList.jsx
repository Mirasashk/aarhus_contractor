import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from '../../../../firebase/config';
import FeedbackItem from './FeedbackItem';
import FeedbackFilters from './FeedbackFilters';

const FeedbackList = () => {
	const [feedback, setFeedback] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filter, setFilter] = useState('all'); // all, new, completed
	const [searchTerm, setSearchTerm] = useState('');

	useEffect(() => {
		const q = query(
			collection(db, 'feedback'),
			orderBy('createdAt', 'desc')
		);

		const unsubscribe = onSnapshot(q, (snapshot) => {
			const feedbackData = snapshot.docs.map((doc) => ({
				id: doc.id,
				...doc.data(),
			}));
			setFeedback(feedbackData);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const filteredFeedback = feedback.filter((item) => {
		const matchesFilter = filter === 'all' || item.status === filter;
		const matchesSearch =
			item.message?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			item.url?.toLowerCase().includes(searchTerm.toLowerCase());

		return matchesFilter && matchesSearch;
	});

	if (loading) {
		return (
			<div className='flex items-center justify-center py-12'>
				<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600'></div>
				<span className='ml-2 text-gray-600'>Loading feedback...</span>
			</div>
		);
	}

	return (
		<div className='space-y-6'>
			<FeedbackFilters
				filter={filter}
				setFilter={setFilter}
				searchTerm={searchTerm}
				setSearchTerm={setSearchTerm}
				totalCount={feedback.length}
				filteredCount={filteredFeedback.length}
				feedback={feedback}
			/>

			{filteredFeedback.length === 0 ? (
				<div className='text-center py-12'>
					<div className='mx-auto h-12 w-12 text-gray-400'>
						<svg
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={1}
								d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
							/>
						</svg>
					</div>
					<h3 className='mt-2 text-sm font-medium text-gray-900'>
						No feedback found
					</h3>
					<p className='mt-1 text-sm text-gray-500'>
						{searchTerm || filter !== 'all'
							? 'Try adjusting your search or filter criteria.'
							: 'No feedback has been submitted yet.'}
					</p>
				</div>
			) : (
				<div className='space-y-4'>
					{filteredFeedback.map((item) => (
						<FeedbackItem
							key={item.id}
							feedback={item}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default FeedbackList;
