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
	const { t, ready } = useTranslation('navigation');

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

	// Don't render until translations are ready
	if (!ready) {
		return (
			<div className='flex items-center space-x-2 px-3 py-2 rounded-lg'>
				<div className='w-6 h-4 bg-muted rounded animate-pulse'></div>
				<div className='w-16 h-4 bg-muted rounded animate-pulse'></div>
				<div className='w-4 h-4 bg-muted rounded animate-pulse'></div>
			</div>
		);
	}

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
