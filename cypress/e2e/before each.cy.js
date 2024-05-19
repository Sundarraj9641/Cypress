import {Login} from "./Pages/loginPage"
const ln = new Login()

describe('PositiveAndNegative', function(){

    //this is executed before every tests in this describe block
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    })
it('login 1', function(){
    //invoking methods in the class
    ln.enterUserName('Admin')
    ln.enterPassword('admin123')
    ln.clicklogin()
    cy.get('.oxd-userdropdown-name').click()

})
it('login 2', function(){
    ln.enterUserName('Admin123')
    ln.enterPassword('admin123')
    ln.clicklogin()
    cy.get('.oxd-userdropdown-name').click()

})
})

