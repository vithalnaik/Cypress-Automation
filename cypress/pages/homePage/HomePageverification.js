/// <reference types="cypress" />
import homePage from '../homePage/HomePageObjects'
import 'cypress-xpath'
class HomePageverification {


    //verify Page title on Homepage
    verifyHomePageTitle() {
        // verify that homepage titke should be equal to 'SEO Meta Title'
        cy.title().should('eq', 'SEO Meta Title')
    }

    //verify home page logo
    verifyHomepageLogo() {
        cy.xpath(homePage.homeLogoImage)
            .should('have.attr', 'src', 'https://saas3-operator1-public-data.s3-us-west-2.amazonaws.com/grassdoor/web_static_files/logo-grassdoor.svg')
            .should('have.attr', 'alt', 'Grassdoor')
    }

    //verify that Menu button is visible
    verifyMenuButton() {
        cy.xpath(homePage.menuButton).should('be.visible')
    }

    //verify view cart link
    verifyViewCartLink() {
        cy.xpath(homePage.cartButton).should('be.visible')
    }

    homePageverification() {
        //verify Page title on Homepage
        this.verifyHomePageTitle()

        //verify home page logo
        this.verifyHomepageLogo()

        //verify that Menu button is visible
        verifyMenuButton()

        //verify view cart link
        verifyViewCartLink()
    }

    verifyCartCount(count) {
        //verify number of cart Item count on View Cart Link
        cy.xpath(homePage.verifyCartCount).should('have.text', count)
    }
}


const homePageVerification = new HomePageverification();
export default homePageVerification;