/// <reference types="cypress" />
describe("Html report test",()=>{
    it('Use case for report', () => {
        cy.visit(Cypress.env('base_url'))
        cy.contains('cont').click()
    });
})