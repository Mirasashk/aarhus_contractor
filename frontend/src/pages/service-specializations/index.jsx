import React, { useEffect } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceOverview from './components/ServiceOverview';
import ProcessMethodology from './components/ProcessMethodology';
import MaterialShowcase from './components/MaterialShowcase';
import CaseStudyShowcase from './components/CaseStudyShowcase';
import InvestmentGuide from './components/InvestmentGuide';
import ConsultationCTA from './components/ConsultationCTA';
import Footer from '../../components/ui/Footer';

const ServiceSpecializations = () => {
	useEffect(() => {
		// Set page title
		document.title =
			'Service Specializations - Aarhus Contractor | Danish Craftsmanship';

		// Set meta description
		const metaDescription = document.querySelector(
			'meta[name="description"]'
		);
		if (metaDescription) {
			metaDescription?.setAttribute(
				'content',
				'Specialized Danish renovation services including Kitchen Mastery, Bathroom Sanctuaries, and Living Space Optimization. Premium craftsmanship with transparent investment levels.'
			);
		}

		// Scroll to top on page load
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className='min-h-screen bg-background'>
			<Header />
			{/* Main Content */}
			<main className='pt-16'>
				{/* Hero Section */}
				<ServiceHero />

				{/* Service Overview */}
				<ServiceOverview />

				{/* Process Methodology */}
				<ProcessMethodology />

				{/* Material Showcase */}
				<MaterialShowcase />

				{/* Case Study Showcase */}
				<CaseStudyShowcase />

				{/* Investment Guide */}
				<InvestmentGuide />

				{/* Consultation CTA */}
				<ConsultationCTA />
			</main>
			<Footer />
		</div>
	);
};

export default ServiceSpecializations;
