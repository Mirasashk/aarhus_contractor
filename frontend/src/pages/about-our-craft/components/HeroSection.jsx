import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from '../../../components/AppImage';

const HeroSection = () => {
	const { t } = useTranslation('about-our-craft');

	return (
		<section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div
					className='absolute inset-0 bg-repeat'
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
						backgroundSize: '60px 60px',
					}}
				/>
			</div>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center'>
					{/* Content */}
					<div className='space-y-6 sm:space-y-8 order-2 lg:order-1'>
						<div className='space-y-3 sm:space-y-4'>
							<div className='inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium'>
								<span>🏢</span>
								<span>
									Professional Construction Excellence Since
									2009
								</span>
							</div>

							<h1 className='headline-primary text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-foreground leading-tight'>
								Professional Construction
								<span className='text-brand-primary block'>
									Excellence Since 2009
								</span>
							</h1>

							<p className='body-primary text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed'>
								From traditional Danish craftsmanship to modern
								construction expertise, we've built a reputation
								for delivering large-scale projects with
								precision, compliance, and professional
								excellence.
							</p>
						</div>

						<div className='grid grid-cols-2 sm:flex sm:flex-wrap gap-4 sm:gap-6'>
							<div className='flex items-center space-x-2 sm:space-x-3'>
								<div className='w-8 h-8 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center'>
									<span className='text-lg sm:text-2xl'>
										🏗️
									</span>
								</div>
								<div>
									<p className='font-semibold text-foreground text-sm sm:text-base'>
										50+ Housing Projects
									</p>
									<p className='text-xs sm:text-sm text-muted-foreground'>
										Completed
									</p>
								</div>
							</div>

							<div className='flex items-center space-x-2 sm:space-x-3'>
								<div className='w-8 h-8 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center'>
									<span className='text-lg sm:text-2xl'>
										🏆
									</span>
								</div>
								<div>
									<p className='font-semibold text-foreground text-sm sm:text-base'>
										DKK 25M+
									</p>
									<p className='text-xs sm:text-sm text-muted-foreground'>
										Government Contracts
									</p>
								</div>
							</div>

							<div className='flex items-center space-x-2 sm:space-x-3'>
								<div className='w-8 h-8 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center'>
									<span className='text-lg sm:text-2xl'>
										👥
									</span>
								</div>
								<div>
									<p className='font-semibold text-foreground text-sm sm:text-base'>
										25+ Team Members
									</p>
									<p className='text-xs sm:text-sm text-muted-foreground'>
										Professional Staff
									</p>
								</div>
							</div>

							<div className='flex items-center space-x-2 sm:space-x-3'>
								<div className='w-8 h-8 sm:w-12 sm:h-12 bg-brand-primary/10 rounded-full flex items-center justify-center'>
									<span className='text-lg sm:text-2xl'>
										🏛️
									</span>
								</div>
								<div>
									<p className='font-semibold text-foreground text-sm sm:text-base'>
										15+ Years
									</p>
									<p className='text-xs sm:text-sm text-muted-foreground'>
										Public Sector
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className='relative order-1 lg:order-2'>
						<div className='relative overflow-hidden rounded-2xl shadow-elevated'>
							<Image
								src='https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=700&fit=crop'
								alt='Professional construction team at work'
								className='w-full h-64 sm:h-80 md:h-96 lg:h-[600px] object-cover'
							/>

							{/* Overlay Card */}
							<div className='absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 bg-background/95 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-card'>
								<div className='flex items-center space-x-3 sm:space-x-4'>
									<div className='w-12 h-12 sm:w-16 sm:h-16 bg-brand-primary rounded-full flex items-center justify-center'>
										<span className='text-lg sm:text-2xl text-primary-foreground'>
											AC
										</span>
									</div>
									<div>
										<h3 className='font-semibold text-foreground text-sm sm:text-base'>
											Aarhus Contractor Aps
										</h3>
										<p className='text-xs sm:text-sm text-muted-foreground'>
											Professional Construction Company
										</p>
										<p className='text-xs text-brand-primary mt-1'>
											"Delivering excellence in every
											project"
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Floating Elements */}
						<div className='absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 bg-conversion-accent/20 rounded-full blur-xl' />
						<div className='absolute -bottom-4 sm:-bottom-8 -left-4 sm:-left-8 w-20 h-20 sm:w-32 sm:h-32 bg-brand-secondary/20 rounded-full blur-xl' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
