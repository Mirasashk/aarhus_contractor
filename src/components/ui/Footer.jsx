import React from 'react';
import Icon from '../AppIcon';

const Footer = () => {
	return (
		<div>
			<footer className='bg-foreground text-background py-12'>
				<div className='container mx-auto px-6 lg:px-8'>
					<div className='grid md:grid-cols-4 gap-8'>
						{/* Company Info */}
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center'>
									<Icon
										name='Home'
										size={16}
										className='text-background'
									/>
								</div>
								<span className='font-headlines font-bold text-lg'>
									Aarhus Contractor
								</span>
							</div>
							<p className='text-background/80 text-sm leading-relaxed'>
								Danish craftsmanship meets contemporary living.
								Creating spaces that embody hygge through
								thoughtful construction and timeless design.
							</p>
						</div>

						{/* Quick Links */}
						<div className='space-y-4'>
							<h4 className='font-headlines font-semibold text-background'>
								Quick Links
							</h4>
							<ul className='space-y-2'>
								<li>
									<a
										href='/homepage'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Home
									</a>
								</li>
								<li>
									<a
										href='/project-transformations-gallery'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Gallery
									</a>
								</li>
								<li>
									<a
										href='/service-specializations'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Services
									</a>
								</li>
								<li>
									<a
										href='/about-our-craft'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										About
									</a>
								</li>
							</ul>
						</div>

						{/* Services */}
						<div className='space-y-4'>
							<h4 className='font-headlines font-semibold text-background'>
								Services
							</h4>
							<ul className='space-y-2'>
								<li>
									<span className='text-background/80 text-sm'>
										Kitchen Renovations
									</span>
								</li>
								<li>
									<span className='text-background/80 text-sm'>
										Bathroom Remodeling
									</span>
								</li>
								<li>
									<span className='text-background/80 text-sm'>
										Living Space Design
									</span>
								</li>
								<li>
									<span className='text-background/80 text-sm'>
										Heritage Restoration
									</span>
								</li>
							</ul>
						</div>

						{/* Contact */}
						<div className='space-y-4'>
							<h4 className='font-headlines font-semibold text-background'>
								Contact
							</h4>
							<div className='space-y-2'>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Phone'
										size={14}
										className='text-background/60'
									/>
									<span className='text-background/80 text-sm'>
										+45 8612 3456
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='Mail'
										size={14}
										className='text-background/60'
									/>
									<span className='text-background/80 text-sm'>
										hello@aarhuscontractor.dk
									</span>
								</div>
								<div className='flex items-center space-x-2'>
									<Icon
										name='MapPin'
										size={14}
										className='text-background/60'
									/>
									<span className='text-background/80 text-sm'>
										Aarhus, Denmark
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className='border-t border-background/20 mt-8 pt-8 text-center'>
						<p className='text-background/60 text-sm'>
							© {new Date()?.getFullYear()} Aarhus Contractor. All
							rights reserved. | Danish craftsmanship since 1999.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
