# Hybrid Multi-Language Support Implementation Plan

## Aarhus Contractor - English, Danish, German

### Project Overview

This hybrid plan combines the best technical architecture from ChatGPT's approach with comprehensive implementation details and examples. It implements multi-language support for the Aarhus Contractor React application, supporting **English (en)**, **Danish (da)**, and **German (de)** with Danish as the default language since the company is Danish and hosted on a `.dk` domain.

---

## Phase 1: Setup and Dependencies

### 1.1 Install Required Packages

```bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend react-helmet-async i18next-icu
```

### 1.2 Create Directory Structure

```
src/
├── i18n/
│   ├── i18n.js
│   ├── LanguageWrapper.jsx
│   └── helpers.js
├── locales/
│   ├── en/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   ├── homepage.json
│   │   ├── about-our-craft.json
│   │   ├── services.json
│   │   ├── consultation.json
│   │   ├── gallery.json
│   │   └── errors.json
│   ├── da/
│   │   ├── common.json
│   │   ├── navigation.json
│   │   ├── homepage.json
│   │   ├── about-our-craft.json
│   │   ├── services.json
│   │   ├── consultation.json
│   │   ├── gallery.json
│   │   └── errors.json
│   └── de/
│       ├── common.json
│       ├── navigation.json
│       ├── homepage.json
│       ├── about-our-craft.json
│       ├── services.json
│       ├── consultation.json
│       ├── gallery.json
│       └── errors.json
```

---

## Phase 2: Core i18n Configuration

### 2.1 Create `src/i18n/i18n.js`

```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ICU from 'i18next-icu';

i18n.use(Backend)
	.use(LanguageDetector)
	.use(ICU)
	.use(initReactI18next)
	.init({
		fallbackLng: 'da', // Danish as default for Danish company
		supportedLngs: ['en', 'da', 'de'],
		debug: process.env.NODE_ENV === 'development',

		interpolation: {
			escapeValue: false,
		},

		detection: {
			order: ['path', 'querystring', 'localStorage', 'navigator'],
			lookupQuerystring: 'lang',
			caches: ['localStorage'],
		},

		backend: {
			loadPath: `${
				import.meta.env.BASE_URL || ''
			}locales/{{lng}}/{{ns}}.json`,
		},
	});

// Set HTML lang attribute and direction
i18n.on('languageChanged', (lng) => {
	document.documentElement.setAttribute('lang', lng);
	document.documentElement.setAttribute('dir', 'ltr');
});

export default i18n;
```

### 2.2 Create `src/i18n/helpers.js`

```javascript
// Utility functions for language handling
export const SUPPORTED_LANGUAGES = ['en', 'da', 'de'];

export const LANGUAGE_NAMES = {
	en: 'English',
	da: 'Dansk',
	de: 'Deutsch',
};

export const LANGUAGE_FLAGS = {
	en: '🇬🇧',
	da: '🇩🇰',
	de: '🇩🇪',
};

export const getLanguageFromPath = (pathname) => {
	const match = pathname.match(/^\/([a-z]{2})/);
	return match ? match[1] : 'da';
};

export const removeLanguageFromPath = (pathname) => {
	return pathname.replace(/^\/(en|da|de)/, '') || '/';
};

export const createLocalizedPath = (path, language) => {
	const cleanPath = path.startsWith('/') ? path : `/${path}`;
	return `/${language}${cleanPath}`;
};
```

---

## Phase 3: Routing Updates

### 3.1 Create `src/i18n/LanguageWrapper.jsx`

```javascript
import { useParams, Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_LANGUAGES } from './helpers';

export default function LanguageWrapper() {
	const { lang } = useParams();
	const { i18n } = useTranslation();

	// Redirect to Danish if unsupported language
	if (!SUPPORTED_LANGUAGES.includes(lang)) {
		return (
			<Navigate
				to='/da'
				replace
			/>
		);
	}

	// Change language if different from current
	if (i18n.language !== lang) {
		i18n.changeLanguage(lang);
	}

	return <Outlet />;
}
```

### 3.2 Update `src/Routes.jsx`

