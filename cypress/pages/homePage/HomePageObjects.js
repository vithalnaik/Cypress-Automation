const addContext = require('mochawesome/addContext')
class homePageObjects{
    constructor() {
        //this.locationModalText = "div.modal-body>p";
        this.locationPopUpTextBox = "input#autocomplete"
        this.locationPopUpApplyButton = "button.btn-primary"
        this.termConditionAcceptCheckbox = "#ageConfirmationPopupCheckBox"
        this.termsConditionAcceptButton = "button.btn-primary"
        this.loginButtonXpath = "//a[contains(text(),'Login')]"
        this.homeLogoImage = "//div[@class='main-logo ']/child::img"
        this.menuButton = "//button[@class='btn left-btn']"
        this.scheduleMenuLink = "//h3[contains(text(),'Scheduled Menu')]"
        this.verifyCartCount = "//span[@class='cart-item-count']"
        this.cartButton = "//a[@class='btn right-btn h-cart-btn']"
      }

    }
    
    const homePage = new homePageObjects();
    export default homePage;