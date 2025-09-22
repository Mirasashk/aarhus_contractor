import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QualityGuarantees = () => {
	const [expandedCard, setExpandedCard] = useState(null);

	const guarantees = [
		{
			id: 1,
			icon: 'Shield',
			title: 'EU Public Procurement Compliance',
			subtitle: 'Transparent, compliant delivery',
			description:
				'We operate under EU public procurement rules, providing transparent processes, audit-ready documentation, and compliance throughout the project lifecycle.',
			details: [
				'Tender compliance and documentation',
				'Fair competition and transparency',
				'Change control and approvals',
				'Full audit trail of decisions',
				'Stakeholder communication records',
			],
			coverage: 'All procurement and contract processes',
			duration: 'Project lifecycle',
			color: 'brand-primary',
		},
		{
			id: 2,
			icon: 'Award',
			title: 'ISO 9001 Quality Management',
			subtitle: 'Documented QA/QC at every phase',
			description:
				'Quality is built into our process with documented controls, inspections, and continuous improvement across planning, construction, and handover.',
			details: [
				'Phase gates and quality checklists',
				'Third-party inspections as required',
				'Non-conformance tracking and CAPA',
				'Material certificates retained',
				'Handover dossier and as-builts',
			],
			coverage: 'All works, suppliers, and documentation',
			duration: 'Permanent records retained',
			color: 'accent',
		},
		{
			id: 3,
			icon: 'HardHat',
			title: 'OHSAS 18001 Safety Management',
			subtitle: 'Zero-accident target',
			description:
				'We enforce rigorous HSE protocols, toolbox talks, and ongoing monitoring to protect workers, clients, and the public.',
			details: [
				'Site-specific HSE plan',
				'Daily toolbox talks',
				'Incident reporting and KPIs',
				'Mandatory PPE and training',
				'Regular audits and improvements',
			],
			coverage: 'All personnel and subcontractors',
			duration: 'Throughout project execution',
			color: 'conversion-accent',
		},
		{
			id: 4,
			icon: 'Leaf',
			title: 'ISO 14001 Environmental Management',
			subtitle: 'Sustainable construction practices',
			description:
				'We minimize environmental impact with waste reduction, materials selection, and energy-efficient methods aligned with ISO 14001.',
			details: [
				'Waste segregation and tracking',
				'Sustainable material sourcing',
				'Energy-efficient site operations',
				'Environmental incident controls',
				'Sustainability reporting',
			],
			coverage: 'All sites and activities',
			duration: 'Across project lifecycle',
			color: 'success',
		},
	];

	const certifications = [
		{
			name: 'Danish Building Authority',
			description: 'Licensed contractor with full building permits',
			logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
		},
		{
			name: 'EU Procurement Directive',
			description: 'Compliant with EU tendering and contracting rules',
			logo: 'https://images.unsplash.com/photo-1524578471082-8a51ad5d61c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
		},
		{
			name: 'ISO 9001 & 14001',
			description: 'Certified quality and environmental management',
			logo: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
		},
		{
			name: 'Insurance Coverage',
			description: 'Comprehensive liability and professional coverage',
			logo: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80',
		},
	];

	const toggleCard = (cardId) => {
		setExpandedCard(expandedCard === cardId ? null : cardId);
	};

	return (
		<section className='py-20 bg-gradient-to-br from-card/30 to-muted/20'>
			<div className='container mx-auto px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-16'>
					<div className='flex items-center justify-center space-x-3 mb-6'>
						<div className='w-12 h-1 bg-success rounded-full'></div>
						<span className='font-headlines font-medium text-success uppercase tracking-wider text-sm'>
							Quality Assurance
						</span>
						<div className='w-12 h-1 bg-success rounded-full'></div>
					</div>

					<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6'>
						Quality Standards & Compliance
					</h2>

					<p className='body-primary text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto'>
						We build to recognized international standards with
						audit-ready documentation and transparent processes—so
						public and corporate stakeholders can trust the outcome.
					</p>
				</div>

				{/* Guarantees Grid */}
				<div className='grid md:grid-cols-2 gap-8 mb-20'>
					{guarantees?.map((guarantee) => (
						<div
							key={guarantee?.id}
							className='group'
						>
							<div className='bg-background rounded-2xl shadow-card overflow-hidden hover:shadow-elevated transition-all duration-500'>
								{/* Header */}
								<div className='p-6 border-b border-border'>
									<div className='flex items-start space-x-4'>
										<div
											className={`w-14 h-14 bg-${guarantee?.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}
										>
											<Icon
												name={guarantee?.icon}
												size={24}
												className={`text-${guarantee?.color}`}
											/>
										</div>

										<div className='flex-1'>
											<h3 className='font-headlines font-bold text-xl text-foreground mb-1'>
												{guarantee?.title}
											</h3>
											<p className='text-muted-foreground text-sm mb-3'>
												{guarantee?.subtitle}
											</p>
											<p className='text-muted-foreground leading-relaxed'>
												{guarantee?.description}
											</p>
										</div>
									</div>
								</div>

								{/* Expandable Content */}
								<div
									className={`transition-all duration-500 ${
										expandedCard === guarantee?.id
											? 'max-h-96 opacity-100'
											: 'max-h-0 opacity-0'
									} overflow-hidden`}
								>
									<div className='p-6 space-y-6'>
										{/* Details List */}
										<div>
											<h4 className='font-headlines font-semibold text-foreground mb-3'>
												What's Included:
											</h4>
											<ul className='space-y-2'>
												{guarantee?.details?.map(
													(detail, index) => (
														<li
															key={index}
															className='flex items-start space-x-3'
														>
															<Icon
																name='Check'
																size={16}
																className='text-success mt-1 flex-shrink-0'
															/>
															<span className='text-muted-foreground text-sm'>
																{detail}
															</span>
														</li>
													)
												)}
											</ul>
										</div>

										{/* Coverage & Duration */}
										<div className='grid md:grid-cols-2 gap-4 pt-4 border-t border-border'>
											<div>
												<h5 className='font-headlines font-semibold text-foreground text-sm mb-2'>
													Coverage:
												</h5>
												<p className='text-muted-foreground text-sm'>
													{guarantee?.coverage}
												</p>
											</div>
											<div>
												<h5 className='font-headlines font-semibold text-foreground text-sm mb-2'>
													Duration:
												</h5>
												<p className='text-muted-foreground text-sm'>
													{guarantee?.duration}
												</p>
											</div>
										</div>
									</div>
								</div>

								{/* Toggle Button */}
								<div className='p-6 pt-0'>
									<button
										onClick={() =>
											toggleCard(guarantee?.id)
										}
										className='w-full flex items-center justify-center space-x-2 py-3 bg-muted hover:bg-card text-muted-foreground hover:text-foreground rounded-lg transition-all duration-300'
									>
										<span className='font-headlines font-medium text-sm'>
											{expandedCard === guarantee?.id
												? 'Show Less'
												: 'Learn More'}
										</span>
										<Icon
											name={
												expandedCard === guarantee?.id
													? 'ChevronUp'
													: 'ChevronDown'
											}
											size={16}
										/>
									</button>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Certifications */}
				<div className='bg-background rounded-3xl shadow-card p-8 lg:p-12'>
					<div className='text-center mb-12'>
						<h3 className='headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-4'>
							Professional Certifications
						</h3>
						<p className='body-primary text-muted-foreground max-w-2xl mx-auto'>
							Our credentials demonstrate our commitment to
							professional excellence and regulatory compliance.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{certifications?.map((cert, index) => (
							<div
								key={index}
								className='text-center group'
							>
								<div className='bg-muted/50 rounded-2xl p-6 hover:bg-card hover:shadow-subtle transition-all duration-300'>
									<div className='w-16 h-16 bg-background rounded-full overflow-hidden mx-auto mb-4 shadow-subtle'>
										<Image
											src={cert?.logo}
											alt={cert?.name}
											className='w-full h-full object-cover'
										/>
									</div>

									<h4 className='font-headlines font-bold text-foreground mb-2'>
										{cert?.name}
									</h4>
									<p className='text-sm text-muted-foreground'>
										{cert?.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Trust Statement */}
				<div className='text-center mt-16'>
					<div className='max-w-4xl mx-auto'>
						<div className='bg-gradient-to-r from-brand-primary/10 to-accent/10 rounded-2xl p-8 lg:p-12'>
							<div className='w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6'>
								<Icon
									name='Heart'
									size={32}
									className='text-brand-primary'
								/>
							</div>

							<h3 className='headline-secondary text-2xl lg:text-3xl font-bold text-foreground mb-6'>
								Our Professional Commitment
							</h3>

							<p className='body-primary text-lg text-muted-foreground leading-relaxed mb-8'>
								We deliver to standards, document every phase,
								and stand accountable to your governance. That
								is our promise to municipalities, agencies,
								housing associations, and developers.
							</p>

							<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
								<div className='flex items-center space-x-3'>
									<Icon
										name='Phone'
										size={20}
										className='text-brand-primary'
									/>
									<span className='font-headlines font-medium text-foreground'>
										+45 8612 3456
									</span>
								</div>
								<div className='flex items-center space-x-3'>
									<Icon
										name='Mail'
										size={20}
										className='text-brand-primary'
									/>
									<span className='font-headlines font-medium text-foreground'>
										quality@aarhuscontractor.dk
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default QualityGuarantees;
