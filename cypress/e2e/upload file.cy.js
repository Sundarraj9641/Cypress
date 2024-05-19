///<reference types="cypress"/>

it('upload file', function(){
    cy.visit('https://trytestingthis.netlify.app/')

    //file from fixtures folder, so we directly give the name of the file
    cy.get('#myfile').attachFile('example.json')
    })

    