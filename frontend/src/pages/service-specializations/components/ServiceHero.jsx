import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-muted'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div
					className='absolute inset-0'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
					}}
				/>
			</div>

			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center'>
					{/* Content */}
					<div className='space-y-6 sm:space-y-8 order-2 lg:order-1'>
						<div className='space-y-3 sm:space-y-4'>
							<div className='flex items-center space-x-2 sm:space-x-3'>
								<div className='w-10 h-10 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center'>
									<Icon
										name='Building'
										size={20}
										className='text-brand-primary sm:w-6 sm:h-6'
									/>
								</div>
								<span className='font-headlines font-medium text-brand-primary text-sm sm:text-lg'>
									Professional Construction Services
								</span>
							</div>

							<h1 className='headline-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight'>
								Comprehensive Construction Services for
								<span className='text-brand-primary block'>
									Housing & Public Projects
								</span>
							</h1>

							<p className='body-primary text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl'>
								From multi-unit housing developments to
								government building renovations, we deliver
								large-scale construction projects with Danish
								precision, regulatory compliance, and proven
								expertise in public sector development.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-3 sm:gap-4'>
							<Button
								variant='default'
								className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg'
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
								className='border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg'
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
						<div className='grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-border'>
							<div className='flex items-center space-x-2'>
								<Icon
									name='Award'
									size={16}
									className='text-brand-primary sm:w-5 sm:h-5'
								/>
								<span className='font-headlines font-medium text-xs sm:text-sm text-foreground'>
									EU Procurement Certified
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Icon
									name='Shield'
									size={16}
									className='text-brand-primary sm:w-5 sm:h-5'
								/>
								<span className='font-headlines font-medium text-xs sm:text-sm text-foreground'>
									Government Contract Approved
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<Icon
									name='Clock'
									size={16}
									className='text-brand-primary sm:w-5 sm:h-5'
								/>
								<span className='font-headlines font-medium text-xs sm:text-sm text-foreground'>
									ISO 9001:2015 Certified
								</span>
							</div>
						</div>
					</div>

					{/* Visual */}
					<div className='relative order-1 lg:order-2'>
						<div className='relative rounded-2xl overflow-hidden shadow-elevated'>
							<Image
								src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop'
								alt='Professional construction team working on large-scale housing project'
								className='w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover'
							/>

							{/* Overlay Badge */}
							<div className='absolute top-3 sm:top-6 left-3 sm:left-6 bg-background/95 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 shadow-card'>
								<div className='flex items-center space-x-2'>
									<div className='w-2 h-2 bg-success rounded-full animate-pulse' />
									<span className='font-headlines font-medium text-xs sm:text-sm text-foreground'>
										Active Projects: 8
									</span>
								</div>
							</div>

							{/* Bottom Stats */}
							<div className='absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6'>
								<div className='bg-background/95 backdrop-blur-sm rounded-lg p-3 sm:p-4 shadow-card'>
									<div className='grid grid-cols-3 gap-2 sm:gap-4 text-center'>
										<div>
											<div className='font-headlines font-bold text-sm sm:text-lg text-brand-primary'>
												50+
											</div>
											<div className='font-body text-xs sm:text-sm text-muted-foreground'>
												Housing Projects
											</div>
										</div>
										<div>
											<div className='font-headlines font-bold text-sm sm:text-lg text-brand-primary'>
												DKK 25M+
											</div>
											<div className='font-body text-xs sm:text-sm text-muted-foreground'>
												Government Contracts
											</div>
										</div>
										<div>
											<div className='font-headlines font-bold text-sm sm:text-lg text-brand-primary'>
												100%
											</div>
											<div className='font-body text-xs sm:text-sm text-muted-foreground'>
												Compliance
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Floating Elements */}
						<div className='absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-brand-secondary/20 rounded-full blur-xl' />
						<div className='absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-conversion-accent/20 rounded-full blur-xl' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServiceHero;
