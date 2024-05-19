//import the class
//{Login} --> class name
//./Pages/loginPage --> file location
import {Login} from "./Pages/loginPage"

//create instance for the class
const ln = new Login()

it('page', function(){

        cy.visit('https://opensource-demo.orangehrmlive.com/')

        //invoking methods in the class
        ln.enterUserName('Admin')
        ln.enterPassword('admin123')
        ln.clicklogin()

})


