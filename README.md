# Analytics

## MixPanel Analytics

This project uses [MixPanel](https://mixpanel.com/) for analytics tracking.

### Setup

1. Install the MixPanel browser SDK:
	```sh
	npm install mixpanel-browser
	```
2. The initialization code is in `src/index.js`. Replace `'YOUR_PROJECT_TOKEN'` with your MixPanel project token:
	```js
	mixpanel.init('YOUR_PROJECT_TOKEN');
	```
3. Basic page view and landing page events are tracked automatically.

For more advanced event tracking, use the `mixpanel.track` API in your React components.

# Budlee Website Frontend

## Installation

1. Install dependencies:
	```sh
	npm install
	```

## Build

To build the project for production:

```sh
npm run build
```
The output will be in the `build` directory.

## Deployment

### Deploy to Cloudflare Pages

1. [Sign up](https://dash.cloudflare.com/sign-up) or log in to Cloudflare.
2. Create a new Pages project and connect your GitHub repository.
3. Set the build command to:
	```sh
	npm run build
	```
4. Set the output directory to:
	```
	build
	```
5. Deploy the site.

#### Manual Deployment (No Git)
1. Build the project as above.
2. Go to Cloudflare Pages dashboard and create a new project.
3. Choose "Direct Upload" or "Upload assets".
4. Upload the contents of the `build` directory.
5. Complete the setup and deploy.

### Deploy to Netlify

1. [Sign up](https://app.netlify.com/signup) or log in to Netlify.
2. Create a new site from Git and select your repository.
3. Set the build command to:
	```sh
	npm run build
	```
4. Set the publish directory to:
	```
	build
	```
5. Click "Deploy site".

#### Manual Deployment (No Git)
1. Build the project as above.
2. Go to Netlify dashboard and click "Add new site" > "Deploy manually".
3. Drag and drop the contents of the `build` directory into the upload area.
4. Netlify will deploy your site automatically.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
