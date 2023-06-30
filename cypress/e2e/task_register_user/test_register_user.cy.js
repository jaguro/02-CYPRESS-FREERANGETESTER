/// <reference types="cypress" />

describe('the user should register successfully',()=> {

    beforeEach(() => {
        // application should be running at URL
        cy.visit('https://www.freerangetesters.com/')
    })
    it('should render successfully',()=> {
        cy.title().should('eq','Aprender Testing | Free Range Testers')
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.url().should('contain','https://')
        cy.log('¡ Successfully !')
    })

    it('test to check the register button',()=> {
        cy.get('.mQxxMq').click({force:true})
        let t = 1500
        cy.get('#comp-krj54pka').should('be.visible').invoke('show').click({force:true})
        cy.get('#bgLayers_comp-lg0872hm > [data-testid="colorUnderlay"]').invoke('show')
        cy.get('#comp-l02x1m8d1label').invoke('show')
    })
    
    
})