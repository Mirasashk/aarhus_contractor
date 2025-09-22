# Aarhus Contractor - Full Stack Application

A full-stack application with React frontend and Express.js backend using Firebase Admin SDK.

## Project Structure

```
aarhus_contractor/
├── frontend/          # React application (Vite + React)
├── backend/           # Express.js API server
├── package.json       # Root package.json for managing both apps
└── README.md
```

## Quick Start

### Install all dependencies

```bash
npm run install:all
```

### Development (run both frontend and backend)

```bash
npm run dev
```

This will start:

-   Frontend on http://localhost:3000
-   Backend on http://localhost:5000

### Individual Development

#### Frontend only

```bash
npm run dev:frontend
```

#### Backend only

```bash
npm run dev:backend
```

## Available Scripts

-   `npm run dev` - Run both frontend and backend in development mode
-   `npm run dev:frontend` - Run only frontend
-   `npm run dev:backend` - Run only backend
-   `npm run build` - Build frontend for production
-   `npm run start` - Run both apps in production mode
-   `npm run install:all` - Install dependencies for all apps
-   `npm run clean` - Clean all node_modules

## Firebase Setup

### Backend (Firebase Admin SDK)

1. Go to Firebase Console > Project Settings > Service Accounts
2. Generate a new private key
3. Place the JSON file in the `backend/` folder
4. Update `backend/index.js` to use the correct path
5. Or set up environment variables (recommended for production)

### Frontend (Firebase Client SDK)

The frontend Firebase configuration should be in `frontend/src/firebase/` (already configured).

## Development Notes

-   The backend uses Express.js with Firebase Admin SDK
-   The frontend uses React with Vite
-   Both apps can run independently or together
-   CORS is configured to allow frontend-backend communication
-   Environment variables are used for configuration

## Production Deployment

1. Build the frontend: `npm run build`
2. Deploy the backend to your preferred hosting service
3. Update CORS settings in production
4. Use environment variables for Firebase configuration