```javascript
import React from 'react';
import {
	BrowserRouter,
	Routes as RouterRoutes,
	Route,
	Navigate,
} from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';
import ErrorBoundary from 'components/ErrorBoundary';
import LanguageWrapper from './i18n/LanguageWrapper';
import NotFound from 'pages/NotFound';
import ProjectTransformationsGallery from './pages/project-transformations-gallery';
import ConsultationJourney from './pages/consultation-journey';
import CraftProcessPhilosophy from './pages/craft-process-philosophy';
import ServiceSpecializations from './pages/service-specializations';
import AboutOurCraft from './pages/about-our-craft';
import Homepage from './pages/homepage';

const Routes = () => {
	return (
		<BrowserRouter>
			<ErrorBoundary>
				<ScrollToTop />
				<RouterRoutes>
					{/* Language-specific routes */}
					<Route
						path='/:lang'
						element={<LanguageWrapper />}
					>
						<Route
							index
							element={<AboutOurCraft />}
						/>
						<Route
							path='homepage'
							element={<Homepage />}
						/>
						<Route
							path='project-transformations-gallery'
							element={<ProjectTransformationsGallery />}
						/>
						<Route
							path='consultation-journey'
							element={<ConsultationJourney />}
						/>
						<Route
							path='craft-process-philosophy'
							element={<CraftProcessPhilosophy />}
						/>
						<Route
							path='service-specializations'
							element={<ServiceSpecializations />}
						/>
						<Route
							path='about-our-craft'
							element={<AboutOurCraft />}
						/>
						<Route
							path='*'
							element={<NotFound />}
						/>
					</Route>
					{/* Default redirect to Danish */}
					<Route
						path='/'
						element={
							<Navigate
								to='/da'
								replace
							/>
						}
					/>
				</RouterRoutes>
			</ErrorBoundary>
		</BrowserRouter>
	);
};

export default Routes;
```

---

## Phase 4: Translation Files

### 4.1 Common Translations (`src/locales/da/common.json`)

```json
{
	"buttons": {
		"beginJourney": "Start din rejse",
		"goBack": "Gå tilbage",
		"backToHome": "Tilbage til hjem",
		"learnMore": "Lær mere",
		"getStarted": "Kom i gang",
		"contactUs": "Kontakt os"
	},
	"labels": {
		"loading": "Indlæser...",
		"error": "Fejl",
		"success": "Succes",
		"close": "Luk",
		"menu": "Menu"
	},
	"company": {
		"name": "Aarhus Contractor",
		"tagline": "Dansk håndværk",
		"founded": "Siden 1987"
	},
	"meta": {
		"title": "Aarhus Contractor - Dansk håndværk og renovering",
		"description": "Professionel renovering og håndværk i Aarhus. Dansk kvalitet og tradition siden 1987."
	}
}
```

### 4.2 Navigation Translations (`src/locales/da/navigation.json`)

```json
{
	"menu": {
		"home": "Hjem",
		"gallery": "Galleri",
		"ourCraft": "Vores håndværk",
		"services": "Tjenester",
		"consultation": "Konsultation",
		"about": "Om os",
		"more": "Mere"
	},
	"language": {
		"switch": "Skift sprog",
		"english": "English",
		"danish": "Dansk",
		"german": "Deutsch"
	}
}
```

### 4.3 Homepage Translations (`src/locales/da/homepage.json`)

```json
{
	"hero": {
		"badge": "Dansk håndværk excellence",
		"headline": {
			"line1": "Gennemtænkt renovering,",
			"line2": "Håndværket til livet"
		},
		"description": "Hvor dansk designfilosofi møder exceptionel byggeekspertise. Vi forvandler rum til oaser, der legemliggør hygge og tidløs skønhed."
	},
	"sections": {
		"projectShowcase": "Fremhævede projektforvandlinger",
		"philosophy": "Dansk designfilosofi og proces",
		"consultation": "Konsultationsbooking widget",
		"testimonials": "Kundetestimonialer karusel",
		"trustSignals": "Tillidssignaler og certificeringer"
	},
	"meta": {
		"title": "Aarhus Contractor - Dansk håndværk og renovering",
		"description": "Professionel renovering og håndværk i Aarhus. Dansk kvalitet og tradition siden 1987."
	}
}
```

### 4.4 English Translations (`src/locales/en/common.json`)

