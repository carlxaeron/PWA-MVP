# PWA-MVP

## Project Description

This project is an e-learning platform built with Next.js, React, and MongoDB. It features quizzes and mini-learning-games for skill-building. The application is a Progressive Web App (PWA) with client-facing and admin-facing parts.

### Client-Facing Part

The client-facing part of the application is accessible under the `/client` route. It allows users to:

* Sign up, log in, and manage their accounts.
* Access and complete quizzes and mini-learning-games.
* Track their progress and view their performance.

### Admin-Facing Part

The admin-facing part of the application is accessible under the `/admin` route. It allows administrators to:

* Manage quizzes and mini-learning-games.
* Create, update, and delete quizzes and mini-learning-games.
* View and manage user data and progress.
* Monitor overall application performance and user engagement through a dashboard.

## Setup and Running the Project

### Prerequisites

* Node.js (v14.x or later)
* MongoDB (v4.x or later)
* npm (v6.x or later) or yarn (v1.x or later)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/carlxaeron/PWA-MVP.git
cd PWA-MVP
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file in the root of the project and add the following environment variables:

```
MONGODB_URI=<your-mongodb-uri>
AUTH0_DOMAIN=<your-auth0-domain>
AUTH0_CLIENT_ID=<your-auth0-client-id>
AUTH0_CLIENT_SECRET=<your-auth0-client-secret>
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building and Deploying the PWA

### Build

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

### Start

To start the production server, run:

```bash
npm start
# or
yarn start
```

### Deploy

You can deploy the application to a platform like Vercel, Netlify, or any other hosting provider that supports Next.js. Follow the platform-specific instructions for deployment.

## PWA Features

The application includes the following PWA features:

* Service worker for caching assets and enabling offline functionality.
* `manifest.json` file to define the PWA's metadata, such as name, icons, and start URL.
* Responsive design techniques to ensure the application works well on various screen sizes and orientations.
* Lazy loading for images and other assets to improve performance and reduce initial load times.
* Tested on various devices and browsers to ensure it meets PWA standards and provides a consistent experience across different platforms.

## Next.js and Tailwind CSS Integration

### Next.js Setup

1. Install Next.js, React, and React-DOM:

```bash
npm install next react react-dom
```

2. Update the `package.json` file to include the necessary scripts for Next.js:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}
```

3. Create a `pages` directory in the root of the project if it doesn't already exist. Move the existing `index.js` file to the `pages` directory as `pages/index.js`.

4. Move the `admin/index.js` file to the `pages/admin/index.js`.

5. Ensure that the `api` directory is located in the `pages` directory, so the API routes are accessible. Move the `api/miniGames.js` and `api/quizzes.js` files to `pages/api/miniGames.js` and `pages/api/quizzes.js` respectively.

6. Update the import paths in the components to reflect the new file structure if necessary.

### Tailwind CSS Setup

1. Install Tailwind CSS, PostCSS, and Autoprefixer:

```bash
npm install tailwindcss postcss autoprefixer
```

2. Initialize Tailwind CSS:

```bash
npx tailwindcss init -p
```

This will create a `tailwind.config.js` and `postcss.config.js` file in the root directory.

3. Configure Tailwind CSS by updating the `tailwind.config.js` file to include the paths to all of your template files:

```js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
```

4. Create a `styles` directory in the root of the project if it doesn't already exist. Move the existing `global.css` file to `styles/global.css`.

5. Update the `styles/global.css` file to include the Tailwind CSS directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

6. Import the `styles/global.css` file in the `_app.js` file in the `pages` directory:

```js
import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
```

### Using Tailwind CSS Classes Dynamically

To dynamically generate Tailwind CSS classes, you can use JavaScript to create class names based on certain conditions or data. Here are some steps to achieve this:

1. Create a utility function to generate Tailwind CSS classes dynamically. This function can take parameters and return a string of class names based on the input.

2. Use the utility function in your components to apply the generated class names to elements.

For example, you can create a utility function in a new file, `utils/generateClassNames.js`, and use it in your components like `components/miniGames/MiniGame.js` and `components/quizzes/Quiz.js`.

## Directory Structure

The project directory structure is organized as follows:

* `api/` - This directory contains the API route handlers. For example, `api/miniGames.js` and `api/quizzes.js`.
* `components/` - This directory contains reusable React components. For example, `components/miniGames/MiniGame.js` and `components/quizzes/Quiz.js`.
  * `components/miniGames/` - This subdirectory contains components related to mini-games.
  * `components/quizzes/` - This subdirectory contains components related to quizzes.
  * `components/common/` - This subdirectory contains shared or reusable components used across different parts of the application.
* `pages/` - This directory contains the Next.js pages. For example, `pages/_app.js`, `pages/admin/index.js`, `pages/api/miniGames.js`, `pages/api/quizzes.js`, and `pages/index.js`.
* `styles/` - This directory contains global and component-specific styles. For example, `styles/global.css`.
* `utils/` - This directory contains utility functions. For example, `utils/generateClassNames.js`.
* `public/` - This directory contains static assets such as images, icons, and other files that need to be served directly.
* `README.md` - This file contains the project description, setup instructions, and other relevant information.
* `package.json` - This file contains the project metadata and dependencies.
* `postcss.config.js` - This file contains the PostCSS configuration.
* `tailwind.config.js` - This file contains the Tailwind CSS configuration.
* `.env.local.example` - This file contains example environment variables to help new developers set up their local environment.
* `.gitignore` - This file specifies which files and directories should be ignored by Git.
* `next.config.js` - This file customizes the Next.js configuration, such as setting up custom webpack configurations, environment variables, and other Next.js-specific settings.
* `babel.config.js` - This file contains the Babel configuration with presets and plugins.
* `eslint.json` - This file contains the ESLint configuration to enforce code quality and consistency across the project.
* `prettier.config.js` - This file contains the Prettier configuration to ensure consistent code formatting across the project.
