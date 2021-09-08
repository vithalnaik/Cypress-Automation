import loginPageObject from '../loginPage/LoginPageObject'
class LoginPageTask{

    login(mobilenumber, verificationCode){
        //Enter Mobile Number
        cy.xpath(loginPageObject.mobileNumberBox).type(mobilenumber)
        cy.log('Eneter mobile number as ' + mobilenumber)
        //Click on Get Verification Code button
        cy.xpath(loginPageObject.getVerificationCodeButton).should('be.enabled').should('be.visible').click();
        cy.log('Clicked on Get verification Code button')
        //Enter verification code
        cy.xpath(loginPageObject.verificationCoodeBox).clear().type(verificationCode)
        cy.log('Eneter Verification code as ' + verificationCode)
      }

      invalidMobileNumerLogin(mobilenumber){
          //Eneter invalid mobile number in textbox 
          cy.xpath(loginPageObject.mobileNumberBox).type(mobilenumber)
          cy.log('Eneter mobile number as ' + mobilenumber)
          //click on Get Verification Code Button
          cy.xpath(loginPageObject.getVerificationCodeButton).should('be.enabled').should('be.visible').click();
          cy.log('Clicked on Get verification Code button')
      }
}

const loginPageTask = new LoginPageTask()
export default loginPageTask