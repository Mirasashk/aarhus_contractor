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
