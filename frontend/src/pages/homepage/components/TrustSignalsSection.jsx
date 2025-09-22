import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TrustSignalsSection = () => {
	const certifications = [
		{
			id: 1,
			name: 'EU Public Procurement Directive',
			description: 'Compliant Contractor',
			icon: 'Shield',
			verified: true,
			number: 'EU-PP-2024-1847',
		},
		{
			id: 2,
			name: 'Danish Building Authority',
			description: 'Licensed General Contractor',
			icon: 'Award',
			verified: true,
			number: 'DK-2024-GC-1847',
		},
		{
			id: 3,
			name: 'ISO 14001 Environmental',
			description: 'Environmental Management',
			icon: 'Leaf',
			verified: true,
			number: 'ISO-14001-2024',
		},
		{
			id: 4,
			name: 'OHSAS 18001 Safety',
			description: 'Safety Management System',
			icon: 'Shield',
			verified: true,
			number: 'OHSAS-18001-2024',
		},
		{
			id: 5,
			name: 'CVR Registration',
			description: 'Danish Business Registry',
			icon: 'FileText',
			verified: true,
			number: 'CVR: 12345678',
		},
		{
			id: 6,
			name: 'EU VAT Number',
			description: 'European Union VAT',
			icon: 'Globe',
			verified: true,
			number: 'DK12345678',
		},
	];

	const partnerships = [
		{
			id: 1,
			name: 'Aarhus Municipality',
			role: 'Government Client',
			logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop',
			description: 'Municipal housing projects',
		},
		{
			id: 2,
			name: 'Danish Housing Association',
			role: 'Housing Partner',
			logo: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=120&h=60&fit=crop',
			description: 'Social housing development',
		},
		{
			id: 3,
			name: 'Central Denmark Region',
			role: 'Regional Government',
			logo: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=120&h=60&fit=crop',
			description: 'Public infrastructure projects',
		},
		{
			id: 4,
			name: 'Aarhus University',
			role: 'Educational Client',
			logo: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=120&h=60&fit=crop',
			description: 'Student housing development',
		},
	];

	const mediaFeatures = [
		{
			id: 1,
			publication: 'Construction Today',
			title: 'Aarhus Contractor Wins Major Government Housing Contract',
			date: 'August 2024',
			type: 'Industry News',
		},
		{
			id: 2,
			publication: 'Danish Building Review',
			title: 'Sustainable Construction Practices in Public Projects',
			date: 'June 2024',
			type: 'Case Study',
		},
		{
			id: 3,
			publication: 'Public Sector Construction',
			title: 'Innovative Approaches to Municipal Building Projects',
			date: 'April 2024',
			type: 'Industry Feature',
		},
	];

	const awards = [
		{
			year: '2024',
			title: 'Best Government Project',
			organization: 'Danish Construction Association',
			project: 'Municipal Office Renovation',
		},
		{
			year: '2023',
			title: 'Sustainable Building Excellence',
			organization: 'Danish Green Building Council',
			project: 'Social Housing Development',
		},
		{
			year: '2022',
			title: 'Public Sector Innovation Award',
			organization: 'Central Denmark Region',
			project: 'Student Housing Complex',
		},
	];

	return (
		<section className='py-8 bg-muted/20'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center space-y-6 mb-2'>
					<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto'>
						Professional Excellence
						<span className='block text-brand-primary'>
							Built on Trust
						</span>
					</h2>

					<p className='body-primary text-lg text-muted-foreground max-w-2xl mx-auto'>
						Fully certified, government compliant, and committed to
						the highest standards of Danish construction and
						professional excellence.
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