```json
{
	"buttons": {
		"beginJourney": "Begin Your Journey",
		"goBack": "Go Back",
		"backToHome": "Back to Home",
		"learnMore": "Learn More",
		"getStarted": "Get Started",
		"contactUs": "Contact Us"
	},
	"labels": {
		"loading": "Loading...",
		"error": "Error",
		"success": "Success",
		"close": "Close",
		"menu": "Menu"
	},
	"company": {
		"name": "Aarhus Contractor",
		"tagline": "Danish Craftsmanship",
		"founded": "Since 1987"
	},
	"meta": {
		"title": "Aarhus Contractor - Danish Craftsmanship & Renovation",
		"description": "Professional renovation and craftsmanship in Aarhus. Danish quality and tradition since 1987."
	}
}
```

### 4.5 German Translations (`src/locales/de/common.json`)

```json
{
	"buttons": {
		"beginJourney": "Ihre Reise beginnen",
		"goBack": "Zurück",
		"backToHome": "Zurück zur Startseite",
		"learnMore": "Mehr erfahren",
		"getStarted": "Loslegen",
		"contactUs": "Kontaktieren Sie uns"
	},
	"labels": {
		"loading": "Lädt...",
		"error": "Fehler",
		"success": "Erfolg",
		"close": "Schließen",
		"menu": "Menü"
	},
	"company": {
		"name": "Aarhus Contractor",
		"tagline": "Dänisches Handwerk",
		"founded": "Seit 1987"
	},
	"meta": {
		"title": "Aarhus Contractor - Dänisches Handwerk & Renovierung",
		"description": "Professionelle Renovierung und Handwerk in Aarhus. Dänische Qualität und Tradition seit 1987."
	}
}
```

---

## Phase 5: Component Updates

### 5.1 Create Language Switcher (`src/components/LanguageSwitcher.jsx`)

```javascript
import React, { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import {
	SUPPORTED_LANGUAGES,
	LANGUAGE_NAMES,
	LANGUAGE_FLAGS,
	removeLanguageFromPath,
} from '../i18n/helpers';
import Icon from './AppIcon';

export default function LanguageSwitcher() {
	const [isOpen, setIsOpen] = useState(false);
	const { lang } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const { t } = useTranslation('navigation');

	const changeLanguage = (newLang) => {
		const path = removeLanguageFromPath(location.pathname);
		navigate(`/${newLang}${path}`);
		setIsOpen(false);
	};

	const languages = SUPPORTED_LANGUAGES.map((code) => ({
		code,
		name: LANGUAGE_NAMES[code],
		flag: LANGUAGE_FLAGS[code],
	}));

	const currentLang = languages.find((l) => l.code === lang);

	return (
		<div className='relative'>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className='flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors duration-fast'
				aria-label={t('language.switch')}
			>
				<span className='text-lg'>{currentLang?.flag}</span>
				<span className='text-sm font-medium'>{currentLang?.name}</span>
				<Icon
					name='ChevronDown'
					size={16}
				/>
			</button>

			{isOpen && (
				<div className='absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-elevated z-50'>
					{languages.map((language) => (
						<button
							key={language.code}
							onClick={() => changeLanguage(language.code)}
							disabled={language.code === lang}
							className={`w-full flex items-center space-x-3 px-4 py-2 text-sm transition-colors duration-fast ${
								language.code === lang
									? 'bg-accent text-accent-foreground'
									: 'text-popover-foreground hover:bg-muted'
							}`}
						>
							<span className='text-lg'>{language.flag}</span>
							<span className='font-medium'>{language.name}</span>
						</button>
					))}
				</div>
			)}
		</div>
	);
}
```

### 5.2 Update Header Component (`src/components/ui/Header.jsx`)

