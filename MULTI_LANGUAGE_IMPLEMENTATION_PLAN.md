# Multi-Language Support Implementation Plan
## Aarhus Contractor - English, Danish, German

### Project Overview
This document outlines the complete implementation plan for adding multi-language support to the Aarhus Contractor React application, supporting English (en), Danish (da), and German (de).

---

## Phase 1: Setup and Dependencies

### 1.1 Install Required Packages
```bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend
```

### 1.2 Create Directory Structure
```
src/
├── i18n/
│   ├── i18n.js
│   ├── languageProvider.jsx
│   └── resources.js
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

### 2.1 Create i18n Configuration (`src/i18n/i18n.js`)
```javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: process.env.NODE_ENV === 'development',
    
    interpolation: {
      escapeValue: false,
    },
    
    detection: {
      order: ['path', 'localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
```

### 2.2 Create Language Provider (`src/i18n/languageProvider.jsx`)
```javascript
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    // Update URL without page reload
    const newPath = `/${lng}${window.location.pathname.replace(/^\/[a-z]{2}/, '')}`;
    window.history.pushState({}, '', newPath);
  };

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      setCurrentLanguage(lng);
    };

    i18n.on('languageChanged', handleLanguageChange);
    return () => i18n.off('languageChanged', handleLanguageChange);
  }, [i18n]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

---

## Phase 3: Routing Updates

### 3.1 Update Routes.jsx
```javascript
import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import { LanguageProvider } from "./i18n/languageProvider";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
// ... other imports

const Routes = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ErrorBoundary>
          <ScrollToTop />
          <RouterRoutes>
            {/* Language-specific routes */}
            <Route path="/:lang" element={<LanguageWrapper />}>
              <Route index element={<AboutOurCraft />} />
              <Route path="homepage" element={<Homepage />} />
              <Route path="project-transformations-gallery" element={<ProjectTransformationsGallery />} />
              <Route path="consultation-journey" element={<ConsultationJourney />} />
              <Route path="craft-process-philosophy" element={<CraftProcessPhilosophy />} />
              <Route path="service-specializations" element={<ServiceSpecializations />} />
              <Route path="about-our-craft" element={<AboutOurCraft />} />
            </Route>
            {/* Default redirect */}
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </ErrorBoundary>
      </BrowserRouter>
    </LanguageProvider>
  );
};
```

### 3.2 Create Language Wrapper Component
```javascript
import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const LanguageWrapper = ({ children }) => {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && ['en', 'da', 'de'].includes(lang)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (lang && !['en', 'da', 'de'].includes(lang)) {
    return <Navigate to="/en" replace />;
  }

  return children;
};
```

---

## Phase 4: Translation Files

