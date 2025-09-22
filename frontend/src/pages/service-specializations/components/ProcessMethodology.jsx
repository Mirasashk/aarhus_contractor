import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessMethodology = () => {
	const [activePhase, setActivePhase] = useState(0);

	const phases = [
		{
			id: 'assessment',
			title: 'Project Assessment',
			duration: '2-4 weeks',
			description: `Comprehensive evaluation of project requirements, site conditions, and compliance needs. We conduct detailed feasibility studies and risk assessments to ensure project viability.`,
			activities: [
				'Site evaluation and analysis',
				'Compliance review and permitting',
				'Feasibility study development',
				'Risk assessment and mitigation',
				'Stakeholder consultation',
			],
			icon: 'Search',
			color: 'text-brand-primary',
			bgColor: 'bg-brand-primary/10',
		},
		{
			id: 'proposal',
			title: 'Proposal Development',
			duration: '3-4 weeks',
			description: `Detailed project planning and proposal creation. We develop comprehensive project plans, timelines, and budget breakdowns that meet government procurement requirements.`,
			activities: [
				'Detailed project plan creation',
				'Timeline development and scheduling',
				'Budget breakdown and cost analysis',
				'Resource allocation planning',
				'Government compliance documentation',
			],
			icon: 'FileText',
			color: 'text-brand-secondary',
			bgColor: 'bg-brand-secondary/10',
		},
		{
			id: 'contract',
			title: 'Contract Negotiation',
			duration: '2-3 weeks',
			description: `Professional contract negotiation ensuring all terms, conditions, and compliance requirements are clearly defined. We establish quality standards and payment schedules.`,
			activities: [
				'Terms and conditions negotiation',
				'Compliance requirements definition',
				'Quality standards establishment',
				'Payment schedule agreement',
				'Legal documentation completion',
			],
			icon: 'Handshake',
			color: 'text-conversion-accent',
			bgColor: 'bg-conversion-accent/10',
		},
		{
			id: 'execution',
			title: 'Project Execution',
			duration: 'Project specific',
			description: `Professional project management and construction execution. Our team ensures quality control, safety monitoring, and progress reporting throughout the construction phase.`,
			activities: [
				'Professional project management',
				'Quality control systems implementation',
				'Safety monitoring and compliance',
				'Progress reporting and communication',
				'Stakeholder coordination',
			],
			icon: 'Hammer',
			color: 'text-success',
			bgColor: 'bg-success/10',
		},
		{
			id: 'delivery',
			title: 'Delivery & Handover',
			duration: '2-4 weeks',
			description: `Final inspection, documentation delivery, and project handover. We ensure all compliance requirements are met and provide comprehensive documentation for project completion.`,
			activities: [
				'Final inspection and testing',
				'Documentation delivery',
				'Warranty provision and support',
				'Client training and handover',
				'Project completion certification',
			],
			icon: 'CheckCircle',
			color: 'text-brand-primary',
			bgColor: 'bg-brand-primary/10',
		},
	];

	return (
		<section className='py-12 sm:py-16 lg:py-20 bg-card'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center max-w-3xl mx-auto mb-12 sm:mb-16'>
					<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6'>
						Professional Construction Methodology
					</h2>
					<p className='body-primary text-base sm:text-lg lg:text-xl text-muted-foreground'>
						Our systematic approach ensures every project meets
						government standards, regulatory compliance, and
						professional excellence. Each phase builds upon the last
						to deliver exceptional results.
					</p>
				</div>

				{/* Process Timeline */}
				<div className='relative'>
					{/* Timeline Line */}
					<div className='hidden lg:block absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-border' />

					{/* Phases */}
					<div className='space-y-8 sm:space-y-12'>
						{phases?.map((phase, index) => (
							<div
								key={phase?.id}
								className={`relative grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center cursor-pointer transition-all duration-medium ${
									activePhase === index
										? 'opacity-100'
										: 'opacity-70 hover:opacity-90'
								}`}
								onClick={() => setActivePhase(index)}
							>
								{/* Timeline Node */}
								<div className='hidden lg:block absolute left-1/2 transform -translate-x-1/2 z-10'>
									<div
										className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-background flex items-center justify-center transition-all duration-medium ${
											activePhase === index
												? phase?.bgColor
												: 'bg-muted'
										}`}
									>
										<Icon
											name={phase?.icon}
											size={18}
											className={
												activePhase === index
													? phase?.color
													: 'text-muted-foreground sm:w-6 sm:h-6'
											}
										/>
									</div>
								</div>

								{/* Content */}
								<div
									className={`${
										index % 2 === 0
											? 'lg:text-right lg:pr-8 sm:lg:pr-12'
											: 'lg:col-start-2 lg:pl-8 sm:lg:pl-12'
									}`}
								>
									<div
										className={`bg-background rounded-2xl p-6 sm:p-8 shadow-card transition-all duration-medium ${
											activePhase === index
												? 'shadow-elevated transform scale-105'
												: ''
										}`}
									>
										{/* Phase Header */}
										<div className='flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4 lg:hidden'>
											<div
												className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center ${
													activePhase === index
														? phase?.bgColor
														: 'bg-muted'
												}`}
											>
												<Icon
													name={phase?.icon}
													size={16}
													className={
														activePhase === index
															? phase?.color
															: 'text-muted-foreground sm:w-5 sm:h-5'
													}
												/>
											</div>
											<div>
												<h3 className='headline-secondary text-lg sm:text-xl font-bold text-foreground'>
													{phase?.title}
												</h3>
												<p className='body-secondary text-xs sm:text-sm text-brand-primary font-medium'>
													{phase?.duration}
												</p>
											</div>
										</div>

										{/* Desktop Header */}
										<div className='hidden lg:block mb-3 sm:mb-4'>
											<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground mb-1 sm:mb-2'>
												{phase?.title}
											</h3>
											<p className='body-secondary text-xs sm:text-sm text-brand-primary font-medium'>
												Duration: {phase?.duration}
											</p>
										</div>

										{/* Description */}
										<p className='body-primary text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6'>
											{phase?.description}
										</p>

										{/* Activities */}
										<div className='space-y-2 sm:space-y-3'>
											<h4 className='font-headlines font-semibold text-sm sm:text-base text-foreground'>
												Key Activities:
											</h4>
											<div className='space-y-1 sm:space-y-2'>
												{phase?.activities?.map(
													(
														activity,
														activityIndex
													) => (
														<div
															key={activityIndex}
															className='flex items-start space-x-2'
														>
															<Icon
																name='ArrowRight'
																size={12}
																className={`mt-0.5 flex-shrink-0 ${phase?.color} sm:w-4 sm:h-4`}
															/>
															<span className='body-secondary text-xs sm:text-sm text-foreground'>
																{activity}
															</span>
														</div>
													)
												)}
											</div>
										</div>
									</div>
								</div>

								{/* Phase Number */}
								<div
									className={`${
										index % 2 === 0
											? 'lg:col-start-2 lg:pl-8 sm:lg:pl-12'
											: 'lg:pr-8 sm:lg:pr-12'
									} flex justify-center lg:justify-start`}
								>
									<div
										className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full border-2 flex items-center justify-center transition-all duration-medium ${
											activePhase === index
												? `border-brand-primary ${phase?.bgColor}`
												: 'border-border bg-muted'
										}`}
									>
										<span
											className={`font-headlines font-bold text-lg sm:text-xl lg:text-2xl transition-colors duration-medium ${
												activePhase === index
													? phase?.color
													: 'text-muted-foreground'
											}`}
										>
											{String(index + 1)?.padStart(
												2,
												'0'
											)}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Process Summary */}
				<div className='mt-12 sm:mt-16 bg-background rounded-2xl p-6 sm:p-8 shadow-card'>
					<div className='text-center max-w-2xl mx-auto'>
						<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4'>
							Why Our Process Works
						</h3>
						<p className='body-primary text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6'>
							Our systematic approach ensures every project meets
							government standards, regulatory compliance, and
							professional excellence. Each phase builds upon the
							last to deliver exceptional results.
						</p>
						<div className='flex flex-wrap justify-center gap-2 sm:gap-4'>
							<div className='flex items-center space-x-2 bg-brand-primary/10 px-3 py-2 rounded-full sm:px-4'>
								<Icon
									name='CheckCircle'
									size={16}
									className='text-brand-primary sm:w-5 sm:h-5'
								/>
								<span className='body-secondary text-xs font-medium text-brand-primary sm:text-sm'>
									Government Compliant
								</span>
							</div>
							<div className='flex items-center space-x-2 bg-brand-primary/10 px-3 py-2 rounded-full sm:px-4'>
								<Icon
									name='CheckCircle'
									size={16}
									className='text-brand-primary sm:w-5 sm:h-5'
								/>
								<span className='body-secondary text-xs font-medium text-brand-primary sm:text-sm'>
									Quality Assured
								</span>
							</div>
							<div className='flex items-center space-x-2 bg-brand-primary/10 px-3 py-2 rounded-full sm:px-4'>
								<Icon
									name='CheckCircle'
									size={16}
									className='text-brand-primary sm:w-5 sm:h-5'
								/>
								<span className='body-secondary text-xs font-medium text-brand-primary sm:text-sm'>
									On-Time Delivery
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProcessMethodology;
