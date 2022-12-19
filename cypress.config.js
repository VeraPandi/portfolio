const { defineConfig } = require("cypress");

module.exports = defineConfig({
   viewportWidth: 1110,
   viewportHeight: 820,

   e2e: {
      baseUrl: "http://localhost:3000",
      setupNodeEvents(on, config) {
         // implement node event listeners here
      },
   },

   component: {
      devServer: {
         framework: "create-react-app",
         bundler: "webpack",
      },
   },
});
