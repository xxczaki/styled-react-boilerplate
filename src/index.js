import React from 'react';
import {createRoot} from 'react-dom';
import App from './app';

const root = document.createElement('div');
document.body.append(root);

// Register service worker
if ('serviceWorker' in navigator) {
	window.addEventListener('load', () => {
		navigator.serviceWorker.register('/sw.js').then(registration => {
			console.log('SW registered:', registration);
		}).catch(error => {
			console.log('SW registration failed:', error);
		});
	});
}

createRoot(root).render(<App/>);
