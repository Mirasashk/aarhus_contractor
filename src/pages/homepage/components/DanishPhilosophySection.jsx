import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const DanishPhilosophySection = () => {
	const philosophyPrinciples = [
		{
			id: 1,
			icon: 'Heart',
			title: 'Hygge Through Design',
			description:
				'Creating spaces that embody comfort, coziness, and contentment - the essence of Danish living philosophy.',
			details:
				'Every element is chosen to promote well-being and create a sense of sanctuary within your home.',
		},
		{
			id: 2,
			icon: 'Leaf',
			title: 'Natural Materials',
			description:
				'Embracing the beauty of authentic materials - oak, stone, and natural fibers that age gracefully with time.',
			details:
				'We source locally when possible, supporting Danish craftsmanship and reducing environmental impact.',
		},
		{
			id: 3,
			icon: 'Sun',
			title: 'Light & Space',
			description:
				'Maximizing natural light and creating open, flowing spaces that connect you with the changing seasons.',
			details:
				"Strategic placement of windows, mirrors, and light colors to combat Denmark's darker months.",
		},
		{
			id: 4,
			icon: 'Compass',
			title: 'Functional Beauty',
			description:
				'Where every design choice serves both aesthetic and practical purposes - true Danish design philosophy.',
			details:
				'Beautiful storage solutions, multi-functional furniture, and thoughtful space planning.',
		},
	];

	const craftProcess = [
		{
			step: '01',
			title: 'Listen & Understand',
			description:
				'We begin by understanding your needs, and vision for your space.',
			icon: 'Ear',
		},
		{
			step: '02',
			title: 'Design & Plan',
			description:
				'Creating detailed plans that honor Danish design principles while meeting your specific requirements.',
			icon: 'PenTool',
		},
		{
			step: '03',
			title: 'Craft & Build',
			description:
				'Meticulous construction using traditional techniques combined with modern efficiency.',
			icon: 'Hammer',
		},
		{
			step: '04',
			title: 'Perfect & Deliver',
			description:
				'Final touches and quality assurance to ensure every detail meets our exacting standards.',
			icon: 'CheckCircle',
		},
	];

	return (
		<section className='py-20 bg-muted/30'>
			<div className='max-w-7xl mx-auto px-6 lg:px-8'>
				{/* Section Header */}
				<div className='text-center space-y-6 mb-20'>
					<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground max-w-4xl mx-auto'>
						Danish Design Philosophy
						<span className='block text-brand-primary'>
							Meets Craftsmanship
						</span>
					</h2>

					<p className='body-primary text-lg text-muted-foreground max-w-3xl mx-auto'>
						Our approach combines centuries-old Danish craftsmanship
						traditions with contemporary design sensibilities,
						creating spaces that are both timeless and thoroughly
						modern.
					</p>
				</div>

				{/* Philosophy Grid */}
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20'>
					{philosophyPrinciples?.map((principle) => (
						<div
							key={principle?.id}
							className='group bg-card p-8 rounded-xl shadow-card hover:shadow-elevated transition-all duration-500 gentle-hover text-center'
						>
							<div className='w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-primary/20 transition-colors duration-300'>
								<Icon
									name={principle?.icon}
									size={24}
									className='text-brand-primary'
								/>
							</div>

							<h3 className='font-headlines font-semibold text-xl text-card-foreground mb-4 group-hover:text-brand-primary transition-colors duration-300'>
								{principle?.title}
							</h3>

							<p className='text-muted-foreground text-sm mb-4 leading-relaxed'>
								{principle?.description}
							</p>

							<p className='text-xs text-muted-foreground/80 leading-relaxed'>
								{principle?.details}
							</p>
						</div>
					))}
				</div>

				{/* Main Content Grid */}
				<div className='grid lg:grid-cols-2 gap-16 items-center mb-20'>
					{/* Left Content */}
					<div className='space-y-8'>
						<div className='space-y-6'>
							<h3 className='headline-secondary text-2xl lg:text-3xl font-bold text-foreground'>
								The Art of Danish Construction
							</h3>

							<div className='space-y-4 text-muted-foreground'>
								<p className='body-primary'>
									Danish design isn't just about
									aesthetics—it's a philosophy that
									prioritizes human well-being, environmental
									consciousness, and enduring quality. Our
									construction methodology reflects these
									values in every project.
								</p>

								<p className='body-secondary'>
									We believe that your home should be a
									sanctuary that supports your daily rituals,
									celebrates natural beauty, and creates
									lasting memories. This philosophy guides
									every decision we make, from material
									selection to spatial planning.
								</p>
							</div>
						</div>

						{/* Key Stats */}
						<div className='grid grid-cols-3 gap-6'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-brand-primary mb-1'>
									15+
								</div>
								<div className='text-xs text-muted-foreground uppercase tracking-wide'>
									Years Experience
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-brand-primary mb-1'>
									20+
								</div>
								<div className='text-xs text-muted-foreground uppercase tracking-wide'>
									Projects Completed
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-brand-primary mb-1'>
									100%
								</div>
								<div className='text-xs text-muted-foreground uppercase tracking-wide'>
									Client Satisfaction
								</div>
							</div>
						</div>

						<Button
							variant='outline'
							size='lg'
							className='border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground font-cta font-medium px-8 py-4'
							iconName='BookOpen'
							iconPosition='left'
							onClick={() =>
								(window.location.href =
									'/craft-process-philosophy')
							}
						>
							Learn Our Philosophy
						</Button>
					</div>

					{/* Right Content - Image */}
					<div className='relative'>
						<div className='relative overflow-hidden rounded-2xl shadow-elevated'>
							<Image
								src='https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=700&fit=crop'
								alt='Danish interior showcasing natural materials and clean design'
								className='w-full h-[500px] object-cover'
							/>

							{/* Overlay Content */}
							<div className='absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent'></div>

							<div className='absolute bottom-8 left-8 right-8'>
								<div className='bg-card/90 backdrop-blur-lg p-6 rounded-xl border border-border'>
									<div className='flex items-center space-x-3 mb-3'>
										<Icon
											name='Quote'
											size={20}
											className='text-brand-primary'
										/>
										<span className='text-sm font-medium text-white'>
											Danish Design Principle
										</span>
									</div>
									<p className='accent-text text-white'>
										"Simplicity is the ultimate
										sophistication. Every element should
										serve both beauty and function."
									</p>
								</div>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className='absolute -top-4 -right-4 w-24 h-24 bg-conversion-accent/20 rounded-full blur-xl'></div>
						<div className='absolute -bottom-4 -left-4 w-32 h-32 bg-brand-primary/20 rounded-full blur-xl'></div>
					</div>
				</div>

				{/* Process Steps */}
				<div className='space-y-12'>
					<div className='text-center space-y-4'>
						<h3 className='headline-secondary text-2xl lg:text-3xl font-bold text-foreground'>
							Our Craft Process
						</h3>
						<p className='body-secondary text-muted-foreground max-w-2xl mx-auto'>
							A methodical approach that ensures every project
							reflects Danish design excellence and meets your
							unique vision.
						</p>
					</div>

					<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
						{craftProcess?.map((process, index) => (
							<div
								key={process.step}
								className='relative'
							>
								{/* Connection Line */}
								{index < craftProcess?.length - 1 && (
									<div className='hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-border to-transparent z-0'></div>
								)}

								<div className='relative z-10 text-center space-y-4'>
									<div className='w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center mx-auto shadow-subtle'>
										<Icon
											name={process.icon}
											size={24}
											className='text-primary-foreground'
										/>
									</div>

									<div className='space-y-2'>
										<div className='text-xs font-bold text-brand-primary uppercase tracking-wider'>
											Step {process.step}
										</div>
										<h4 className='font-headlines font-semibold text-lg text-foreground'>
											{process.title}
										</h4>
										<p className='text-sm text-muted-foreground leading-relaxed'>
											{process.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default DanishPhilosophySection;
