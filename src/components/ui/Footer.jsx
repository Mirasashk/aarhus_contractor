import React from 'react';
import Icon from '../AppIcon';
import Logo from '/assets/images/Logo_White.png';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<div>
			<footer className='bg-foreground text-background py-12'>
				<div className='container mx-auto px-6 lg:px-8'>
					<div className='grid md:grid-cols-4 gap-8'>
						{/* Company Info */}
						<div className='space-y-4'>
							<div className='flex items-center space-x-3'>
								<div className='flex-shrink-0'>
									<Link
										to={'/'}
										className='block'
									>
										<img
											src={Logo}
											alt='Aarhus Contractor'
											className='h-12'
										/>
									</Link>
								</div>
							</div>
							<p className='text-background/80 text-sm leading-relaxed'>
								Professional Danish construction partner for
								housing and public sector projects. Certified,
								compliant, and committed to delivery excellence.
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
										Portfolio
									</a>
								</li>
								<li>
									<a
										href='/service-specializations'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Housing Projects
									</a>
								</li>
								<li>
									<a
										href='/about-our-craft'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Our Expertise
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
										Housing Development
									</span>
								</li>
								<li>
									<span className='text-background/80 text-sm'>
										Government Buildings
									</span>
								</li>
								<li>
									<span className='text-background/80 text-sm'>
										Public Infrastructure
									</span>
								</li>
								<li>
									<span className='text-background/80 text-sm'>
										Project Management
									</span>
								</li>
								<li>
									<span className='text-background/80 text-sm'>
										Maintenance Services
									</span>
								</li>
							</ul>
						</div>

						{/* Company & Legal */}
						<div className='space-y-4'>
							<h4 className='font-headlines font-semibold text-background'>
								Company & Legal
							</h4>
							<ul className='space-y-2'>
								<li className='text-background/80 text-sm'>
									CVR: 12345678
								</li>
								<li className='text-background/80 text-sm'>
									EU VAT: DK12345678
								</li>
								<li className='text-background/80 text-sm'>
									Danish Building Authority Licensed
								</li>
							</ul>
							<ul className='space-y-2 pt-2'>
								<li>
									<a
										href='/terms'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Terms & Conditions
									</a>
								</li>
								<li>
									<a
										href='/privacy'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Privacy Policy
									</a>
								</li>
								<li>
									<a
										href='/cookies'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Cookie Policy
									</a>
								</li>
								<li>
									<a
										href='/insurance'
										className='text-background/80 hover:text-background text-sm transition-colors'
									>
										Insurance & Compliance
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div className='border-t border-background/20 mt-8 pt-8 text-center'>
						<p className='text-background/60 text-sm'>
							© {new Date()?.getFullYear()} Aarhus Contractor Aps.
							All rights reserved. | Danish craftsmanship since
							2024.
						</p>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
