const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // viewportHeight: 1080,
    // viewportHeight: 1920,
    projectId: "w1sf8q",
    // ...rest of the Cypress project config
    // CYPRESS_RECORD_KEY: f49c368e-265f-4917-b8f7-eaa8236a7869
    // npx cypress run --record --key f49c368e-265f-4917-b8f7-eaa8236a7869
    baseUrl: 'https://www.blazedemo.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
