///<reference types="cypress"/>

it('Download file', function(){

    //https://prod.ucwe.capgemini.com/wp-content/uploads/2022/05/Capgemini.gif - file link
    //mydownloads -- folder name
    //file name and extension
    cy.downloadFile('https://prod.ucwe.capgemini.com/wp-content/uploads/2022/05/Capgemini.gif',
                    'mydownloads','example.jpg')
    })

    