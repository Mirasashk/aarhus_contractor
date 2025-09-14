import React from 'react';
import {
	BrowserRouter,
	Routes as RouterRoutes,
	Route,
	Navigate,
} from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import ErrorBoundary from 'components/ErrorBoundary';
import LanguageWrapper from './i18n/LanguageWrapper';
import NotFound from 'pages/NotFound';
import ProjectTransformationsGallery from './pages/project-transformations-gallery';
import ConsultationJourney from './pages/consultation-journey';
import CraftProcessPhilosophy from './pages/craft-process-philosophy';
import ServiceSpecializations from './pages/service-specializations';
import AboutOurCraft from './pages/about-our-craft';
import Homepage from './pages/homepage';
import AdminLogin from './pages/AdminLogin';

const Routes = () => {
	return (
		<BrowserRouter>
			<ErrorBoundary>
				<ScrollToTop />
				<RouterRoutes>
					{/* Language-specific routes */}
					<Route
						path='/:lang'
						element={<LanguageWrapper />}
					>
						<Route
							index
							element={<Homepage />}
						/>
						<Route
							path='project-transformations-gallery'
							element={<ProjectTransformationsGallery />}
						/>
						<Route
							path='consultation-journey'
							element={<ConsultationJourney />}
						/>
						<Route
							path='craft-process-philosophy'
							element={<CraftProcessPhilosophy />}
						/>
						<Route
							path='service-specializations'
							element={<ServiceSpecializations />}
						/>
						<Route
							path='about-our-craft'
							element={<AboutOurCraft />}
						/>
						<Route
							path='*'
							element={<NotFound />}
						/>
					</Route>
					{/* Admin login route */}
					<Route
						path='/admin-login'
						element={<AdminLogin />}
					/>
					{/* Default redirect to Danish */}
					<Route
						path='/'
						element={
							<Navigate
								to='/da'
								replace
							/>
						}
					/>
				</RouterRoutes>
			</ErrorBoundary>
		</BrowserRouter>
	);
};

export default Routes;
