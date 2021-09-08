/// <reference types="cypress" />
import orderDetailPageObject from '../orderDetail/OrderDetailPageObjects'

class OrderDetailsPageVerification{


    //verify Order details on Order Summary page
    verifyOrderDetail(orderDetails){

        //verify order detail header
        cy.xpath(orderDetailPageObject.orderDetailHeader).should('be.visible').and('have.text','Order Details')
        cy.log('Verified order header title as :- Order Details')

        //verify total billed paid
        cy.xpath(orderDetailPageObject.verifyTotalBillPaid).should('be.visible').should('have.text',orderDetails.total)
        cy.log('verified Total bill paid :- ' + orderDetails.total)

        //verify Bill Due on Delivery
        cy.xpath(orderDetailPageObject.verifyBillDueOnDelivery).should('be.visible').should('have.text',orderDetails.dueOnDelivery)
        cy.log('verified Bill due on Delivery :- ' + orderDetails.dueOnDelivery)

        //verify Debit card payment
        cy.xpath(orderDetailPageObject.verifyDebitCardPaid).should('be.visible').should('have.text',orderDetails.debitCardPaid)
        cy.log('verified Total bill paid :- ' + orderDetails.debitCardPaid)

        //verify Wallet Amount Used
        cy.xpath(orderDetailPageObject.verifyWalletAmountUsed).should('be.visible').should('have.text',orderDetails.walletAmountUsed)
        cy.log('verified Total bill paid :- ' + orderDetails.walletAmountUsed)

        //verify Customer ID
        cy.xpath(orderDetailPageObject.verifyCustomerID).should('be.visible').should('have.text',orderDetails.customerID)
        cy.log('verified Customer ID :- ' + orderDetails.customerID)

        //verify Customer Name
        cy.xpath(orderDetailPageObject.verifyCustomerName).should('be.visible').should('have.text',orderDetails.customerName)
        cy.log('verified Customer Name :- ' + orderDetails.customerName)

        //verify Customer Address
        cy.xpath(orderDetailPageObject.verifyCustomerAddress).should('be.visible').should('have.text',orderDetails.customerAddress)
        cy.log('verified Customer Address :- ' + orderDetails.customerAddress)

        //verify Product image
        cy.xpath(orderDetailPageObject.verifyProductImage).should('have.attr', 'src', orderDetails.productImageSrc)
        cy.log('verified Product image :- ' + orderDetails.productImageSrc)

        //verify Product name
        cy.xpath(orderDetailPageObject.verifyProductName).should('be.visible').should('have.text',orderDetails.productNameCount)
        cy.log('verified Product name :- ' + orderDetails.productNameCount)

        //verify subtotal
        cy.xpath(orderDetailPageObject.verifySubtotal).should('have.text',orderDetails.subtotal)
        cy.log('verified subtotal :- ' + orderDetails.subtotal)

        //verify bundleDiscount
        cy.xpath(orderDetailPageObject.verifyBundleDiscount).should('have.text',orderDetails.bundleDiscount)
        cy.log('verified bundleDiscount :- ' + orderDetails.bundleDiscount)

        //verify netSubtotal
        cy.xpath(orderDetailPageObject.verifyNetSubtotal).should('have.text',orderDetails.netSubtotal)
        cy.log('verified netSubtotal :- ' + orderDetails.netSubtotal)

        //verify totalTaxesAndFees
        cy.xpath(orderDetailPageObject.verifyTotalTaxes).contains(orderDetails.totalTaxesAndFees)
        cy.log('verified totalTaxesAndFees :- ' + orderDetails.totalTaxesAndFees)

        //verify totalAllFeesIncluded
        cy.xpath(orderDetailPageObject.verifyTotalFee).should('have.text',orderDetails.totalAllFeesIncluded)
        cy.log('verified totalAllFeesIncluded :- ' + orderDetails.totalAllFeesIncluded)

        //verify tip
        cy.xpath(orderDetailPageObject.verifyTip).should('have.text',orderDetails.tip)
        cy.log('verified tip :- ' + orderDetails.tip)

        //verify totalAmountPayable
        cy.xpath(orderDetailPageObject.verifyTotalAmount).should('have.text',orderDetails.totalAmountPayable)
        cy.log('verified totalAmountPayable :- ' + orderDetails.totalAmountPayable)
    }

    verifySuccessMessageAfterOrderCanceled(){
        //verify message after order get canceled
        //Verification successfull
        cy.xpath(orderDetailPageObject.cancelOrderSuccessMessage).should('have.text','Order cancelled successfully')
        cy.log('verified successfull order cancelation message :- Order cancelled successfully' )

    }

}

const orderDetailsPageVerification = new OrderDetailsPageVerification()  
export default orderDetailsPageVerification