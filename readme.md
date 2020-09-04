# Styled React Boilerplate ⚛️ 💅

> Minimal & Modern Boilerplate for building apps with React & styled-components

[![Build Status](https://travis-ci.org/xxczaki/styled-react-boilerplate.svg?branch=master)](https://travis-ci.org/xxczaki/styled-react-boilerplate)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)

[**Demo Site**](https://styled-react-boilerplate.now.sh) •
[**FAQ**](#faq)

---

![](https://lighthouse.now.sh/?perf=100&pwa=100&a11y=100&bp=100&seo=100)

## Highlights

- Less complex than [create-react-app](https://github.com/facebook/create-react-app)
- Features styled-components
- Uses React Hooks
- Includes optimized Webpack & Babel configuration
- Perfect Lighthouse score
- Non-blocking CSS & fonts loading
- Friendly errors & warnings
- Ensures clean code with xo & stylelint
- Normalizes default browser style with modern-normalize
- HTML template with social media meta tags
- Targets the latest browsers
- Works offline
- Preconfigured React Refresh using [react-refresh-webpack-plugin](https://github.com/pmmmwh/react-refresh-webpack-plugin)

## File Tree
```bash
├── public                # Folder for static assets
│   ├── favicon.png       # Favicon
│   └── index.html        # HTML template
├── src                   # Main folder
│   ├── components        # Subfolder with components
│   │   ├── button.js
│   │   └── container.js
│   │   └── counter.js
│   │   └── header.js
│   │   └── image.js
│   └── app.js            # Main page file
│   └── index.js          # React DOM, service worker config
├── webpack.config.js     # Webpack config
├── babel.config.js       # Babel config
```

## Usage
```bash
# Install dependencies

 $ npm install

# Start webpack-dev-server at port 8080

 $ npm start

# Run linters

 $ npm test

# Build app for production (gets output in the 'dist' directory)

 $ npm run build
```

## FAQ

### How to deploy my app?

I recommend to use either [Vercel](https://vercel.com) or [Netlify](https://netlify.com) for hosting your site.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/project?template=https://github.com/xxczaki/styled-react-boilerplate)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/xxczaki/styled-react-boilerplate)

### How to add & use static assets (ex. images)?

Place them in the `public` directory in the root of the project. You can then use them like in the example below:

```js
// Import files from the `public` directory
import imgSrc from '../../public/favicon.png';

// Then you can reference it like so:
const Image = () => (
	<img src={imgSrc} alt="⚡"/>
);
```

Check out the [`Image` component](src/components/image.js) for a live example.

## TODO

- [x] PWA
- [x] Testing
- [ ] module & nomodule support

## Related

- [static-webpack-boilerplate](https://github.com/xxczaki/static-webpack-boilerplate)

### License

MIT
