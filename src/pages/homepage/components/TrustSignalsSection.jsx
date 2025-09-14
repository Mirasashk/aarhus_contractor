import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrustSignalsSection = () => {
	const certifications = [
		{
			id: 1,
			name: 'Danish Building Authority',
			description: 'Licensed General Contractor',
			icon: 'Shield',
			verified: true,
			number: 'DK-2024-GC-1847',
		},
		{
			id: 2,
			name: 'Aarhus Municipality',
			description: 'Registered Local Business',
			icon: 'MapPin',
			verified: true,
			number: 'AAR-BUS-2009-0234',
		},
		{
			id: 3,
			name: 'Danish Insurance',
			description: 'Comprehensive Coverage',
			icon: 'Umbrella',
			verified: true,
			number: 'INS-COV-5M-DKK',
		},
		{
			id: 4,
			name: 'Quality Assurance',
			description: '10-Year Workmanship Guarantee',
			icon: 'Award',
			verified: true,
			number: 'QA-GUARANTEE-10Y',
		},
	];

	const partnerships = [
		{
			id: 1,
			name: 'Danish Design Centre',
			role: 'Design Partner',
			logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
			description: 'Collaborative design excellence',
		},
		{
			id: 2,
			name: 'Aarhus Timber Co.',
			role: 'Premium Materials Supplier',
			logo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=120&h=60&fit=crop',
			description: 'Sustainable Danish oak and pine',
		},
		{
			id: 3,
			name: 'Nordic Stone Works',
			role: 'Natural Stone Specialist',
			logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=60&fit=crop',
			description: 'Premium Danish granite and marble',
		},
		{
			id: 4,
			name: 'Hygge Interiors',
			role: 'Interior Design Consultant',
			logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=120&h=60&fit=crop',
			description: 'Authentic Danish interior styling',
		},
	];

	const mediaFeatures = [
		{
			id: 1,
			publication: 'Aarhus Stiftstidende',
			title: 'Local Contractor Brings Danish Design to Modern Homes',
			date: 'August 2024',
			type: 'Feature Article',
		},
		{
			id: 2,
			publication: 'Danish Architecture Review',
			title: 'Preserving Heritage Through Modern Renovation',
			date: 'June 2024',
			type: 'Case Study',
		},
		{
			id: 3,
			publication: 'Hygge Living Magazine',
			title: 'Creating Authentic Danish Interiors',
			date: 'April 2024',
			type: 'Design Feature',
		},
	];

	const awards = [
		{
			year: '2024',
			title: 'Best Residential Renovation',
			organization: 'Aarhus Construction Guild',
			project: 'Historic Townhouse Revival',
		},
		{
			year: '2023',
			title: 'Sustainable Building Excellence',
			organization: 'Danish Green Building Council',
			project: 'Eco-Friendly Kitchen Transformation',
		},
		{
			year: '2022',
			title: 'Craftsmanship Award',
			organization: 'Danish Contractors Association',
			project: 'Custom Oak Cabinetry Installation',
		},
	];

	return (
		<section className='py-20 bg-muted/20'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center space-y-6 mb-16'>
					<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto'>
						Your Peace of Mind is
						<span className='block text-brand-primary'>
							Our Priority
						</span>
					</h2>

					<p className='body-primary text-lg text-muted-foreground max-w-2xl mx-auto'>
						Fully licensed, insured, and committed to the highest
						standards of Danish craftsmanship and professional
						excellence.
					</p>
				</div>

				{/* Certifications Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20'>
					{certifications?.map((cert) => (
						<div
							key={cert?.id}
							className='bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 text-center space-y-4'
						>
							<div className='w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto'>
								<Icon
									name={cert?.icon}
									size={24}
									className='text-success'
								/>
							</div>

							<div className='space-y-2'>
								<h3 className='font-headlines font-semibold text-card-foreground'>
									{cert?.name}
								</h3>
								<p className='text-sm text-muted-foreground'>
									{cert?.description}
								</p>
								<div className='flex items-center justify-center space-x-1'>
									<Icon
										name='CheckCircle'
										size={14}
										className='text-success'
									/>
									<span className='text-xs text-success font-medium'>
										Verified
									</span>
								</div>
							</div>

							<div className='pt-2 border-t border-border'>
								<span className='text-xs text-muted-foreground font-mono'>
									{cert?.number}
								</span>
							</div>
						</div>
					))}
				</div>

				{/* Partnerships Section */}
				<div className='space-y-12 mb-20'>
					<div className='text-center space-y-4'>
						<h3 className='headline-secondary text-2xl lg:text-3xl font-bold text-foreground'>
							Trusted Partnerships
						</h3>
						<p className='body-secondary text-muted-foreground max-w-2xl mx-auto'>
							We collaborate with Denmark's finest suppliers and
							craftspeople to ensure every project meets the
							highest standards of quality and authenticity.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{partnerships?.map((partner) => (
							<div
								key={partner?.id}
								className='bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300 text-center space-y-4'
							>
								<div className='w-20 h-12 mx-auto overflow-hidden rounded-lg'>
									<Image
										src={partner?.logo}
										alt={partner?.name}
										className='w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300'
									/>
								</div>

								<div className='space-y-2'>
									<h4 className='font-headlines font-semibold text-card-foreground'>
										{partner?.name}
									</h4>
									<p className='text-sm text-brand-primary font-medium'>
										{partner?.role}
									</p>
									<p className='text-xs text-muted-foreground'>
										{partner?.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* Contact for References */}
				<div className='bg-brand-primary/8 p-6 rounded-xl border border-brand-primary shadow-elevated'>
					<div className='space-y-4'>
						<div className='flex items-center space-x-2'>
							<Icon
								name='Users'
								size={20}
								className='text-brand-primary'
							/>
							<h4 className='font-headlines font-semibold text-foreground'>
								Client References Available
							</h4>
						</div>
						<p className='text-sm text-muted-foreground'>
							We're happy to connect you with past clients who can
							share their experience working with Aarhus
							Contractor. Contact us for references specific to
							your project type.
						</p>
						<div className='flex items-center space-x-2 text-sm text-brand-primary'>
							<Icon
								name='Phone'
								size={16}
							/>
							<span>+45 XX XX XX XX</span>
						</div>
					</div>
				</div>

				{/* Awards and Recognition
			//</div><div className='grid lg:grid-cols-2 gap-16 items-start'> */}
				{/* Awards
				<div className='space-y-8'>
					<div className='space-y-4'>
						<h3 className='headline-secondary text-2xl font-bold text-foreground'>
							Awards & Recognition
						</h3>
						<p className='body-secondary text-muted-foreground'>
							Our commitment to excellence has been recognized by
							industry leaders and professional organizations
							throughout Denmark.
						</p>
					</div>

					<div className='space-y-4'>
						{awards?.map((award, index) => (
							<div
								key={index}
								className='bg-card p-6 rounded-xl shadow-card border-l-4 border-conversion-accent'
							>
								<div className='flex items-start justify-between'>
									<div className='space-y-2'>
										<div className='flex items-center space-x-2'>
											<Icon
												name='Trophy'
												size={16}
												className='text-conversion-accent'
											/>
											<span className='text-sm font-bold text-conversion-accent'>
												{award?.year}
											</span>
										</div>
										<h4 className='font-headlines font-semibold text-card-foreground'>
											{award?.title}
										</h4>
										<p className='text-sm text-muted-foreground'>
											{award?.organization}
										</p>
										<p className='text-xs text-muted-foreground italic'>
											Project: {award?.project}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div> */}

				{/* Media Features
				<div className='space-y-8'>
					<div className='space-y-4'>
						<h3 className='headline-secondary text-2xl font-bold text-foreground'>
							Media Features
						</h3>
						<p className='body-secondary text-muted-foreground'>
							Our work and philosophy have been featured in
							leading Danish publications and design magazines.
						</p>
					</div>

					<div className='space-y-4'>
						{mediaFeatures?.map((feature) => (
							<div
								key={feature?.id}
								className='bg-card p-6 rounded-xl shadow-card hover:shadow-elevated transition-all duration-300'
							>
								<div className='space-y-3'>
									<div className='flex items-center justify-between'>
										<span className='text-sm font-medium text-brand-primary'>
											{feature?.publication}
										</span>
										<span className='text-xs text-muted-foreground'>
											{feature?.date}
										</span>
									</div>

									<h4 className='font-headlines font-semibold text-card-foreground leading-tight'>
										{feature?.title}
									</h4>

									<div className='flex items-center space-x-2'>
										<Icon
											name='FileText'
											size={14}
											className='text-muted-foreground'
										/>
										<span className='text-xs text-muted-foreground'>
											{feature?.type}
										</span>
									</div>
								</div>
							</div>
						))}
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default TrustSignalsSection;
