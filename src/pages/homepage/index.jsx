import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import ProjectShowcase from './components/ProjectShowcase';
import DanishPhilosophySection from './components/DanishPhilosophySection';
import ConsultationWidget from './components/ConsultationWidget';
import TestimonialCarousel from './components/TestimonialCarousel';
import TrustSignalsSection from './components/TrustSignalsSection';
import Footer from '../../components/ui/Footer';
import AdminFloatButton from '../../components/AdminFloatButton';

const Homepage = () => {
	return (
		<div className='min-h-screen bg-background'>
			<Header />

			<main className='pt-16'>
				{/* Hero Section with Seasonal Showcase */}
				<HeroSection />

				{/* Featured Project Transformations */}
				<ProjectShowcase />

				{/* Danish Design Philosophy & Process */}
				<DanishPhilosophySection />

				{/* Consultation Booking Widget */}
				<ConsultationWidget />

				{/* Client Testimonials Carousel */}
				<TestimonialCarousel />

				{/* Trust Signals & Certifications */}
				<TrustSignalsSection />
			</main>

			<Footer />
			<AdminFloatButton />
		</div>
	);
};

export default Homepage;
