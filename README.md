# Styled React Boilerplate ⚛️ 💅
> Minimal & Modern Boilerplate for building apps with React & styled-components

[![Build Status](https://travis-ci.org/xxczaki/styled-react-boilerplate.svg?branch=master)](https://travis-ci.org/xxczaki/styled-react-boilerplate) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

## Features
- [React](https://reactjs.org)
- [styled-components](https://www.styled-components.com/)
- [Webpack 4](https://webpack.js.org/)
- [Babel 7](https://babeljs.io/)
- [modern-normalize](https://github.com/sindresorhus/modern-normalize)
- [xo](https://github.com/xojs/xo)
- [stylelint](https://stylelint.io/)

## Why
- It's easier and less complex than [create-react-app](https://github.com/facebook/create-react-app)
- Features styled-components
- Uses the latest Webpack & Babel
- Ensures clean code with xo & stylelint
- Normalizes default style with modern-normalize
- HTML template with social media meta tags
- Targets the latest browsers
- Uses Webpack's [HMR](https://webpack.js.org/concepts/hot-module-replacement/)

## File Tree
```bash
├── public                # Folder with HTML template & favicon
│   ├── favicon.png       # Example favicon
│   └── index.html        # HTML template
├── src                   # Main folder with index.js & components
│   ├── components        # Subfolder with components
│   │   ├── container.js  # Example component 1
│   │   └── header.js     # Example component 2
│   └── index.js          # Main file
├── .npmrc                # npm config
├── .stylelintrc          # stylelint config
├── .travis.yml           # Travis CI config
├── package.json          # Package config with scripts, list of dependencies etc.
├── webpack.config.js     # Webpack config
├── babel.config.js       # Babel config

```

## Usage
```bash
# Install dependencies

 $ npm install
 
# Start webpack-dev-server with HMR at port 5000

 $ npm start
 
# Run linters

 $ npm test
 
# Build app for production

 $ npm run build
```

### License

MIT
