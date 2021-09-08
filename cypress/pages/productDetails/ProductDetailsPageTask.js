/// <reference types="cypress" />
import productDetailPageObjects from "../productDetails/ProductDetailsPageObjects"
class ProductDetailsPageTask{

    clickOnAddToCart(){
        //clcik add to cart button
        cy.xpath(productDetailPageObjects.addToCartButton).should('be.enabled').should('be.visible').contains("Add to Cart").click()
        cy.log('Clicked on Add to cart button')
        cy.wait(2000)
    }

    clickOnAddToCartMultiQuantity(){
        //clcik add to cart button
        cy.xpath(productDetailPageObjects.addToCartButton).should('be.enabled').should('be.visible').contains("Add to Cart").click()
        cy.log('Clicked on Add to cart button')
        //Click on confirm
        cy.xpath(productDetailPageObjects.addToCartConfirmButton).should('be.enabled').should('be.visible').contains('Confirm').click()
        cy.log('Clicked on Add to cart confirm button')
        cy.wait(2000)
    }

    clickOnViewCartLink(){
        //click on view cart link
        cy.xpath(productDetailPageObjects.cartButton).should('be.visible').click()
        cy.log('Clicked on view cart link')
    }

}

const productDetailPageTask = new ProductDetailsPageTask()

export default productDetailPageTask