// Build Site Service - Firestore operations for build sites
import {
	collection,
	addDoc,
	updateDoc,
	deleteDoc,
	getDocs,
	getDoc,
	doc,
	query,
	orderBy,
} from 'firebase/firestore';
import { db } from './config';

// Build Site Service
export const buildSiteService = {
	// Create a new build site
	createBuildSite: async (buildSiteData) => {
		try {
			const docRef = await addDoc(collection(db, 'buildSites'), {
				...buildSiteData,
				createdAt: new Date(),
				updatedAt: new Date(),
			});

			return {
				success: true,
				buildSiteId: docRef.id,
			};
		} catch (error) {
			console.error('Error creating build site:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Update an existing build site
	updateBuildSite: async (buildSiteId, buildSiteData) => {
		try {
			const buildSiteRef = doc(db, 'buildSites', buildSiteId);

			const updateData = {
				...buildSiteData,
				updatedAt: new Date(),
			};

			await updateDoc(buildSiteRef, updateData);

			return {
				success: true,
				buildSiteId: buildSiteId,
			};
		} catch (error) {
			console.error('Error updating build site:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Delete a build site
	deleteBuildSite: async (buildSiteId) => {
		try {
			await deleteDoc(doc(db, 'buildSites', buildSiteId));

			return {
				success: true,
			};
		} catch (error) {
			console.error('Error deleting build site:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},

	// Get all build sites
	getBuildSites: async () => {
		try {
			const q = query(
				collection(db, 'buildSites'),
				orderBy('createdAt', 'desc')
			);
			const querySnapshot = await getDocs(q);

			const buildSites = [];
			querySnapshot.forEach((doc) => {
				buildSites.push({
					id: doc.id,
					...doc.data(),
				});
			});

			return {
				success: true,
				buildSites: buildSites,
			};
		} catch (error) {
			console.error('Error getting build sites:', error);
			return {
				success: false,
				error: error.message,
				buildSites: [],
			};
		}
	},

	// Get a single build site by ID
	getBuildSite: async (buildSiteId) => {
		try {
			const buildSiteRef = doc(db, 'buildSites', buildSiteId);
			const buildSiteSnap = await getDoc(buildSiteRef);

			if (buildSiteSnap.exists()) {
				return {
					success: true,
					buildSite: {
						id: buildSiteSnap.id,
						...buildSiteSnap.data(),
					},
				};
			} else {
				return {
					success: false,
					error: 'Build site not found',
				};
			}
		} catch (error) {
			console.error('Error getting build site:', error);
			return {
				success: false,
				error: error.message,
			};
		}
	},
};

export default buildSiteService;
