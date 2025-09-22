# Aarhus Contractor Backend

Express.js backend application with Firebase Admin SDK integration.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Configure Firebase Admin SDK:

    - Option 1: Download your Firebase service account key JSON file and place it in the backend folder
    - Option 2: Set up environment variables (recommended for production)

3. Update the `.env` file with your configuration

4. Run the development server:

```bash
npm run dev
```

## Firebase Admin SDK Configuration

### Option 1: Service Account Key File (Development)

1. Go to Firebase Console > Project Settings > Service Accounts
2. Click "Generate new private key"
3. Download the JSON file and place it in the backend folder
4. Update `index.js` to use the file path

### Option 2: Environment Variables (Production)

Set these environment variables:

-   `FIREBASE_PROJECT_ID`
-   `FIREBASE_PRIVATE_KEY`
-   `FIREBASE_CLIENT_EMAIL`

## API Endpoints

-   `GET /` - Basic API status
-   `GET /health` - Health check
-   `GET /api/protected` - Example protected route

## Development

The server runs on port 5000 by default. You can change this in the `.env` file.
