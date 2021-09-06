class LoginpageObject{
constructor() {
    this.mobileNumberBox = "//input[@class='form-control phone-number br-0']";
    this.verificationCoodeBox = "//input[@class='form-control otp-input br-0']";
    this.getVerificationCodeButton = "//button[contains(text(),'Get Verification Code via Text')]";
    this.logPageTitle = "div.logo-text";
    this.loginSuccessMessage = "//div[contains(text(),'Verification successful')]"
    this.loginInvalidNumberError = "//div[contains(text(),'Invalid number')]"
    this.loginInvalidVerificationCode = "//div[contains(text(),'Incorrect verification code.')]"
    
  }
}

const loginPageObject = new LoginpageObject()

export default loginPageObject