const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // configuraciones de cypress.config
  viewportWidth: 1500,
  viewportHeight: 900,
  chromeWebSecurity: false,
  reporter:'cypress-mochawesome-reporter',
      reporterOptions: {
        charts: true,
        reportPageTitle: 'custom-title',
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
      },

  // configuraciones para los e2e
  e2e: {
    // configuraciones basicas para los test en cypress
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",


    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      
    },
  },
});
