import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [isBeforeView, setIsBeforeView] = useState(true);
	const { t } = useTranslation('homepage');

	const heroProjects = [
		{
			id: 1,
			title: 'Social Housing Development - 48 Units',
			location: 'Aarhus N, Denmark',
			beforeImage:
				'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&h=800&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop',
			description:
				'Modern affordable housing complex with energy-efficient design and accessibility compliance',
			completionDate: 'September 2024',
		},
		{
			id: 2,
			title: 'Municipal Office Renovation',
			location: 'Aarhus C, Denmark',
			beforeImage:
				'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
			description:
				'Complete modernization of government building with sustainable materials and smart systems',
			completionDate: 'August 2024',
		},
		{
			id: 3,
			title: 'Student Housing Complex - 120 Units',
			location: 'Aarhus V, Denmark',
			beforeImage:
				'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1200&h=800&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1529408632839-a54952c491e5?w=1200&h=800&fit=crop',
			description:
				'Contemporary student accommodation with shared facilities and sustainable design',
			completionDate: 'July 2024',
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % heroProjects?.length);
		}, 20000);
		return () => clearInterval(interval);
	}, []);

	const currentProject = heroProjects?.[currentSlide];

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev + 1) % heroProjects?.length);
	};

	const prevSlide = () => {
		setCurrentSlide(
			(prev) => (prev - 1 + heroProjects?.length) % heroProjects?.length
		);
	};

	return (
		<section className='relative min-h-screen bg-background overflow-hidden'>
			<div className='grid grid-cols-1 lg:grid-cols-2'>
				{/* Content Container */}
				<div className='col-span-1 order-2 lg:order-1'>
					<div className='w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 xl:px-18 py-6 sm:py-8'>
						<div className='grid gap-6 sm:gap-8 lg:gap-12 items-center'>
							{/* Left Content */}
							<div className='space-y-4 sm:space-y-6 lg:space-y-8'>
								{/* Main Headline */}
								<div className='space-y-3 sm:space-y-4'>
									<h1 className='headline-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight'>
										{t('hero.headline.line1')}
										<span className='block text-brand-primary'>
											{t('hero.headline.line2')}
										</span>
									</h1>

									<p className='body-primary text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed'>
										Delivering large-scale construction
										projects with Danish precision,
										compliance expertise, and proven track
										record in public sector development.
									</p>
								</div>

								{/* Project Info */}
								<div className='bg-card/80 p-4 sm:p-6 rounded-xl border border-gray-400 shadow-lg border-border space-y-3 sm:space-y-4'>
									<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4'>
										<div className='flex-1'>
											<h3 className='font-headlines font-semibold text-base sm:text-lg text-foreground'>
												{currentProject?.title}
											</h3>
											<p className='text-muted-foreground text-xs sm:text-sm'>
												{currentProject?.location} •{' '}
												{currentProject?.completionDate}
											</p>
										</div>

										{/* Before/After Toggle */}
										<div className='flex items-center bg-muted rounded-lg p-1 self-start sm:self-auto'>
											<button
												onClick={() =>
													setIsBeforeView(true)
												}
												className={`px-2 sm:px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
													isBeforeView
														? 'bg-background text-foreground shadow-sm'
														: 'text-muted-foreground hover:text-foreground'
												}`}
											>
												Before
											</button>
											<button
												onClick={() =>
													setIsBeforeView(false)
												}
												className={`px-2 sm:px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
													!isBeforeView
														? 'bg-background text-foreground shadow-sm'
														: 'text-muted-foreground hover:text-foreground'
												}`}
											>
												After
											</button>
										</div>
									</div>

									<p className='text-xs sm:text-sm text-muted-foreground'>
										{currentProject?.description}
									</p>
								</div>

								{/* CTA Buttons */}
								<div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
									<Button
										variant='default'
										size='lg'
										className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-semibold px-6 sm:px-8 py-3 sm:py-4 shadow-subtle text-sm sm:text-base'
										iconName='FileText'
										iconPosition='left'
										onClick={() =>
											(window.location.href =
												'/consultation-journey')
										}
									>
										Request Project Proposal
									</Button>

									<Button
										variant='outline'
										size='lg'
										className='border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground font-cta font-medium px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base'
										iconName='Image'
										iconPosition='left'
										onClick={() =>
											(window.location.href =
												'/project-transformations-gallery')
										}
									>
										View Our Portfolio
									</Button>
								</div>

								{/* Trust Indicators */}
								<div className='flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-3 sm:pt-4'>
									<div className='flex items-center space-x-2'>
										<Icon
											name='Shield'
											size={16}
											className='text-success sm:w-5 sm:h-5'
										/>
										<span className='text-xs sm:text-sm text-muted-foreground'>
											EU Public Procurement Certified
										</span>
									</div>
									<div className='flex items-center space-x-2'>
										<Icon
											name='Award'
											size={16}
											className='text-conversion-accent sm:w-5 sm:h-5'
										/>
										<span className='text-xs sm:text-sm text-muted-foreground'>
											ISO 9001:2015 Certified
										</span>
									</div>
									<div className='flex items-center space-x-2'>
										<Icon
											name='CheckCircle'
											size={16}
											className='text-success sm:w-5 sm:h-5'
										/>
										<span className='text-xs sm:text-sm text-muted-foreground'>
											Government Contract Approved
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Background Image Container */}
				<div className='flex order-1 lg:order-2'>
					<div className='relative w-full h-64 sm:h-80 md:h-96 lg:h-full'>
						<Image
							src={
								isBeforeView
									? currentProject?.beforeImage
									: currentProject?.afterImage
							}
							alt={`${currentProject?.title} - ${
								isBeforeView ? 'Before' : 'After'
							}`}
							className='w-full h-full object-cover transition-all duration-1000 ease-in-out'
						/>

						{/* Overlay for text readability */}
						<div className='absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent lg:from-background/90 lg:via-background/60 lg:to-transparent'></div>
						<div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent'></div>

						{/* Navigation Arrows */}
						<button
							onClick={prevSlide}
							className='absolute left-2 sm:left-4 lg:left-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-brand-primary hover:text-primary-foreground transition-all duration-300 shadow-subtle'
							aria-label='Previous project'
						>
							<Icon
								name='ChevronLeft'
								size={16}
								className='sm:w-5 sm:h-5 lg:w-5 lg:h-5'
							/>
						</button>
						<button
							onClick={nextSlide}
							className='absolute right-2 sm:right-4 lg:right-6 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-brand-primary hover:text-primary-foreground transition-all duration-300 shadow-subtle'
							aria-label='Next project'
						>
							<Icon
								name='ChevronRight'
								size={16}
								className='sm:w-5 sm:h-5 lg:w-5 lg:h-5'
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
