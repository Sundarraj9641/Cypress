///<reference types="cypress"/>

describe('Amazon', function(){

    beforeEach(function(){
        cy.visit('https://www.amazon.com/')
    })

    it('scroll the page', function(){
        
        cy.get('#searchDropdownBox').select('Electronics', {force:true})

        cy.get('#twotabsearchtextbox').type('Hp laptop')

        cy.get('#nav-search-submit-button').click()

        //>>>>>>>>>>>>>>>>>>>> COLLECTION <<<<<<<<<<<<<<<<<<<<<<

        //get the collection of elements and store that into 'products'
        cy.get('[data-component-type="s-product-image"]').as('products')

        //>>>>>>>>>>>>>>>>>>>> GET TEXT <<<<<<<<<<<<<<<<<<<<<<

        //in that products get the element at index number 3
        //eq() -- select the element fron the collection
        //invoke('text') -- get the text
        //then(producttext) -- save that text into the variable 'producttext'
        cy.get('@products').eq(3).invoke('text').then(producttext =>{
            //print the text
            cy.log(producttext)
        })

        //>>>>>>>>>>>>>>>>>>>> EACH <<<<<<<<<<<<<<<<<<<<<<

        cy.get('@products').each(($el, index, $list)=>{

                //$el -- wrapped jQuery element
                //index -- index
                //$list -- collection

                cy.log(
                    'Index ' + index + 'and the product is '+ $el.text()
                )
        })

        //>>>>>>>>>>>>>>>>>>>> SCROLL <<<<<<<<<<<<<<<<<<<<<<

        cy.get('@products').each(($el, index, $list)=>{

            //scroll the page
            cy.wrap($el).scrollIntoView()
    })
   

        })
})


    