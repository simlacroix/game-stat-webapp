# The tracking fellowship frontend

# Name

game-stat-webapp

# Description

This project is the frontend application for the Tracking Fellowship application. It contains all the different visual
component to the applications and only make call to the Dashboard-backend API to get data for the users.

# Installation

### Run locally setup

* Pull the repository
* Have NodeJs [installed](https://nodejs.org/en/download)
* Create a .env file containing the following

| variable           | Value                                        |
|--------------------|----------------------------------------------|
| REACT_APP_BASE_URL | The url to the dashboard backend API project |

* Execute command npm i (download all the dependencies of the project)
* Execute command npm run start (stats the development project)

# Usage

There is a manuel on how to use our application. Please check it
out [here](https://docs.google.com/document/d/1DzLA5R0WAl0f8SQrVVR69sO4DmF4kuDIPolLA_0UuxQ/edit?usp=share_link)

# Structure of the application

## Slices

This application uses the [react redux](https://react-redux.js.org/)
and [react redux toolkit](https://redux-toolkit.js.org/) librairies. Slices are used to call the different neccessary
endpoints of the application (the backend, but also the
dataDragon ([LoL](https://developer.riotgames.com/docs/lol#data-dragon), [TFT](https://developer.riotgames.com/docs/tft#static-data), [LoR](https://developer.riotgames.com/docs/lor#data-dragon))
or [communityDragon](https://www.communitydragon.org/) cdn for
images and description)

it also contains the slices that are store for the app (You can access data from the slices anywhere in the app).

all react-redux components can be found under

* /src/app
* /src/app/slices for the slices.

## Assets

The different assets of the app can be found under /src/assets.
it contains all the images and svgs required by the application.

## Components

reusable components can be found under /src/components

## Error handler

There is an error resolver applied to every call made to the backend.
Any error related component should put under /src/Errors

## helpers

Any utility functions or the likes can be found under /src/helper. These are functions that are not related to any
particuliar game. They can be applied to anything. Any other utility function should be in the helper folder.

## Pages

Content that represent the entrypoint of a page should be put inside /src/pages.
There is also a component that handle the private routes for the dashboard that can be found at
/src/components/DashboardPrivateRoutes.tsx

## Types

every type definitions for a specific content can be found under /src/types.

current Types :

* account management types
* auth types
* game types
* league of legends types
* legends of runeterra types
* riot types
* teamfight tactics types

## Validations

Validation of any type can be found under /src/validations.

# Production

* Execute command npm i
* Execute command npm run build

# Tests

No tests currently exist for this application. But if any should be added please create a new folder under /src named
**tests** and start from there. To run tests simply execute command npm run test

## Roadmap

If you have ideas for releases in the future, it is a good idea to list them in the README.

* Add more games
* Continuously improves the UI/UX
* Possibility of a friend list and the related UIs (friend list management, compare games with your friends, etc)
* Add AI to give more insight for the player based on mass data.
* Use the timeline for the league of legends api, and use the data to make awesome features.

## Authors and acknowledgment

### Authors

* Catherine Bronsard
* David Goulet-Paradis
* Simon Lacroix
* Antoine Toutant

### Acknowledgment

* Mikaël Fortin, Project Supervisor

## Project status

In development

# The section bellow is relative to the Create React App documentation

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
