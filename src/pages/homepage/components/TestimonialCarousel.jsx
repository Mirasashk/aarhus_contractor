import React, { useState, useEffect } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialCarousel = () => {
	const [currentTestimonial, setCurrentTestimonial] = useState(0);
	const [isAutoPlaying, setIsAutoPlaying] = useState(true);

	const testimonials = [
		{
			id: 1,
			name: 'Lars & Mette Andersen',
			location: 'Risskov, Aarhus',
			project: 'Kitchen & Living Room Renovation',
			image: 'https://randomuser.me/api/portraits/men/32.jpg',
			partnerImage: 'https://randomuser.me/api/portraits/women/44.jpg',
			rating: 5,
			quote: `Aarhus Contractor transformed our 1970s home into a modern Danish sanctuary. Their attention to detail and understanding of hygge principles created exactly the warm, functional space we dreamed of. The craftsmanship is exceptional.`,
			details: '6-week kitchen renovation with custom oak cabinetry',
			completedDate: 'August 2024',
			beforeImage:
				'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1556909045-f208e2d75806?w=400&h=300&fit=crop',
		},
		{
			id: 2,
			name: 'Emma & Thomas Schmidt',
			location: 'Højbjerg, Aarhus',
			project: 'Master Bathroom Renovation',
			image: 'https://randomuser.me/api/portraits/women/28.jpg',
			partnerImage: 'https://randomuser.me/api/portraits/men/35.jpg',
			rating: 5,
			quote: `From the initial consultation to the final reveal, every step was professional and thoughtful. They created a spa-like bathroom that feels like a retreat. The natural materials and craftsmanship are outstanding.`,
			details: '4-week bathroom transformation with underfloor heating',
			completedDate: 'July 2024',
			beforeImage:
				'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=400&h=300&fit=crop',
		},
		{
			id: 3,
			name: 'Henrik Johannsen',
			location: 'Aarhus C, Denmark',
			project: 'Whole Home Renovation',
			image: 'https://randomuser.me/api/portraits/men/45.jpg',
			partnerImage: null,
			rating: 5,
			quote: `As a single professional, I needed a space that was both functional and beautiful. Aarhus Contractor delivered beyond my expectations. The open-plan design and built-in storage solutions are perfect for my lifestyle.`,
			details: '10-week complete home transformation',
			completedDate: 'September 2024',
			beforeImage:
				'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
		},
		{
			id: 4,
			name: 'Anna & Michael Weber',
			location: 'Viby J, Aarhus',
			project: 'Kitchen Island & Dining Area',
			image: 'https://randomuser.me/api/portraits/women/38.jpg',
			partnerImage: 'https://randomuser.me/api/portraits/men/42.jpg',
			rating: 5,
			quote: `The custom kitchen island has become the heart of our home. Our family gatherings are now centered around this beautiful, functional space. The quality of workmanship is evident in every detail.`,
			details:
				'3-week kitchen island installation with integrated seating',
			completedDate: 'June 2024',
			beforeImage:
				'https://images.unsplash.com/photo-1556909045-f208e2d75806?w=400&h=300&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop',
		},
		{
			id: 5,
			name: 'Sofia & Jakob Nielsen',
			location: 'Brabrand, Aarhus',
			project: 'Living Room & Home Office',
			image: 'https://randomuser.me/api/portraits/women/31.jpg',
			partnerImage: 'https://randomuser.me/api/portraits/men/29.jpg',
			rating: 5,
			quote: `Working from home required a complete rethink of our living space. Aarhus Contractor created distinct zones that flow beautifully together. The built-in office space is both private and connected to family life.`,
			details:
				'8-week living space optimization with home office integration',
			completedDate: 'May 2024',
			beforeImage:
				'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
			afterImage:
				'https://images.unsplash.com/photo-1560448075-bb485b067938?w=400&h=300&fit=crop',
		},
	];

	useEffect(() => {
		if (!isAutoPlaying) return;

		const interval = setInterval(() => {
			setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
		}, 12000);

		return () => clearInterval(interval);
	}, [isAutoPlaying, testimonials?.length]);

	const nextTestimonial = () => {
		setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
		setIsAutoPlaying(false);
	};

	const prevTestimonial = () => {
		setCurrentTestimonial(
			(prev) => (prev - 1 + testimonials?.length) % testimonials?.length
		);
		setIsAutoPlaying(false);
	};

	const goToTestimonial = (index) => {
		setCurrentTestimonial(index);
		setIsAutoPlaying(false);
	};

	const current = testimonials?.[currentTestimonial];

	return (
		<section className='py-20 bg-background'>
			<div className='max-w-6xl mx-auto px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center space-y-6 mb-16'>
					<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground max-w-3xl mx-auto'>
						Testimonials That
						<span className='block text-brand-primary'>
							Speak for Themselves
						</span>
					</h2>

					<p className='body-primary text-lg text-muted-foreground max-w-2xl mx-auto'>
						Real clients, real transformations, real satisfaction.
						Discover how we've helped our clients create their dream
						spaces.
					</p>
				</div>

				{/* Main Testimonial */}
				<div className='relative'>
					<div className='bg-card rounded-2xl shadow-elevated overflow-hidden'>
						<div className='grid lg:grid-cols-2'>
							{/* Left Content */}
							<div className='p-8 lg:p-12 space-y-8'>
								{/* Rating */}
								<div className='flex items-center space-x-1'>
									{[...Array(current?.rating)]?.map(
										(_, i) => (
											<Icon
												key={i}
												name='Star'
												size={20}
												className='text-conversion-accent fill-current'
											/>
										)
									)}
								</div>

								{/* Quote */}
								<div className='space-y-6'>
									<Icon
										name='Quote'
										size={32}
										className='text-brand-primary/30'
									/>
									<blockquote className='body-primary text-lg lg:text-xl text-card-foreground leading-relaxed'>
										"{current?.quote}"
									</blockquote>
								</div>

								{/* Client Info */}
								<div className='space-y-4'>
									<div className='flex items-center space-x-4'>
										<div className='flex -space-x-2'>
											<Image
												src={current?.image}
												alt={current?.name}
												className='w-12 h-12 rounded-full border-2 border-background object-cover'
											/>
											{current?.partnerImage && (
												<Image
													src={current?.partnerImage}
													alt={`${current?.name} partner`}
													className='w-12 h-12 rounded-full border-2 border-background object-cover'
												/>
											)}
										</div>

										<div>
											<h4 className='font-headlines font-semibold text-card-foreground'>
												{current?.name}
											</h4>
											<p className='text-sm text-muted-foreground'>
												{current?.location}
											</p>
										</div>
									</div>

									{/* Project Details */}
									<div className='bg-muted/50 p-4 rounded-xl space-y-2'>
										<div className='flex items-center justify-between'>
											<span className='text-sm font-medium text-card-foreground'>
												{current?.project}
											</span>
											<span className='text-xs text-muted-foreground'>
												{current?.completedDate}
											</span>
										</div>
										<p className='text-xs text-muted-foreground'>
											{current?.details}
										</p>
									</div>
								</div>
							</div>

							{/* Right Content - Before/After Images */}
							<div className='relative h-64 lg:h-auto'>
								<div className='grid grid-cols-2 h-full'>
									<div className='relative overflow-hidden'>
										<Image
											src={current?.beforeImage}
											alt={`${current?.project} - Before`}
											className='w-full h-full object-cover'
										/>
										<div className='absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full'>
											<span className='text-xs font-medium text-foreground'>
												Before
											</span>
										</div>
									</div>

									<div className='relative overflow-hidden'>
										<Image
											src={current?.afterImage}
											alt={`${current?.project} - After`}
											className='w-full h-full object-cover'
										/>
										<div className='absolute top-4 right-4 bg-brand-primary/90 backdrop-blur-sm px-3 py-1 rounded-full'>
											<span className='text-xs font-medium text-primary-foreground'>
												After
											</span>
										</div>
									</div>
								</div>

								{/* Overlay Gradient */}
								<div className='absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-card/20 lg:to-card/40'></div>
							</div>
						</div>
					</div>

					{/* Navigation Arrows */}
					<button
						onClick={prevTestimonial}
						className='absolute left-[-12px] top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-brand-primary hover:text-primary-foreground transition-all duration-300 shadow-subtle'
						aria-label='Previous testimonial'
					>
						<Icon
							name='ChevronLeft'
							size={20}
						/>
					</button>

					<button
						onClick={nextTestimonial}
						className='absolute right-[-60px] top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-brand-primary hover:text-primary-foreground transition-all duration-300 shadow-subtle'
						aria-label='Next testimonial'
					>
						<Icon
							name='ChevronRight'
							size={20}
						/>
					</button>
				</div>

				{/* Testimonial Indicators */}
				<div className='flex justify-center space-x-3 mt-8'>
					{testimonials?.map((_, index) => (
						<button
							key={index}
							onClick={() => goToTestimonial(index)}
							className={`w-3 h-3 rounded-full transition-all duration-300 ${
								index === currentTestimonial
									? 'bg-brand-primary scale-125'
									: 'bg-muted hover:bg-muted-foreground/50'
							}`}
							aria-label={`Go to testimonial ${index + 1}`}
						/>
					))}
				</div>

				{/* Trust Metrics */}
				<div className='grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-border'>
					<div className='text-center space-y-2'>
						<div className='text-3xl font-bold text-brand-primary'>
							20+
						</div>
						<div className='text-sm text-muted-foreground'>
							Projects Completed
						</div>
					</div>
					<div className='text-center space-y-2'>
						<div className='text-3xl font-bold text-brand-primary'>
							100%
						</div>
						<div className='text-sm text-muted-foreground'>
							Client Satisfaction
						</div>
					</div>
					<div className='text-center space-y-2'>
						<div className='text-3xl font-bold text-brand-primary'>
							15+
						</div>
						<div className='text-sm text-muted-foreground'>
							Years Experience
						</div>
					</div>
					<div className='text-center space-y-2'>
						<div className='text-3xl font-bold text-brand-primary'>
							4.9
						</div>
						<div className='text-sm text-muted-foreground'>
							Average Rating
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TestimonialCarousel;
