/// <reference types="cypress" />

describe('first example',()=> {

    beforeEach(() => {
        // application should be running at port 3000
        // and the "localhost:3000" is set as "baseUrl" in "cypress.json"
        cy.visit('/')
    })
    it('test first example',()=> {

    })

})