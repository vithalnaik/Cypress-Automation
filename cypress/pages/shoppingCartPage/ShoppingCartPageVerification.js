/// <reference types="cypress" />
import shoppingCartPageObject from '../shoppingCartPage/ShoppingCartPageObjects'
import 'cypress-xpath'

class ShoppingCartPageVerification{

    verifyCouponCodeSuccessMessagePopUP(message){
        //verify popup message post successfull apply of Coupon Code
        cy.xpath(shoppingCartPageObject.verifyCouponCodeSuccessMessagePopUP).should('be.visible').should('have.text',message)
    }

    verifySuccessCouponMessage(message){
        //verify the message displayed on the cart form
        cy.xpath(shoppingCartPageObject.verifySuccessCouponMessage).should('be.visible').contains(message)

    }


    verifyInvalidCouponCodeMessage(){
        //verify if we pass inccorrect Coupon code and click Apply
        cy.xpath(shoppingCartPageObject.verifyInvalidCouponCodeErrorMessage).should('be.visible').and('have.text', "Invalid coupon code applied.")
    }

    verifyEmptyCouponCodeError(){
        //verify error message if we pass empty value to coupon code and click Apply
        cy.xpath(shoppingCartPageObject.verifyEmptyCouponCodeErrorMessage).should('be.visible').and('have.text', 'Please put a valid coupon')
    }

    verifyPrice(price){
        cy.xpath(shoppingCartPageObject.verifyTotalPrice).contains(price)

    }

    verifyProductDetails(productDetails){
        //verify image of the product in the cart
        if('imageSource' in productDetails){
            cy.xpath(shoppingCartPageObject.productImage).should('be.visible').and('have.attr', 'src', productDetails.imageSource)
        }

        //verify name of the product in the Cart
        if('productName' in productDetails){
            cy.xpath(shoppingCartPageObject.productName).should('be.visible').and('have.text', productDetails.productName)
        }

        //verify Brand of the product in the Cart
        if('brandType' in productDetails){
            cy.xpath(shoppingCartPageObject.productBrandName).should('be.visible').and('have.text', productDetails.brandType)
        }

        //verify Weight of the product in the Cart
        if('weight' in productDetails){
            cy.xpath(shoppingCartPageObject.productWeight).should('be.visible').and('have.text', productDetails.weight)
        }

        //verify price of the product in the Cart
        if('discountedPrice' in productDetails){
            cy.xpath(shoppingCartPageObject.productDiscountedPriceDetail).should('be.visible').and('have.text', productDetails.discountedPrice)
        }
        if('actualPrice' in productDetails){
            cy.xpath(shoppingCartPageObject.productActualPriceDetail).should('be.visible').and('have.text', productDetails.actualPrice)
        }

        //verify product count in cart
        if('cartCount' in productDetails){
            cy.xpath(shoppingCartPageObject.cartProductCount).should('be.visible').and('have.text', productDetails.cartCount)
        }

    }

    //verify Empty shopping cart
    verifyEmptyShoppingCart(){
        //verify image of the product in the cart
        cy.xpath(shoppingCartPageObject.emptyCartImage).wait(2000)
        .and('have.attr', 'src', '/static/images/emptycart.svg').and('have.attr', 'alt', 'Empty cart')
    }

    //verify Product Billing Details
    verifyShopingCartProductBillingDetails(productBillingDetails){
        //verify name of the Buyer
        cy.xpath(shoppingCartPageObject.userNameBox).should('have.value', productBillingDetails.name)

        //verify email ID
        cy.xpath(shoppingCartPageObject.userEmailBox).should('have.value', productBillingDetails.email)

        //verify deliver address
        cy.xpath(shoppingCartPageObject.deliveryAddressTextArea).should('have.text', productBillingDetails.deliveryAddress)

        //verify zip code
        cy.xpath(shoppingCartPageObject.zipCode).should('have.value', productBillingDetails.zipCode)

        //verify tip for the driver
        cy.xpath(shoppingCartPageObject.verifyTipToDriver).should('have.text',productBillingDetails.tipToDriver)

        //verify invoice details
        //verify subtotal
        cy.xpath(shoppingCartPageObject.verifySubtotal).should('have.text',productBillingDetails.invoiceDetails.subtotal)

        //verify bundleDiscount
        cy.xpath(shoppingCartPageObject.verifyBundleDiscount).should('have.text',productBillingDetails.invoiceDetails.bundleDiscount)

        //verify netSubtotal
        cy.xpath(shoppingCartPageObject.verifyNetSubtotal).should('have.text',productBillingDetails.invoiceDetails.netSubtotal)

        //verify totalTaxesAndFees
        cy.xpath(shoppingCartPageObject.verifyTotalTaxes).contains(productBillingDetails.invoiceDetails.totalTaxesAndFees)

        // //verify HealthIssuranceFee
        // cy.xpath(shoppingCartPageObject.verifyHealthIssurance).should('have.text',productBillingDetails.invoiceDetails.HealthIssuranceFee)

        // //verify debitCardTransactionFee
        // cy.xpath(shoppingCartPageObject.verifyDebitCardFee).should('have.text',productBillingDetails.invoiceDetails.debitCardTransactionFee)

        // //verify stateCannabisExciseTax
        // cy.xpath(shoppingCartPageObject.verifyStateCannabisTax).should('have.text',productBillingDetails.invoiceDetails.stateCannabisExciseTax)

        // //verify localCannabisBusinessTax
        // cy.xpath(shoppingCartPageObject.verifylocalCannabisBusinessTax).should('have.text',productBillingDetails.invoiceDetails.localCannabisBusinessTax)

        // //verify localSalesTax
        // cy.xpath(shoppingCartPageObject.verifylocalSalesTax).should('have.text',productBillingDetails.invoiceDetails.localSalesTax)

        //verify totalAllFeesIncluded
        cy.xpath(shoppingCartPageObject.verifyTotalFee).should('have.text',productBillingDetails.invoiceDetails.totalAllFeesIncluded)

        //verify tip
        cy.xpath(shoppingCartPageObject.verifyTip).should('have.text',productBillingDetails.invoiceDetails.tip)

        //verify totalAmountPayable
        cy.xpath(shoppingCartPageObject.verifyTotalAmount).should('have.text',productBillingDetails.invoiceDetails.totalAmountPayable)

    }
}

const shoppingCartPageVerification = new ShoppingCartPageVerification()

export default shoppingCartPageVerification