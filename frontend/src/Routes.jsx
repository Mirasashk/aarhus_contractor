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
import QRProfile from './pages/qrProfile';

// Admin Routes
import AdminLogin from './admin/pages/login';
import AdminDashboard from './admin/pages/dashboard';
import AdminProjects from './admin/pages/projects';
import AdminFeedback from './admin/pages/feedback';
import AdminConsultations from './admin/pages/consultations';
import AdminTeam from './admin/pages/team';
import AdminTestimonials from './admin/pages/testimonials';
import AdminLayout from './admin/components/AdminLayout';
import ProtectedRoute from './components/ProtectedRoute';
import AdminEmployees from './admin/pages/employees';
import { UsersProvider } from './contexts/UsersContext';
import AdminProfile from './admin/pages/profile';
import AdminUsers from './admin/pages/users';

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
					{/* Admin login route - standalone without sidebar */}
					<Route
						path='/admin-login'
						element={<AdminLogin />}
					/>
					{/* Admin routes with sidebar layout - Protected */}
					<Route
						path='/admin'
						element={
							<ProtectedRoute>
								<UsersProvider>
									<AdminLayout />
								</UsersProvider>
							</ProtectedRoute>
						}
					>
						<Route
							index
							element={<AdminDashboard />}
						/>
						<Route
							path='users'
							element={<AdminUsers />}
						/>
						<Route
							path='projects'
							element={<AdminProjects />}
						/>
						<Route
							path='employees'
							element={<AdminEmployees />}
						/>
						<Route
							path='feedback'
							element={<AdminFeedback />}
						/>
						<Route
							path='consultations'
							element={<AdminConsultations />}
						/>
						<Route
							path='team'
							element={<AdminTeam />}
						/>
						<Route
							path='testimonials'
							element={<AdminTestimonials />}
						/>
						<Route
							path='profile'
							element={<AdminProfile />}
						/>
						{/* Add more admin routes here as needed */}
					</Route>
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
					<Route
						path='qr-profile/:id'
						element={<QRProfile />}
					/>
				</RouterRoutes>
			</ErrorBoundary>
		</BrowserRouter>
	);
};

export default Routes;
