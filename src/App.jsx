import React from 'react';
import Routes from './Routes';
import { FirebaseProvider } from './hooks/useFirebase';

function App() {
	return (
		<FirebaseProvider>
			<Routes />
		</FirebaseProvider>
	);
}

export default App;
