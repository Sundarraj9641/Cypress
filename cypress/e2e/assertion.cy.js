it('assertion', ()=>{
    //navigate to url
    cy.visit('https://example.cypress.io')

    //get the element
    cy.contains('get').click()

    //get the button element and check whether the text 'Button' is present or not
    cy.get('#query-btn')
        .should('contain', 'Button')
        .and('have.class', 'query-btn btn btn-primary')
        .and('be.visible')  
        .and('be.enabled')
        //explicit asssertion only show the log when it is fail, if the assertion will pass it won't show the log
        //check 4 and 5 are equal, if not equal then print 'Not Equal'
        assert.equal(4, 5,'Not Equal')

        assert.equal(4,4, 'Not Equal')

        //we compare the integer and string, in equal() it will pass 
        assert.equal(4,'4', 'Not Equal')

        //but in strictequal() it will fail
        assert.strictEqual(4, '4', 'Not Equal')
})