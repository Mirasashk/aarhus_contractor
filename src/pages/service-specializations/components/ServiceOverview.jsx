import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ServiceOverview = () => {
	const services = [
		{
			id: 'housing',
			title: 'Housing Projects',
			subtitle: 'Multi-Unit Developments',
			description: `Deliver large-scale housing developments with Danish construction standards. From social housing to student accommodations, we create sustainable, energy-efficient communities that meet government regulations and accessibility requirements.`,
			features: [
				'Social housing development',
				'Affordable housing construction',
				'Student housing projects',
				'Senior living facilities',
				'Energy efficiency compliance',
			],
			image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=400&fit=crop',
			icon: 'Building',
			color: 'bg-brand-primary',
			investmentRange: 'DKK 2M - 25M',
			timeline: '12-24 months',
			projects: 15,
		},
		{
			id: 'government',
			title: 'Government Buildings',
			subtitle: 'Public Sector Construction',
			description: `Specialized construction services for municipal and government facilities. We ensure full compliance with public procurement regulations, accessibility standards, and security requirements while maintaining Danish quality standards.`,
			features: [
				'Schools and educational facilities',
				'Hospitals and healthcare buildings',
				'Municipal offices',
				'Cultural centers and libraries',
				'Security and accessibility compliance',
			],
			image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
			icon: 'Shield',
			color: 'bg-brand-secondary',
			investmentRange: 'DKK 5M - 50M',
			timeline: '18-36 months',
			projects: 12,
		},
		{
			id: 'infrastructure',
			title: 'Public Infrastructure',
			subtitle: 'Community Development',
			description: `Build essential community infrastructure that serves public needs. From community centers to sports facilities, we create functional spaces that enhance community life while meeting strict government standards and environmental regulations.`,
			features: [
				'Community centers',
				'Sports complexes',
				'Transportation hubs',
				'Public facilities',
				'Environmental compliance',
			],
			image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop',
			icon: 'Users',
			color: 'bg-conversion-accent',
			investmentRange: 'DKK 3M - 30M',
			timeline: '15-30 months',
			projects: 8,
		},
		{
			id: 'renovation',
			title: 'Renovation & Maintenance',
			subtitle: 'Government Building Upgrades',
			description: `Modernize existing government buildings and public facilities with energy efficiency improvements, accessibility upgrades, and historical building restoration. We ensure compliance with heritage regulations while meeting modern standards.`,
			features: [
				'Government building upgrades',
				'Energy efficiency projects',
				'Accessibility improvements',
				'Historical building restoration',
				'Heritage compliance',
			],
			image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop',
			icon: 'Wrench',
			color: 'bg-success',
			investmentRange: 'DKK 1M - 15M',
			timeline: '6-18 months',
			projects: 20,
		},
	];

	return (
		<section className='py-12 sm:py-16 lg:py-20 bg-background'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
					<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
						Professional Construction Services for Every Project
						Type
					</h2>
					<p className='body-primary text-base sm:text-lg lg:text-xl text-muted-foreground'>
						Each project type requires specialized expertise and
						regulatory compliance. Our professional services ensure
						every construction project meets government standards
						while delivering exceptional results for our clients.
					</p>
				</div>

				{/* Services Grid */}
				<div className='space-y-12 sm:space-y-16 lg:space-y-20'>
					{services?.map((service, index) => (
						<div
							key={service?.id}
							className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
								index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
							}`}
						>
							{/* Image */}
							<div
								className={`relative order-1 ${
									index % 2 === 1
										? 'lg:col-start-2 lg:order-2'
										: 'lg:order-1'
								}`}
							>
								<div className='relative rounded-2xl overflow-hidden shadow-elevated group'>
									<Image
										src={service?.image}
										alt={`${service?.title} construction project showcasing professional standards`}
										className='w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover transition-transform duration-slow group-hover:scale-105'
									/>

									{/* Overlay */}
									<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-medium' />

									{/* Stats Badge */}
									<div className='absolute top-3 sm:top-6 right-3 sm:right-6 bg-background/95 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 shadow-card'>
										<div className='text-center'>
											<div className='font-headlines font-bold text-sm sm:text-lg text-brand-primary'>
												{service?.projects}
											</div>
											<div className='font-body text-xs text-muted-foreground'>
												Completed
											</div>
										</div>
									</div>

									{/* Service Icon */}
									<div
										className={`absolute bottom-3 sm:bottom-6 left-3 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 ${service?.color} rounded-xl flex items-center justify-center shadow-card`}
									>
										<Icon
											name={service?.icon}
											size={20}
											className='text-white sm:w-7 sm:h-7'
										/>
									</div>
								</div>
							</div>

							{/* Content */}
							<div
								className={`space-y-4 sm:space-y-6 order-2 ${
									index % 2 === 1
										? 'lg:col-start-1 lg:order-1'
										: 'lg:order-2'
								}`}
							>
								<div className='space-y-3 sm:space-y-4'>
									<div className='flex items-center space-x-2 sm:space-x-3'>
										<div
											className={`w-10 h-10 sm:w-12 sm:h-12 ${service?.color} rounded-lg flex items-center justify-center`}
										>
											<Icon
												name={service?.icon}
												size={18}
												className='text-white sm:w-6 sm:h-6'
											/>
										</div>
										<div>
											<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground'>
												{service?.title}
											</h3>
											<p className='accent-text text-brand-primary text-sm sm:text-base'>
												{service?.subtitle}
											</p>
										</div>
									</div>

									<p className='body-primary text-sm sm:text-base lg:text-lg text-muted-foreground'>
										{service?.description}
									</p>
								</div>

								{/* Features */}
								<div className='space-y-2 sm:space-y-3'>
									<h4 className='font-headlines font-semibold text-base sm:text-lg text-foreground'>
										What We Include:
									</h4>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
										{service?.features?.map(
											(feature, featureIndex) => (
												<div
													key={featureIndex}
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

								{/* Investment Info */}
								<div className='bg-card rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
										<div>
											<div className='flex items-center space-x-2 mb-1 sm:mb-2'>
												<Icon
													name='Banknote'
													size={14}
													className='text-brand-primary sm:w-4 sm:h-4'
												/>
												<span className='font-headlines font-medium text-xs sm:text-sm text-foreground'>
													Project Value Range
												</span>
											</div>
											<p className='font-headlines font-bold text-sm sm:text-lg text-brand-primary'>
												{service?.investmentRange}
											</p>
										</div>

										<div>
											<div className='flex items-center space-x-2 mb-1 sm:mb-2'>
												<Icon
													name='Clock'
													size={14}
													className='text-brand-primary sm:w-4 sm:h-4'
												/>
												<span className='font-headlines font-medium text-xs sm:text-sm text-foreground'>
													Timeline
												</span>
											</div>
											<p className='font-headlines font-bold text-sm sm:text-lg text-brand-primary'>
												{service?.timeline}
											</p>
										</div>
									</div>

									<div className='pt-3 sm:pt-4 border-t border-border'>
										<p className='body-secondary text-xs sm:text-sm text-muted-foreground'>
											*Project values reflect typical
											ranges for B2B construction
											projects. Final pricing determined
											during proposal development based on
											scope, compliance requirements, and
											project specifications.
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServiceOverview;
