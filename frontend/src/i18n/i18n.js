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

		// Ensure translations are loaded before rendering
		load: 'languageOnly',
		ns: [
			'common',
			'navigation',
			'homepage',
			'about-our-craft',
			'services',
			'consultation',
			'gallery',
			'errors',
		],
		defaultNS: 'common',
	});

// Set HTML lang attribute and direction
i18n.on('languageChanged', (lng) => {
	document.documentElement.setAttribute('lang', lng);
	document.documentElement.setAttribute('dir', 'ltr');
});

// Debug: Log when translations are loaded
i18n.on('loaded', (loaded) => {
	console.log('i18n translations loaded:', loaded);
});

i18n.on('failedLoading', (lng, ns, msg) => {
	console.error('i18n failed to load:', lng, ns, msg);
});

export default i18n;
