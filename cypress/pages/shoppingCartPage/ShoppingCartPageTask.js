/// <reference types="cypress" />
import shoppingCartPageObject from '../shoppingCartPage/ShoppingCartPageObjects'

class ShoppingCartPageTask{

    addCouponCodeToCouponCodeBox(couponCode){
        //Enter thencoupon Code to coupon code text box
        cy.xpath(shoppingCartPageObject.couponCodeTextBox).should('be.visible').should('be.enabled').type(couponCode)
    }

    clickOnApplyCouponCodeButton(){
        //click on apply button to apply coupon code
        cy.xpath(shoppingCartPageObject.couponCodeApplyButton).should('be.enabled').and('be.visible').click()
    }

    removeAppliedCoupon(){
        //clcik on remove button to remove applied coupon
        cy.xpath(shoppingCartPageObject.removeAppliedCoupon).click()
    }

    //delete product from cart if single entity is added
    deleteProductFromCart(){
        cy.xpath(shoppingCartPageObject.deleteProductFromCart).should('be.visible').should('be.enabled').click()
    }

    //user login from shoping cart
    userLoginFromShoppingCart(mobileNumber, verificationCode){
        //enter mobile number
        cy.xpath(shoppingCartPageObject.mobileNumberBox).should('be.visible').type(mobileNumber)

        //click on GetVerification code via text button
        cy.xpath(shoppingCartPageObject.getVerificationCodeButton).should('be.visible').should('be.enabled').click()
        //check whether GetVerification button gets disabled and verify text 
        cy.xpath(shoppingCartPageObject.disabledResendverificationCodeButton).should('be.visible').should('be.disabled')

        //pass verification code for Authencation verification
        cy.xpath(shoppingCartPageObject.verificationCodeBox).should('be.visible').type(verificationCode)
        //wait till code verification is complete
        //Verification successfull
        cy.xpath(shoppingCartPageObject.loginVerificationSuccessMessage).should('have.text','Verification successful')
        //Toastify__toast-body
        //Cart updated successfully
        cy.xpath(shoppingCartPageObject.cartUpdateSuccessMessage).should('have.text','Cart updated successfully')
    }

    selectDeleveryTime(timeRange){
        //select delevery time 
        cy.xpath(shoppingCartPageObject.deliveryTime).select(timeRange)
    }

    //add name of the user
    addNameOfUser(userName){
        cy.xpath(shoppingCartPageObject.userNameBox).clear().should('be.visible').type(userName)
    }

    //select Payment type
    selectPaymentType(type){
        if(type === 'Debit Card'){
            cy.xpath(shoppingCartPageObject.debitCardRadioButton).check({force: true})
        }
    }

    fillUpDebitCardDetails(debitCardNumber, expiryDate, cvvNumber, cardHolderName){
        //Enter debitcard number
        cy.xpath(shoppingCartPageObject.debitcardNumber).should('be.visible').type(debitCardNumber)

        //Enter expiryDate number
        cy.xpath(shoppingCartPageObject.expiryDate).should('be.visible').type(expiryDate)

        //Enter cvvNumber number
        cy.xpath(shoppingCartPageObject.cvvNumber).should('be.visible').type(cvvNumber)

        //Enter cardHolderName number
        cy.xpath(shoppingCartPageObject.cardHolderName).should('be.visible').type(cardHolderName)

    }
    
    //add tip to the driver
    addTipToDriver(amount){
        if(amount === '$5'){
            cy.xpath(shoppingCartPageObject.tip$5ToDriver).should('be.visible').click()
        }
        else if(amount === '$2'){
            cy.xpath(shoppingCartPageObject.tip$2ToDriver).should('be.visible').click()
        }
        else{
            cy.xpath(shoppingCartPageObject.tip$10ToDriver).should('be.visible').click()
        }
        
    }
    
    //Add billing zip code
    addBillingZipCode(billingZipCOde){
        cy.xpath(shoppingCartPageObject.billingZipCodeBox).should('be.visible').clear().type(billingZipCOde)
    }

    //Click on Bring IT button
    clickBringItButton(){
        cy.xpath(shoppingCartPageObject.bringItButton).should('be.visible').and('be.enabled').click()
        cy.wait(10000)
    }
}

const shoppingCartPageTask = new ShoppingCartPageTask()

export default shoppingCartPageTask