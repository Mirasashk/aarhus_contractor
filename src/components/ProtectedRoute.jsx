import React from 'react';
import { useAuth } from '../hooks/useFirebase';
import NotFound from '../pages/NotFound';

const ProtectedRoute = ({ children }) => {
	const { isAuthenticated, loading } = useAuth();

	// Show loading state while checking authentication
	if (loading) {
		return (
			<div className='min-h-screen flex items-center justify-center bg-background'>
				<div className='text-center'>
					<div className='animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4'></div>
					<p className='text-muted-foreground'>Loading...</p>
				</div>
			</div>
		);
	}

	// If not authenticated, show 404 page instead of redirecting
	if (!isAuthenticated) {
		return <NotFound />;
	}

	// If authenticated, render the protected content
	return children;
};

export default ProtectedRoute;
