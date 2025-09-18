import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const PhilosophyHero = () => {
	return (
		<section className='relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-card to-muted overflow-hidden'>
			{/* Background Pattern */}
			<div className='absolute inset-0 opacity-5'>
				<div className='absolute top-20 left-20 w-32 h-32 border border-brand-primary rounded-full'></div>
				<div className='absolute bottom-40 right-32 w-24 h-24 border border-accent rounded-full'></div>
				<div className='absolute top-1/2 left-1/4 w-16 h-16 border border-brand-secondary rounded-full'></div>
			</div>

			<div className='container mx-auto px-6 lg:px-8 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Content */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-12 h-1 bg-brand-primary rounded-full'></div>
								<span className='font-headlines font-medium text-brand-primary uppercase tracking-wider text-sm'>
									Our Methodology
								</span>
							</div>

							<h1 className='headline-primary text-3xl lg:text-6xl font-bold text-foreground leading-tight'>
								Professional Construction Methodology
								<span className='block text-brand-primary'>
									& Quality Standards
								</span>
							</h1>

							<p className='body-primary text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl'>
								A systematic, standards-driven approach to
								delivering housing and public projects. We align
								design, compliance, safety, and quality to meet
								EU procurement, Danish regulations, and
								stakeholder expectations—on time and on budget.
							</p>
						</div>

						{/* Compliance Badges */}
						<div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
							<div className='flex items-center space-x-3 bg-background rounded-lg px-3 py-2 shadow-card'>
								<Icon
									name='Shield'
									size={18}
									className='text-brand-primary'
								/>
								<span className='text-sm text-foreground'>
									EU Procurement
								</span>
							</div>
							<div className='flex items-center space-x-3 bg-background rounded-lg px-3 py-2 shadow-card'>
								<Icon
									name='Award'
									size={18}
									className='text-success'
								/>
								<span className='text-sm text-foreground'>
									ISO 9001
								</span>
							</div>
							<div className='flex items-center space-x-3 bg-background rounded-lg px-3 py-2 shadow-card'>
								<Icon
									name='Leaf'
									size={18}
									className='text-accent'
								/>
								<span className='text-sm text-foreground'>
									ISO 14001
								</span>
							</div>
							<div className='flex items-center space-x-3 bg-background rounded-lg px-3 py-2 shadow-card'>
								<Icon
									name='HardHat'
									size={18}
									className='text-warning'
								/>
								<span className='text-sm text-foreground'>
									OHSAS 18001
								</span>
							</div>
						</div>

						<div className='pt-2'>
							<div className='flex items-center space-x-2 text-muted-foreground'>
								<Icon
									name='ArrowDown'
									size={20}
									className='animate-bounce'
								/>
								<span className='font-headlines text-sm'>
									Explore our professional process
								</span>
							</div>
						</div>
					</div>

					{/* Visual */}
					<div className='relative'>
						<div className='relative overflow-hidden rounded-2xl shadow-elevated'>
							<Image
								src='https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&h=800&fit=crop'
								alt='Project governance meeting with drawings and standards'
								className='w-full h-96 lg:h-[500px] object-cover'
							/>
							<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>

							{/* Floating Stats */}
							<div className='absolute bottom-6 left-6 right-6'>
								<div className='bg-background/95 backdrop-blur-md rounded-xl p-4 shadow-card'>
									<div className='grid grid-cols-3 gap-4 text-center'>
										<div>
											<p className='font-headlines font-bold text-2xl text-brand-primary'>
												100%
											</p>
											<p className='text-xs text-muted-foreground'>
												Compliance Rate
											</p>
										</div>
										<div>
											<p className='font-headlines font-bold text-2xl text-accent'>
												DKK 25M+
											</p>
											<p className='text-xs text-muted-foreground'>
												Gov. Contracts
											</p>
										</div>
										<div>
											<p className='font-headlines font-bold text-2xl text-conversion-accent'>
												98%
											</p>
											<p className='text-xs text-muted-foreground'>
												Client Satisfaction
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>

						{/* Decorative Elements */}
						<div className='absolute -top-4 -right-4 w-24 h-24 bg-brand-primary/10 rounded-full blur-xl'></div>
						<div className='absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full blur-xl'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PhilosophyHero;
