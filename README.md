# Styled React Boilerplate ⚛️ 💅

> Minimal & Modern Boilerplate for building apps with React & styled-components

[![Build Status](https://travis-ci.org/xxczaki/styled-react-boilerplate.svg?branch=master)](https://travis-ci.org/xxczaki/styled-react-boilerplate) 
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[**Demo Site**](https://styled-react-boilerplate.now.sh)

---

## Highlights
- Easier and less complex than [create-react-app](https://github.com/facebook/create-react-app)
- Features styled-components
- Uses React Hooks
- Includes optimized Webpack & Babel configuration
- Non-blocking CSS & fonts loading
- Friendly errors & warnings
- Ensures clean code with xo & stylelint
- Normalizes default style with modern-normalize
- HTML template with social media meta tags
- Targets the latest browsers
- Preconfigured hot reloading using [react-hot-loader](https://github.com/gaearon/react-hot-loader)

## File Tree
```bash
├── public                # Folder with HTML template & favicon
│   ├── favicon.png       # Example favicon
│   └── index.html        # HTML template
├── src                   # Main folder with index.js & components
│   ├── components        # Subfolder with components
│   │   ├── button.js     # Example component 1
│   │   └── container.js  # Example component 2
│   │   └── counter.js    # Example component 3
│   │   └── header.js     # Example component 4
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
 
# Start webpack-dev-server at port 8000

 $ npm start
 
# Run linters

 $ npm test
 
# Build app for production (gets output in the 'dist' directory)

 $ npm run build
```

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/xxczaki/styled-react-boilerplate)

## TODO

- [ ] Testing
- [x] PWA
- [ ] More detailed user guide

### License

MIT
