/// <reference types="cypress" />
import loginPageVerification from "../../pages/loginPage/LoginPageVerirfication"
import homePageTask from "../../pages/homePage/HomePageTask"
import loginPageTask from "../../pages/loginPage/LoginPageTask"
import productDetailPageVerification from "../../pages/productDetails/ProdcutDetailsPageVerification"
import shoppingCartPageVerification from '../../pages/shoppingCartPage/ShoppingCartPageVerification'
import productDetailPageTask from "../../pages/productDetails/ProductDetailsPageTask"
import shoppingCartPageTask from "../../pages/shoppingCartPage/ShoppingCartPageTask"

function productTest(productDetails) {
    //visit kickbackPack product detail page
    cy.visit(productDetails.url)

    //verify kickback Pack Details
    productDetailPageVerification.verifyProductDetails(productDetails)

    if ('addToCartMultiQuantity' in productDetails) {
        //Add to cart multi quantity
        productDetailPageTask.clickOnAddToCartMultiQuantity()
    }
    else {
        productDetailPageTask.clickOnAddToCart()
        //verify the success message for Add to cart fuctionality(Not able to view the message during test run)
        productDetailPageVerification.verifyAddtoCartSuccessMessage("Product successfully added to cart")
    }

    //verify view cart count 
    productDetailPageVerification.verifyCartCount("1")
    //click on view cart link
    productDetailPageTask.clickOnViewCartLink()

    //verify details on shoppingCart
    shoppingCartPageVerification.verifyProductDetails(productDetails.addToCartDetails)

    //delete item from cart
    shoppingCartPageTask.deleteProductFromCart()

    //verify Empty shopping cart
    shoppingCartPageVerification.verifyEmptyShoppingCart()

}
describe('Verify Product Details Page', function () {

    beforeEach(function () {
        //Handle unwanted popups
        cy.intercept('https://sdk.iad-03.braze.com/api/v3/template/', {
            "mock": "data"
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
            loginPageTask.login(userDetails.username, userDetails.password)
        })
        //verify successfull login
        loginPageVerification.verifySuccesfullLogin()

    })


    it('Verify kickback Pack product Details', function () {
        //Get the json Fixture file to execute the test and Verification
        const kickbackPackDetails = require('../../fixtures/productDetails/kickbackPack.json')
        //verify product details
        productTest(kickbackPackDetails)

    })

    it('Verify Skywalker OG product Details', function () {
        const skywalkerOGDetails = require('../../fixtures/productDetails/skywalkerOG.json')
        //verify product details
        productTest(skywalkerOGDetails)

    })

    it('Verify Ice Cream Cake product Details', function () {
        const iceCreamCakeDetails = require('../../fixtures/productDetails/iceCreamCake.json')
        //verify product details
        productTest(iceCreamCakeDetails)

    })

})
