///<reference types="cypress"/>

it('dropdown', function(){
    cy.visit('http://register.rediff.com/register/register.php?FormName=user_details')

    cy.get('#country').select('Australia')
    })

    