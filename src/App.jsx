import React from 'react';
import Routes from './Routes';
import { FirebaseProvider } from './hooks/useFirebase';
import FeedbackWidgetProvider from './components/FeedbackWidgetProvider';

function App() {
	return (
		<FirebaseProvider>
			<FeedbackWidgetProvider>
				<Routes />
			</FeedbackWidgetProvider>
		</FirebaseProvider>
	);
}

export default App;
