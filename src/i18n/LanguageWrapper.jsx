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

	// Change language if different from current and i18n is ready
	if (i18n && i18n.changeLanguage && i18n.language !== lang) {
		i18n.changeLanguage(lang);
	}

	return <Outlet />;
}
