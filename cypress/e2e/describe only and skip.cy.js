import {Login} from "./Pages/loginPage"
const ln = new Login()

describe('PositiveAndNegative', function(){
    //positive testcase
it('login 1', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')

    //invoking methods in the class
    ln.enterUserName('Admin')
    ln.enterPassword('admin123')
    ln.clicklogin()
    cy.get('.oxd-userdropdown-name').click()

})

//negative testcase
it('login 2', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    ln.enterUserName('Admin')
    ln.enterPassword('admin123')
    ln.clicklogin()
    cy.get('.oxd-userdropdown-name').click()

})

it.skip('login 3', function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/')
    ln.enterUserName('admin123')
    ln.enterPassword('admin123')
    ln.clicklogin()
    cy.get('.oxd-userdropdown-name').click()

})
})
