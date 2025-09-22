const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize Firebase Admin SDK
// You'll need to add your service account key file
// For now, we'll use the default credentials or environment variables
try {
	// Option 1: Using service account key file (recommended for development)
	// const serviceAccount = require('./path-to-your-service-account-key.json');
	// admin.initializeApp({
	//   credential: admin.credential.cert(serviceAccount)
	// });

	// Option 2: Using environment variables (recommended for production)
	admin.initializeApp({
		credential: admin.credential.applicationDefault(),
	});

	console.log('Firebase Admin SDK initialized successfully');
} catch (error) {
	console.error('Error initializing Firebase Admin SDK:', error);
}

// Basic route
app.get('/', (req, res) => {
	res.json({ message: 'Aarhus Contractor Backend API is running!' });
});

// Health check route
app.get('/health', (req, res) => {
	res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Example protected route using Firebase Admin
app.get('/api/protected', async (req, res) => {
	try {
		// This is just an example - you'll implement your actual logic here
		res.json({
			message: 'This is a protected route',
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error('Error in protected route:', error);
		res.status(500).json({ error: 'Internal server error' });
	}
});

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(`Health check: http://localhost:${PORT}/health`);
});
