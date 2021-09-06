/// <reference types="cypress" />
import productDetailPageObjects from "../productDetails/ProductDetailsPageObjects"
class ProductDetailsPageTask{

    clickOnAddToCart(){
        //clcik add to cart button
        cy.xpath(productDetailPageObjects.addToCartButton).should('be.enabled').should('be.visible').contains("Add to Cart").click()
        cy.wait(2000)
    }

    clickOnAddToCartMultiQuantity(){
        //clcik add to cart button
        cy.xpath(productDetailPageObjects.addToCartButton).should('be.enabled').should('be.visible').contains("Add to Cart").click()
        //Click on confirm
        cy.xpath(productDetailPageObjects.addToCartConfirmButton).should('be.enabled').should('be.visible').contains('Confirm').click()
        cy.wait(2000)
    }

    clickOnViewCartLink(){
        //click on view cart link
        cy.xpath(productDetailPageObjects.cartButton).should('be.visible').click()
    }

}

const productDetailPageTask = new ProductDetailsPageTask()

export default productDetailPageTask