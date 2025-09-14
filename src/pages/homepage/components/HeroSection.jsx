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
			title: 'Aarhus Villa Kitchen Transformation',
			location: 'Risskov, Aarhus',
			beforeImage:
				'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1556909045-f208e2d75806?w=1200&h=800&fit=crop',
			description:
				'From cramped 1970s layout to open Danish design sanctuary',
			completionDate: 'September 2024',
		},
		{
			id: 2,
			title: 'Historic Townhouse Revival',
			location: 'Aarhus C, Denmark',
			beforeImage:
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1560448075-bb485b067938?w=1200&h=800&fit=crop',
			description: 'Preserving heritage while embracing modern living',
			completionDate: 'August 2024',
		},
		{
			id: 3,
			title: 'Minimalist Bathroom Sanctuary',
			location: 'Højbjerg, Aarhus',
			beforeImage:
				'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1200&h=800&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&h=800&fit=crop',
			description:
				'Creating spa-like tranquility through thoughtful design',
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
			<div className='grid grid-cols-2'>
				{/* Content Container */}
				<div className='col-span-1'>
					<div className='w-full max-w-7xl mx-auto px-6 lg:px-8 py-8'>
						<div className='grid gap-12 items-center'>
							{/* Left Content */}
							<div className='space-y-8'>
								{/* Main Headline */}
								<div className='space-y-4'>
									<h1 className='headline-primary text-4xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight'>
										{t('hero.headline.line1')}
										<span className='block text-brand-primary'>
											{t('hero.headline.line2')}
										</span>
									</h1>

									<p className='body-primary text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed'>
										Where Danish design philosophy meets
										exceptional construction expertise. We
										transform spaces into sanctuaries that
										embody hygge and timeless beauty.
									</p>
								</div>

								{/* Project Info */}
								<div className='bg-card/80 p-6 rounded-xl border border-gray-400 shadow-lg border-border space-y-4'>
									<div className='flex items-center justify-between'>
										<div>
											<h3 className='font-headlines font-semibold text-lg text-foreground'>
												{currentProject?.title}
											</h3>
											<p className='text-muted-foreground text-sm'>
												{currentProject?.location} •{' '}
												{currentProject?.completionDate}
											</p>
										</div>

										{/* Before/After Toggle */}
										<div className='flex items-center bg-muted rounded-lg p-1'>
											<button
												onClick={() =>
													setIsBeforeView(true)
												}
												className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
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
												className={`px-3 py-1 text-xs font-medium rounded transition-all duration-200 ${
													!isBeforeView
														? 'bg-background text-foreground shadow-sm'
														: 'text-muted-foreground hover:text-foreground'
												}`}
											>
												After
											</button>
										</div>
									</div>

									<p className='text-sm text-muted-foreground'>
										{currentProject?.description}
									</p>
								</div>

								{/* CTA Buttons */}
								<div className='flex flex-col sm:flex-row gap-4'>
									<Button
										variant='default'
										size='lg'
										className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-semibold px-8 py-4 shadow-subtle'
										iconName='Calendar'
										iconPosition='left'
										onClick={() =>
											(window.location.href =
												'/consultation-journey')
										}
									>
										Begin Your Journey
									</Button>

									<Button
										variant='outline'
										size='lg'
										className='border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground font-cta font-medium px-8 py-4'
										iconName='Image'
										iconPosition='left'
										onClick={() =>
											(window.location.href =
												'/project-transformations-gallery')
										}
									>
										View Transformations
									</Button>
								</div>

								{/* Trust Indicators */}
								<div className='flex items-center space-x-6 pt-4'>
									<div className='flex items-center space-x-2'>
										<Icon
											name='Shield'
											size={20}
											className='text-success'
										/>
										<span className='text-sm text-muted-foreground'>
											Fully Licensed & Insured
										</span>
									</div>
									<div className='flex items-center space-x-2'>
										<Icon
											name='Star'
											size={20}
											className='text-conversion-accent'
										/>
										<span className='text-sm text-muted-foreground'>
											15+ Years Experience
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Background Image Container */}
				<div className='flex'>
					<div className='relative w-full h-full'>
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
						<div className='absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent'></div>
						<div className='absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent'></div>
						{/* Navigation Arrows */}
						<button
							onClick={prevSlide}
							className='absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-brand-primary hover:text-primary-foreground transition-all duration-300 shadow-subtle'
							aria-label='Previous project'
						>
							<Icon
								name='ChevronLeft'
								size={20}
							/>
						</button>
						<button
							onClick={nextSlide}
							className='absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-card/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-brand-primary hover:text-primary-foreground transition-all duration-300 shadow-subtle'
							aria-label='Next project'
						>
							<Icon
								name='ChevronRight'
								size={20}
							/>
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
