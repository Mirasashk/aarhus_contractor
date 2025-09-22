import React from 'react';
import Header from '../../components/ui/Header';
import PhilosophyHero from './components/PhilosophyHero';
import ProcessVisualization from './components/ProcessVisualization';
import QualityGuarantees from './components/QualityGuarantees';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Footer from '../../components/ui/Footer';

const CraftProcessPhilosophy = () => {
	return (
		<div className='min-h-screen bg-background'>
			<Header />
			{/* Hero Section */}
			<PhilosophyHero />
			{/* Process Visualization */}
			<ProcessVisualization />
			{/* Quality Guarantees */}
			<QualityGuarantees />
			{/* Call to Action Section */}
			<section className='py-20 bg-gradient-to-br from-brand-primary/5 to-accent/5'>
				<div className='container mx-auto px-6 lg:px-8'>
					<div className='text-center'>
						<div className='w-20 h-20 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-8'>
							<Icon
								name='MessageCircle'
								size={32}
								className='text-brand-primary'
							/>
						</div>

						<h2 className='headline-secondary text-3xl lg:text-5xl font-bold text-foreground mb-6'>
							Ready to Engage a Professional Partner?
						</h2>

						<p className='body-primary text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto mb-10'>
							Let’s align on scope, compliance, and delivery.
							Request a project assessment or proposal
							presentation to get started.
						</p>

						<div className='flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6'>
							<Button
								variant='default'
								className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-semibold px-8 py-4 shadow-subtle'
								onClick={() =>
									(window.location.href =
										'/consultation-journey')
								}
							>
								<Icon
									name='Calendar'
									size={20}
									className='mr-2'
								/>
								Request Project Assessment
							</Button>

							<Button
								variant='outline'
								className='border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground font-cta font-semibold px-8 py-4'
								onClick={() =>
									(window.location.href =
										'/project-transformations-gallery')
								}
							>
								<Icon
									name='Image'
									size={20}
									className='mr-2'
								/>
								View Our Portfolio
							</Button>
						</div>

						<div className='flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-8 mt-8 text-muted-foreground'>
							<div className='flex items-center space-x-2'>
								<Icon
									name='Phone'
									size={16}
								/>
								<span className='font-headlines text-sm'>
									+45 8612 3456
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Icon
									name='Mail'
									size={16}
								/>
								<span className='font-headlines text-sm'>
									hello@aarhuscontractor.dk
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Icon
									name='MapPin'
									size={16}
								/>
								<span className='font-headlines text-sm'>
									Aarhus, Denmark
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* Footer */}
			<Footer />
		</div>
	);
};

export default CraftProcessPhilosophy;
