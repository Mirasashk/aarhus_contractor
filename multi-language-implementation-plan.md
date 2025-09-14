# Multi-Language Support Implementation Plan

## Aarhus Contractor - English, Danish, German

------------------------------------------------------------------------

## Project Overview

This plan describes how to implement multi-language support in the
Aarhus Contractor React application, supporting **English (en)**,
**Danish (da)**, and **German (de)**.\
The site will use **path-based language routing** (e.g., `/da/...`,
`/en/...`, `/de/...`) with Danish as the default language because the
company is Danish and hosted on a `.dk` domain.

------------------------------------------------------------------------

## Phase 1: Setup and Dependencies

### 1.1 Install Required Packages

``` bash
npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend react-helmet-async i18next-icu
```

### 1.2 Directory Structure

    src/
    ├── i18n/
    │   ├── i18n.js
    │   ├── LanguageWrapper.jsx
    │   └── helpers.js
    ├── locales/
    │   ├── en/{common,navigation,home,about,projects,contact,schedule,errors}.json
    │   ├── da/{common,navigation,home,about,projects,contact,schedule,errors}.json
    │   └── de/{common,navigation,home,about,projects,contact,schedule,errors}.json

------------------------------------------------------------------------

## Phase 2: Core i18n Configuration

### 2.1 Create `src/i18n/i18n.js`

``` javascript
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import ICU from 'i18next-icu';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(ICU)
  .use(initReactI18next)
  .init({
    fallbackLng: 'da',
    supportedLngs: ['en', 'da', 'de'],
    debug: process.env.NODE_ENV === 'development',

    interpolation: { escapeValue: false },

    detection: {
      order: ['path', 'querystring', 'localStorage', 'navigator'],
      lookupQuerystring: 'lang',
      caches: ['localStorage'],
    },

    backend: {
      loadPath: `${import.meta.env.BASE_URL || ''}locales/{{lng}}/{{ns}}.json`,
    },
  });

export default i18n;
```

### 2.2 Set `<html lang>` Attribute

``` javascript
i18n.on('languageChanged', (lng) => {
  document.documentElement.setAttribute('lang', lng);
  document.documentElement.setAttribute('dir', 'ltr');
});
```

------------------------------------------------------------------------

## Phase 3: Routing Updates

### 3.1 `LanguageWrapper.jsx`

``` javascript
import { useParams, Navigate, Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SUPPORTED = ['en', 'da', 'de'];

export default function LanguageWrapper() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  if (!SUPPORTED.includes(lang)) return <Navigate to="/da" replace />;
  if (i18n.language !== lang) i18n.changeLanguage(lang);
  return <Outlet />;
}
```

### 3.2 Example Routes

``` javascript
<Route path="/:lang" element={<LanguageWrapper />}>
  <Route index element={<Homepage />} />
  <Route path="about" element={<About />} />
  <Route path="projects" element={<Projects />} />
  <Route path="contact" element={<Contact />} />
  <Route path="schedule" element={<Schedule />} />
  <Route path="*" element={<NotFound />} />
</Route>
<Route path="/" element={<Navigate to="/da" replace />} />
```

------------------------------------------------------------------------

## Phase 4: Components

### 4.1 Language Switcher

``` javascript
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const SUPPORTED = [
  { code: 'da', name: 'Dansk', flag: '🇩🇰' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
];

export default function LanguageSwitcher() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const changeLanguage = (lng) => {
    const path = location.pathname.replace(/^\/(en|da|de)/, '');
    navigate(`/${lng}${path || '/'}`);
  };

  return (
    <div>
      {SUPPORTED.map(l => (
        <button key={l.code} disabled={l.code === lang} onClick={() => changeLanguage(l.code)}>
          {l.flag} {l.name}
        </button>
      ))}
    </div>
  );
}
```

### 4.2 SEO with `react-helmet-async`

``` javascript
import { Helmet } from 'react-helmet-async';
import { useParams, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const SITE_URL = import.meta.env.VITE_SITE_URL;

export default function Homepage() {
  const { t } = useTranslation(['home','common']);
  const { lang } = useParams();
  const location = useLocation();
  const path = location.pathname.replace(/^\/(en|da|de)/, '');

  return (
    <>
      <Helmet>
        <title>{t('meta.title')}</title>
        <meta name="description" content={t('meta.description')} />
        <link rel="alternate" hrefLang="da" href={`${SITE_URL}/da${path}`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en${path}`} />
        <link rel="alternate" hrefLang="de" href={`${SITE_URL}/de${path}`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/da${path}`} />
        <link rel="canonical" href={`${SITE_URL}/${lang}${path}`} />
      </Helmet>
      <main>{/* content */}</main>
    </>
  );
}
```

------------------------------------------------------------------------

## Phase 5: Translation Files

-   Start lean with namespaces: `common`, `navigation`, `home`, `about`,
    `projects`, `contact`, `schedule`, `errors`.
-   Add new namespaces only when needed.
-   Use **ICU formatting** for plurals, dates, and numbers.

------------------------------------------------------------------------

## Phase 6: Testing & QA

-   Verify deep links (e.g., `/de/projects`) load correctly with no
    prior session.
-   Language switching keeps user on the same page.
-   Browser navigation (back/forward) preserves language.
-   `<html lang>` attribute updates properly.
-   All text content is translatable---no hardcoded strings.
-   Alt text and forms localized.
-   Mobile navigation works across languages.
-   404 page localized.

------------------------------------------------------------------------

## Phase 7: Deployment & SEO

-   Redirect `/` → `/da/` at server level.
-   Redirect unknown `/xx/` → `/da/`.
-   Add multilingual sitemap with `hreflang` links.
-   Cache JSON translation files (`ETag`, long `max-age`).

------------------------------------------------------------------------

## Phase 8: Maintenance

-   Use `i18next-scanner` or similar for key extraction & linting.
-   Pseudo-locale testing for missing strings.
-   Consider translation management service (Crowdin, Lokalise).
-   Review translations regularly with native speakers.

------------------------------------------------------------------------

## Estimated Timeline

  Phase               Duration     Dependencies
  ------------------- ------------ --------------
  Setup               0.5 days     None
  Config              1 day        Setup
  Routing             1 day        Config
  Components          2 days       Routing
  Translation Files   2 days       Components
  Testing             1 day        All previous
  Deployment & SEO    0.5 days     Testing
  **Total**           **8 days**   

------------------------------------------------------------------------

## Success Metrics

-   [ ] Language switching seamless and URL-based\
-   [ ] All user-facing content translatable\
-   [ ] SEO preserved across languages\
-   [ ] Accessibility standards met\
-   [ ] No broken links or untranslated text
