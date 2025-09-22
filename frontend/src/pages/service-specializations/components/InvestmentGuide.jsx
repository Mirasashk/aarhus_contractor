import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InvestmentGuide = () => {
	const [selectedService, setSelectedService] = useState('housing');

	const investmentLevels = {
		housing: {
			title: 'Housing Project Investment Levels',
			description:
				'Professional construction services for housing developments and residential projects with Danish precision and compliance.',
			levels: [
				{
					name: 'Small Housing Projects',
					range: '500,000 - 2,000,000 DKK',
					duration: '8-16 weeks',
					description:
						'Small-scale housing developments and minor residential projects.',
					includes: [
						'Single building renovation',
						'Basic compliance documentation',
						'Standard materials',
						'Basic project management',
						'Quality assurance',
					],
					ideal: 'Perfect for small housing developments and minor government contracts',
				},
				{
					name: 'Medium Housing Projects',
					range: '2,000,000 - 10,000,000 DKK',
					duration: '16-32 weeks',
					description:
						'Medium-scale housing developments and municipal building projects.',
					includes: [
						'Multi-building projects',
						'Full compliance documentation',
						'Premium materials',
						'Full project management',
						'Quality guarantee',
						'Government standards compliance',
					],
					ideal: 'Ideal for housing developments and municipal building projects',
					popular: true,
				},
				{
					name: 'Large Housing Projects',
					range: '10,000,000+ DKK',
					duration: '32-52 weeks',
					description:
						'Large-scale housing developments and major government infrastructure.',
					includes: [
						'Large-scale development',
						'Custom design & planning',
						'Premium materials & finishes',
						'Dedicated project manager',
						'Extended warranty',
						'Post-completion support',
						'Full EU compliance',
					],
					ideal: 'For major housing developments and government infrastructure',
				},
			],
		},
		government: {
			title: 'Government Contract Investment Levels',
			description:
				'Specialized construction services for government buildings and public infrastructure with full compliance.',
			levels: [
				{
					name: 'Small Government Projects',
					range: '1,000,000 - 5,000,000 DKK',
					duration: '12-24 weeks',
					description:
						'Small government buildings and minor public infrastructure projects.',
					includes: [
						'Government building renovation',
						'EU compliance documentation',
						'Standard materials',
						'Basic project management',
						'Quality assurance',
					],
					ideal: 'Great for small government buildings and minor public infrastructure',
				},
				{
					name: 'Medium Government Projects',
					range: '5,000,000 - 25,000,000 DKK',
					duration: '24-40 weeks',
					description:
						'Medium government buildings and significant public infrastructure.',
					includes: [
						'Multi-building projects',
						'Full EU compliance documentation',
						'Premium materials',
						'Full project management',
						'Quality guarantee',
						'Government standards compliance',
					],
					ideal: 'Perfect for medium government buildings and public infrastructure',
					popular: true,
				},
				{
					name: 'Major Government Projects',
					range: '25,000,000+ DKK',
					duration: '40-52 weeks',
					description:
						'Major government infrastructure and large-scale public projects.',
					includes: [
						'Infrastructure development',
						'Bespoke design solutions',
						'Premium materials',
						'Dedicated project team',
						'White-glove service',
						'Lifetime support',
						'Full EU compliance',
					],
					ideal: 'For major government infrastructure and large-scale public projects',
				},
			],
		},
		commercial: {
			title: 'Commercial Construction Investment Levels',
			description:
				'Professional construction services for commercial buildings and business infrastructure.',
			levels: [
				{
					name: 'Small Commercial Projects',
					range: '300,000 - 1,500,000 DKK',
					duration: '6-16 weeks',
					description:
						'Small commercial buildings and minor business infrastructure.',
					includes: [
						'Commercial building renovation',
						'Basic compliance documentation',
						'Standard materials',
						'Basic project management',
						'Quality assurance',
					],
					ideal: 'Perfect for small commercial buildings and minor business infrastructure',
				},
				{
					name: 'Medium Commercial Projects',
					range: '1,500,000 - 8,000,000 DKK',
					duration: '16-32 weeks',
					description:
						'Medium commercial buildings and significant business infrastructure.',
					includes: [
						'Multi-building projects',
						'Full compliance documentation',
						'Premium materials',
						'Full project management',
						'Quality guarantee',
						'Business standards compliance',
					],
					ideal: 'Ideal for medium commercial buildings and business infrastructure',
					popular: true,
				},
				{
					name: 'Large Commercial Projects',
					range: '8,000,000+ DKK',
					duration: '32-48 weeks',
					description:
						'Large commercial buildings and major business infrastructure.',
					includes: [
						'Large-scale development',
						'Custom design & planning',
						'Premium materials',
						'Dedicated project manager',
						'Extended warranty',
						'Post-completion support',
						'Full compliance',
					],
					ideal: 'For large commercial buildings and major business infrastructure',
				},
			],
		},
	};

	const services = [
		{ id: 'housing', name: 'Housing Projects', icon: 'Home' },
		{ id: 'government', name: 'Government Contracts', icon: 'Building' },
		{
			id: 'commercial',
			name: 'Commercial Construction',
			icon: 'Briefcase',
		},
	];

	const currentService = investmentLevels?.[selectedService];

	return (
		<section className='py-12 sm:py-16 lg:py-20 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
					<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
						Professional Project Investment Levels
					</h2>
					<p className='body-primary text-base sm:text-lg lg:text-xl text-muted-foreground'>
						Our transparent investment levels help you understand
						the value and scope of each construction approach. Every
						investment is designed to meet government standards and
						deliver lasting value to your projects.
					</p>
				</div>

				{/* Service Selection */}
				<div className='flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12'>
					{services?.map((service) => (
						<button
							key={service?.id}
							onClick={() => setSelectedService(service?.id)}
							className={`flex items-center space-x-2 sm:space-x-3 px-4 py-2 sm:px-6 sm:py-3 rounded-xl transition-all duration-medium ${
								selectedService === service?.id
									? 'bg-brand-primary text-primary-foreground shadow-card'
									: 'bg-card text-foreground hover:bg-muted'
							}`}
						>
							<Icon
								name={service?.icon}
								size={16}
								className='sm:w-5 sm:h-5'
							/>
							<span className='font-headlines font-medium text-sm sm:text-base'>
								{service?.name}
							</span>
						</button>
					))}
				</div>

				{/* Service Investment Levels */}
				<div className='space-y-6 sm:space-y-8'>
					{/* Service Header */}
					<div className='text-center max-w-2xl mx-auto'>
						<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4'>
							{currentService?.title}
						</h3>
						<p className='body-primary text-sm sm:text-base text-muted-foreground'>
							{currentService?.description}
						</p>
					</div>

					{/* Investment Levels */}
					<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8'>
						{currentService?.levels?.map((level, index) => (
							<div
								key={index}
								className={`relative bg-card rounded-2xl p-6 sm:p-8 shadow-card hover:shadow-elevated transition-all duration-medium ${
									level?.popular
										? 'ring-2 ring-brand-primary'
										: ''
								}`}
							>
								{/* Popular Badge */}
								{level?.popular && (
									<div className='absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2'>
										<div className='bg-brand-primary text-primary-foreground px-3 py-1 rounded-full text-xs sm:text-sm font-medium'>
											Most Popular
										</div>
									</div>
								)}

								{/* Level Header */}
								<div className='text-center mb-4 sm:mb-6'>
									<h4 className='headline-secondary text-lg sm:text-xl font-bold text-foreground mb-2'>
										{level?.name}
									</h4>
									<div className='space-y-2'>
										<div className='font-headlines font-bold text-xl sm:text-2xl text-brand-primary'>
											{level?.range}
										</div>
										<div className='flex items-center justify-center space-x-4 text-xs sm:text-sm text-muted-foreground'>
											<div className='flex items-center space-x-1'>
												<Icon
													name='Clock'
													size={12}
													className='sm:w-3.5 sm:h-3.5'
												/>
												<span>{level?.duration}</span>
											</div>
										</div>
									</div>
								</div>

								{/* Description */}
								<p className='body-secondary text-sm sm:text-base text-muted-foreground text-center mb-4 sm:mb-6'>
									{level?.description}
								</p>

								{/* Includes */}
								<div className='space-y-3 sm:space-y-4 mb-4 sm:mb-6'>
									<h5 className='font-headlines font-semibold text-sm sm:text-base text-foreground'>
										What's Included:
									</h5>
									<div className='space-y-1 sm:space-y-2'>
										{level?.includes?.map(
											(item, itemIndex) => (
												<div
													key={itemIndex}
													className='flex items-start space-x-2'
												>
													<Icon
														name='Check'
														size={14}
														className='text-success flex-shrink-0 mt-0.5 sm:w-4 sm:h-4'
													/>
													<span className='body-secondary text-xs sm:text-sm text-foreground'>
														{item}
													</span>
												</div>
											)
										)}
									</div>
								</div>

								{/* Ideal For */}
								<div className='bg-background rounded-lg p-3 sm:p-4 mb-4 sm:mb-6'>
									<div className='flex items-start space-x-2'>
										<Icon
											name='Lightbulb'
											size={14}
											className='text-conversion-accent flex-shrink-0 mt-0.5 sm:w-4 sm:h-4'
										/>
										<div>
											<span className='font-headlines font-medium text-xs sm:text-sm text-foreground block mb-1'>
												Ideal For:
											</span>
											<span className='body-secondary text-xs sm:text-sm text-muted-foreground'>
												{level?.ideal}
											</span>
										</div>
									</div>
								</div>

								{/* CTA Button */}
								<Button
									variant={
										level?.popular ? 'default' : 'outline'
									}
									fullWidth
									className={
										level?.popular
											? 'bg-brand-primary hover:bg-conversion-accent text-primary-foreground text-sm sm:text-base'
											: 'border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground text-sm sm:text-base'
									}
									onClick={() =>
										(window.location.href =
											'/consultation-journey')
									}
								>
									Discuss This Level
								</Button>
							</div>
						))}
					</div>
				</div>

				{/* Investment Information */}
				<div className='mt-12 sm:mt-16 bg-card rounded-2xl p-6 sm:p-8 shadow-card'>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8'>
						{/* Left Column */}
						<div className='space-y-4 sm:space-y-6'>
							<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground'>
								Understanding Your Investment
							</h3>
							<div className='space-y-3 sm:space-y-4'>
								<div className='flex items-start space-x-3'>
									<Icon
										name='TrendingUp'
										size={16}
										className='text-success flex-shrink-0 mt-1 sm:w-5 sm:h-5'
									/>
									<div>
										<h4 className='font-headlines font-semibold text-sm sm:text-base text-foreground mb-1'>
											Lasting Value Creation
										</h4>
										<p className='body-secondary text-xs sm:text-sm text-muted-foreground'>
											Quality Danish craftsmanship and
											materials ensure your investment
											appreciates over time while meeting
											government standards.
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-3'>
									<Icon
										name='Shield'
										size={16}
										className='text-success flex-shrink-0 mt-1 sm:w-5 sm:h-5'
									/>
									<div>
										<h4 className='font-headlines font-semibold text-sm sm:text-base text-foreground mb-1'>
											Comprehensive Warranty
										</h4>
										<p className='body-secondary text-xs sm:text-sm text-muted-foreground'>
											All work comes with extensive
											warranties covering craftsmanship,
											materials, and systems integration.
										</p>
									</div>
								</div>

								<div className='flex items-start space-x-3'>
									<Icon
										name='Calendar'
										size={16}
										className='text-success flex-shrink-0 mt-1 sm:w-5 sm:h-5'
									/>
									<div>
										<h4 className='font-headlines font-semibold text-sm sm:text-base text-foreground mb-1'>
											Flexible Scheduling
										</h4>
										<p className='body-secondary text-xs sm:text-sm text-muted-foreground'>
											We work with your project timeline
											and requirements to minimize
											disruption during construction.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column */}
						<div className='space-y-4 sm:space-y-6'>
							<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground'>
								Financing & Payment Options
							</h3>
							<div className='space-y-3 sm:space-y-4'>
								<div className='bg-background rounded-lg p-3 sm:p-4'>
									<h4 className='font-headlines font-semibold text-sm sm:text-base text-foreground mb-2'>
										Flexible Payment Plans
									</h4>
									<p className='body-secondary text-xs sm:text-sm text-muted-foreground'>
										Structured payment schedules aligned
										with project milestones. No payment
										required until work begins.
									</p>
								</div>

								<div className='bg-background rounded-lg p-3 sm:p-4'>
									<h4 className='font-headlines font-semibold text-sm sm:text-base text-foreground mb-2'>
										Project Financing
									</h4>
									<p className='body-secondary text-xs sm:text-sm text-muted-foreground'>
										We partner with Danish financial
										institutions to offer competitive
										project financing options.
									</p>
								</div>

								<div className='bg-background rounded-lg p-3 sm:p-4'>
									<h4 className='font-headlines font-semibold text-sm sm:text-base text-foreground mb-2'>
										Transparent Pricing
									</h4>
									<p className='body-secondary text-xs sm:text-sm text-muted-foreground'>
										Detailed quotes with no hidden costs.
										All materials, labor, and permits
										clearly itemized.
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* CTA */}
					<div className='mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-border text-center'>
						<h4 className='headline-secondary text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4'>
							Ready to Discuss Your Project?
						</h4>
						<p className='body-primary text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6'>
							Schedule a consultation to receive a detailed
							proposal tailored to your specific project needs and
							requirements.
						</p>
						<Button
							variant='default'
							className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg'
							iconName='MessageCircle'
							iconPosition='left'
							onClick={() =>
								(window.location.href = '/consultation-journey')
							}
						>
							Get Your Custom Proposal
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default InvestmentGuide;
