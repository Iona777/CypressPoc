const { defineConfig } = require("cypress");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  
  env:{
    baseURL: "https://rahulshettyacademy.com"

  }

  ,
  e2e: {
    
    specPattern: 'cypress/E2E/examples/*.js'
    //Need to use this if using feature files instead of .js spec files (which way round should the slashed be??)
    //specPattern: 'cypress\E2E\Examples\BDD'
  }
  , //do I need a comma here?
});
