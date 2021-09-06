import homePageTask from "../../pages/homePage/HomePageTask"
import loginPageTask from "../../pages/loginPage/LoginPageTask"
import loginPageVerification from "../../pages/loginPage/LoginPageVerirfication"
import productDetailPageTask from "../../pages/productDetails/ProductDetailsPageTask"
import productDetailPageVerification from "../../pages/productDetails/ProdcutDetailsPageVerification"
import shoppingCartPageTask from "../../pages/shoppingCartPage/ShoppingCartPageTask"
import shoppingCartPageVerification from '../../pages/shoppingCartPage/ShoppingCartPageVerification'
const couponModuleTest = require('../../fixtures/coupon/couponModuleTest')

describe('Coupon test scenarios', function () {

    // before(function() {
    //     cy.intercept('https://sdk.iad-03.braze.com/api/v3/template/', { "mock": "data"
    //     }).as('brazeTemplate')
    //     cy.visit('/')
    //     homePage.acceptGrassdoorTermConditon()
    //     //handle pop up for location set up
    //     homePage.fillUpLocationPopUP("Santa Monica Pier, Santa Monica Pier, Santa Monica, CA, USA")
    //     //click on login button from homepage
    //     homePage.clickOnLoginButton()
    //     //perform login operation
    //     cy.fixture('login/validLogin.json').then((userDetails) => {
    //         loginPageTask.login(userDetails.username , userDetails.password)
    //       })
    //     //verify successfull login
    //     loginPageVerification.verifySuccesfullLogin()

    //     //preserve cookies to skip login
    //     Cypress.Cookies.preserveOnce("_grassdoor_zc","ajs_user_id","_ga","token","ajs_anonymous_id")
    // })

    beforeEach(function () {
        //Handle unwanted popups
        cy.intercept('https://sdk.iad-03.braze.com/api/v3/template/', { "mock": "data"
        }).as('brazeTemplate')
        //visit default URL
        cy.visit('/')
        homePageTask.acceptGrassdoorTermConditon()
        //handle pop up for location set up
        homePageTask.fillUpLocationPopUP("Santa Monica Pier, Santa Monica Pier, Santa Monica, CA, USA")
        //click on login button from homepage
        homePageTask.clickOnLoginButton()
        //perform login operation
        cy.fixture('login/validLogin.json').then((userDetails) => {
            loginPageTask.login(userDetails.username , userDetails.password)
          })
        //verify successfull login
        loginPageVerification.verifySuccesfullLogin()

        })

    //Iterate through each object in fixture file (json) and run the test for that many Coupon Codes    
    couponModuleTest.forEach((coupon) => {
        it('Verify Coupon Code :- ' + coupon.couponCode, function () {
            //visit Product page URL
            cy.visit(coupon.productPageURL)
            //Add the product to the cart
            productDetailPageTask.clickOnAddToCartMultiQuantity()
            //verify view cart count 
            productDetailPageVerification.verifyCartCount("1")
            //click on view cart link
            productDetailPageTask.clickOnViewCartLink()

            //test for coupon code
            //verify total price before applying the coupon
            shoppingCartPageVerification.verifyPrice(coupon.orderTotalBeforeCouponApplied)
            //add coupon code to Coupon/Referral Code textBox
            shoppingCartPageTask.addCouponCodeToCouponCodeBox(coupon.couponCode)

            //click apply button
            shoppingCartPageTask.clickOnApplyCouponCodeButton()

            //verify success message in the Popup alert
            shoppingCartPageVerification.verifyCouponCodeSuccessMessagePopUP(coupon.verificationMessage)

            //verify success message displayed on the form
            shoppingCartPageVerification.verifySuccessCouponMessage(coupon.verificationMessage)

            //verify total price after coupon code is applied
            shoppingCartPageVerification.verifyPrice(coupon.orderTotalAfterCouponApplied)

            //removed applied coupon
            shoppingCartPageTask.removeAppliedCoupon()

            //verify total price after deleting the coupon code
            shoppingCartPageVerification.verifyPrice(coupon.orderTotalBeforeCouponApplied)

            //delete the item from cart
            shoppingCartPageTask.deleteProductFromCart()
            shoppingCartPageVerification.verifyEmptyShoppingCart();


        });
    });

    it('Coupon Module negative test case :- To verify invalid Coupon Code', function () {
        //visit Product page URL
        cy.visit('/product/ice-cream-cake-146')
        //Add the product to the cart
        productDetailPageTask.clickOnAddToCartMultiQuantity()
        //click on view cart link
        productDetailPageTask.clickOnViewCartLink()

        //Negative test 1
        //Negative test to verify invalid Coupon Code
        shoppingCartPageTask.addCouponCodeToCouponCodeBox("invalidCode")

        //click apply button
        shoppingCartPageTask.clickOnApplyCouponCodeButton()

        //verify error message for Invalid code
        shoppingCartPageVerification.verifyInvalidCouponCodeMessage()

        //Negative test 2
        //To check if we pass empty value as coupon code and click Apply
        //click directly on Apply button without adding coupon code
        shoppingCartPageTask.clickOnApplyCouponCodeButton()
        //verify error message
        shoppingCartPageVerification.verifyEmptyCouponCodeError()
        //delete the item from cart
        shoppingCartPageTask.deleteProductFromCart()
        shoppingCartPageVerification.verifyEmptyShoppingCart();
    });

    it('Coupon Module negative test case :- To verify invalid Coupon Code with space in between', function () {
        //visit Product page URL
        cy.visit('/product/ice-cream-cake-146')
        //Add the product to the cart
        productDetailPageTask.clickOnAddToCartMultiQuantity()
        //click on view cart link
        productDetailPageTask.clickOnViewCartLink()

        //Negative test 1
        //Negative test to verify invalid Coupon Code as "invalid coupon" with a space
        shoppingCartPageTask.addCouponCodeToCouponCodeBox("invalid Code")

        //click apply button
        shoppingCartPageTask.clickOnApplyCouponCodeButton()

        //verify error message
        shoppingCartPageVerification.verifyEmptyCouponCodeError()
        //delete the item from cart
        shoppingCartPageTask.deleteProductFromCart()
        shoppingCartPageVerification.verifyEmptyShoppingCart();
    });

    it('Coupon Module negative test case :- To check if we pass empty value as coupon code and click Apply', function () {
        //visit Product page URL
        cy.visit('/product/ice-cream-cake-146')
        //Add the product to the cart
        productDetailPageTask.clickOnAddToCartMultiQuantity()
        //click on view cart link
        productDetailPageTask.clickOnViewCartLink()

        //Negative test 2
        //To check if we pass empty value as coupon code and click Apply
        //click directly on Apply button without adding coupon code
        shoppingCartPageTask.clickOnApplyCouponCodeButton()
        //verify error message
        shoppingCartPageVerification.verifyEmptyCouponCodeError()
        //delete the item from cart
        shoppingCartPageTask.deleteProductFromCart()
        shoppingCartPageVerification.verifyEmptyShoppingCart();
    });
});