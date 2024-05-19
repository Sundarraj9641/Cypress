///<reference types="cypress"/>

describe('JqueryUi', function(){

    beforeEach(function(){
        cy.visit('https://jqueryui.com/droppable/')
    })

    it('Drag and Drop with Iframe', function(){

        //get the iframe and store into $frame 
        cy.get('.demo-frame').then($frame =>{

            //find the body of iframe and store into variable "body"
            const body = $frame.contents().find('body')

            //$frame is a jquery, convert this into cypress using -- cy.wrap()
            //alias draggable as source -- as.('source)
            cy.wrap(body).find('#draggable').as('source')

            //alias droppable as target -- as.('source)
            cy.wrap(body).find('#droppable').as('target')
        })

        //trigger -- used for mouse events
        //mousedown -- right click, {which:1} -- click at center
        cy.get('@source').trigger('mousedown', {which:1})

        //mousemove -- move the mouse, mouseup -- release the mouse
        cy.get('@target').trigger('mousemove', {which:1}).trigger('mouseup', {force:true})
    })
})

