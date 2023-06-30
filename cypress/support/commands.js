// config command iFrame

Cypress.Commands.add('iframe',{prevSubject:'element'},($iframe,selector)=> {
    Cypress.log({
        name:'iframe',
        consoleProps(){
            return{
                iframe:$iframe
            }
        }
    })
    return new Cypress.Promise(resolve=>{
        resolve($iframe.contents().find(selector))
    })
})

// config command login
Cypress.Commands.add('login',()=> {
    cy.visit('https://www.freerangetesters.com/')
        cy.request({
            method:'POST',
            url:'/authenticate',
            form:true,
            body:{
                username:'admin',
                password:'Admin1234'
            }
        })
        cy.getCookie('rack.session').should('exist')
        cy.visit('https://www.freerangetesters.com/secure')
})