import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import ProgressIndicator from './components/ProgressIndicator';
import ProjectVisualization from './components/ProjectVisualization';
import ConsultationScheduler from './components/ConsultationScheduler';
import ProjectDetailsForm from './components/ProjectDetailsForm';
import ConsultationConfirmation from './components/ConsultationConfirmation';
import Icon from '../../components/AppIcon';
import Footer from '../../components/ui/Footer';
import AdminFloatButton from '../../components/AdminFloatButton';

const ConsultationJourney = () => {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState({
		spaceType: '',
		currentStyle: '',
		transformationGoals: [],
		consultationType: '',
		consultationDate: '',
		consultationTime: '',
		companyName: '',
		cvrNumber: '',
		clientType: '',
		fundingSource: '',
		fullName: '',
		email: '',
		phone: '',
		address: '',
		timeline: '',
		budget: '',
		priority: '',
		description: '',
		requireISO9001: false,
		requireISO14001: false,
		requireOHSAS18001: false,
		requireEUProcurement: false,
	});

	const totalSteps = 4;

	// Scroll to top when step changes
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [currentStep]);

	const handleNext = () => {
		if (currentStep < totalSteps) {
			setCurrentStep(currentStep + 1);
		}
	};

	const handleBack = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleComplete = () => {
		// Reset form and redirect to homepage
		setFormData({
			spaceType: '',
			currentStyle: '',
			transformationGoals: [],
			consultationType: '',
			consultationDate: '',
			consultationTime: '',
			companyName: '',
			cvrNumber: '',
			clientType: '',
			fundingSource: '',
			fullName: '',
			email: '',
			phone: '',
			address: '',
			timeline: '',
			budget: '',
			priority: '',
			description: '',
			requireISO9001: false,
			requireISO14001: false,
			requireOHSAS18001: false,
			requireEUProcurement: false,
		});
		setCurrentStep(1);
		window.location.href = '/homepage';
	};

	const renderCurrentStep = () => {
		switch (currentStep) {
			case 1:
				return (
					<ProjectVisualization
						onNext={handleNext}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 2:
				return (
					<ConsultationScheduler
						onNext={handleNext}
						onBack={handleBack}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 3:
				return (
					<ProjectDetailsForm
						onNext={handleNext}
						onBack={handleBack}
						formData={formData}
						setFormData={setFormData}
					/>
				);
			case 4:
				return (
					<ConsultationConfirmation
						onBack={handleBack}
						formData={formData}
						onComplete={handleComplete}
					/>
				);
			default:
				return null;
		}
	};

	return (
		<>
			<Helmet>
				<title>
					Consultation Journey - Professional Project Assessment &
					Proposal | Aarhus Contractor
				</title>
				<meta
					name='description'
					content='Schedule a professional consultation for housing, government, and infrastructure projects. We align on scope, compliance, budget, and timeline to prepare a detailed proposal.'
				/>
				<meta
					name='keywords'
					content='construction consultation, government contracts, housing development, EU procurement, project assessment, proposal presentation'
				/>
				<meta
					property='og:title'
					content='Consultation Journey - Professional Project Assessment'
				/>
				<meta
					property='og:description'
					content='Request an assessment, proposal presentation, negotiation, or kickoff meeting with our team.'
				/>
				<meta
					property='og:type'
					content='website'
				/>
				<link
					rel='canonical'
					href='https://aarhuscontractor.dk/consultation-journey'
				/>
			</Helmet>
			<div className='min-h-screen bg-background'>
				<Header />

				{/* Hero Section */}
				<section className='pt-24 pb-12 bg-gradient-to-b from-background to-muted/20'>
					<div className='container mx-auto px-6 lg:px-8'>
						<div className='text-center max-w-4xl mx-auto'>
							<h1 className='headline-primary text-foreground mb-6'>
								Professional Consultation Journey
							</h1>
							<p className='body-primary text-muted-foreground mb-8'>
								Schedule a project assessment, proposal
								presentation, negotiation, or kickoff. We ensure
								compliance, clarity, and alignment from day one.
							</p>

							{/* Trust Indicators */}
							<div className='flex flex-wrap justify-center items-center gap-6 sm:gap-8 mb-12'>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Shield'
										size={20}
										className='text-success'
									/>
									<span className='text-sm text-muted-foreground'>
										EU Procurement Compliant
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Award'
										size={20}
										className='text-success'
									/>
									<span className='text-sm text-muted-foreground'>
										ISO 9001 & 14001
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Clock'
										size={20}
										className='text-success'
									/>
									<span className='text-sm text-muted-foreground'>
										On-Time Delivery
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Star'
										size={20}
										className='text-success'
									/>
									<span className='text-sm text-muted-foreground'>
										Government Approved
									</span>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Progress Indicator */}
				<section className='py-8 bg-card/50'>
					<div className='container mx-auto px-6 lg:px-8'>
						<ProgressIndicator
							currentStep={currentStep}
							totalSteps={totalSteps}
						/>
					</div>
				</section>

				{/* Main Content */}
				<section className='py-12'>
					<div className='container mx-auto px-6 lg:px-8'>
						<div className='max-w-6xl mx-auto'>
							{renderCurrentStep()}
						</div>
					</div>
				</section>

				{/* Support Section */}
				<section className='py-12 bg-muted/30'>
					<div className='container mx-auto px-6 lg:px-8'>
						<div className='max-w-4xl mx-auto'>
							<div className='bg-card p-8 rounded-lg border border-border shadow-card'>
								<div className='text-center mb-6'>
									<Icon
										name='HelpCircle'
										size={32}
										className='text-brand-primary mx-auto mb-4'
									/>
									<h3 className='text-xl font-headlines font-semibold text-foreground mb-2'>
										Need Help with Your Consultation?
									</h3>
									<p className='text-muted-foreground'>
										Our team is here to assist you every
										step of the way
									</p>
								</div>

								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div className='text-center'>
										<div className='w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3'>
											<Icon
												name='Phone'
												size={20}
												className='text-brand-primary'
											/>
										</div>
										<h4 className='font-headlines font-medium text-foreground mb-1'>
											Call Us
										</h4>
										<p className='text-sm text-muted-foreground mb-2'>
											Speak directly with our team
										</p>
										<a
											href='tel:+4512345678'
											className='text-brand-primary hover:underline text-sm font-medium'
										>
											+45 12 34 56 78
										</a>
									</div>

									<div className='text-center'>
										<div className='w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3'>
											<Icon
												name='Mail'
												size={20}
												className='text-brand-primary'
											/>
										</div>
										<h4 className='font-headlines font-medium text-foreground mb-1'>
											Email Us
										</h4>
										<p className='text-sm text-muted-foreground mb-2'>
											Get detailed information
										</p>
										<a
											href='mailto:consultation@aarhuscontractor.dk'
											className='text-brand-primary hover:underline text-sm font-medium'
										>
											consultation@aarhuscontractor.dk
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Footer */}
				<Footer />
				<AdminFloatButton />
			</div>
		</>
	);
};

export default ConsultationJourney;
