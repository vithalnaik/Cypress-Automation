/// <reference types="cypress" />
import orderDetailPageObject from '../orderDetail/OrderDetailPageObjects'

class OrderDetailsPageTask{

    calcelOrder(reason){
        //click on cancel button
        cy.xpath(orderDetailPageObject.calcelOrderButton).should('be.visible').and('be.enabled').click()
        //select reasn to cancel the order
        if(reason === "I did not intend to order"){
            cy.xpath(orderDetailPageObject.selectReason).click({force: true})
        }
        //click yes confirmation button"
        cy.xpath(orderDetailPageObject.yesButton).should('be.visible').and('be.enabled').click()
    }

}

const orderDetailsPageTask = new OrderDetailsPageTask()  
export default orderDetailsPageTask