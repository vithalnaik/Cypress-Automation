/// <reference types="cypress" />
import orderDetailPageObject from '../orderDetail/OrderDetailPageObjects'

class OrderDetailsPageVerification{


    //verify Order details on Order Summary page
    verifyOrderDetail(orderDetails){

        //verify order detail header
        cy.xpath(orderDetailPageObject.orderDetailHeader).should('be.visible').and('have.text','Order Details')

        //verify total billed paid
        cy.xpath(orderDetailPageObject.verifyTotalBillPaid).should('be.visible').should('have.text',orderDetails.total)

        //verify Bill Due on Delivery
        cy.xpath(orderDetailPageObject.verifyBillDueOnDelivery).should('be.visible').should('have.text',orderDetails.dueOnDelivery)

        //verify Debit card payment
        cy.xpath(orderDetailPageObject.verifyDebitCardPaid).should('be.visible').should('have.text',orderDetails.debitCardPaid)

        //verify Wallet Amount Used
        cy.xpath(orderDetailPageObject.verifyWalletAmountUsed).should('be.visible').should('have.text',orderDetails.walletAmountUsed)

        //verify Customer ID
        cy.xpath(orderDetailPageObject.verifyCustomerID).should('be.visible').should('have.text',orderDetails.customerID)

        //verify Customer Name
        cy.xpath(orderDetailPageObject.verifyCustomerName).should('be.visible').should('have.text',orderDetails.customerName)

        //verify Customer Address
        cy.xpath(orderDetailPageObject.verifyCustomerAddress).should('be.visible').should('have.text',orderDetails.customerAddress)

        //verify Product image
        cy.xpath(orderDetailPageObject.verifyProductImage).should('have.attr', 'src', orderDetails.productImageSrc)

        //verify Product name
        cy.xpath(orderDetailPageObject.verifyProductName).should('be.visible').should('have.text',orderDetails.productNameCount)

        //verify subtotal
        cy.xpath(orderDetailPageObject.verifySubtotal).should('have.text',orderDetails.subtotal)

        //verify bundleDiscount
        cy.xpath(orderDetailPageObject.verifyBundleDiscount).should('have.text',orderDetails.bundleDiscount)

        //verify netSubtotal
        cy.xpath(orderDetailPageObject.verifyNetSubtotal).should('have.text',orderDetails.netSubtotal)

        //verify totalTaxesAndFees
        cy.xpath(orderDetailPageObject.verifyTotalTaxes).contains(orderDetails.totalTaxesAndFees)

        //verify totalAllFeesIncluded
        cy.xpath(orderDetailPageObject.verifyTotalFee).should('have.text',orderDetails.totalAllFeesIncluded)

        //verify tip
        cy.xpath(orderDetailPageObject.verifyTip).should('have.text',orderDetails.tip)

        //verify totalAmountPayable
        cy.xpath(orderDetailPageObject.verifyTotalAmount).should('have.text',orderDetails.totalAmountPayable)
    }

    verifySuccessMessageAfterOrderCanceled(){
        //verify message after order get canceled
        //Verification successfull
        cy.xpath(orderDetailPageObject.cancelOrderSuccessMessage).should('have.text','Order cancelled successfully')

    }

}

const orderDetailsPageVerification = new OrderDetailsPageVerification()  
export default orderDetailsPageVerification