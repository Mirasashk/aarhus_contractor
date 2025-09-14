// Firebase Services - Authentication, Firestore, and Storage utilities
import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
	updateProfile,
	sendPasswordResetEmail,
	sendEmailVerification,
} from 'firebase/auth';
import {
	doc,
	setDoc,
	getDoc,
	updateDoc,
	deleteDoc,
	collection,
	addDoc,
	getDocs,
	query,
	where,
	orderBy,
	limit,
} from 'firebase/firestore';
import {
	ref,
	uploadBytes,
	getDownloadURL,
	deleteObject,
	listAll,
} from 'firebase/storage';
import { auth, db, storage } from './config';

// Authentication Services
export const authService = {
	// Sign in with email and password
	signIn: async (email, password) => {
		try {
			const userCredential = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);
			return { success: true, user: userCredential.user };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Create new user account
	signUp: async (email, password, displayName) => {
		try {
			const userCredential = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);
			await updateProfile(userCredential.user, { displayName });
			await sendEmailVerification(userCredential.user);

			// Create user document in Firestore
			await setDoc(doc(db, 'users', userCredential.user.uid), {
				uid: userCredential.user.uid,
				email: userCredential.user.email,
				displayName: displayName,
				createdAt: new Date(),
				role: 'user',
			});

			return { success: true, user: userCredential.user };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Sign out current user
	signOut: async () => {
		try {
			await signOut(auth);
			return { success: true };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Listen to authentication state changes
	onAuthStateChange: (callback) => {
		return onAuthStateChanged(auth, callback);
	},

	// Send password reset email
	resetPassword: async (email) => {
		try {
			await sendPasswordResetEmail(auth, email);
			return { success: true };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Get current user
	getCurrentUser: () => {
		return auth.currentUser;
	},
};

// Firestore Services
export const firestoreService = {
	// Create a document
	createDocument: async (collectionName, data, docId = null) => {
		try {
			if (docId) {
				await setDoc(doc(db, collectionName, docId), data);
				return { success: true, id: docId };
			} else {
				const docRef = await addDoc(
					collection(db, collectionName),
					data
				);
				return { success: true, id: docRef.id };
			}
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Get a document
	getDocument: async (collectionName, docId) => {
		try {
			const docRef = doc(db, collectionName, docId);
			const docSnap = await getDoc(docRef);

			if (docSnap.exists()) {
				return {
					success: true,
					data: { id: docSnap.id, ...docSnap.data() },
				};
			} else {
				return { success: false, error: 'Document not found' };
			}
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Update a document
	updateDocument: async (collectionName, docId, data) => {
		try {
			const docRef = doc(db, collectionName, docId);
			await updateDoc(docRef, data);
			return { success: true };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Delete a document
	deleteDocument: async (collectionName, docId) => {
		try {
			await deleteDoc(doc(db, collectionName, docId));
			return { success: true };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Get all documents from a collection
	getCollection: async (collectionName, constraints = []) => {
		try {
			let q = collection(db, collectionName);

			// Apply constraints (where, orderBy, limit)
			if (constraints.length > 0) {
				q = query(collection(db, collectionName), ...constraints);
			}

			const querySnapshot = await getDocs(q);
			const documents = [];

			querySnapshot.forEach((doc) => {
				documents.push({ id: doc.id, ...doc.data() });
			});

			return { success: true, data: documents };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},
};

// Storage Services
export const storageService = {
	// Upload a file
	uploadFile: async (file, path, metadata = {}) => {
		try {
			const storageRef = ref(storage, path);
			const snapshot = await uploadBytes(storageRef, file, metadata);
			const downloadURL = await getDownloadURL(snapshot.ref);

			return {
				success: true,
				downloadURL,
				metadata: snapshot.metadata,
			};
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Get download URL for a file
	getDownloadURL: async (path) => {
		try {
			const storageRef = ref(storage, path);
			const downloadURL = await getDownloadURL(storageRef);
			return { success: true, downloadURL };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// Delete a file
	deleteFile: async (path) => {
		try {
			const storageRef = ref(storage, path);
			await deleteObject(storageRef);
			return { success: true };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},

	// List files in a directory
	listFiles: async (path) => {
		try {
			const listRef = ref(storage, path);
			const result = await listAll(listRef);

			const files = [];
			for (const itemRef of result.items) {
				const downloadURL = await getDownloadURL(itemRef);
				files.push({
					name: itemRef.name,
					fullPath: itemRef.fullPath,
					downloadURL,
				});
			}

			return { success: true, files };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},
};

// Helper functions for common queries
export const queryHelpers = {
	where: where,
	orderBy: orderBy,
	limit: limit,
};
