/// <reference types="cypress" />
import orderDetailsPageVerification from '../../pages/orderDetail/OrderDetailsPageVerification'
import homePageTask from "../../pages/homePage/HomePageTask"
import homePageVerification from "../../pages/homePage/HomePageverification"
import shoppingCartPageVerification from '../../pages/shoppingCartPage/ShoppingCartPageVerification'
import shoppingCartPageTask from "../../pages/shoppingCartPage/ShoppingCartPageTask"
import orderDetailsPageTask from "../../pages/orderDetail/OrderDetailsPageTask"


describe('E2e Flow', () => {

    it('End to End Flow to check login, add to cart, placing order and canceling it ', function () {

        cy.intercept('https://sdk.iad-03.braze.com/api/v3/template/', {
            "mock": "data"
        }).as('brazeTemplate')

        cy.fixture('e2e/e2eTest1.json').then((orderDetails) => {
            this.addToCartDetails = orderDetails.addToCartDetails
            this.shoppingCartDetails = orderDetails.shoppingCartDetails
            this.debitCardDetails = orderDetails.shoppingCartDetails.DebitCardDetails
            this.invoiceDetails = orderDetails.shoppingCartDetails.invoiceDetails
            this.orderDetail = orderDetails.orderDetail
            cy.visit('/')
            homePageTask.acceptGrassdoorTermConditon()

            //handle pop up for location set up
            homePageTask.fillUpLocationPopUP("Santa Monica Pier, Santa Monica Pier, Santa Monica, CA, USA")

            //click on sceduled delevery tab from homepage
            homePageTask.clickOnScheduleMenuLink()

            //click on add to cart button from one of the product
            homePageTask.addElementToCart(orderDetails.productName)

            //verify cart count
            homePageVerification.verifyCartCount(orderDetails.viewCartCount)

            //click on the cart to visit the cart
            homePageTask.clickOnViewCartLink()

            //verify the product details on the cart
            shoppingCartPageVerification.verifyProductDetails(this.addToCartDetails)


            //login from the cart
            cy.fixture('login/validLogin.json').then((userDetails) => {
                shoppingCartPageTask.userLoginFromShoppingCart(userDetails.username, userDetails.password)
            })

            //enter the name of the User
            shoppingCartPageTask.addNameOfUser(this.shoppingCartDetails.name)

            //Apply coupon code Apply "SaleSeptember" coupon
            shoppingCartPageTask.addCouponCodeToCouponCodeBox(orderDetails.coupon)
            shoppingCartPageTask.clickOnApplyCouponCodeButton()

            //Select schedule delivery time as tomorrow 04:40 PM - 06:00PM

            shoppingCartPageTask.selectDeleveryTime(this.shoppingCartDetails.deliveryTime)

            //Select Payment type as Cashless ATM (Debit Card) and add tip of $5
            shoppingCartPageTask.selectPaymentType(this.shoppingCartDetails.paymentType)

            //provide debit card details
            shoppingCartPageTask.fillUpDebitCardDetails(this.debitCardDetails.debitcardNumber
                , this.debitCardDetails.expiryDate
                , this.debitCardDetails.cvvNumber
                , this.debitCardDetails.cardHolderName)

            //Add $5 tip to the user
            shoppingCartPageTask.addTipToDriver(this.shoppingCartDetails.tipToDriver)

            //Add billing zip code
            shoppingCartPageTask.addBillingZipCode(this.shoppingCartDetails.billingZipCode)

            //verify Shopping cart order billing details
            shoppingCartPageVerification.verifyShopingCartProductBillingDetails(this.shoppingCartDetails)

            //Click bring it button
            shoppingCartPageTask.clickBringItButton()

            //verify order details page
            orderDetailsPageVerification.verifyOrderDetail(this.orderDetail)

            //Click cancel Order and select I did not intend to order
            orderDetailsPageTask.calcelOrder("I did not intend to order")

            //verify the successful message after cancelation
            orderDetailsPageVerification.verifySuccessMessageAfterOrderCanceled()
        })

    })

})