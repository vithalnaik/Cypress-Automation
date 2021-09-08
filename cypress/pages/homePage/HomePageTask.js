/// <reference types="cypress" />
import homePage from "../homePage/HomePageObjects"
class HomePageTask{

    //fill the location details from 
    fillUpLocationPopUP(address){
        cy.get(homePage.locationPopUpTextBox).clear().should('be.visible').type(address, { delay: 150 }).wait(2000).type("{downarrow}").type("{enter}")
        cy.get(homePage.locationPopUpApplyButton).should('be.enabled').wait(1000).click({ force: true })
    }

    //Accept grassdoor term and condition from popup
    acceptGrassdoorTermConditon(){
        cy.get(homePage.termConditionAcceptCheckbox).click({ force: true })
        cy.log('Clicked on I am above 18 check box')

        cy.get(homePage.termsConditionAcceptButton).click({force: true})
        cy.log('Clicked on Accept Button')
    }

    //click on loginbutton from homepage
    clickOnLoginButton(){
        cy.xpath(homePage.loginButtonXpath).should('be.visible').click();
        cy.log('Clicked on Login button')
    }

    //click on Schedule Menu
    clickOnScheduleMenuLink(){
        cy.xpath(homePage.scheduleMenuLink).click()
        cy.log('Clicked on Schedule Menu link from Homepage')
    }

    //add product to the cart
    addElementToCart(productName){
        cy.wait(5000)
        cy.scrollTo(0, 500)
        cy.xpath("//span[text() = '"+ productName + "']/parent::a/parent::div/parent::div/parent::div/parent::div/following-sibling::div/button").click()
        cy.log('Add the product to the cart ' + productName)
    }

    clickOnViewCartLink(){
        //click on view cart link
        cy.xpath(homePage.cartButton).should('be.visible').click()
        cy.log('Clicked on View Cart link form Homepage')
    }
}

const homePageTask = new HomePageTask();
export default homePageTask;