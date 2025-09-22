import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const WhyAarhusSection = () => {
	const localAdvantages = [
		{
			icon: 'Building',
			title: 'Government Relations',
			description:
				'Established relationships with Aarhus Municipality and Central Denmark Region enable efficient permit processing and compliance with local regulations.',
			details: [
				'Municipal permit expertise',
				'Government contract experience',
				'Regulatory compliance knowledge',
				'Local authority relationships',
			],
		},
		{
			icon: 'Truck',
			title: 'Local Supplier Network',
			description:
				'Decades of relationships with local suppliers ensure access to quality materials at competitive prices, with reliable delivery and compliance guarantees.',
			details: [
				'Certified material suppliers',
				'Local construction partners',
				'Sustainable material sources',
				'Government-approved vendors',
			],
		},
		{
			icon: 'Users',
			title: 'Community Integration',
			description:
				'As active members of the Aarhus business community, we understand local requirements, respect community needs, and maintain relationships that benefit every project.',
			details: [
				'Community development projects',
				'Local business partnerships',
				'Stakeholder engagement',
				'Public sector collaboration',
			],
		},
		{
			icon: 'Clock',
			title: 'Responsive Service',
			description:
				'Local presence means immediate response to project needs, whether for site visits, compliance issues, or ongoing project management support.',
			details: [
				'Same-day site response',
				'Flexible project scheduling',
				'Ongoing maintenance support',
				'Direct client communication',
			],
		},
	];

	const projectTypes = [
		{
			period: 'Social Housing',
			timeframe: '200+ Units',
			characteristics:
				'Affordable housing, energy efficiency, accessibility compliance',
			ourExpertise:
				'Large-scale development, government compliance, sustainable construction',
			image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=300&fit=crop',
		},
		{
			period: 'Government Buildings',
			timeframe: 'Municipal Projects',
			characteristics:
				'Public facilities, accessibility standards, security requirements',
			ourExpertise:
				'Public sector construction, regulatory compliance, security systems',
			image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop',
		},
		{
			period: 'Educational Facilities',
			timeframe: 'Schools & Universities',
			characteristics:
				'Modern learning environments, safety standards, flexible spaces',
			ourExpertise:
				'Educational construction, safety compliance, modern learning design',
			image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop',
		},
		{
			period: 'Healthcare Facilities',
			timeframe: 'Medical Buildings',
			characteristics:
				'Patient safety, infection control, specialized systems',
			ourExpertise:
				'Healthcare construction, medical compliance, specialized systems',
			image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop',
		},
	];

	const supplierPartners = [
		{
			name: 'Aarhus Construction Materials',
			specialty: 'Bulk Construction Materials',
			relationship: '15 years',
			advantage: 'Government-approved supplier with volume discounts',
		},
		{
			name: 'Nordic Steel Works',
			specialty: 'Structural Steel & Reinforcement',
			relationship: '12 years',
			advantage: 'Custom fabrication and delivery services',
		},
		{
			name: 'Danish Sustainable Materials',
			specialty: 'Eco-Friendly Building Products',
			relationship: '8 years',
			advantage: 'Certified sustainable materials for green projects',
		},
		{
			name: 'Aarhus Electrical Systems',
			specialty: 'Commercial Electrical Equipment',
			relationship: '10 years',
			advantage: 'Specialized electrical systems for large projects',
		},
	];

	return (
		<section className='py-12 sm:py-16 lg:py-24 bg-card'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6'>
						Why Aarhus is Our Strategic Base
					</h2>
					<p className='body-primary text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto'>
						Our established presence in Aarhus provides strategic
						advantages for every project. Local government
						relationships, trusted supplier networks, and regional
						expertise create value that extends far beyond
						construction alone.
					</p>
				</div>

				{/* Local Advantages */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20'>
					{localAdvantages?.map((advantage, index) => (
						<div
							key={index}
							className='bg-background rounded-2xl p-6 sm:p-8 shadow-card'
						>
							<div className='flex items-start space-x-4 sm:space-x-6'>
								<div className='flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center'>
									<Icon
										name={advantage?.icon}
										size={20}
										className='text-brand-primary sm:w-7 sm:h-7'
									/>
								</div>

								<div className='flex-1 space-y-3 sm:space-y-4'>
									<h3 className='text-lg sm:text-xl font-bold text-foreground'>
										{advantage?.title}
									</h3>
									<p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
										{advantage?.description}
									</p>

									<ul className='space-y-2'>
										{advantage?.details?.map(
											(detail, detailIndex) => (
												<li
													key={detailIndex}
													className='flex items-center space-x-2 sm:space-x-3'
												>
													<div className='w-2 h-2 bg-brand-primary rounded-full flex-shrink-0' />
													<span className='text-xs sm:text-sm text-foreground'>
														{detail}
													</span>
												</li>
											)
										)}
									</ul>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Project Expertise */}
				<div className='mb-16 sm:mb-20'>
					<div className='text-center mb-8 sm:mb-12'>
						<h3 className='headline-secondary text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4'>
							Aarhus Project Expertise
						</h3>
						<p className='body-primary text-sm sm:text-base text-muted-foreground'>
							Our experience with diverse project types in Aarhus
							allows us to deliver specialized solutions that meet
							specific requirements and regulations.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
						{projectTypes?.map((project, index) => (
							<div
								key={index}
								className='bg-background rounded-xl overflow-hidden shadow-card hover:shadow-elevated transition-shadow duration-medium'
							>
								<div className='relative overflow-hidden'>
									<Image
										src={project?.image}
										alt={`${project?.period} projects in Aarhus`}
										className='w-full h-40 sm:h-48 object-cover'
									/>
									<div className='absolute top-3 sm:top-4 left-3 sm:left-4 bg-brand-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs font-medium'>
										{project?.timeframe}
									</div>
								</div>

								<div className='p-4 sm:p-6 space-y-2 sm:space-y-3'>
									<h4 className='font-bold text-foreground text-sm sm:text-base'>
										{project?.period}
									</h4>
									<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
										{project?.characteristics}
									</p>

									<div className='pt-2 sm:pt-3 border-t border-border'>
										<p className='text-xs font-semibold text-brand-primary uppercase tracking-wide mb-1'>
											Our Expertise
										</p>
										<p className='text-xs sm:text-sm text-foreground'>
											{project?.ourExpertise}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Supplier Network */}
				<div className='bg-background rounded-2xl p-6 sm:p-8 lg:p-12 shadow-card mb-12 sm:mb-16'>
					<div className='text-center mb-8 sm:mb-12'>
						<h3 className='headline-secondary text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4'>
							Trusted Local Supplier Network
						</h3>
						<p className='body-primary text-sm sm:text-base text-muted-foreground'>
							Established relationships with Aarhus suppliers
							ensure access to quality materials, competitive
							pricing, and reliable service for every construction
							project.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6'>
						{supplierPartners?.map((supplier, index) => (
							<div
								key={index}
								className='bg-card p-4 sm:p-6 rounded-xl border border-border'
							>
								<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0'>
									<div>
										<h4 className='font-semibold text-foreground text-sm sm:text-base'>
											{supplier?.name}
										</h4>
										<p className='text-xs sm:text-sm text-brand-primary'>
											{supplier?.specialty}
										</p>
									</div>
									<span className='text-xs bg-brand-primary/10 text-brand-primary px-2 py-1 rounded-full w-fit'>
										{supplier?.relationship}
									</span>
								</div>

								<div className='flex items-start space-x-2 sm:space-x-3'>
									<Icon
										name='Star'
										size={12}
										className='text-conversion-accent mt-1 flex-shrink-0 sm:w-4 sm:h-4'
									/>
									<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
										{supplier?.advantage}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Community Connection */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
					<div className='space-y-4 sm:space-y-6 order-2 lg:order-1'>
						<h3 className='headline-secondary text-xl sm:text-2xl lg:text-3xl font-bold text-foreground'>
							Rooted in Community
						</h3>

						<div className='space-y-4 sm:space-y-6'>
							<div className='bg-background p-4 sm:p-6 rounded-xl shadow-subtle'>
								<div className='flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3'>
									<Icon
										name='Building'
										size={16}
										className='text-brand-primary sm:w-5 sm:h-5'
									/>
									<h4 className='font-semibold text-foreground text-sm sm:text-base'>
										Local Development
									</h4>
								</div>
								<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
									Every project we complete contributes to the
									development and value of our community. We
									take professional pride in contributing to
									Aarhus's infrastructure and growth.
								</p>
							</div>

							<div className='bg-background p-4 sm:p-6 rounded-xl shadow-subtle'>
								<div className='flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3'>
									<Icon
										name='Users'
										size={16}
										className='text-brand-primary sm:w-5 sm:h-5'
									/>
									<h4 className='font-semibold text-foreground text-sm sm:text-base'>
										Stakeholder Engagement
									</h4>
								</div>
								<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
									We understand that large projects affect
									entire communities. Our work practices
									minimize disruption while maintaining open
									communication with all stakeholders.
								</p>
							</div>

							<div className='bg-background p-4 sm:p-6 rounded-xl shadow-subtle'>
								<div className='flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3'>
									<Icon
										name='Handshake'
										size={16}
										className='text-brand-primary sm:w-5 sm:h-5'
									/>
									<h4 className='font-semibold text-foreground text-sm sm:text-base'>
										Long-term Partnerships
									</h4>
								</div>
								<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
									Many of our clients become long-term
									partners. Local presence means we're here
									for ongoing support, maintenance, and future
									development projects.
								</p>
							</div>
						</div>
					</div>

					<div className='relative order-1 lg:order-2'>
						<div className='overflow-hidden rounded-2xl shadow-elevated'>
							<Image
								src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=600&fit=crop'
								alt='Professional construction team working on large-scale project in Aarhus'
								className='w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover'
							/>
						</div>

						{/* Location Badge */}
						<div className='absolute -bottom-3 sm:-bottom-6 -left-3 sm:-left-6 bg-brand-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-elevated'>
							<div className='text-center'>
								<Icon
									name='MapPin'
									size={24}
									className='mx-auto mb-1 sm:mb-2 sm:w-8 sm:h-8'
								/>
								<p className='font-bold text-xs sm:text-sm'>
									Aarhus, Denmark
								</p>
								<p className='text-xs opacity-90'>
									Our Base Since 2009
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyAarhusSection;
