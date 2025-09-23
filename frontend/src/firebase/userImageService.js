// User Image Service - Firebase Storage operations for user images
import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
} from 'firebase/storage';
import { storage } from './config';

export const userImageService = {
	/**
	 * Upload user profile image
	 * @param {string} userId - User ID (Firebase Auth UID)
	 * @param {File} imageFile - Image file to upload
	 * @returns {Promise<{success: boolean, imageUrl?: string, error?: string}>}
	 */
	uploadUserImage: async (userId, imageFile) => {
		try {
			console.log('uploadUserImage called with:', { userId, imageFile });

			if (!userId || !imageFile) {
				console.log('Missing userId or imageFile:', {
					userId,
					imageFile,
				});
				return {
					success: false,
					error: 'User ID and image file are required',
				};
			}

			// Create a reference to the file in Firebase Storage
			const imageRef = ref(storage, `users/${userId}/profile.jpg`);
			console.log('Uploading to path:', `users/${userId}/profile.jpg`);

			// Upload the file
			await uploadBytes(imageRef, imageFile);
			console.log('File uploaded successfully');

			// Get the download URL
			const imageUrl = await getDownloadURL(imageRef);
			console.log('Got download URL:', imageUrl);

			return {
				success: true,
				imageUrl: imageUrl,
			};
		} catch (error) {
			console.error('Error uploading user image:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	/**
	 * Delete user profile image
	 * @param {string} userId - User ID (Firebase Auth UID)
	 * @returns {Promise<{success: boolean, error?: string}>}
	 */
	deleteUserImage: async (userId) => {
		try {
			if (!userId) {
				return {
					success: false,
					error: 'User ID is required',
				};
			}

			const imageRef = ref(storage, `users/${userId}/profile.jpg`);
			await deleteObject(imageRef);

			return {
				success: true,
			};
		} catch (error) {
			console.error('Error deleting user image:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},
};

export default userImageService;
