///<reference types="cypress"/>
//class
export class Login {


    //locator variables
    UserName =':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    PassWord = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    LoginButton = '.oxd-button'

    //methods
    enterUserName(username){
        cy.get(this.UserName).type(username)
    }

    enterPassword(password){ 
        cy.get(this.PassWord).type(password)
    }
 
    clicklogin(){
        cy.get(this.LoginButton).click()
    }
}


