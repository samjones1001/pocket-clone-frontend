# PocketClone Frontend [![Build Status](https://travis-ci.com/samjones1001/pocket-clone-frontend.svg?branch=master)](https://travis-ci.com/samjones1001/pocket-clone-frontend)

### Live Version [Here](http://pocket-clone.surge.sh/)

A react application for interacting with my [PocketClone API](https://github.com/samjones1001/pocket-clone-backend)

## Setup and Running

Complete the following steps in order to prepare the application to be run locally:
- clone this repository
- navigate to the root directory of the project, and install all dependencies using your preferred JavaScript package manager:
  - [npm](https://www.npmjs.com/get-npm) : `npm install`
  - [yarn](https://yarnpkg.com/getting-started/install) : `yarn install`

The application can be run in two modes, standard and test.

#### Standard Mode

In standard mode the application will interface with a [hosted version of the PocketClone api](https://protected-harbor-70609.herokuapp.com/api/articles/). You will not be required to run the api locally.
To start the application in standard mode, navigate to the root directory of the project and run using `npm run start`.

#### Test Mode

In test mode the application expects to interface with a version of the api running locally on port 8080. Source code and setup instructions for the api can be found [here](https://github.com/samjones1001/pocket-clone-backend). The application will not function correctly until you run the api locally.
To start the application in test mode, navigate to the root directory of the project and run using `REACT_APP_STAGE=test npm run start`

## Tests

Prior to running the tests please ensure that you have installed all required dependencies as per the instructions in the [Setup and Running section](#setup-and-running) section.
Once dependencies are installed, the tests can be run from the root directory of the project with `npm run test`
