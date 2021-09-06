/// <reference types="cypress" />
import homePageTask from "../../pages/homePage/HomePageTask"
import loginPageTask from "../../pages/loginPage/LoginPageTask"
import loginPageVerification from "../../pages/loginPage/LoginPageVerirfication"
import homePageVerification from "../../pages/homePage/HomePageverification"
import 'cypress-xpath'


describe('Login scenarios', () =>{

    beforeEach(function () {
        //Handle unwanted popups
        cy.intercept('https://sdk.iad-03.braze.com/api/v3/template/', { "mock": "data"
        }).as('brazeTemplate')

        cy.visit('/')
        //accept grassdoor age limit term and condition
        homePageTask.acceptGrassdoorTermConditon()

        //handle pop up for location set up
        homePageTask.fillUpLocationPopUP("Santa Monica Pier, Santa Monica Pier, Santa Monica, CA, USA")

        //click on login button from homepage
        homePageTask.clickOnLoginButton()

        })

    it('Login with invalid Mobile Number', function() {
        //verify loginPage details
        loginPageVerification.verifyLoginPageDetails()
        //perform login operation and verify
        cy.fixture('login/invalidMobileNumber.json').then((invalidMobileNumberDetails) => {
            loginPageTask.invalidMobileNumerLogin(invalidMobileNumberDetails.username)
          })
        
        //verify invalid mobile number error message on UI
        loginPageVerification.verifyInvalidMobileNumberErrorMessage()
        //verify that user is still on Login page
        loginPageVerification.verifyLoginpageTitle()
    })
    
    it('Login with valid Mobile Number but invalid verification code', function() {
        //invalid verification code login scenario
        //verify Login Page
        loginPageVerification.verifyDetailsOnLoginpage()
        //perform login operation
        cy.fixture('login/invalidVerificationCode.json').then((invalidVerificationCode) => {
            loginPageTask.login(invalidVerificationCode.username , invalidVerificationCode.password)
        })
        
        //verify invalid verification code error message on UI
        loginPageVerification.verifyInvalidVerificationCodeErrorMessage()
        //verify that user is still on Login page
        loginPageVerification.verifyLoginpageTitle()
    }) 

    it('Login with valid credentials', function() {
        //valid login scenario

        //verify Login Page
        loginPageVerification.verifyDetailsOnLoginpage()
        //perform login operation
        cy.fixture('login/validLogin.json').then((userDetails) => {
            loginPageTask.login(userDetails.username , userDetails.password)
          })
        
        //verify successfull login
        loginPageVerification.verifySuccesfullLogin()

        //verify home page title if post login navigation is proper
        homePageVerification.homePageverification()
    })

})
