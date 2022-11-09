const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/integration/**/*.spec.ts",
    supportFile: "cypress/support/index.ts",
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    fixturesFolder: "cypress/fixtures",
    baseUrl: "http://localhost:4200",
    retries: {
      runMode: 3,
      openMode: 0
    },
    pageLoadTimeout: 120000
  }
});