const { defineConfig } = require("cypress");
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://the-internet.herokuapp.com",
    viewportWidth: 1440,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    failOnStatusCode: false,
    video: true,
    videoUploadOnPasses: false,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    env: {
      username: "testuser@example.com",
      password: "testpassword123",
    },
    setupNodeEvents(on, config) {
      // Implement mochawesome reporter
      require("cypress-mochawesome-reporter/plugin")(on);

      // Task for database operations
      on("task", {
        clearDatabase() {
          // Database cleanup logic
          return null;
        },
        seedDatabase() {
          // Database seeding logic
          return null;
        },
      });

      on("after:spec", (spec, results) => {
        if (results && results.video) {
          const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
          const videoDir = path.dirname(results.video);
          const videoBase = path.basename(results.video, ".mp4");
          const newVideoName = `${videoBase}_${timestamp}.mp4`;
          const newVideoPath = path.join(videoDir, newVideoName);

          return new Promise((resolve, reject) => {
            fs.rename(results.video, newVideoPath, (err) => {
              if (err) return reject(err);
              resolve();
            });
          });
        }
      });

      return config;
    },
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
});