### 4.1 Common Translations (`src/locales/en/common.json`)
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
  }
}
```

### 4.2 Navigation Translations (`src/locales/en/navigation.json`)
```json
{
  "menu": {
    "home": "Home",
    "gallery": "Gallery", 
    "ourCraft": "Our Craft",
    "services": "Services",
    "consultation": "Consultation",
    "about": "About",
    "more": "More"
  },
  "language": {
    "switch": "Switch Language",
    "english": "English",
    "danish": "Dansk", 
    "german": "Deutsch"
  }
}
```

### 4.3 Homepage Translations (`src/locales/en/homepage.json`)
```json
{
  "hero": {
    "badge": "Danish Craftsmanship Excellence",
    "headline": {
      "line1": "Thoughtful Renovation,",
      "line2": "Crafted for Life"
    },
    "description": "Where Danish design philosophy meets exceptional construction expertise. We transform spaces into sanctuaries that embody hygge and timeless beauty."
  },
  "sections": {
    "projectShowcase": "Featured Project Transformations",
    "philosophy": "Danish Design Philosophy & Process",
    "consultation": "Consultation Booking Widget",
    "testimonials": "Client Testimonials Carousel",
    "trustSignals": "Trust Signals & Certifications"
  }
}
```

---

## Phase 5: Component Updates

### 5.1 Update Header Component
```javascript
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../i18n/languageProvider';
import Icon from '../AppIcon';
import Button from './Button';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation('navigation');
  const { currentLanguage } = useLanguage();
  const location = useLocation();

  const navigationItems = [
    { name: t('menu.home'), path: '/homepage', icon: 'Home' },
    { name: t('menu.gallery'), path: '/project-transformations-gallery', icon: 'Image' },
    { name: t('menu.ourCraft'), path: '/craft-process-philosophy', icon: 'Hammer' },
    { name: t('menu.services'), path: '/service-specializations', icon: 'Wrench' },
    { name: t('menu.consultation'), path: '/consultation-journey', icon: 'Calendar' },
  ];

  // Update all href attributes to include language
  const getLocalizedPath = (path) => `/${currentLanguage}${path}`;

  return (
    <header className="...">
      {/* Logo with localized link */}
      <Link to={getLocalizedPath('/homepage')}>
        <Logo />
      </Link>
      
      {/* Navigation with localized links */}
      <nav className="...">
        {navigationItems.map((item) => (
          <Link
            key={item.path}
            to={getLocalizedPath(item.path)}
            className="..."
          >
            <Icon name={item.icon} size={16} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>

      {/* Language Switcher */}
      <LanguageSwitcher />
    </header>
  );
};
```

### 5.2 Create Language Switcher Component
```javascript
import React, { useState } from 'react';
import { useLanguage } from '../i18n/languageProvider';
import { useTranslation } from 'react-i18next';
import Icon from '../AppIcon';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useLanguage();
  const { t } = useTranslation('navigation');

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇬🇧' },
    { code: 'da', name: t('language.danish'), flag: '🇩🇰' },
    { code: 'de', name: t('language.german'), flag: '🇩🇪' },
  ];

  const currentLang = languages.find(lang => lang.code === currentLanguage);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors"
      >
        <span>{currentLang?.flag}</span>
        <span className="text-sm font-medium">{currentLang?.name}</span>
        <Icon name="ChevronDown" size={16} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-popover border border-border rounded-lg shadow-elevated">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                changeLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-sm hover:bg-muted ${
                currentLanguage === lang.code ? 'bg-accent' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
```

---

## Phase 6: Content Extraction and Translation

### 6.1 Priority Order for Translation
1. **Navigation and UI Elements** (Header, buttons, forms)
2. **Hero Sections** (Main headlines and descriptions)
3. **Service Descriptions** (Core business content)
4. **Testimonials and Social Proof**
5. **Footer and Legal Content**
6. **Error Messages and Status Text**
7. **Meta Tags and SEO Content**

### 6.2 Translation Guidelines
- **Danish (da)**: Focus on natural, professional Danish construction terminology
- **German (de)**: Use formal business German appropriate for construction industry
- **English (en)**: Maintain current tone and style
- **Cultural Adaptation**: Adapt examples, references, and cultural concepts
- **Technical Terms**: Maintain consistency for industry-specific terminology

---

## Phase 7: SEO and Meta Tags

### 7.1 Update Page Components
```javascript
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const Homepage = () => {
  const { t } = useTranslation(['homepage', 'common']);
  const { lang } = useParams();

  useEffect(() => {
    document.title = t('meta.title');
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', t('meta.description'));
    }
  }, [t]);

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <meta property="og:title" content={t('meta.title')} />
        <meta property="og:description" content={t('meta.description')} />
        <link rel="alternate" hrefLang="en" href={`https://yoursite.com/en/homepage`} />
        <link rel="alternate" hrefLang="da" href={`https://yoursite.com/da/homepage`} />
        <link rel="alternate" hrefLang="de" href={`https://yoursite.com/de/homepage`} />
        <link rel="canonical" href={`https://yoursite.com/${lang}/homepage`} />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        {/* Component content */}
      </div>
    </>
  );
};
```

---

## Phase 8: Testing and Quality Assurance

### 8.1 Testing Checklist
- [ ] Language switching works on all pages
- [ ] URLs update correctly with language prefixes
- [ ] Browser back/forward navigation works
- [ ] Language preference persists across sessions
- [ ] All text content is translated
- [ ] Images with text have appropriate alt attributes
- [ ] Forms work correctly in all languages
- [ ] SEO meta tags are language-specific
- [ ] Mobile navigation works in all languages
- [ ] No hardcoded text remains in components

### 8.2 Browser Testing
- Chrome, Firefox, Safari, Edge
- Mobile devices (iOS Safari, Android Chrome)
- Different screen sizes and orientations

---

## Phase 9: Deployment Considerations

### 9.1 Build Configuration
```javascript
// vite.config.mjs
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          i18n: ['react-i18next', 'i18next']
        }
      }
    }
  }
});
```

### 9.2 Server Configuration
- Ensure all language routes are handled by the server
- Set up proper redirects for root domain to default language
- Configure hreflang headers for SEO

---

## Phase 10: Maintenance and Updates

### 10.1 Translation Management
- Set up translation workflow for content updates
- Consider using translation management tools (Crowdin, Lokalise)
- Establish review process for new translations

### 10.2 Content Updates
- Create process for adding new translatable content
- Maintain consistency across all languages
- Regular review of translation quality

---

## Estimated Timeline

| Phase | Duration | Dependencies |
|-------|----------|--------------|
| Phase 1: Setup | 0.5 days | None |
| Phase 2: i18n Config | 1 day | Phase 1 |
| Phase 3: Routing | 1 day | Phase 2 |
| Phase 4: Translation Files | 2 days | Phase 2 |
| Phase 5: Component Updates | 2 days | Phase 3, 4 |
| Phase 6: Content Extraction | 1.5 days | Phase 5 |
| Phase 7: SEO Updates | 1 day | Phase 5 |
| Phase 8: Testing | 1 day | Phase 7 |
| Phase 9: Deployment | 0.5 days | Phase 8 |
| **Total** | **10.5 days** | |

---

## Success Metrics

- [ ] All user-facing text is translatable
- [ ] Language switching is seamless and fast
- [ ] SEO performance maintained across languages
- [ ] User experience is consistent across all languages
- [ ] No broken links or missing translations
- [ ] Mobile experience works perfectly in all languages

---

## Notes

- Start with English as the base language for all translations
- Consider hiring native speakers for Danish and German translations
- Test with actual users who speak the target languages
- Monitor analytics for language usage patterns
- Plan for future language additions (French, Swedish, etc.)
