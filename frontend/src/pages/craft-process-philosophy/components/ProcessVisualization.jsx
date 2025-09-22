import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProcessVisualization = () => {
	const [activePhase, setActivePhase] = useState(0);

	const phases = [
		{
			id: 0,
			title: 'Planning & Design',
			subtitle: 'Assessment, compliance, engineering',
			description:
				'We begin with site assessment, compliance review (EU/Danish), feasibility, and stakeholder consultation. Design development and engineering ensure the concept meets standards and objectives.',
			icon: 'Map',
			color: 'brand-primary',
			image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=800&fit=crop',
			features: [
				'Site assessment and analysis',
				'Compliance review and permitting',
				'Design development and engineering',
				'Stakeholder consultation',
			],
			duration: '4-12 weeks',
			deliverable: 'Approved design & compliance plan',
		},
		{
			id: 1,
			title: 'Pre-Construction',
			subtitle: 'Permits, procurement, team & safety',
			description:
				'We secure permits, finalize procurement and contracting, assemble the delivery team, and establish safety planning and governance.',
			icon: 'ClipboardList',
			color: 'accent',
			image: 'https://images.unsplash.com/photo-1581091012184-7c74c6b4f82b?w=1200&h=800&fit=crop',
			features: [
				'Permits and approvals',
				'Procurement and contracting',
				'Team assembly and training',
				'Safety planning and protocols',
			],
			duration: '3-8 weeks',
			deliverable: 'Permits, contracts, HSE plan',
		},
		{
			id: 2,
			title: 'Construction',
			subtitle: 'Execution, QA/QC, safety monitoring',
			description:
				'The project is executed with rigorous project management, quality control, and safety monitoring. Progress is reported to all stakeholders.',
			icon: 'Building',
			color: 'brand-secondary',
			image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&h=800&fit=crop',
			features: [
				'Project management and coordination',
				'Quality control and assurance',
				'Safety monitoring and compliance',
				'Progress reporting and communication',
			],
			duration: 'Varies by scope',
			deliverable: 'Completed works per spec',
		},
		{
			id: 3,
			title: 'Completion',
			subtitle: 'Inspection, documentation, handover',
			description:
				'We perform final inspection and testing, deliver all documentation and as-builts, and hand over the project with warranties and training.',
			icon: 'CheckCircle',
			color: 'conversion-accent',
			image: 'https://images.unsplash.com/photo-1581093588401-16f7a1c8a5a0?w=1200&h=800&fit=crop',
			features: [
				'Final inspection and testing',
				'Documentation and handover',
				'Warranty and maintenance planning',
				'Client training and support',
			],
			duration: '1-4 weeks',
			deliverable: 'Handover package & training',
		},
	];

	return (
		<section className='py-20 bg-background'>
			<div className='container mx-auto px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<div className='flex items-center justify-center space-x-3 mb-6'>
						<div className='w-12 h-1 bg-brand-primary rounded-full'></div>
						<span className='font-headlines font-medium text-brand-primary uppercase tracking-wider text-sm'>
							Our Process
						</span>
						<div className='w-12 h-1 bg-brand-primary rounded-full'></div>
					</div>

					<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6'>
						Professional Construction Phases
					</h2>

					<p className='body-primary text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto'>
						A systematic, standards-driven process that ensures
						quality, compliance, and predictable outcomes across
						housing and public sector projects.
					</p>
				</div>

				{/* Process Timeline */}
				<div className='mb-16'>
					<div className='flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 lg:space-x-4'>
						{phases?.map((phase, index) => (
							<div
								key={phase?.id}
								className='flex items-center space-x-4 lg:flex-col lg:space-x-0 lg:space-y-4'
							>
								<button
									onClick={() => setActivePhase(index)}
									className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
										activePhase === index
											? `bg-${phase?.color} text-white shadow-lg scale-110`
											: 'bg-muted text-muted-foreground hover:bg-card hover:scale-105'
									}`}
								>
									<Icon
										name={phase?.icon}
										size={24}
									/>
								</button>

								<div className='text-center lg:max-w-32'>
									<p
										className={`font-headlines font-semibold text-sm transition-colors duration-300 ${
											activePhase === index
												? 'text-foreground'
												: 'text-muted-foreground'
										}`}
									>
										{phase?.title}
									</p>
									<p className='text-xs text-muted-foreground mt-1'>
										{phase?.duration}
									</p>
								</div>

								{index < phases?.length - 1 && (
									<div className='hidden lg:block w-full h-0.5 bg-border mx-4'></div>
								)}
							</div>
						))}
					</div>
				</div>

				{/* Active Phase Details */}
				<div className='bg-card rounded-2xl shadow-card overflow-hidden'>
					<div className='grid lg:grid-cols-2 gap-0'>
						{/* Content */}
						<div className='p-8 lg:p-12'>
							<div className='space-y-6'>
								<div>
									<div className='flex items-center space-x-3 mb-4'>
										<div
											className={`w-12 h-12 bg-${phases?.[activePhase]?.color}/10 rounded-full flex items-center justify-center`}
										>
											<Icon
												name={
													phases?.[activePhase]?.icon
												}
												size={20}
												className={`text-${phases?.[activePhase]?.color}`}
											/>
										</div>
										<div>
											<h3 className='font-headlines font-bold text-2xl text-foreground'>
												{phases?.[activePhase]?.title}
											</h3>
											<p className='text-muted-foreground'>
												{
													phases?.[activePhase]
														?.subtitle
												}
											</p>
										</div>
									</div>

									<p className='body-primary text-muted-foreground leading-relaxed'>
										{phases?.[activePhase]?.description}
									</p>
								</div>

								<div className='space-y-4'>
									<h4 className='font-headlines font-semibold text-foreground'>
										Key Activities:
									</h4>
									<ul className='space-y-3'>
										{phases?.[activePhase]?.features?.map(
											(feature, index) => (
												<li
													key={index}
													className='flex items-start space-x-3'
												>
													<Icon
														name='Check'
														size={16}
														className='text-success mt-1 flex-shrink-0'
													/>
													<span className='text-muted-foreground'>
														{feature}
													</span>
												</li>
											)
										)}
									</ul>
								</div>

								<div className='flex items-center justify-between pt-6 border-t border-border'>
									<div>
										<p className='font-headlines font-semibold text-foreground'>
											Duration
										</p>
										<p className='text-muted-foreground'>
											{phases?.[activePhase]?.duration}
										</p>
									</div>
									<div>
										<p className='font-headlines font-semibold text-foreground'>
											Deliverable
										</p>
										<p className='text-muted-foreground'>
											{phases?.[activePhase]?.deliverable}
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Image */}
						<div className='relative overflow-hidden'>
							<Image
								src={phases?.[activePhase]?.image}
								alt={`${phases?.[activePhase]?.title} process visualization`}
								className='w-full h-full min-h-96 lg:min-h-full object-cover'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
						</div>
					</div>
				</div>

				{/* Navigation */}
				<div className='flex justify-center mt-8 space-x-4'>
					<button
						onClick={() =>
							setActivePhase(Math.max(0, activePhase - 1))
						}
						disabled={activePhase === 0}
						className='flex items-center space-x-2 px-6 py-3 bg-muted text-muted-foreground rounded-lg hover:bg-card transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						<Icon
							name='ChevronLeft'
							size={16}
						/>
						<span className='font-headlines font-medium'>
							Previous
						</span>
					</button>

					<button
						onClick={() =>
							setActivePhase(
								Math.min(phases?.length - 1, activePhase + 1)
							)
						}
						disabled={activePhase === phases?.length - 1}
						className='flex items-center space-x-2 px-6 py-3 bg-brand-primary text-primary-foreground rounded-lg hover:bg-brand-primary/90 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed'
					>
						<span className='font-headlines font-medium'>Next</span>
						<Icon
							name='ChevronRight'
							size={16}
						/>
					</button>
				</div>
			</div>
		</section>
	);
};

export default ProcessVisualization;
