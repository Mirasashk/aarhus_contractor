# Aarhus Contractor – i18n Architecture Diagrams

## 1) Folder Structure (Mermaid)
```mermaid
flowchart TD
    A[src/]:::dir
    A --> A1[i18n/]:::dir
    A --> A2[locales/]:::dir
    A --> A3[layout/]:::dir
    A --> A4[pages/]:::dir

    A1 --> A1a[i18n.js]
    A1 --> A1b[LanguageWrapper.jsx]
    A1 --> A1c[helpers.js]

    A2 --> EN[en/]:::dir
    A2 --> DA[da/]:::dir
    A2 --> DE[de/]:::dir

    EN --> EN1[common.json]
    EN --> EN2[navigation.json]
    EN --> EN3[home.json]
    EN --> EN4[about.json]
    EN --> EN5[projects.json]
    EN --> EN6[contact.json]
    EN --> EN7[schedule.json]
    EN --> EN8[errors.json]

    DA --> DA1[common.json]
    DA --> DA2[navigation.json]
    DA --> DA3[home.json]
    DA --> DA4[about.json]
    DA --> DA5[projects.json]
    DA --> DA6[contact.json]
    DA --> DA7[schedule.json]
    DA --> DA8[errors.json]

    DE --> DE1[common.json]
    DE --> DE2[navigation.json]
    DE --> DE3[home.json]
    DE --> DE4[about.json]
    DE --> DE5[projects.json]
    DE --> DE6[contact.json]
    DE --> DE7[schedule.json]
    DE --> DE8[errors.json]

    A3 --> L1[Header.tsx]
    A3 --> L2[Footer.tsx]

    A4 --> P1[Home/]
    A4 --> P2[About/]
    A4 --> P3[Projects/]
    A4 --> P4[Contact/]
    A4 --> P5[Schedule/]

classDef dir fill:#f5f5f5,stroke:#ccc,stroke-width:1px,color:#333;
```

---

## 2) Route Topology (Mermaid)
```mermaid
flowchart LR
    ROOT["/"] --> DAFWD["301 → /da/"]

    subgraph LANG[Path-based Routes]
      direction TB
      DA["/da/*"] --> DA_H["/da/ (index) → <Homepage>"]
      DA --> DA_AB["/da/about → <About>"]
      DA --> DA_PR["/da/projects → <Projects>"]
      DA --> DA_CO["/da/contact → <Contact>"]
      DA --> DA_SC["/da/schedule → <Schedule>"]

      EN["/en/*"] --> EN_H["/en/ (index) → <Homepage>"]
      EN --> EN_AB["/en/about → <About>"]
      EN --> EN_PR["/en/projects → <Projects>"]
      EN --> EN_CO["/en/contact → <Contact>"]
      EN --> EN_SC["/en/schedule → <Schedule>"]

      DE["/de/*"] --> DE_H["/de/ (index) → <Homepage>"]
      DE --> DE_AB["/de/about → <About>"]
      DE --> DE_PR["/de/projects → <Projects>"]
      DE --> DE_CO["/de/contact → <Contact>"]
      DE --> DE_SC["/de/schedule → <Schedule>"]
    end

    BAD["/(xx)/* (unknown lang)"] --> FIX["302 → /da/*"]

    note["LanguageWrapper guards: unsupported → redirect /da; supported → change i18n + <Outlet/>"]
```

---

## 3) SEO Links Per Page (Mermaid)
```mermaid
flowchart TD
    P[(Current Page Path)] --> DA["hreflang: da → https://aarhuscontractor.dk/da{path}"]
    P --> EN["hreflang: en → https://aarhuscontractor.dk/en{path}"]
    P --> DE["hreflang: de → https://aarhuscontractor.dk/de{path}"]
    P --> XD["hreflang: x-default → https://aarhuscontractor.dk/da{path}"]
    P --> CAN["canonical → https://aarhuscontractor.dk/{lang}{path}"]
```

---

## 4) i18n Lifecycle (Mermaid Sequence)
```mermaid
sequenceDiagram
  participant User
  participant Router as React Router
  participant LangWrap as LanguageWrapper
  participant I18N as i18next
  participant View as Page Component

  User->>Router: Navigate to /de/projects
  Router->>LangWrap: Render with lang='de'
  LangWrap->>I18N: i18n.changeLanguage('de') (if not already)
  I18N-->>LangWrap: 'languageChanged' event
  LangWrap->>Router: <Outlet/>
  Router->>View: Render <Projects/> with useTranslation()
  View->>I18N: Request namespaces (projects, common, navigation)
  I18N->>View: Load JSON via http-backend
  View-->>User: Localized UI
```

---

## 5) Language Switcher Path Logic (Mermaid)
```mermaid
flowchart TD
    A[Current pathname: /en/projects] --> B[strip prefix: projects]
    B --> C[choose new lang: 'da']
    C --> D[build: /da/projects]
    D --> E[navigate() to /da/projects]
    E --> F[LanguageWrapper sets i18n → 'da' and renders]
```

---

**Tip:** If you want these to render on GitHub, ensure Mermaid is enabled (it is by default). For static sites, you can also embed Mermaid runtime to render client-side.
