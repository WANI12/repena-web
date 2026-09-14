import React from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap';
import RepenaLanding from './components/RepenaLanding';
import ContactPage from './components/ContactPage';

const rootElement = document.getElementById('repena-root');

if (rootElement) {
    const root = createRoot(rootElement);
    const isContactPage = window.location.pathname === '/contact';

    root.render(
        React.createElement(
            React.StrictMode,
            null,
            React.createElement(isContactPage ? ContactPage : RepenaLanding)
        )
    );
}
