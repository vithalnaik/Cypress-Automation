import loginPageObject from "../loginPage/LoginPageObject"
const addContext = require('mochawesome/addContext')
class LoginPageVerification{

    verifyLoginpageTitle(){
        //erify login page title
        cy.title().should('eq', 'Login/Signup | SEO Meta Title Description')
    }

    verifyDetailsOnLoginpage(){
        //Check the title
        cy.get(loginPageObject.logPageTitle).should('have.text', 'Login/Signup')

        //check the url to have login text
        cy.url().should('include', '/login') 
    } 

    //fuction to verify details on Login page
    verifyLoginPageDetails(){
        this.verifyLoginpageTitle()
        this.verifyDetailsOnLoginpage()
    }

    verifySuccesfullLogin(){
        //verify success message post valid login
        cy.xpath(loginPageObject.loginSuccessMessage).should('be.visible').should('have.text', 'Verification successful')
        
    }

    verifyInvalidMobileNumberErrorMessage(){
        //verify Invalid mobile number error mesage
        cy.xpath(loginPageObject.loginInvalidNumberError).should('be.visible').should('have.text', 'Invalid number')
    }

    verifyInvalidVerificationCodeErrorMessage(){
        //verify invalid verification code error meesage
        cy.xpath(loginPageObject.loginInvalidVerificationCode).should('be.visible').should('have.text', 'Incorrect verification code.')
    }
}

const loginPageVerification = new LoginPageVerification();
export default loginPageVerification;