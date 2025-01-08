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
