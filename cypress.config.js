const { defineConfig } = require("cypress");

module.exports = defineConfig({
  extends: '/cypress.json',
  video: true,
  screenshotOnRunFailure: true,
  numTestsKeptInMemory: 2,
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  retries: {
    runMode: 1,
    openMode: 0,
  },
  defaultCommandTimeout: 12500,
  env : {
    baseUrl: 'https://www.kiwi.com',

  },
  e2e: {
    experimentalSessionAndOrigin: true,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
