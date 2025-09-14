import React, { useState, useEffect } from 'react';
import WidgetProvider from 'react-roast';
import { useAuth } from '../hooks/useFirebase';
import { handleFeedbackSubmission } from '../services/feedbackService';

const FeedbackWidgetProvider = ({ children }) => {
	const { isAuthenticated, user } = useAuth();
	const [isDebugMode, setIsDebugMode] = useState(false);

	// Toggle debug mode with keyboard shortcut (Ctrl+D)
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.ctrlKey && event.key === 'd') {
				event.preventDefault();
				setIsDebugMode((prev) => !prev);
				console.log(
					`Debug mode is now ${!isDebugMode ? 'enabled' : 'disabled'}`
				);
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isDebugMode]);

	// Create a wrapper function that includes user data
	const handleFeedbackWithUser = async (feedbackData) => {
		return await handleFeedbackSubmission({
			...feedbackData,
			user, // Pass the authenticated user
		});
	};

	// Only render the widget for authenticated users
	if (!isAuthenticated) {
		return <>{children}</>;
	}

	return (
		<WidgetProvider
			mode='local'
			onFormSubmit={handleFeedbackWithUser}
			customize={{
				form: {
					messageInput: {
						placeholder:
							'Describe the issue or provide feedback...',
					},
					submitButton: {
						label: 'Submit Feedback',
					},
					cancelButton: {
						label: 'Cancel',
					},
					errorMessage:
						'Failed to submit feedback. Please try again.',
					successMessage: 'Thank you for your feedback!',
				},
				island: {
					label: isDebugMode ? 'Debug Mode (ON)' : 'Debug Mode (OFF)',
					placement: 'left-center',
				},
				notifications: {
					enable: isDebugMode,
					messages: isDebugMode
						? [
								{
									message:
										'🔧 Debug mode is active - click elements to provide feedback',
									type: 'info',
								},
								{
									message:
										'📸 Screenshots are automatically captured with your feedback',
									type: 'hint',
								},
								{
									message:
										'💡 Your feedback helps us improve the application',
									type: 'offer',
								},
						  ]
						: [],
				},
			}}
		>
			{children}
		</WidgetProvider>
	);
};

export default FeedbackWidgetProvider;
