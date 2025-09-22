import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CaseStudyShowcase = () => {
	const [activeCase, setActiveCase] = useState(0);

	const caseStudies = [
		{
			id: 'social-housing',
			title: 'Social Housing Development - 48 Units',
			location: 'Aarhus C, Denmark',
			service: 'Housing Projects',
			timeline: '32 weeks',
			investment: '15,000,000 DKK',
			challenge: `Creating affordable housing that meets government standards while providing modern living conditions for 48 families. The project required strict compliance with EU regulations and sustainable design principles.`,
			solution: `Complete development incorporating sustainable materials, energy-efficient systems, and community facilities. Phased construction approach ensured minimal disruption to surrounding areas.`,
			results: [
				'48 units delivered on time and within budget',
				'100% government compliance achieved',
				'Sustainable design with energy efficiency',
				'Community facilities integrated successfully',
			],
			beforeImage:
				'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
			afterImage:
				'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
			clientQuote: `"Aarhus Contractor delivered exceptional quality within budget and timeline. The project exceeded all expectations and has become a model for future social housing developments."`,
			clientName: 'Aarhus Municipality',
			features: [
				'Sustainable materials',
				'Energy efficiency',
				'Community facilities',
				'Government compliance',
			],
		},
		{
			id: 'municipal-office',
			title: 'Municipal Office Renovation',
			location: 'Aarhus C, Denmark',
			service: 'Government Buildings',
			timeline: '24 weeks',
			investment: '8,500,000 DKK',
			challenge: `Renovating occupied government building while maintaining operations and meeting strict compliance requirements. The project required energy efficiency upgrades and modern workspace design.`,
			solution: `Phased construction approach with energy-efficient systems and modern workspace design. Careful planning ensured zero operational disruption during renovation.`,
			results: [
				'Energy efficiency improved by 40%',
				'Modern workspace design implemented',
				'Zero operational disruption achieved',
				'Full compliance with government standards',
			],
			beforeImage:
				'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
			afterImage:
				'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
			clientQuote: `"The renovation was completed seamlessly with minimal disruption to our operations. Quality and professionalism were outstanding throughout the project."`,
			clientName: 'Aarhus Municipality',
			features: [
				'Energy efficiency',
				'Modern workspace',
				'Zero disruption',
				'Government compliance',
			],
		},
		{
			id: 'student-housing',
			title: 'Student Housing Complex - 120 Units',
			location: 'Aarhus N, Denmark',
			service: 'Housing Projects',
			timeline: '40 weeks',
			investment: '22,000,000 DKK',
			challenge: `Creating affordable student housing that meets university requirements and government standards. The project required efficient space planning and sustainable design features.`,
			solution: `Efficient space planning with sustainable materials and integrated study facilities. Modern amenities and energy-efficient systems created comfortable living spaces for students.`,
			results: [
				'120 units delivered on time',
				'Sustainable design achieved',
				'Study facilities integrated',
				'Government standards met',
			],
			beforeImage:
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
			afterImage:
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
			clientQuote: `"The student housing project was delivered with exceptional quality and attention to detail. Students love their new homes and the facilities exceed expectations."`,
			clientName: 'Aarhus University',
			features: [
				'Efficient space planning',
				'Sustainable materials',
				'Study facilities',
				'Modern amenities',
			],
		},
	];

	const nextCase = () => {
		setActiveCase((prev) => (prev + 1) % caseStudies?.length);
	};

	const prevCase = () => {
		setActiveCase(
			(prev) => (prev - 1 + caseStudies?.length) % caseStudies?.length
		);
	};

	const currentCase = caseStudies?.[activeCase];

	return (
		<section className='py-12 sm:py-16 lg:py-20 bg-card'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
					<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
						Professional Project Success Stories
					</h2>
					<p className='body-primary text-base sm:text-lg lg:text-xl text-muted-foreground'>
						Real projects, real results. See how our professional
						construction approach delivers exceptional results for
						government contracts and housing projects throughout
						Denmark.
					</p>
				</div>

				{/* Case Study Navigation */}
				<div className='flex justify-center mb-6 sm:mb-8'>
					<div className='flex flex-wrap justify-center gap-1 sm:gap-2 bg-background rounded-xl p-2 shadow-card'>
						{caseStudies?.map((study, index) => (
							<button
								key={study?.id}
								onClick={() => setActiveCase(index)}
								className={`px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-medium ${
									activeCase === index
										? 'bg-brand-primary text-primary-foreground shadow-subtle'
										: 'text-muted-foreground hover:text-foreground hover:bg-muted'
								}`}
							>
								{study?.service}
							</button>
						))}
					</div>
				</div>

				{/* Active Case Study */}
				<div className='bg-background rounded-2xl shadow-elevated overflow-hidden'>
					{/* Case Header */}
					<div className='p-6 sm:p-8 border-b border-border'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start'>
							<div className='space-y-3 sm:space-y-4'>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center'>
										<Icon
											name='Building'
											size={20}
											className='text-brand-primary sm:w-6 sm:h-6'
										/>
									</div>
									<div>
										<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground'>
											{currentCase?.title}
										</h3>
										<p className='body-secondary text-sm sm:text-base text-brand-primary font-medium'>
											{currentCase?.location}
										</p>
									</div>
								</div>

								<p className='body-primary text-sm sm:text-base text-muted-foreground'>
									{currentCase?.challenge}
								</p>
							</div>

							<div className='grid grid-cols-2 gap-3 sm:gap-4'>
								<div className='bg-card rounded-lg p-3 sm:p-4 text-center'>
									<Icon
										name='Clock'
										size={16}
										className='text-brand-primary mx-auto mb-2 sm:w-5 sm:h-5'
									/>
									<div className='font-headlines font-bold text-sm sm:text-lg text-foreground'>
										{currentCase?.timeline}
									</div>
									<div className='body-secondary text-xs text-muted-foreground'>
										Timeline
									</div>
								</div>
								<div className='bg-card rounded-lg p-3 sm:p-4 text-center'>
									<Icon
										name='Banknote'
										size={16}
										className='text-brand-primary mx-auto mb-2 sm:w-5 sm:h-5'
									/>
									<div className='font-headlines font-bold text-sm sm:text-lg text-foreground'>
										{currentCase?.investment}
									</div>
									<div className='body-secondary text-xs text-muted-foreground'>
										Investment
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Before/After Images */}
					<div className='grid grid-cols-1 md:grid-cols-2'>
						{/* Before */}
						<div className='relative'>
							<Image
								src={currentCase?.beforeImage}
								alt={`Before construction of ${currentCase?.title}`}
								className='w-full h-64 sm:h-80 object-cover'
							/>
							<div className='absolute top-3 left-3 sm:top-4 sm:left-4 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs sm:text-sm font-medium'>
								Before
							</div>
						</div>

						{/* After */}
						<div className='relative'>
							<Image
								src={currentCase?.afterImage}
								alt={`After construction of ${currentCase?.title}`}
								className='w-full h-64 sm:h-80 object-cover'
							/>
							<div className='absolute top-3 left-3 sm:top-4 sm:left-4 bg-success text-success-foreground px-2 py-1 rounded-full text-xs sm:text-sm font-medium'>
								After
							</div>
						</div>
					</div>

					{/* Case Content */}
					<div className='p-6 sm:p-8 space-y-6 sm:space-y-8'>
						{/* Solution */}
						<div>
							<h4 className='headline-secondary text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>
								Our Solution
							</h4>
							<p className='body-primary text-sm sm:text-base text-muted-foreground'>
								{currentCase?.solution}
							</p>
						</div>

						{/* Results & Features */}
						<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
							{/* Results */}
							<div>
								<h4 className='headline-secondary text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>
									Measurable Results
								</h4>
								<div className='space-y-2 sm:space-y-3'>
									{currentCase?.results?.map(
										(result, index) => (
											<div
												key={index}
												className='flex items-start space-x-3'
											>
												<Icon
													name='TrendingUp'
													size={14}
													className='text-success mt-1 flex-shrink-0 sm:w-4 sm:h-4'
												/>
												<span className='body-secondary text-xs sm:text-sm text-foreground'>
													{result}
												</span>
											</div>
										)
									)}
								</div>
							</div>

							{/* Features */}
							<div>
								<h4 className='headline-secondary text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>
									Key Features
								</h4>
								<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
									{currentCase?.features?.map(
										(feature, index) => (
											<div
												key={index}
												className='flex items-center space-x-2'
											>
												<Icon
													name='Check'
													size={14}
													className='text-success flex-shrink-0 sm:w-4 sm:h-4'
												/>
												<span className='body-secondary text-xs sm:text-sm text-foreground'>
													{feature}
												</span>
											</div>
										)
									)}
								</div>
							</div>
						</div>

						{/* Client Testimonial */}
						<div className='bg-card rounded-xl p-4 sm:p-6'>
							<div className='flex items-start space-x-3 sm:space-x-4'>
								<Icon
									name='Quote'
									size={20}
									className='text-brand-primary flex-shrink-0 mt-1 sm:w-6 sm:h-6'
								/>
								<div className='space-y-2 sm:space-y-3'>
									<p className='accent-text text-sm sm:text-lg text-foreground italic'>
										{currentCase?.clientQuote}
									</p>
									<div className='flex items-center space-x-3'>
										<div className='w-8 h-8 sm:w-10 sm:h-10 bg-brand-primary/10 rounded-full flex items-center justify-center'>
											<Icon
												name='User'
												size={14}
												className='text-brand-primary sm:w-4 sm:h-4'
											/>
										</div>
										<div>
											<div className='font-headlines font-semibold text-sm sm:text-base text-foreground'>
												{currentCase?.clientName}
											</div>
											<div className='body-secondary text-xs sm:text-sm text-muted-foreground'>
												Verified Client
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Navigation Controls */}
				<div className='flex justify-center items-center space-x-3 sm:space-x-4 mt-6 sm:mt-8'>
					<Button
						variant='outline'
						onClick={prevCase}
						iconName='ChevronLeft'
						iconPosition='left'
						className='border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2'
					>
						Previous
					</Button>

					<div className='flex space-x-1 sm:space-x-2'>
						{caseStudies?.map((_, index) => (
							<button
								key={index}
								onClick={() => setActiveCase(index)}
								className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-medium ${
									activeCase === index
										? 'bg-brand-primary'
										: 'bg-border hover:bg-muted-foreground'
								}`}
							/>
						))}
					</div>

					<Button
						variant='outline'
						onClick={nextCase}
						iconName='ChevronRight'
						iconPosition='right'
						className='border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground text-sm sm:text-base px-3 py-2 sm:px-4 sm:py-2'
					>
						Next
					</Button>
				</div>

				{/* CTA Section */}
				<div className='mt-12 sm:mt-16 text-center'>
					<div className='max-w-2xl mx-auto space-y-4 sm:space-y-6'>
						<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground'>
							Ready to Start Your Project?
						</h3>
						<p className='body-primary text-sm sm:text-base text-muted-foreground'>
							Every project begins with understanding your
							requirements and compliance needs. Schedule a
							consultation to explore how our professional
							construction services can meet your project goals.
						</p>
						<Button
							variant='default'
							className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg'
							iconName='Calendar'
							iconPosition='left'
							onClick={() =>
								(window.location.href = '/consultation-journey')
							}
						>
							Schedule Your Consultation
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CaseStudyShowcase;
