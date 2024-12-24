const { Given } = require("@badeball/cypress-cucumber-preprocessor");
const cypress = require("cypress");
//const cypress = require("cypress");
//const cypress = require("cypress");
//Not sure if import will cause trouble again
//import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor';

Given('I am on the the practice page', function(){

cy.visit(Cypress.env('BaseURL')+"AutomationPractice/")

})



When(`I tick checkbox1 and checkbox2`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

When(`untick checkbox1`, () => {
    // [When] Describes the action or event that triggers the scenario.
});

Then(`only checkbox2 should be ticked`, () => {
    // [Then] Describes the expected outcome or result of the scenario.
});

