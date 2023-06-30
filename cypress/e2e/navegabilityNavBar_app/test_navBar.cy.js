/// <reference types="cypress" />

describe('tested the navigation functionality',()=> {

    beforeEach(() => {
        // application should be running at URL
        cy.visit('https://www.freerangetesters.com/')
    })
    it('test shouls have navigation functionality',()=> {
        cy.get('#SITE_HEADER > .cKxVkc > .VrZrC0').as('NavBar')
        cy.get('@NavBar').should('be.visible')
    })

    it('should be reloaded when clicking the home button',()=> {
        cy.get('#comp-l02x1m8d3label').should('be.visible').click({force:true})
        cy.get('#comp-l02x1m8d0label').should('be.visible').click({force:true})
    })

    it('test should validate the courses',()=> {
        cy.get('#comp-l02x1m8d1label').should('be.visible').click({force:true})
        cy.contains('TU ROADMAP TESTER').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item1').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-lj4ul4f5').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-lj4ul6qa').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-lj4ul7b8').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-lj4ul7qi').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-lj4ul8ap').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-lj4ul8nm').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-ke6pond6').should('be.visible')
        cy.get('#comp-lj4ukpbx3__item-ke6pomvd').should('be.visible')
    })

    it.only('test validate the courses with bucle for',()=> {
        cy.get('#comp-l02x1m8d1label').should('be.visible').click({force:true})
        // validar el total de cursos 
        cy.get('[class="comp-lj4ukpbx3 YzqVVZ wixui-repeater__item"]').each(($el, index, $list)=> {
            let anywhere = $el.text()
            if(anywhere.includes('Programación para testers')){
                cy.wrap($el).click({force:true})
            }
        })
        .should('be.visible')
    })

    it('test cookies should always be visible',()=> {
        cy.get('.lp29jM').should('be.visible')
    })
})