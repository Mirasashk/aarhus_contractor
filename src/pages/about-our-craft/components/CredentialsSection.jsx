import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CredentialsSection = () => {
	const certifications = [
		{
			title: 'EU Public Procurement Directive Compliance',
			issuer: 'European Union',
			year: '2021',
			description:
				'Full compliance with EU public procurement regulations, enabling participation in government contracts across Europe.',
			icon: 'Globe',
			color: 'bg-brand-primary',
		},
		{
			title: 'ISO 9001:2015 Quality Management',
			issuer: 'International Organization for Standardization',
			year: '2018',
			description:
				'International standard ensuring consistent quality management systems and continuous improvement processes.',
			icon: 'Award',
			color: 'bg-brand-secondary',
		},
		{
			title: 'ISO 14001 Environmental Management',
			issuer: 'International Organization for Standardization',
			year: '2020',
			description:
				'Environmental management system certification ensuring sustainable construction practices and compliance.',
			icon: 'Leaf',
			color: 'bg-success',
		},
		{
			title: 'OHSAS 18001 Safety Management',
			issuer: 'Occupational Health & Safety',
			year: '2019',
			description:
				'Occupational health and safety management system ensuring worker safety and regulatory compliance.',
			icon: 'Shield',
			color: 'bg-conversion-accent',
		},
		{
			title: 'Danish Building Authority License',
			issuer: 'Danish Building Authority',
			year: '2009',
			description:
				'Licensed general contractor authorized to perform construction work in Denmark with full regulatory compliance.',
			icon: 'Building',
			color: 'bg-brand-primary',
		},
		{
			title: 'Government Contract Specialist',
			issuer: 'Danish Procurement Authority',
			year: '2022',
			description:
				'Specialized certification for managing government contracts and public sector construction projects.',
			icon: 'FileText',
			color: 'bg-brand-secondary',
		},
	];

	const insuranceDetails = [
		{
			type: 'Professional Liability Insurance',
			coverage: '25,000,000 DKK',
			provider: 'Tryg Insurance',
			description:
				'Comprehensive coverage for professional construction services and project management',
			icon: 'Shield',
		},
		{
			type: 'General Liability Insurance',
			coverage: '50,000,000 DKK',
			provider: 'Alm. Brand Insurance',
			description:
				'Protection against property damage and third-party injury claims on large-scale projects',
			icon: 'Building',
		},
		{
			type: "Workers' Compensation",
			coverage: 'Full Coverage',
			provider: "Danish Workers' Insurance",
			description:
				'Complete protection for all team members during construction work',
			icon: 'Users',
		},
		{
			type: 'Equipment & Machinery Insurance',
			coverage: '10,000,000 DKK',
			provider: 'Codan Insurance',
			description:
				'Coverage for construction equipment and specialized machinery',
			icon: 'Wrench',
		},
		{
			type: 'Environmental Liability Insurance',
			coverage: '15,000,000 DKK',
			provider: 'If Insurance',
			description:
				'Protection against environmental damage and pollution claims',
			icon: 'Leaf',
		},
		{
			type: 'Cyber Liability Insurance',
			coverage: '5,000,000 DKK',
			provider: 'Tryg Insurance',
			description:
				'Protection against cyber threats and data breaches in project management',
			icon: 'Shield',
		},
	];

	const memberships = [
		{
			organization: 'Danish Construction Association',
			role: 'Full Member',
			since: '2009',
			benefits:
				'Industry standards updates, regulatory compliance guidance, and professional development',
		},
		{
			organization: 'EU Construction Federation',
			role: 'Certified Member',
			since: '2021',
			benefits:
				'European construction standards, cross-border project opportunities, and regulatory updates',
		},
		{
			organization: 'Aarhus Chamber of Commerce',
			role: 'Active Member',
			since: '2009',
			benefits:
				'Local business network, government relations, and community development participation',
		},
		{
			organization: 'Green Building Council Denmark',
			role: 'Certified Professional',
			since: '2018',
			benefits:
				'Sustainable construction practices, environmental standards, and green building certifications',
		},
		{
			organization: 'Danish Procurement Association',
			role: 'Professional Member',
			since: '2020',
			benefits:
				'Public procurement best practices, government contract opportunities, and compliance training',
		},
		{
			organization: 'International Project Management Institute',
			role: 'Certified Member',
			since: '2019',
			benefits:
				'Project management standards, professional development, and industry best practices',
		},
	];

	return (
		<section className='py-12 sm:py-16 lg:py-24 bg-background'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center mb-12 sm:mb-16'>
					<h2 className='headline-secondary text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 sm:mb-6'>
						Professional Credentials & Compliance
					</h2>
					<p className='body-primary text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto'>
						Our certifications represent our commitment to
						professional excellence, regulatory compliance, and
						delivering construction projects that meet the highest
						international standards.
					</p>
				</div>

				{/* Certifications Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20'>
					{certifications?.map((cert, index) => (
						<div
							key={index}
							className='bg-card rounded-2xl p-4 sm:p-6 lg:p-8 shadow-card hover:shadow-elevated transition-shadow duration-medium'
						>
							<div className='flex items-start space-x-4 sm:space-x-6'>
								<div
									className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 ${cert?.color} rounded-full flex items-center justify-center`}
								>
									<Icon
										name={cert?.icon}
										size={20}
										className='text-white sm:w-7 sm:h-7'
									/>
								</div>

								<div className='flex-1 space-y-2 sm:space-y-3'>
									<div>
										<h3 className='text-base sm:text-lg lg:text-xl font-bold text-foreground mb-1'>
											{cert?.title}
										</h3>
										<div className='flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-muted-foreground'>
											<span>{cert?.issuer}</span>
											<span className='hidden sm:inline'>
												•
											</span>
											<span>{cert?.year}</span>
										</div>
									</div>

									<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
										{cert?.description}
									</p>

									<div className='flex items-center space-x-2 text-xs sm:text-sm text-brand-primary'>
										<Icon
											name='ExternalLink'
											size={12}
											className='sm:w-4 sm:h-4'
										/>
										<span>Verification Available</span>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>

				{/* Insurance Coverage */}
				<div className='bg-card rounded-2xl p-6 sm:p-8 lg:p-12 shadow-card mb-12 sm:mb-16'>
					<div className='text-center mb-8 sm:mb-12'>
						<h3 className='headline-secondary text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-3 sm:mb-4'>
							Comprehensive Insurance Coverage
						</h3>
						<p className='body-primary text-sm sm:text-base text-muted-foreground'>
							Your project security is our priority. We maintain
							extensive insurance coverage to protect both your
							investment and our team throughout every
							construction project.
						</p>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8'>
						{insuranceDetails?.map((insurance, index) => (
							<div
								key={index}
								className='bg-background p-4 sm:p-6 rounded-xl border border-border'
							>
								<div className='flex items-start space-x-3 sm:space-x-4'>
									<div className='flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center'>
										<Icon
											name={insurance?.icon}
											size={18}
											className='text-brand-primary sm:w-6 sm:h-6'
										/>
									</div>

									<div className='flex-1 space-y-2'>
										<h4 className='font-semibold text-foreground text-sm sm:text-base'>
											{insurance?.type}
										</h4>
										<div className='flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm'>
											<span className='text-brand-primary font-medium'>
												{insurance?.coverage}
											</span>
											<span className='hidden sm:inline text-muted-foreground'>
												•
											</span>
											<span className='text-muted-foreground'>
												{insurance?.provider}
											</span>
										</div>
										<p className='text-xs sm:text-sm text-muted-foreground leading-relaxed'>
											{insurance?.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className='mt-6 sm:mt-8 p-4 sm:p-6 bg-brand-primary/5 rounded-xl border border-brand-primary/20'>
						<div className='flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3'>
							<Icon
								name='Info'
								size={16}
								className='text-brand-primary sm:w-5 sm:h-5'
							/>
							<h4 className='font-semibold text-foreground text-sm sm:text-base'>
								Insurance Verification
							</h4>
						</div>
						<p className='text-xs sm:text-sm text-muted-foreground'>
							All insurance certificates are available for review
							upon request. We provide certificate of insurance
							for every project, ensuring you have complete
							documentation for your records and additional
							protection.
						</p>
					</div>
				</div>

				{/* Professional Memberships */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start'>
					<div>
						<h3 className='headline-secondary text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-6 sm:mb-8'>
							Professional Memberships
						</h3>

						<div className='space-y-4 sm:space-y-6'>
							{memberships?.map((membership, index) => (
								<div
									key={index}
									className='bg-card p-4 sm:p-6 rounded-xl shadow-subtle'
								>
									<div className='flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 sm:mb-3 space-y-1 sm:space-y-0'>
										<h4 className='font-semibold text-foreground text-sm sm:text-base'>
											{membership?.organization}
										</h4>
										<span className='text-xs sm:text-sm text-brand-primary font-medium'>
											{membership?.since}
										</span>
									</div>

									<p className='text-xs sm:text-sm text-muted-foreground mb-2'>
										{membership?.role}
									</p>
									<p className='text-xs sm:text-sm text-foreground leading-relaxed'>
										{membership?.benefits}
									</p>
								</div>
							))}
						</div>
					</div>

					<div className='relative order-first lg:order-last'>
						<div className='overflow-hidden rounded-2xl shadow-card'>
							<Image
								src='https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=500&fit=crop'
								alt='Professional construction certificates and awards displayed in office'
								className='w-full h-64 sm:h-80 md:h-96 lg:h-[500px] object-cover'
							/>
						</div>

						{/* Quality Guarantee Badge */}
						<div className='absolute -bottom-3 sm:-bottom-6 -right-3 sm:-right-6 bg-brand-primary text-primary-foreground p-4 sm:p-6 rounded-xl shadow-elevated'>
							<div className='text-center'>
								<Icon
									name='Award'
									size={24}
									className='mx-auto mb-1 sm:mb-2 sm:w-8 sm:h-8'
								/>
								<p className='font-bold text-xs sm:text-sm'>
									Quality Guarantee
								</p>
								<p className='text-xs opacity-90'>
									Professional Standards
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Trust Statement */}
				<div className='mt-12 sm:mt-16 lg:mt-20 text-center'>
					<div className='bg-muted p-6 sm:p-8 lg:p-12 rounded-2xl max-w-4xl mx-auto'>
						<Icon
							name='Shield'
							size={32}
							className='text-brand-primary mx-auto mb-4 sm:mb-6 sm:w-12 sm:h-12'
						/>
						<h3 className='headline-secondary text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4'>
							Our Professional Commitment
						</h3>
						<p className='body-primary text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed'>
							These credentials represent our commitment to
							professional excellence, but our true measure is the
							trust our clients place in us. Every certification,
							every insurance policy, every membership is
							maintained not just for compliance, but as a promise
							that your project will receive the highest standard
							of professional construction services.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CredentialsSection;
