import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
	const teamMembers = [
		{
			id: 1,
			name: 'Lars Andersen',
			role: 'Managing Director',
			specialty: 'Strategic Planning & Government Relations',
			experience: '15 years',
			image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
			story: 'Leads company strategy and maintains key relationships with government agencies and housing associations across Denmark.',
			certifications: [
				'MBA Construction Management',
				'EU Public Procurement Certified',
				'Government Contract Specialist',
			],
			philosophy:
				'Excellence in construction requires both technical skill and strategic vision.',
		},
		{
			id: 2,
			name: 'Mette Sørensen',
			role: 'Project Manager',
			specialty: 'Large-Scale Project Coordination',
			experience: '12 years',
			image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face',
			story: 'Oversees complex construction projects from planning to completion, ensuring compliance with government regulations and quality standards.',
			certifications: [
				'PMP Certification',
				'Danish Building Authority Licensed',
				'Safety Management Specialist',
			],
			philosophy:
				'Successful projects are built on clear communication and meticulous planning.',
		},
		{
			id: 3,
			name: 'Erik Nielsen',
			role: 'Site Supervisor',
			specialty: 'Construction Operations & Quality Control',
			experience: '18 years',
			image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
			story: 'Manages daily construction operations and ensures all work meets professional standards and regulatory requirements.',
			certifications: [
				'Site Supervisor License',
				'Quality Control Specialist',
				'Safety Officer Certification',
			],
			philosophy:
				"Quality is not an accident—it's the result of systematic attention to detail.",
		},
		{
			id: 4,
			name: 'Anna Kristensen',
			role: 'Quality Assurance Specialist',
			specialty: 'Compliance & Standards Management',
			experience: '10 years',
			image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
			story: 'Ensures all projects meet ISO standards, government regulations, and client specifications through systematic quality control processes.',
			certifications: [
				'ISO 9001 Lead Auditor',
				'Quality Management Specialist',
				'Regulatory Compliance Expert',
			],
			philosophy:
				'Consistent quality builds trust and ensures long-term success.',
		},
		{
			id: 5,
			name: 'Thomas Larsen',
			role: 'Environmental Compliance Officer',
			specialty: 'Sustainability & Environmental Standards',
			experience: '8 years',
			image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
			story: 'Manages environmental compliance and sustainability initiatives across all construction projects, ensuring adherence to EU regulations.',
			certifications: [
				'ISO 14001 Environmental Management',
				'Environmental Engineering',
				'Sustainability Specialist',
			],
			philosophy:
				"Sustainable construction is not just responsible—it's essential for the future.",
		},
		{
			id: 6,
			name: 'Sofie Andersen',
			role: 'Government Relations Coordinator',
			specialty: 'Public Sector Contracts & Compliance',
			experience: '6 years',
			image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
			story: 'Manages relationships with government agencies and ensures compliance with public procurement regulations and requirements.',
			certifications: [
				'Public Procurement Specialist',
				'Government Contract Management',
				'Regulatory Affairs Expert',
			],
			philosophy:
				'Strong relationships with government partners are key to successful public projects.',
		},
	];

	return (
		<section className='py-12 sm:py-16 lg:py-24 bg-background'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6'>
						Our Professional Team
					</h2>
					<p className='body-primary text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto'>
						Each member of our team brings specialized expertise and
						professional qualifications. Together, we deliver
						construction projects that meet the highest standards of
						quality and compliance.
					</p>
				</div>

				{/* Team Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16'>
					{teamMembers?.map((member) => (
						<div
							key={member?.id}
							className='group'
						>
							<div className='bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-medium gentle-hover'>
								{/* Image */}
								<div className='relative overflow-hidden'>
									<Image
										src={member?.image}
										alt={`${member?.name} - ${member?.role} at Aarhus Contractor`}
										className='w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-medium'
									/>

									{/* Experience Badge */}
									<div className='absolute top-3 sm:top-4 right-3 sm:right-4 bg-brand-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium'>
										{member?.experience}
									</div>
								</div>

								{/* Content */}
								<div className='p-4 sm:p-6 space-y-3 sm:space-y-4'>
									<div>
										<h3 className='text-lg sm:text-xl font-bold text-foreground mb-1'>
											{member?.name}
										</h3>
										<p className='text-brand-primary font-medium mb-2 text-sm sm:text-base'>
											{member?.role}
										</p>
										<p className='text-xs sm:text-sm text-muted-foreground'>
											{member?.specialty}
										</p>
									</div>

									<p className='text-xs sm:text-sm text-foreground leading-relaxed'>
										{member?.story}
									</p>

									{/* Philosophy Quote */}
									<div className='bg-muted p-3 sm:p-4 rounded-lg border-l-3 border-brand-primary'>
										<p className='accent-text text-xs sm:text-sm text-brand-primary italic'>
											"{member?.philosophy}"
										</p>
									</div>

									{/* Certifications */}
									<div className='space-y-2'>
										<p className='text-xs font-semibold text-foreground uppercase tracking-wide'>
											Certifications
										</p>
										<div className='flex flex-wrap gap-1 sm:gap-2'>
											{member?.certifications?.map(
												(cert, index) => (
													<span
														key={index}
														className='text-xs bg-brand-secondary/20 text-brand-primary px-2 py-1 rounded-full'
													>
														{cert}
													</span>
												)
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Team Values */}
				<div className='bg-card rounded-2xl p-6 sm:p-8 lg:p-12 shadow-card'>
					<div className='text-center mb-8 sm:mb-12'>
						<h3 className='headline-secondary text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4'>
							Our Professional Values
						</h3>
						<p className='body-primary text-sm sm:text-base text-muted-foreground'>
							What unites us as professionals and guides every
							project we deliver
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8'>
						{[
							{
								icon: 'Shield',
								title: 'Quality & Compliance',
								description:
									'Every project meets the highest standards of quality and regulatory compliance',
							},
							{
								icon: 'Users',
								title: 'Client Partnership',
								description:
									'We build lasting relationships through trust, transparency, and professional excellence',
							},
							{
								icon: 'Leaf',
								title: 'Sustainability',
								description:
									'Responsible construction practices that meet environmental standards and regulations',
							},
							{
								icon: 'Award',
								title: 'Continuous Improvement',
								description:
									'Ongoing learning and development to maintain our position as industry leaders',
							},
						]?.map((value, index) => (
							<div
								key={index}
								className='text-center space-y-3 sm:space-y-4'
							>
								<div className='w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto'>
									<Icon
										name={value?.icon}
										size={20}
										className='text-brand-primary sm:w-7 sm:h-7'
									/>
								</div>
								<h4 className='text-base sm:text-lg font-semibold text-foreground'>
									{value?.title}
								</h4>
								<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
									{value?.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamSection;
