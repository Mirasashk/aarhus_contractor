import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FounderStory = () => {
	const milestones = [
		{
			year: '2009',
			title: 'Company Founded',
			description:
				'Established Aarhus Contractor Aps with focus on professional construction services',
			icon: 'Building',
		},
		{
			year: '2012',
			title: 'First Government Contract',
			description:
				'Won first municipal housing project, establishing government sector expertise',
			icon: 'Award',
		},
		{
			year: '2015',
			title: 'Team Expansion',
			description:
				'Grew to 15+ professional team members with specialized roles and certifications',
			icon: 'Users',
		},
		{
			year: '2018',
			title: 'ISO Certification',
			description:
				'Achieved ISO 9001:2015 quality management certification for professional standards',
			icon: 'Shield',
		},
		{
			year: '2021',
			title: 'EU Procurement Compliance',
			description:
				'Became EU Public Procurement Directive compliant for government contracts',
			icon: 'Globe',
		},
		{
			year: '2024',
			title: 'Industry Leadership',
			description:
				'Recognized as leading construction company for housing and public projects',
			icon: 'Star',
		},
	];

	return (
		<section className='py-12 sm:py-16 lg:py-24 bg-card'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-4xl mx-auto'>
					{/* Section Header */}
					<div className='text-center mb-12 sm:mb-16'>
						<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6'>
							Building Excellence Through
							<span className='block text-brand-primary'>
								Company Evolution
							</span>
						</h2>
						<p className='body-primary text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto'>
							From a small construction company to a leading
							professional contractor, our growth reflects our
							commitment to quality, compliance, and delivering
							exceptional results for our clients.
						</p>
					</div>

					{/* Story Content */}
					<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-16 sm:mb-20'>
						<div className='space-y-4 sm:space-y-6 order-2 lg:order-1'>
							<div className='prose prose-lg'>
								<p className='body-primary text-foreground leading-relaxed text-sm sm:text-base'>
									Founded in 2009, Aarhus Contractor Aps began
									with a clear vision: to deliver professional
									construction services that meet the highest
									standards of quality and compliance. Our
									journey from a small local contractor to a
									leading construction company reflects our
									commitment to excellence and continuous
									improvement.
								</p>

								<p className='body-primary text-foreground leading-relaxed text-sm sm:text-base'>
									Our first major milestone came in 2012 when
									we won our first government contract for
									municipal housing. This success established
									our expertise in public sector projects and
									set the foundation for our growth in
									government and institutional construction.
								</p>

								<p className='body-primary text-foreground leading-relaxed text-sm sm:text-base'>
									Today, we're proud to be a trusted partner
									for housing associations, government
									agencies, and public institutions across
									Denmark. Our team of 25+ professionals
									brings together decades of experience in
									construction, project management, and
									regulatory compliance.
								</p>
							</div>

							<div className='bg-muted p-4 sm:p-6 rounded-xl border-l-4 border-brand-primary'>
								<p className='accent-text text-brand-primary mb-2 text-sm sm:text-base'>
									"Professional excellence is built on
									quality, compliance, and continuous
									improvement."
								</p>
								<p className='text-xs sm:text-sm text-muted-foreground'>
									— Aarhus Contractor Aps, Company Philosophy
								</p>
							</div>
						</div>

						<div className='relative order-1 lg:order-2'>
							<div className='overflow-hidden rounded-2xl shadow-card'>
								<Image
									src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=500&h=600&fit=crop'
									alt='Professional construction team working on large-scale project'
									className='w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover'
								/>
							</div>

							<div className='absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-background p-3 sm:p-4 rounded-xl shadow-elevated'>
								<div className='flex items-center space-x-2 sm:space-x-3'>
									<Icon
										name='Building'
										size={16}
										className='text-brand-primary sm:w-5 sm:h-5'
									/>
									<div>
										<p className='font-semibold text-xs sm:text-sm text-foreground'>
											Aarhus, Denmark
										</p>
										<p className='text-xs text-muted-foreground'>
											Headquarters
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Timeline */}
					<div className='space-y-6 sm:space-y-8'>
						<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-center text-foreground mb-8 sm:mb-12'>
							Company Milestones
						</h3>

						<div className='relative'>
							{/* Timeline Line */}
							<div className='absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-border hidden sm:block' />

							<div className='space-y-6 sm:space-y-8'>
								{milestones?.map((milestone, index) => (
									<div
										key={milestone?.year}
										className='relative flex items-start space-x-3 sm:space-x-6'
									>
										{/* Timeline Dot */}
										<div className='flex-shrink-0 w-8 h-8 sm:w-16 sm:h-16 bg-brand-primary rounded-full flex items-center justify-center shadow-card'>
											<Icon
												name={milestone?.icon}
												size={16}
												className='text-primary-foreground sm:w-6 sm:h-6'
											/>
										</div>

										{/* Content */}
										<div className='flex-1 bg-background p-4 sm:p-6 rounded-xl shadow-subtle'>
											<div className='flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 mb-2 sm:mb-3'>
												<span className='text-lg sm:text-2xl font-bold text-brand-primary'>
													{milestone?.year}
												</span>
												<h4 className='text-base sm:text-xl font-semibold text-foreground'>
													{milestone?.title}
												</h4>
											</div>
											<p className='text-sm sm:text-base text-muted-foreground leading-relaxed'>
												{milestone?.description}
											</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FounderStory;
