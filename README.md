# QualityLab

## Example domain demo

**Here's what we need to do:**

1. In the Terminal, run the command:
```
npx cypress open
```
2. Choose the Spec file `QualityLab.cy.js`

## NOTES

In the config file `cypress.config.js`, inside e2e{ }, we had to add a couple of configurations in order to make this test run successfully with no errors

1. `chromeWebSecurity: false`
 
This is to be able to disable chrome web security (to prevent Cypress from enforcing browser security mechanisms, specifically Same-Origin Policy (SOP)) to be able to get redirected to https://www.iana.org with no errors.
reference: https://docs.cypress.io/app/guides/cross-origin-testing#Disabling-Web-Security

2. `experimentalModifyObstructiveThirdPartyCode: true`

This is to remove Subresource Integrity (SRI) from modified scripts as they will not execute otherwise.
reference: https://docs.cypress.io/app/guides/cross-origin-testing#Modifying-Obstructive-Third-Party-Code
