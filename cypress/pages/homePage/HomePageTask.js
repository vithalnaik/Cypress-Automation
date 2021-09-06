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
        cy.get(homePage.termsConditionAcceptButton).click({force: true})
    }

    //click on loginbutton from homepage
    clickOnLoginButton(){
        cy.xpath(homePage.loginButtonXpath).should('be.visible').click();
    }

    //click on Schedule Menu
    clickOnScheduleMenuLink(){
        cy.xpath(homePage.scheduleMenuLink).click()
    }

    //add product to the cart
    addElementToCart(productName){
        cy.wait(5000)
        cy.scrollTo(0, 500)
        cy.xpath("//p[text() = '"+ productName + "']/parent::a/parent::div/parent::div/parent::div/following-sibling::div/button").click()
    }

    clickOnViewCartLink(){
        //click on view cart link
        cy.xpath(homePage.cartButton).should('be.visible').click()
    }
}

const homePageTask = new HomePageTask();
export default homePageTask;