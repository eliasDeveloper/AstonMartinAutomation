const { defineConfig } = require("cypress");
const { cypressBrowserPermissionsPlugin } = require('cypress-browser-permissions')
const allureWriter = require("@shelex/cypress-allure-plugin/writer")

module.exports = defineConfig({
  env: {
    browserPermissions: {
      notifications: "allow",
      geolocation: "allow",
    },
  },
  chromeWebSecurity: false,
  e2e: {
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config)
      config = cypressBrowserPermissionsPlugin(on, config)
      return config
    },
  },
});
