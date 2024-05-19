it('open google', ()=>{
    //navigate to url
    cy.visit('https://google.com')

    //wait for 2 sec
    cy.wait(2000)

    //locate the textbox and type the value
    cy.get('#APjFqb').type('Capgemini')
    cy.wait(2000)

    //locate and click
    cy.contains('Google Search').click()
    cy.wait(2000)
    cy.get('.g > :nth-child(1) > [jscontroller="SC7lYd"] > .GLI8Bc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()

})