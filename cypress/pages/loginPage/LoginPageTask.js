import loginPageObject from '../loginPage/LoginPageObject'
class LoginPageTask{

    login(mobilenumber, verificationCode){
        cy.xpath(loginPageObject.mobileNumberBox).type(mobilenumber)
        cy.xpath(loginPageObject.getVerificationCodeButton).should('be.enabled').should('be.visible').click();
        cy.xpath(loginPageObject.verificationCoodeBox).clear().type(verificationCode)
      }

      invalidMobileNumerLogin(mobilenumber){
          //Eneter invalid mobile number in textbox 
          cy.xpath(loginPageObject.mobileNumberBox).type(mobilenumber)
          //click on Get Verification Code Button
          cy.xpath(loginPageObject.getVerificationCodeButton).should('be.enabled').should('be.visible').click();
      }
}

const loginPageTask = new LoginPageTask()
export default loginPageTask