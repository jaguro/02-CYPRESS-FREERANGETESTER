/// <reference types="cypress" />

describe('should validate the courses section',()=> {

    beforeEach(() => {
        // application should be running at URL
        cy.visit('https://www.freerangetesters.com/')
        cy.title().should('eq','Aprender Testing | Free Range Testers')
    })

    it('test validate endpoint status code',()=> {
        cy.request({
            url:'https://www.freerangetesters.com/'
        }).then((response)=> {
            expect(response.status).to.eq(200)
        })
    })
    
    it('test should take us to the udemy page',()=> {
        let time = 2000
        cy.get('#comp-l02x1m8d1label').should('be.visible').click()
        cy.get('#comp-lj4vr3eo__item1 > a').as('Boton-curso1')
        cy.wait(time) // multyples windows => target ='blank'
        cy.get('@Boton-curso1').invoke('removeAttr','target').click({force:true})
    })  

    it('test should have 9 courses',()=> {
        cy.get('#comp-l02x1m8d1label').click()
        // 9 cursos en total => function 'have.length'
        cy.get('[data-testid="container-bg"]').should('have.length',9)
        cy.get('#comp-l02x1m8d1label')
            .should('have.text','Cursos')
            .and('be.visible')
    })

    it('test to mouses functions of section curses',()=> {
        cy.get('#comp-l02x1m8d1label').trigger('mouseover')
        cy.contains('Roadmap Tester')
            .invoke('removeAttr','target')
            .click({force:true})
    })

})