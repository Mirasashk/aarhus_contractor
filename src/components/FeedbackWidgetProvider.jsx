import React from 'react';
import WidgetProvider from 'react-roast';
import { useAuth } from '../hooks/useFirebase';
import { handleFeedbackSubmission } from '../services/feedbackService';

const FeedbackWidgetProvider = ({ children }) => {
	const { isAuthenticated, user } = useAuth();

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
					label: 'Debug Mode',
					placement: 'left-center',
				},
				notifications: {
					enable: true,
					messages: [
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
					],
				},
			}}
		>
			{children}
		</WidgetProvider>
	);
};

export default FeedbackWidgetProvider;
