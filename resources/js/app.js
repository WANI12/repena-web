import React from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap';
import RepenaLanding from './components/RepenaLanding';
import ContactPage from './components/ContactPage';
import AboutPage from './components/AboutPage';

const rootElement = document.getElementById('repena-root');

if (rootElement) {
    const root = createRoot(rootElement);
    const path = window.location.pathname;
    const Page = path === '/contact'
        ? ContactPage
        : path === '/about'
            ? AboutPage
            : RepenaLanding;

    root.render(
        React.createElement(
            React.StrictMode,
            null,
            React.createElement(Page)
        )
    );
}
