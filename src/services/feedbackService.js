import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from '../firebase/config';

export const handleFeedbackSubmission = async ({
	message,
	email,
	screenshotBlobs,
	user, // Pass the authenticated user
}) => {
	try {
		// Upload screenshots to Firebase Storage
		const screenshotUrls = [];

		for (let i = 0; i < screenshotBlobs.length; i++) {
			const screenshot = screenshotBlobs[i];
			const timestamp = Date.now();
			const fileName = `feedback-screenshots/${timestamp}-${i}.png`;
			const storageRef = ref(storage, fileName);

			// Upload the blob to Firebase Storage
			await uploadBytes(storageRef, screenshot.blob);

			// Get the download URL
			const downloadURL = await getDownloadURL(storageRef);
			screenshotUrls.push({
				url: downloadURL,
				type: screenshot.type,
				fileName: fileName,
			});
		}

		// Store feedback data in Firestore with user information
		const feedbackData = {
			message,
			email: email || user?.email || null,
			url: window.location.href,
			userAgent: navigator.userAgent,
			screenshots: screenshotUrls,
			createdAt: serverTimestamp(),
			status: 'new',
			// User information from auth
			userId: user?.uid || null,
			userEmail: user?.email || null,
			userDisplayName: user?.displayName || null,
			// Additional metadata
			pageTitle: document.title,
			viewport: {
				width: window.innerWidth,
				height: window.innerHeight,
			},
		};

		// Add document to Firestore
		const docRef = await addDoc(collection(db, 'feedback'), feedbackData);

		console.log('Feedback submitted successfully with ID:', docRef.id);
		return true;
	} catch (error) {
		console.error('Error submitting feedback:', error);
		return false;
	}
};
