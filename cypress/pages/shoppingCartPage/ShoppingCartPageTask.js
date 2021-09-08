/// <reference types="cypress" />
import shoppingCartPageObject from '../shoppingCartPage/ShoppingCartPageObjects'

class ShoppingCartPageTask{

    addCouponCodeToCouponCodeBox(couponCode){
        //Enter thencoupon Code to coupon code text box
        cy.xpath(shoppingCartPageObject.couponCodeTextBox).should('be.visible').should('be.enabled').type(couponCode)
        cy.log('Entered coupon code ' + couponCode + ' to coupon code text box')
    }

    clickOnApplyCouponCodeButton(){
        //click on apply button to apply coupon code
        cy.xpath(shoppingCartPageObject.couponCodeApplyButton).should('be.enabled').and('be.visible').click()
        cy.log('Clicked on Apply button to apply coupon code')
    }

    removeAppliedCoupon(){
        //clcik on remove button to remove applied coupon
        cy.xpath(shoppingCartPageObject.removeAppliedCoupon).click()
        cy.log('Clicked on Remove button to remove coupon code')
    }

    //delete product from cart if single entity is added
    deleteProductFromCart(){
        cy.xpath(shoppingCartPageObject.deleteProductFromCart).should('be.visible').should('be.enabled').click()
        cy.log('Clicked on delete product from cart button')
    }

    //user login from shoping cart
    userLoginFromShoppingCart(mobileNumber, verificationCode){
        //enter mobile number
        cy.xpath(shoppingCartPageObject.mobileNumberBox).should('be.visible').type(mobileNumber)
        cy.log('entered mobile number : ' + mobileNumber)

        //click on GetVerification code via text button
        cy.xpath(shoppingCartPageObject.getVerificationCodeButton).should('be.visible').should('be.enabled').click()
        cy.log('Clicked on GetVerification code via text button')
        //check whether GetVerification button gets disabled and verify text 
        cy.xpath(shoppingCartPageObject.disabledResendverificationCodeButton).should('be.visible').should('be.disabled')
        cy.log('verified that GetVerification code via text button gets disabled once clicked')

        //pass verification code for Authencation verification
        cy.xpath(shoppingCartPageObject.verificationCodeBox).should('be.visible').type(verificationCode)
        cy.log('entered verification code for Authencation verification : ' + verificationCode)
        //wait till code verification is complete
        //Verification successfull
        cy.xpath(shoppingCartPageObject.loginVerificationSuccessMessage).should('have.text','Verification successful')
        cy.log('verified successfull login message :- Verification successful')
        //Toastify__toast-body
        //Cart updated successfully
        cy.xpath(shoppingCartPageObject.cartUpdateSuccessMessage).should('have.text','Cart updated successfully')
        cy.log('verified successfull Cart Update message :- Cart updated successfully')
    }

    selectDeleveryTime(timeRange){
        //select delevery time 
        cy.xpath(shoppingCartPageObject.deliveryTime).select(timeRange)
        cy.log('Select delivery time as ' + timeRange)
    }

    //add name of the user
    addNameOfUser(userName){
        cy.xpath(shoppingCartPageObject.userNameBox).clear().should('be.visible').type(userName)
        cy.log('Add Username as  ' + userName)
    }

    //select Payment type
    selectPaymentType(type){
        if(type === 'Debit Card'){
            cy.xpath(shoppingCartPageObject.debitCardRadioButton).check({force: true})
            cy.log('Select Payment Type as ' + type)
        }
    }

    fillUpDebitCardDetails(debitCardNumber, expiryDate, cvvNumber, cardHolderName){
        //Enter debitcard number
        cy.xpath(shoppingCartPageObject.debitcardNumber).should('be.visible').type(debitCardNumber)
        cy.log('Eneter Debit card number  ' + debitCardNumber)

        //Enter expiryDate 
        cy.xpath(shoppingCartPageObject.expiryDate).should('be.visible').type(expiryDate)
        cy.log('Eneter expiry date number  ' + expiryDate)

        //Enter cvvNumber 
        cy.xpath(shoppingCartPageObject.cvvNumber).should('be.visible').type(cvvNumber)
        cy.log('Eneter CVV number  ' + cvvNumber)

        //Enter cardHolderName 
        cy.xpath(shoppingCartPageObject.cardHolderName).should('be.visible').type(cardHolderName)
        cy.log('Eneter Card holder name  ' + cardHolderName)

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
        cy.log('add tip to the driver ' + amount)
        
    }
    
    //Add billing zip code
    addBillingZipCode(billingZipCOde){
        cy.xpath(shoppingCartPageObject.billingZipCodeBox).should('be.visible').clear().type(billingZipCOde)
        cy.log('Enetered Billing zip code   ' + billingZipCOde)
    }

    //Click on Bring IT button
    clickBringItButton(){
        cy.xpath(shoppingCartPageObject.bringItButton).should('be.visible').and('be.enabled').click()
        cy.log('Clicked on Bring IT button to submit the order')
        cy.wait(10000)
    }
}

const shoppingCartPageTask = new ShoppingCartPageTask()

export default shoppingCartPageTask