```javascript
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import LanguageSwitcher from '../LanguageSwitcher';

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const location = useLocation();
	const { lang } = useParams();
	const { t } = useTranslation('navigation');

	const navigationItems = [
		{ name: t('menu.home'), path: '/homepage', icon: 'Home' },
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

	const Logo = () => (
		<div className='flex items-center space-x-3'>
			<div className='relative'>
				<svg
					width='40'
					height='40'
					viewBox='0 0 40 40'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
					className='text-brand-primary'
				>
					{/* Logo SVG content */}
				</svg>
			</div>
			<div className='flex flex-col'>
				<span className='font-headlines font-semibold text-lg text-foreground leading-tight'>
					{t('company.name', { ns: 'common' })}
				</span>
				<span className='font-body text-xs text-muted-foreground leading-tight'>
					{t('company.tagline', { ns: 'common' })}
				</span>
			</div>
		</div>
	);

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
							<Logo />
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
```

---

## Phase 6: SEO and Meta Tags

### 6.1 Create SEO Component (`src/components/SEOHead.jsx`)

```javascript
import { Helmet } from 'react-helmet-async';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { removeLanguageFromPath } from '../i18n/helpers';

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://aarhuscontractor.dk';

export default function SEOHead({
	title,
	description,
	image,
	type = 'website',
}) {
	const { t } = useTranslation(['common', 'homepage']);
	const { lang } = useParams();
	const location = useLocation();
	const path = removeLanguageFromPath(location.pathname);

	const pageTitle = title || t('meta.title');
	const pageDescription = description || t('meta.description');
	const pageImage = image || `${SITE_URL}/og-image-${lang}.jpg`;

	return (
		<Helmet>
			<title>{pageTitle}</title>
			<meta
				name='description'
				content={pageDescription}
			/>

			{/* Open Graph */}
			<meta
				property='og:title'
				content={pageTitle}
			/>
			<meta
				property='og:description'
				content={pageDescription}
			/>
			<meta
				property='og:image'
				content={pageImage}
			/>
			<meta
				property='og:type'
				content={type}
			/>
			<meta
				property='og:url'
				content={`${SITE_URL}/${lang}${path}`}
			/>
			<meta
				property='og:locale'
				content={
					lang === 'da' ? 'da_DK' : lang === 'de' ? 'de_DE' : 'en_US'
				}
			/>

			{/* Twitter */}
			<meta
				name='twitter:card'
				content='summary_large_image'
			/>
			<meta
				name='twitter:title'
				content={pageTitle}
			/>
			<meta
				name='twitter:description'
				content={pageDescription}
			/>
			<meta
				name='twitter:image'
				content={pageImage}
			/>

			{/* Hreflang */}
			<link
				rel='alternate'
				hrefLang='da'
				href={`${SITE_URL}/da${path}`}
			/>
			<link
				rel='alternate'
				hrefLang='en'
				href={`${SITE_URL}/en${path}`}
			/>
			<link
				rel='alternate'
				hrefLang='de'
				href={`${SITE_URL}/de${path}`}
			/>
			<link
				rel='alternate'
				hrefLang='x-default'
				href={`${SITE_URL}/da${path}`}
			/>

			{/* Canonical */}
			<link
				rel='canonical'
				href={`${SITE_URL}/${lang}${path}`}
			/>
		</Helmet>
	);
}
```

### 6.2 Update Page Components

```javascript
// Example: src/pages/homepage/index.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../../components/ui/Header';
import SEOHead from '../../components/SEOHead';
import HeroSection from './components/HeroSection';
// ... other imports

const Homepage = () => {
	const { t } = useTranslation(['homepage', 'common']);

	return (
		<>
			<SEOHead
				title={t('meta.title')}
				description={t('meta.description')}
			/>

			<div className='min-h-screen bg-background'>
				<Header />

				<main className='pt-16'>
					<HeroSection />
					{/* ... other sections */}
				</main>
			</div>
		</>
	);
};

export default Homepage;
```

---

## Phase 7: Content Extraction and Translation

### 7.1 Priority Order for Translation

1. **Navigation and UI Elements** (Header, buttons, forms)
2. **Hero Sections** (Main headlines and descriptions)
3. **Service Descriptions** (Core business content)
4. **Testimonials and Social Proof**
5. **Footer and Legal Content**
6. **Error Messages and Status Text**
7. **Meta Tags and SEO Content**

### 7.2 Translation Guidelines

-   **Danish (da)**: Focus on natural, professional Danish construction terminology
-   **German (de)**: Use formal business German appropriate for construction industry
-   **English (en)**: Maintain current tone and style
-   **Cultural Adaptation**: Adapt examples, references, and cultural concepts
-   **Technical Terms**: Maintain consistency for industry-specific terminology
-   **ICU Formatting**: Use ICU message format for plurals, dates, and numbers

