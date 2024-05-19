//add this line at top of the file to get the suggestions
///<reference types="cypress"/>

it('Write file', function(){
    
    // "\n" for move the cursor to next line
    cy.writeFile('writeFileDemo.txt', 'Hello, I am Sundarraj\n')

    //{flag:'a+'} -- to avoid overwriting the content
    //if we won't give this. It will replace the previous one
    cy.writeFile('writeFileDemo.txt', 'I am testing the write file', {flag:'a+'})

    cy.writeFile('./cypress/fixtures/writeFilesample.txt', 'specify the path of that file to be store')
    })

    
