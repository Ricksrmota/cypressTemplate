const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://magento2-demo.magebit.com/',
    // defaultCommandTimeout: 5000,
    "viewportWidth": 1920,
    "viewportHeight": 1080,
    "video": false,
    "screenshotOnRunFailure": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true
  },
});