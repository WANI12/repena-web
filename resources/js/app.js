import React from 'react';
import { createRoot } from 'react-dom/client';
import './bootstrap';
import RepenaLanding from './components/RepenaLanding';

const rootElement = document.getElementById('repena-root');

if (rootElement) {
    const root = createRoot(rootElement);

    root.render(
        React.createElement(
            React.StrictMode,
            null,
            React.createElement(RepenaLanding)
        )
    );
}
