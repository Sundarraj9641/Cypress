///<reference types="cypress"/>

beforeEach(function(){
    cy.visit('https://www.asianpaints.com/')
})

it('Enquiry', function(){
    cy.fixture('data.json').then((info) => {

        // cy.get('#NC_CLOSE_ICON').then(($ad)=>{
        //     if($ad.hasClass('active')){
        //         cy.get($ad).click()
        //     }
        // })
    cy.get('#enquire-name').type(info.name)
    cy.wait(1000)
    cy.get('#enquire-email').type(info.email)
    cy.wait(5000)
    cy.get('#preview-notification-frame')
    .should('be.visible')
    .then(($iframe) => {
        const $body = $iframe.contents().find('#NC_CLOSE_ICON')
      cy.wrap($body)
        .click()
      
       })
    
   
    cy.wait(1000)
    
    cy.get('#enquire-mobile').type(info.mobile)
    cy.wait(1000)
    
    cy.get('#enquire-pincode', {force:true}).type(info.pincode)
        
    })


    cy.get(':nth-child(2) > .ccFormScheduler > :nth-child(1) > .enquire-form > .enquire-form__step-1 > #pdp-request-call-back-form > .form-group-global__enquire-form--elements-submit-wrap > .ctaComp').click()

    cy.wait(6000)

    cy.get('.thank-you-message').invoke('text').then((thankyou) =>{
        cy.log(thankyou)
    })

    cy.log(Text)
})