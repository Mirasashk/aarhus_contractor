// PIN Service - Firestore operations for PIN management
import {
	collection,
	addDoc,
	updateDoc,
	getDocs,
	doc,
	query,
	orderBy,
	limit,
} from 'firebase/firestore';
import { db } from './config';

// PIN Service
export const pinService = {
	// Get the current PIN
	getCurrentPIN: async () => {
		try {
			const q = query(
				collection(db, 'systemSettings'),
				orderBy('createdAt', 'desc'),
				limit(1)
			);
			const querySnapshot = await getDocs(q);

			if (querySnapshot.empty) {
				// If no PIN exists, create a default one
				const defaultPIN = await pinService.setPIN('1234');
				return defaultPIN;
			}

			const doc = querySnapshot.docs[0];
			const data = doc.data();

			return {
				success: true,
				pin: data.pin,
				createdAt: data.createdAt,
				updatedAt: data.updatedAt,
			};
		} catch (error) {
			console.error('Error getting PIN:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Set a new PIN
	setPIN: async (newPIN) => {
		try {
			// Validate PIN format (4 digits)
			if (!/^\d{4}$/.test(newPIN)) {
				return {
					success: false,
					error: 'PIN must be exactly 4 digits',
				};
			}

			// Add new PIN document
			const docRef = await addDoc(collection(db, 'systemSettings'), {
				pin: newPIN,
				type: 'access_pin',
				createdAt: new Date(),
				updatedAt: new Date(),
			});

			return {
				success: true,
				pin: newPIN,
				id: docRef.id,
				createdAt: new Date(),
			};
		} catch (error) {
			console.error('Error setting PIN:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Get PIN history (for admin purposes)
	getPINHistory: async () => {
		try {
			const q = query(
				collection(db, 'systemSettings'),
				orderBy('createdAt', 'desc')
			);
			const querySnapshot = await getDocs(q);

			const pins = [];
			querySnapshot.forEach((doc) => {
				const data = doc.data();
				if (data.type === 'access_pin') {
					pins.push({
						id: doc.id,
						pin: data.pin,
						createdAt:
							data.createdAt?.toDate?.()?.toISOString() ||
							data.createdAt,
						updatedAt:
							data.updatedAt?.toDate?.()?.toISOString() ||
							data.updatedAt,
					});
				}
			});

			return {
				success: true,
				pins: pins,
			};
		} catch (error) {
			console.error('Error getting PIN history:', error);
			return {
				success: false,
				error: error.message,
				pins: [],
			};
		}
	},

	// Verify PIN
	verifyPIN: async (inputPIN) => {
		try {
			const result = await pinService.getCurrentPIN();

			if (!result.success) {
				return {
					success: false,
					error: result.error,
				};
			}

			const isValid = result.pin === inputPIN;

			return {
				success: true,
				isValid: isValid,
			};
		} catch (error) {
			console.error('Error verifying PIN:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},
};

export default pinService;
