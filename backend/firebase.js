const admin = require('firebase-admin');
require('dotenv').config();

// Initialize Firebase Admin SDK
let db, auth, storage;

try {
	// Option 1: Using service account key file (recommended for development)
	// const serviceAccount = require('./path-to-your-service-account-key.json');
	// admin.initializeApp({
	//   credential: admin.credential.cert(serviceAccount)
	// });

	// Option 2: Using environment variables (recommended for production)
	if (process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL) {
		// Use environment variables for authentication
		admin.initializeApp({
			credential: admin.credential.cert({
				projectId: process.env.FIREBASE_PROJECT_ID,
				privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(
					/\\n/g,
					'\n'
				),
				clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
			}),
			storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
			databaseURL: process.env.FIREBASE_DATABASE_URL,
		});
	} else {
		// Fallback to Application Default Credentials
		admin.initializeApp({
			credential: admin.credential.applicationDefault(),
		});
	}

	// Initialize Firebase services
	db = admin.firestore();
	auth = admin.auth();
	storage = admin.storage();

	console.log('Firebase Admin SDK initialized successfully');
	console.log('Firestore, Auth, and Storage services are ready');
} catch (error) {
	console.error('Error initializing Firebase Admin SDK:', error);
	throw error;
}

// Export Firebase services
module.exports = {
	admin,
	db,
	auth,
	storage,
};