### 7.3 Example ICU Usage

```json
{
	"projects": {
		"count": "{count, plural, =0 {Ingen projekter} =1 {Et projekt} other {# projekter}}",
		"completed": "Afsluttet {date, date, short}",
		"price": "Pris: {price, number, currency}"
	}
}
```

---

## Phase 8: Testing and Quality Assurance

### 8.1 Testing Checklist

-   [ ] Language switching works on all pages
-   [ ] URLs update correctly with language prefixes
-   [ ] Browser back/forward navigation works
-   [ ] Language preference persists across sessions
-   [ ] All text content is translated
-   [ ] Images with text have appropriate alt attributes
-   [ ] Forms work correctly in all languages
-   [ ] SEO meta tags are language-specific
-   [ ] Mobile navigation works in all languages
-   [ ] No hardcoded text remains in components
-   [ ] Deep links work without prior session (e.g., `/de/projects`)
-   [ ] `<html lang>` attribute updates properly
-   [ ] 404 page is localized

### 8.2 Browser Testing

-   Chrome, Firefox, Safari, Edge
-   Mobile devices (iOS Safari, Android Chrome)
-   Different screen sizes and orientations

### 8.3 Translation Testing

-   Use `i18next-scanner` for key extraction and linting
-   Implement pseudo-locale testing for missing strings
-   Test with actual native speakers

---

## Phase 9: Deployment and SEO

### 9.1 Server Configuration

-   Redirect `/` → `/da/` at server level
-   Redirect unknown `/xx/` → `/da/`
-   Add multilingual sitemap with `hreflang` links
-   Cache JSON translation files (`ETag`, long `max-age`)

### 9.2 Build Configuration

```javascript
// vite.config.mjs
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					i18n: ['react-i18next', 'i18next', 'i18next-icu'],
				},
			},
		},
	},
});
```

---

## Phase 10: Maintenance and Updates

### 10.1 Translation Management

-   Use `i18next-scanner` for key extraction & linting
-   Consider translation management service (Crowdin, Lokalise)
-   Establish review process for new translations
-   Regular review with native speakers

### 10.2 Content Updates

-   Create process for adding new translatable content
-   Maintain consistency across all languages
-   Regular review of translation quality

---

## Estimated Timeline

| Phase             | Duration   | Dependencies               |
| ----------------- | ---------- | -------------------------- |
| Setup             | 0.5 days   | None                       |
| i18n Config       | 1 day      | Setup                      |
| Routing           | 1 day      | Config                     |
| Translation Files | 2 days     | Config                     |
| Component Updates | 2 days     | Routing, Translation Files |
| SEO Updates       | 1 day      | Component Updates          |
| Testing           | 1 day      | All previous               |
| Deployment        | 0.5 days   | Testing                    |
| **Total**         | **9 days** |                            |

---

## Success Metrics

-   [ ] Language switching seamless and URL-based
-   [ ] All user-facing content translatable
-   [ ] SEO preserved across languages
-   [ ] Accessibility standards met
-   [ ] No broken links or untranslated text
-   [ ] Danish as default language for Danish business
-   [ ] ICU formatting working for plurals and numbers
-   [ ] Mobile experience works perfectly in all languages

---

## Key Advantages of This Hybrid Approach

### ✅ **Technical Excellence**

-   Clean architecture with React Router's `Outlet` pattern
-   Danish as default language (business-appropriate)
-   ICU support for proper internationalization
-   Better performance with simpler state management

### ✅ **Comprehensive Implementation**

-   Detailed translation examples for all languages
-   Complete component update examples
-   Comprehensive testing approach
-   Better SEO implementation

### ✅ **Developer Experience**

-   Utility functions for common operations
-   Clear separation of concerns
-   Easy to maintain and extend
-   Better error handling

### ✅ **Business Alignment**

-   Danish-first approach for Danish company
-   Professional translation guidelines
-   Cultural adaptation considerations
-   Industry-specific terminology handling

This hybrid plan combines the best of both approaches while being specifically tailored to your Danish contractor business needs.
