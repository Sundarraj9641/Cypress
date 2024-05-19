///<reference types="cypress"/>

describe('QATechHub', function(){

    beforeEach(function(){
        cy.visit('https://test.qatechhub.com/window-handling/')
    })

    it('Verify Attributes', function(){

        //check for that <a> tag contains 'Click here'
        cy.contains('a', 'Click Here').as('button')

        //have.attr -- attribute
        cy.get('@button').should('have.attr', 'href').and('equal', 'https://qatechhub.com')

        cy.get('@button').should('have.attr', 'target').and('equal', '_blank')
    })

    it('navigate to target page by remove the target attribute', function(){

        cy.contains('a', 'Click Here').as('button')

        //invoke('removeAttr', 'target') -- invoke the remove attribute method
        //target -- give the which attribute you want to remove
        cy.get('@button').invoke('removeAttr', 'target')

        //after removing attribute then navigate to the element
        cy.get('@button').click()
    })
})



