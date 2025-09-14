import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './i18n/i18n'; // Initialize i18n before App
import './styles/tailwind.css';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
