import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import LanguageSwitcher from '../LanguageSwitcher';
import Logo from '/assets/images/Logo_Black.png';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const { lang } = useParams();
	const { t, ready } = useTranslation(['navigation', 'common']);

	const navigationItems = [
		{ name: t('menu.home'), path: '/', icon: 'Home' },
		{
			name: t('menu.gallery'),
			path: '/project-transformations-gallery',
			icon: 'Image',
		},
		{
			name: t('menu.ourCraft'),
			path: '/craft-process-philosophy',
			icon: 'Hammer',
		},
		{
			name: t('menu.services'),
			path: '/service-specializations',
			icon: 'Wrench',
		},
		{
			name: t('menu.consultation'),
			path: '/consultation-journey',
			icon: 'Calendar',
		},
	];

	const secondaryItems = [
		{ name: t('menu.about'), path: '/about-our-craft', icon: 'Users' },
	];

	// Helper function to create localized paths
	const getLocalizedPath = (path) => `/${lang}${path}`;

	// Don't render until translations are ready
	if (!ready) {
		return (
			<header className='fixed top-0 left-0 right-0 z-header bg-background/80'>
				<div className='w-full'>
					<div className='flex items-center justify-between h-16 px-6 lg:px-8'>
						<div className='flex-shrink-0'>
							<div className='flex items-center space-x-3'>
								<div className='w-10 h-10 bg-muted rounded-lg animate-pulse'></div>
								<div className='space-y-2'>
									<div className='h-4 w-32 bg-muted rounded animate-pulse'></div>
									<div className='h-3 w-24 bg-muted rounded animate-pulse'></div>
								</div>
							</div>
						</div>
						<div className='hidden lg:flex items-center space-x-4'>
							<div className='h-8 w-24 bg-muted rounded animate-pulse'></div>
							<div className='h-8 w-32 bg-muted rounded animate-pulse'></div>
						</div>
						<div className='lg:hidden'>
							<div className='w-8 h-8 bg-muted rounded animate-pulse'></div>
						</div>
					</div>
				</div>
			</header>
		);
	}

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	const isActivePath = (path) => {
		return location?.pathname === getLocalizedPath(path);
	};

	// const Logo = () => (
	// 	<div className='flex items-center space-x-3'>
	// 		<div className='relative'>
	// 			<svg
	// 				width='40'
	// 				height='40'
	// 				viewBox='0 0 40 40'
	// 				fill='none'
	// 				xmlns='http://www.w3.org/2000/svg'
	// 				className='text-brand-primary'
	// 			>
	// 				<rect
	// 					x='2'
	// 					y='2'
	// 					width='36'
	// 					height='36'
	// 					rx='8'
	// 					stroke='currentColor'
	// 					strokeWidth='2'
	// 					fill='none'
	// 				/>
	// 				<path
	// 					d='M12 16L20 12L28 16V28C28 29.1046 27.1046 30 26 30H14C12.8954 30 12 29.1046 12 28V16Z'
	// 					fill='currentColor'
	// 					fillOpacity='0.1'
	// 				/>
	// 				<path
	// 					d='M12 16L20 12L28 16'
	// 					stroke='currentColor'
	// 					strokeWidth='2'
	// 					strokeLinecap='round'
	// 					strokeLinejoin='round'
	// 				/>
	// 				<path
	// 					d='M12 16V28C12 29.1046 12.8954 30 14 30H26C27.1046 30 28 29.1046 28 28V16'
	// 					stroke='currentColor'
	// 					strokeWidth='2'
	// 					strokeLinecap='round'
	// 					strokeLinejoin='round'
	// 				/>
	// 				<path
	// 					d='M16 22H24'
	// 					stroke='currentColor'
	// 					strokeWidth='2'
	// 					strokeLinecap='round'
	// 				/>
	// 			</svg>
	// 		</div>
	// 		<div className='flex flex-col'>
	// 			<span className='font-headlines font-semibold text-lg text-foreground leading-tight'>
	// 				{t('company.name', { ns: 'common' })}
	// 			</span>
	// 			<span className='font-body text-xs text-muted-foreground leading-tight'>
	// 				{t('company.tagline', { ns: 'common' })}
	// 			</span>
	// 		</div>
	// 	</div>
	// );

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-header transition-all duration-fast ${
				isScrolled
					? 'bg-background/95 backdrop-blur-md shadow-card'
					: 'bg-background/80'
			}`}
		>
			<div className='w-full'>
				<div className='flex items-center justify-between h-16 px-6 lg:px-8'>
					{/* Logo */}
					<div className='flex-shrink-0'>
						<Link
							to={getLocalizedPath('/homepage')}
							className='block'
						>
							<img
								src={Logo}
								alt='Aarhus Contractor'
								className='h-12'
							/>
						</Link>
					</div>

					{/* Desktop Navigation */}
					<nav className='hidden lg:flex items-center space-x-1'>
						{navigationItems?.map((item) => (
							<Link
								key={item?.path}
								to={getLocalizedPath(item?.path)}
								className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-fast ${
									isActivePath(item?.path)
										? 'bg-brand-primary text-primary-foreground'
										: 'text-foreground hover:bg-muted hover:text-brand-primary'
								}`}
							>
								<Icon
									name={item?.icon}
									size={16}
								/>
								<span className='font-headlines font-medium text-sm'>
									{item?.name}
								</span>
							</Link>
						))}

						{/* More Menu */}
						<div className='relative group'>
							<button className='nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-fast text-foreground hover:bg-muted hover:text-brand-primary'>
								<Icon
									name='MoreHorizontal'
									size={16}
								/>
								<span className='font-headlines font-medium text-sm'>
									{t('menu.more')}
								</span>
							</button>

							{/* Dropdown */}
							<div className='absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-elevated opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-fast'>
								<div className='py-2'>
									{secondaryItems?.map((item) => (
										<Link
											key={item?.path}
											to={getLocalizedPath(item?.path)}
											className={`flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-fast ${
												isActivePath(item?.path)
													? 'bg-accent text-accent-foreground'
													: 'text-popover-foreground hover:bg-muted'
											}`}
										>
											<Icon
												name={item?.icon}
												size={16}
											/>
											<span className='font-headlines font-medium'>
												{item?.name}
											</span>
										</Link>
									))}
								</div>
							</div>
						</div>
					</nav>

					{/* Language Switcher and CTA */}
					<div className='hidden lg:flex items-center space-x-4'>
						<LanguageSwitcher />
						<Button
							variant='default'
							className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-medium px-6 py-2 shadow-subtle'
							onClick={() =>
								(window.location.href = getLocalizedPath(
									'/consultation-journey'
								))
							}
						>
							{t('buttons.beginJourney', { ns: 'common' })}
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<div className='lg:hidden'>
						<button
							onClick={toggleMenu}
							className='p-2 rounded-lg text-foreground hover:bg-muted transition-colors duration-fast'
							aria-label={t('labels.menu', { ns: 'common' })}
						>
							<Icon
								name={isMenuOpen ? 'X' : 'Menu'}
								size={24}
							/>
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`lg:hidden transition-all duration-medium ${
						isMenuOpen
							? 'max-h-screen opacity-100'
							: 'max-h-0 opacity-0 overflow-hidden'
					}`}
				>
					<nav className='px-6 py-4 bg-card border-t border-border'>
						<div className='space-y-2'>
							{navigationItems?.map((item) => (
								<Link
									key={item?.path}
									to={getLocalizedPath(item?.path)}
									onClick={closeMenu}
									className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-fast ${
										isActivePath(item?.path)
											? 'bg-brand-primary text-primary-foreground'
											: 'text-foreground hover:bg-muted hover:text-brand-primary'
									}`}
								>
									<Icon
										name={item?.icon}
										size={20}
									/>
									<span className='font-headlines font-medium'>
										{item?.name}
									</span>
								</Link>
							))}

							{secondaryItems?.map((item) => (
								<Link
									key={item?.path}
									to={getLocalizedPath(item?.path)}
									onClick={closeMenu}
									className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-fast ${
										isActivePath(item?.path)
											? 'bg-accent text-accent-foreground'
											: 'text-foreground hover:bg-muted hover:text-brand-primary'
									}`}
								>
									<Icon
										name={item?.icon}
										size={20}
									/>
									<span className='font-headlines font-medium'>
										{item?.name}
									</span>
								</Link>
							))}

							<div className='pt-4 mt-4 border-t border-border space-y-4'>
								<LanguageSwitcher />
								<Button
									variant='default'
									fullWidth
									className='bg-conversion-accent hover:bg-brand-primary text-foreground hover:text-primary-foreground font-cta font-medium py-3 shadow-subtle'
									onClick={() => {
										closeMenu();
										window.location.href = getLocalizedPath(
											'/consultation-journey'
										);
									}}
								>
									{t('buttons.beginJourney', {
										ns: 'common',
									})}
								</Button>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
