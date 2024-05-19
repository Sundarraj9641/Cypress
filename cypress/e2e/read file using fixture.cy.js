before(function(){

    //test_data -- variable name
    cy.fixture('example.json').as('test_data')
})
it('Read file using fixture', function(){
    
    //example.json -- file name
    // data -- variable, that store all the data from the example.json file
    cy.fixture('example.json').then((data) =>{

        //call the name using the data(variable)
        cy.log(data.name);
        cy.log(data.email);
        cy.log(data.body);

        //run by before function
        cy.log(this.test_data.name)
    })
})


