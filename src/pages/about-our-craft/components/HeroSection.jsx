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

			<div className='container mx-auto px-6 lg:px-8 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					{/* Content */}
					<div className='space-y-8'>
						<div className='space-y-4'>
							<div className='inline-flex items-center space-x-2 bg-brand-primary/10 text-brand-primary px-4 py-2 rounded-full text-sm font-medium'>
								<span>🏠</span>
								<span>{t('hero.badge')}</span>
							</div>

							<h1 className='headline-primary text-4xl lg:text-6xl font-bold text-foreground leading-tight'>
								{t('hero.title.line1')}
								<span className='text-brand-primary block'>
									{t('hero.title.line2')}
								</span>
							</h1>

							<p className='body-primary text-xl text-muted-foreground leading-relaxed'>
								{t('hero.description')}
							</p>
						</div>

						<div className='flex flex-wrap gap-6'>
							<div className='flex items-center space-x-3'>
								<div className='w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center'>
									<span className='text-2xl'>🔨</span>
								</div>
								<div>
									<p className='font-semibold text-foreground'>
										{t('hero.stats.experience.value')}
									</p>
									<p className='text-sm text-muted-foreground'>
										{t('hero.stats.experience.label')}
									</p>
								</div>
							</div>

							<div className='flex items-center space-x-3'>
								<div className='w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center'>
									<span className='text-2xl'>🏆</span>
								</div>
								<div>
									<p className='font-semibold text-foreground'>
										{t('hero.stats.projects.value')}
									</p>
									<p className='text-sm text-muted-foreground'>
										{t('hero.stats.projects.label')}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Image */}
					<div className='relative'>
						<div className='relative overflow-hidden rounded-2xl shadow-elevated'>
							<Image
								src='https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=700&fit=crop&crop=face'
								alt={t('hero.image.alt')}
								className='w-full h-[600px] object-cover'
							/>

							{/* Overlay Card */}
							<div className='absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-xl p-6 shadow-card'>
								<div className='flex items-center space-x-4'>
									<div className='w-16 h-16 bg-brand-primary rounded-full flex items-center justify-center'>
										<span className='text-2xl text-primary-foreground'>
											LA
										</span>
									</div>
									<div>
										<h3 className='font-semibold text-foreground'>
											{t('hero.founder.name')}
										</h3>
										<p className='text-sm text-muted-foreground'>
											{t('hero.founder.title')}
										</p>
										<p className='text-xs text-brand-primary mt-1'>
											"{t('hero.founder.quote')}"
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Floating Elements */}
						<div className='absolute -top-4 -right-4 w-24 h-24 bg-conversion-accent/20 rounded-full blur-xl' />
						<div className='absolute -bottom-8 -left-8 w-32 h-32 bg-brand-secondary/20 rounded-full blur-xl' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
