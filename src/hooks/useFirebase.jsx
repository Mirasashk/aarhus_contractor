import { useState, useEffect, useContext, createContext } from 'react';
import {
	authService,
	firestoreService,
	storageService,
} from '../firebase/services';

// Create Firebase Context
const FirebaseContext = createContext();

// Firebase Provider Component
export const FirebaseProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const unsubscribe = authService.onAuthStateChange((user) => {
			setUser(user);
			setLoading(false);
		});

		return () => unsubscribe();
	}, []);

	const value = {
		user,
		loading,
		auth: authService,
		firestore: firestoreService,
		storage: storageService,
	};

	return (
		<FirebaseContext.Provider value={value}>
			{children}
		</FirebaseContext.Provider>
	);
};

// Custom hook to use Firebase
export const useFirebase = () => {
	const context = useContext(FirebaseContext);
	if (!context) {
		throw new Error('useFirebase must be used within a FirebaseProvider');
	}
	return context;
};

// Custom hook for authentication
export const useAuth = () => {
	const { user, loading, auth } = useFirebase();

	return {
		user,
		loading,
		signIn: auth.signIn,
		signUp: auth.signUp,
		signOut: auth.signOut,
		resetPassword: auth.resetPassword,
		isAuthenticated: !!user,
	};
};

// Custom hook for Firestore
export const useFirestore = () => {
	const { firestore } = useFirebase();
	return firestore;
};

// Custom hook for Storage
export const useStorage = () => {
	const { storage } = useFirebase();
	return storage;
};
