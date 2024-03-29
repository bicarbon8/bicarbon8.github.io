// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
declare namespace Cypress {
    interface Chainable<Subject = any> {
        disableRemoteAccess(): typeof disableRemoteAccess;
    }
}
function disableRemoteAccess(): void {
    /* drop all API calls*/
    cy.intercept('GET', '*', (req) => {
        const hostname = req.headers.host as string;
        if (hostname.includes('localhost')) {
            req.continue();
        } else if (req.url.startsWith('https://cdn.jsdelivr.net/npm/')) {
            req.continue();
        } else {
            req.destroy();
        }
    });
    cy.intercept('POST', '*', (req) => req.destroy());
    cy.intercept('PUT', '*', (req) => req.destroy());
    cy.intercept('PATCH', '*', (req) => req.destroy());
    cy.intercept('DELETE', '*', (req) => req.destroy());
};

Cypress.Commands.add('disableRemoteAccess', disableRemoteAccess);