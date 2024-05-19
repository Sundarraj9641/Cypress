it('Read file using readfile()', function(){
    
    //give complete path here
    // data -- variable, that store all the data from the example.json file
    cy.readFile('./cypress/fixtures/example.json').then((data) =>{

        cy.log(data.email);
        cy.log(data.body);
    })
})

