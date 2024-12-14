const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    pageLoadTimeout: 10000
    ,chromeWebSecurity: false  // Disable chrome web security (to disable Cypress enforcing browser security mechanisms, specially Same-Origin Policy (SOP)).
    ,experimentalModifyObstructiveThirdPartyCode: true // Removes Subresource Integrity (SRI) from modified scripts as they will not execute otherwise.
  }
});
