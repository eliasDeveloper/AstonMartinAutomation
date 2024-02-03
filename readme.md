# End-to-End Test for Enquiry of Vehicle for Aston Martin
This repository contains end-to-end tests for the Enquiry feature for Aston Martin.


## Installation

To install the project, follow these steps:

1. Clone the repository: git clone 
2. Navigate to the project directory: cd <project-directory>
3. Install dependencies using npm: 
```bash 
npm install
```

## Running Tests with Cypress
``` bash
npx cypress open
```
## Running Tests with Cypress and allure reporter
``` bash
npx cypress run --env allure=true
```
## To open the allure reporter after have been generated 
``` bash
allure serve
```
and it will open in the browser automatically

## Location Access Configuration
### For location access, I used the following configuration in the cypress.config.js file:
```bash
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')

module.exports = {
  // Other configurations...

  env: {
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow",
    },
  },

  plugins: [
    cypressBrowserPermissionsPlugin,
  ]
}
```
This configuration allows notifications and geolocation permissions for the Cypress tests.
```

##Code

This code was written and developed bt `Elias Chamoun`.
Tested and validated over various different browsers.
for any question email: elias.shamoun96.es@gmail.com
