import React from 'react';
import {createGlobalStyle} from 'styled-components';
import {hot} from 'react-hot-loader/root';

// Import modern-normalize & fonts
import 'typeface-open-sans';
import 'modern-normalize/modern-normalize.css';

// Import Components
import Container from './components/container';
import Header from './components/header';
import Counter from './components/counter';

// Global Style
const GlobalStyle = createGlobalStyle`
  body {
    font-family: Open Sans, monospace !important;
    background: #212121;
    color: #fff;
    padding: 1em;
    line-height: 1.8em;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeSpeed;
    word-wrap: break-word
  }
`;

// Main page
const App = () => {
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

	return (
		<Container>
			<Header>Hello World ⚡</Header>
			<p>Example site using Styled React Boilerplate!</p>
			<Counter/>
			<GlobalStyle/>
		</Container>
	);
};

export default hot(App);
