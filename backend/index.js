const express = require('express');
const cors = require('cors');
const { admin, db, auth, storage } = require('./firebase');
const { corsOptions } = require('./config/cors');
const { requestLogger, errorLogger } = require('./middleware/requestLogger');
const { simpleLogger, minimalLogger } = require('./middleware/advancedLogger');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
// Request logging (development only)
// Available loggers: simpleLogger, debugLogger, minimalLogger
// To change logger level, replace minimalLogger with desired logger
app.use(minimalLogger);
app.use(cors(corsOptions));
app.use(express.json());

// CORS debugging middleware (only in development)
// if (process.env.NODE_ENV === 'development') {
// 	app.use((req, res, next) => {
// 		console.log('🌐 CORS Debug:', {
// 			origin: req.headers.origin,
// 			userAgent: req.headers['user-agent'],
// 			method: req.method,
// 			url: req.url,
// 		});
// 		next();
// 	});
// }

// Firebase services are now initialized in ./firebase.js

// Import routes
const usersRoutes = require('./routes/users');

// Basic route
app.get('/', (req, res) => {
	res.json({ message: 'Aarhus Contractor Backend API is running!' });
});

// Health check route
app.get('/health', (req, res) => {
	res.json({
		status: 'OK',
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV || 'development',
		cors: {
			origin: req.headers.origin,
			allowed: true,
		},
	});
});

// CORS test route
app.get('/cors-test', (req, res) => {
	res.json({
		message: 'CORS is working!',
		origin: req.headers.origin,
		environment: process.env.NODE_ENV || 'development',
		timestamp: new Date().toISOString(),
	});
});

// API Routes
app.use('/api/users', usersRoutes);

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

// Example Firestore route
app.get('/api/firestore-test', async (req, res) => {
	try {
		// Test Firestore connection
		const testDoc = await db.collection('test').doc('connection').get();
		res.json({
			message: 'Firestore connection successful',
			exists: testDoc.exists,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error('Error testing Firestore:', error);
		res.status(500).json({ error: 'Firestore connection failed' });
	}
});

// Example Auth route
app.get('/api/auth-test', async (req, res) => {
	try {
		// Test Auth service
		const listUsersResult = await auth.listUsers(1);
		res.json({
			message: 'Auth service connection successful',
			userCount: listUsersResult.users.length,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error('Error testing Auth:', error);
		res.status(500).json({ error: 'Auth service connection failed' });
	}
});

// Example Storage route
app.get('/api/storage-test', async (req, res) => {
	try {
		// Test Storage service
		const bucket = storage.bucket();
		const [files] = await bucket.getFiles({ maxResults: 1 });
		res.json({
			message: 'Storage service connection successful',
			fileCount: files.length,
			timestamp: new Date().toISOString(),
		});
	} catch (error) {
		console.error('Error testing Storage:', error);
		res.status(500).json({ error: 'Storage service connection failed' });
	}
});

// Error handling middleware (must be last)
app.use(errorLogger);

// Start server
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
	console.log(`Health check: http://localhost:${PORT}/health`);
	console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
	if (process.env.NODE_ENV === 'development') {
		console.log('🔍 Request logging enabled for development');
	}
});
