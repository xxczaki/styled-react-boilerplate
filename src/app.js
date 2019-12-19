import React, {Suspense} from 'react';
import {createGlobalStyle} from 'styled-components';
import {hot} from 'react-hot-loader/root';

// Import assets
import 'modern-normalize/modern-normalize.css';
import woff2 from '../public/fonts/open-sans-v16-latin-regular.woff2';
import woff from '../public/fonts/open-sans-v16-latin-regular.woff';

// Import Components
import Container from './components/container';
import Header from './components/header';
import Image from './components/image';
const Counter = React.lazy(() => import('./components/counter'));

// Global Style
const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${woff2}') format('woff2'),
        url('${woff}') format('woff'); 
  }

  body {
    font-family: Open Sans, Segoe UI, Tahoma, sans-serif !important;
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
	return (
		<Container>
			<Header>Hello World <Image/></Header>
			<p>Example site using Styled React Boilerplate!</p>
			<Suspense fallback={<div>Loading...</div>}>
				<Counter/>
			</Suspense>
			<GlobalStyle/>
		</Container>
	);
};

export default hot(App);
