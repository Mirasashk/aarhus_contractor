'use client';

import { useState } from 'react';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import {
	Dialog,
	DialogBackdrop,
	DialogPanel,
	TransitionChild,
} from '@headlessui/react';
import {
	Bars3Icon,
	CalendarIcon,
	ChartPieIcon,
	DocumentDuplicateIcon,
	FolderIcon,
	HomeIcon,
	UsersIcon,
	UserIcon,
	XMarkIcon,
	ChatBubbleBottomCenterTextIcon,
	Cog6ToothIcon,
} from '@heroicons/react/24/outline';
import { useAuth } from '../../hooks/useFirebase';

const navigation = [
	{ name: 'Dashboard', href: '/admin', icon: HomeIcon },
	{
		name: 'Projects',
		href: '/admin/projects',
		icon: FolderIcon,
	},
	{
		name: 'Employees',
		href: '/admin/employees',
		icon: UserIcon,
	},
	{
		name: 'Consultations',
		href: '/admin/consultations',
		icon: CalendarIcon,
	},
	{
		name: 'Feedback',
		href: '/admin/feedback',
		icon: ChatBubbleBottomCenterTextIcon,
	},
];
const teams = [
	{
		id: 1,
		name: 'Testimonials',
		href: '/admin/testimonials',
		initial: 'H',
	},
	{
		id: 2,
		name: 'Team Members',
		href: '/admin/team',
		initial: 'T',
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

// UserAvatar component that displays user photo or initials
const UserAvatar = ({ user, className = '' }) => {
	if (!user) {
		return (
			<div
				className={`size-8 rounded-full bg-indigo-700 outline -outline-offset-1 outline-white/10 dark:bg-indigo-800 flex items-center justify-center ${className}`}
			>
				<span className='text-white text-sm font-medium'>?</span>
			</div>
		);
	}

	// If user has a photo URL, display it
	if (user.photoURL) {
		return (
			<img
				alt={user.displayName || 'User avatar'}
				src={user.photoURL}
				className={`size-8 rounded-full bg-indigo-700 outline -outline-offset-1 outline-white/10 dark:bg-indigo-800 ${className}`}
			/>
		);
	}

	// Otherwise, display initials
	const getInitials = (name) => {
		if (!name) return 'U';
		return name
			.split(' ')
			.map((word) => word.charAt(0))
			.join('')
			.toUpperCase()
			.slice(0, 2);
	};

	const initials = getInitials(user.displayName || user.email);

	return (
		<div
			className={`size-8 rounded-full bg-indigo-700 outline -outline-offset-1 outline-white/10 dark:bg-indigo-800 flex items-center justify-center ${className}`}
		>
			<span className='text-white text-sm font-medium'>{initials}</span>
		</div>
	);
};

export default function Sidebar({ children }) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { user, loading, signOut } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	// Helper function to determine if a route is active
	const isActiveRoute = (href) => {
		if (href === '/admin') {
			return location.pathname === '/admin';
		}
		return location.pathname.startsWith(href);
	};

	const handleLogout = async () => {
		try {
			await signOut();
			// Navigate to root path after successful logout
			navigate('/');
		} catch (error) {
			console.error('Error signing out:', error);
		}
	};

	return (
		<>
			{/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white dark:bg-gray-900">
        <body class="h-full">
        ```
      */}
			<div>
				<Dialog
					open={sidebarOpen}
					onClose={setSidebarOpen}
					className='relative z-50 lg:hidden'
				>
					<DialogBackdrop
						transition
						className='fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0'
					/>

					<div className='fixed inset-0 flex'>
						<DialogPanel
							transition
							className='relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full'
						>
							<TransitionChild>
								<div className='absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0'>
									<button
										type='button'
										onClick={() => setSidebarOpen(false)}
										className='-m-2.5 p-2.5'
									>
										<span className='sr-only'>
											Close sidebar
										</span>
										<XMarkIcon
											aria-hidden='true'
											className='size-6 text-white'
										/>
									</button>
								</div>
							</TransitionChild>

							{/* Sidebar component, swap this element with another sidebar if you like */}
							<div className='flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 pb-2 dark:bg-indigo-800 dark:ring-1 dark:ring-white/10'>
								<div className='flex h-16 shrink-0 items-center justify-between'>
									<img
										alt='Aarhus Contractor'
										src='/assets/images/Logo_White.png'
										className='h-8 w-auto'
									/>
									<button
										onClick={() => navigate('/')}
										className='px-3 py-1 text-xs font-medium text-indigo-200 bg-indigo-700/50 hover:bg-indigo-700 hover:text-white rounded-full border border-indigo-400/30 transition-colors'
									>
										Visit Site
									</button>
								</div>
								<nav className='flex flex-1 flex-col'>
									<ul
										role='list'
										className='flex flex-1 flex-col gap-y-7'
									>
										<li>
											<ul
												role='list'
												className='-mx-2 space-y-1'
											>
												{navigation.map((item) => (
													<li key={item.name}>
														<Link
															to={item.href}
															className={classNames(
																isActiveRoute(
																	item.href
																)
																	? 'bg-indigo-700 text-white dark:bg-indigo-950/25'
																	: 'text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25',
																'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
															)}
														>
															<item.icon
																aria-hidden='true'
																className={classNames(
																	isActiveRoute(
																		item.href
																	)
																		? 'text-white'
																		: 'text-indigo-200 group-hover:text-white dark:text-indigo-100',
																	'size-6 shrink-0'
																)}
															/>
															{item.name}
														</Link>
													</li>
												))}
											</ul>
										</li>
										<li>
											<div className='text-xs/6 font-semibold text-indigo-200 dark:text-indigo-100'>
												Your Site
											</div>
											<ul
												role='list'
												className='-mx-2 mt-2 space-y-1'
											>
												{teams.map((team) => (
													<li key={team.name}>
														<Link
															to={team.href}
															className={classNames(
																isActiveRoute(
																	team.href
																)
																	? 'bg-indigo-700 text-white dark:bg-indigo-950/25'
																	: 'text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25',
																'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
															)}
														>
															<span className='flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white dark:border-indigo-500/50 dark:bg-indigo-700'>
																{team.initial}
															</span>
															<span className='truncate'>
																{team.name}
															</span>
														</Link>
													</li>
												))}
											</ul>
										</li>
									</ul>
								</nav>
							</div>
						</DialogPanel>
					</div>
				</Dialog>

				{/* Static sidebar for desktop */}
				<div className='hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col'>
					{/* Sidebar component, swap this element with another sidebar if you like */}
					<div className='relative flex grow flex-col gap-y-5 overflow-y-auto bg-indigo-600 px-6 dark:bg-indigo-800 dark:after:pointer-events-none dark:after:absolute dark:after:inset-y-0 dark:after:right-0 dark:after:w-px dark:after:bg-white/10'>
						<div className='flex h-16 shrink-0 items-center justify-between'>
							<img
								alt='Aarhus Contractor'
								src='/assets/images/Logo_White.png'
								className='h-8 w-auto'
							/>
							<button
								onClick={() => navigate('/')}
								className='px-3 py-1 text-xs font-medium text-indigo-200 bg-indigo-700/50 hover:bg-indigo-700 hover:text-white rounded-full border border-indigo-400/30 transition-colors'
							>
								Visit Site
							</button>
						</div>
						<nav className='flex flex-1 flex-col'>
							<ul
								role='list'
								className='flex flex-1 flex-col gap-y-7'
							>
								<li>
									<ul
										role='list'
										className='-mx-2 space-y-1'
									>
										{navigation.map((item) => (
											<li key={item.name}>
												<Link
													to={item.href}
													className={classNames(
														isActiveRoute(item.href)
															? 'bg-indigo-700 text-white dark:bg-indigo-950/25'
															: 'text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25',
														'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
													)}
												>
													<item.icon
														aria-hidden='true'
														className={classNames(
															isActiveRoute(
																item.href
															)
																? 'text-white'
																: 'text-indigo-200 group-hover:text-white dark:text-indigo-100',
															'size-6 shrink-0'
														)}
													/>
													{item.name}
												</Link>
											</li>
										))}
									</ul>
								</li>
								<li>
									<div className='text-xs/6 font-semibold text-indigo-200 dark:text-indigo-100'>
										Your Site
									</div>
									<ul
										role='list'
										className='-mx-2 mt-2 space-y-1'
									>
										{teams.map((team) => (
											<li key={team.name}>
												<Link
													to={team.href}
													className={classNames(
														isActiveRoute(team.href)
															? 'bg-indigo-700 text-white dark:bg-indigo-950/25'
															: 'text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25',
														'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold'
													)}
												>
													<span className='flex size-6 shrink-0 items-center justify-center rounded-lg border border-indigo-400 bg-indigo-500 text-[0.625rem] font-medium text-white dark:border-indigo-500/50 dark:bg-indigo-700'>
														{team.initial}
													</span>
													<span className='truncate'>
														{team.name}
													</span>
												</Link>
											</li>
										))}
									</ul>
								</li>
								<li className='-mx-6 mt-auto'>
									<div className='flex flex-col gap-y-2'>
										{/* Logout Link */}
										<button
											onClick={handleLogout}
											className='flex items-center gap-x-4 px-6 py-2 text-sm/6 font-semibold text-indigo-200 hover:bg-indigo-700 hover:text-white dark:text-indigo-100 dark:hover:bg-indigo-950/25 transition-colors'
										>
											<svg
												className='size-5'
												fill='none'
												stroke='currentColor'
												viewBox='0 0 24 24'
												xmlns='http://www.w3.org/2000/svg'
											>
												<path
													strokeLinecap='round'
													strokeLinejoin='round'
													strokeWidth={2}
													d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1'
												/>
											</svg>
											<span>Logout</span>
										</button>

										{/* User Profile */}
										<a
											href='#'
											className='flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-indigo-700 dark:hover:bg-indigo-950/25'
										>
											<UserAvatar user={user} />
											<span className='sr-only'>
												Your profile
											</span>
											<span aria-hidden='true'>
												{loading
													? 'Loading...'
													: user?.displayName ||
													  user?.email ||
													  'Guest'}
											</span>
										</a>
									</div>
								</li>
							</ul>
						</nav>
					</div>
				</div>

				<div className='sticky top-0 z-40 flex items-center gap-x-6 bg-indigo-600 px-4 py-4 shadow-xs sm:px-6 lg:hidden dark:bg-indigo-800 dark:after:pointer-events-none dark:after:absolute dark:after:inset-x-0 dark:after:bottom-0 dark:after:h-px dark:after:bg-white/10'>
					<button
						type='button'
						onClick={() => setSidebarOpen(true)}
						className='-m-2.5 p-2.5 text-indigo-200 hover:text-white lg:hidden'
					>
						<span className='sr-only'>Open sidebar</span>
						<Bars3Icon
							aria-hidden='true'
							className='size-6'
						/>
					</button>
					<a href='#'>
						<span className='sr-only'>Your profile</span>
						<UserAvatar user={user} />
					</a>
				</div>

				<main className='py-10 lg:pl-72'>
					<div className='px-4 sm:px-6 lg:px-8'>
						{/* Your content */}
						{children}
					</div>
				</main>
			</div>
		</>
	);
}
