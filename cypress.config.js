const { defineConfig } = require("cypress");

module.exports = defineConfig({

  e2e: {
    defaultCommandTimeout: 30000,
    experimentalSourceRewriting: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    reporter: "mochawesome",
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: false,
      json: true,
      reportDir: "cypress/report/mochawesome-report",
    },
  },
});