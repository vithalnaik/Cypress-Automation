/// <reference types="cypress" />
import shoppingCartPageObject from '../shoppingCartPage/ShoppingCartPageObjects'
import 'cypress-xpath'

class ShoppingCartPageVerification{

    verifyCouponCodeSuccessMessagePopUP(message){
        //verify popup message post successfull apply of Coupon Code
        cy.xpath(shoppingCartPageObject.verifyCouponCodeSuccessMessagePopUP).should('be.visible').should('have.text',message)
        cy.log('Verified Coupon Code Success Message on PopUP:-  ' + message)
    }

    verifySuccessCouponMessage(message){
        //verify the message displayed on the cart form
        cy.xpath(shoppingCartPageObject.verifySuccessCouponMessage).should('be.visible').contains(message)
        cy.log('Verified Coupon Code Success Message on Shopping Cart page:-  ' + message)

    }


    verifyInvalidCouponCodeMessage(){
        //verify if we pass inccorrect Coupon code and click Apply
        cy.xpath(shoppingCartPageObject.verifyInvalidCouponCodeErrorMessage).should('be.visible').and('have.text', "Invalid coupon code applied.")
        cy.log('Verified Invalid Coupon Code error Message :-  Invalid coupon code applied.')
    }

    verifyEmptyCouponCodeError(){
        //verify error message if we pass empty value to coupon code and click Apply
        cy.xpath(shoppingCartPageObject.verifyEmptyCouponCodeErrorMessage).should('be.visible').and('have.text', 'Please put a valid coupon')
        cy.log('Verified Invalid Coupon Code error Message if we pass empty value :-  Please put a valid coupon')
    }

    verifyPrice(price){
        cy.xpath(shoppingCartPageObject.verifyTotalPrice).contains(price)
        cy.log('Verified Total price:-  ' + price)

    }

    verifyProductDetails(productDetails){
        //verify image of the product in the cart
        if('imageSource' in productDetails){
            cy.xpath(shoppingCartPageObject.productImage).should('be.visible').and('have.attr', 'src', productDetails.imageSource)
            cy.log('Verified Product Image on Shoppingcart page')
        }

        //verify name of the product in the Cart
        if('productName' in productDetails){
            cy.xpath(shoppingCartPageObject.productName).should('be.visible').and('have.text', productDetails.productName)
            cy.log('Verified Product Name:-  ' + productDetails.productName)
        }

        //verify Brand of the product in the Cart
        if('brandType' in productDetails){
            cy.xpath(shoppingCartPageObject.productBrandName).should('be.visible').and('have.text', productDetails.brandType)
            cy.log('Verified Brand of the product :-  ' + productDetails.brandType)
        }

        //verify Weight of the product in the Cart
        if('weight' in productDetails){
            cy.xpath(shoppingCartPageObject.productWeight).should('be.visible').and('have.text', productDetails.weight)
            cy.log('Verified Weight of the product:-  ' + productDetails.weight)
        }

        //verify price of the product in the Cart
        if('discountedPrice' in productDetails){
            cy.xpath(shoppingCartPageObject.productDiscountedPriceDetail).should('be.visible').and('have.text', productDetails.discountedPrice)
            cy.log('Verified discounted price of the product:-  ' + productDetails.discountedPrice)
        }
        //verify actual price of the product
        if('actualPrice' in productDetails){
            cy.xpath(shoppingCartPageObject.productActualPriceDetail).should('be.visible').and('have.text', productDetails.actualPrice)
            cy.log('Verified actual price of the product:-  ' + productDetails.actualPrice)
        }

        //verify product count in cart
        if('cartCount' in productDetails){
            cy.xpath(shoppingCartPageObject.cartProductCount).should('be.visible').and('have.text', productDetails.cartCount)
            cy.log('Verified product count in cart:-  ' + productDetails.cartCount)
        }

    }

    //verify Empty shopping cart
    verifyEmptyShoppingCart(){
        //verify image of the product in the cart
        cy.xpath(shoppingCartPageObject.emptyCartImage).wait(2000)
        .and('have.attr', 'src', '/static/images/emptycart.svg').and('have.attr', 'alt', 'Empty cart')
        cy.log('Verified Empty cart Image')
    }

    //verify Product Billing Details
    verifyShopingCartProductBillingDetails(productBillingDetails){
        //verify name of the Buyer
        cy.xpath(shoppingCartPageObject.userNameBox).should('have.value', productBillingDetails.name)
        cy.log('Verified Name of the Buyer:-  ' + productBillingDetails.name)

        //verify email ID
        cy.xpath(shoppingCartPageObject.userEmailBox).should('have.value', productBillingDetails.email)
        cy.log('Verified Name of the Buyer:-  ' + productBillingDetails.name)

        //verify deliver address
        cy.xpath(shoppingCartPageObject.deliveryAddressTextArea).should('have.text', productBillingDetails.deliveryAddress)
        cy.log('Verified Name of the Buyer:-  ' + productBillingDetails.name)

        //verify zip code
        cy.xpath(shoppingCartPageObject.zipCode).should('have.value', productBillingDetails.zipCode)
        cy.log('Verified Name of the Buyer:-  ' + productBillingDetails.name)

        //verify tip for the driver
        cy.xpath(shoppingCartPageObject.verifyTipToDriver).should('have.text',productBillingDetails.tipToDriver)
        cy.log('Verified Name of the Buyer:-  ' + productBillingDetails.name)

        //verify invoice details
        cy.log('Verification of Invoice Detials')
        //verify subtotal
        cy.xpath(shoppingCartPageObject.verifySubtotal).should('have.text',productBillingDetails.invoiceDetails.subtotal)
        cy.log('Verified subtotal in invoice details:-  ' + productBillingDetails.invoiceDetails.subtotal)

        //verify bundleDiscount
        cy.xpath(shoppingCartPageObject.verifyBundleDiscount).should('have.text',productBillingDetails.invoiceDetails.bundleDiscount)
        cy.log('Verified bundleDiscount in invoice details:-  ' + productBillingDetails.invoiceDetails.bundleDiscount)

        //verify netSubtotal
        cy.xpath(shoppingCartPageObject.verifyNetSubtotal).should('have.text',productBillingDetails.invoiceDetails.netSubtotal)
        cy.log('Verified netSubtotal in invoice details:-  ' + productBillingDetails.invoiceDetails.netSubtotal)

        //verify totalTaxesAndFees
        cy.xpath(shoppingCartPageObject.verifyTotalTaxes).contains(productBillingDetails.invoiceDetails.totalTaxesAndFees)
        cy.log('Verified totalTaxesAndFees in invoice details:-  ' + productBillingDetails.invoiceDetails.totalTaxesAndFees)

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
        cy.log('Verified totalAllFeesIncluded in Invoice details :-  ' + productBillingDetails.invoiceDetails.totalAllFeesIncluded)

        //verify tip
        cy.xpath(shoppingCartPageObject.verifyTip).should('have.text',productBillingDetails.invoiceDetails.tip)
        cy.log('Verified tip in Invoice details:-  ' + productBillingDetails.invoiceDetails.tip)

        //verify totalAmountPayable
        cy.xpath(shoppingCartPageObject.verifyTotalAmount).should('have.text',productBillingDetails.invoiceDetails.totalAmountPayable)
        cy.log('Verified totalAmountPayable in Invoice details:-  ' + productBillingDetails.invoiceDetails.totalAmountPayable)

    }
}

const shoppingCartPageVerification = new ShoppingCartPageVerification()

export default shoppingCartPageVerification