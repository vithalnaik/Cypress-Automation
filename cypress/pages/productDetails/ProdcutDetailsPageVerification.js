/// <reference types="cypress" />
import productDetailPageObjects from "../productDetails/ProductDetailsPageObjects"
import 'cypress-xpath'

class ProductDetailsPageVerification{


    verifyCartCount(count){
        //verify number of cart Item count on View Cart Link
        cy.xpath(productDetailPageObjects.verifyCartCount).should('have.text', count)
    }

    verifyAddtoCartSuccessMessage(message){
        //verify add to cart success message
        cy.xpath(productDetailPageObjects.addToCardSuccessMessage).should('be.visible').should('have.text',message).click()
    }

    verifyPageURL(url){
        //verify page URL
        cy.url().should('include', url)
    }

    verifyProcuctName(productName){
        //verify Product Name
        cy.xpath(productDetailPageObjects.productName).should('be.visible').should('have.text', productName)
    }

    verifyProductImageWithAltName(img, altName){
        //verify Product Image and Alt name
        cy.xpath(productDetailPageObjects.productImage)
        .should('have.attr', 'src', img).should('have.attr','alt',altName)
    }

    verifyDiscountedPrice(discountedPrice){
        //verify Discounted price
        cy.xpath(productDetailPageObjects.discountedPrice).should('be.visible').and('have.text',discountedPrice)
    }

    verifyActualPrice(actualPrice){
        //verify actual price
        cy.xpath(productDetailPageObjects.actualPrice).should('be.visible').contains(actualPrice)
    }

    verifyBackGroundDetails(backgroundDetails){
        //verify background header 
        cy.xpath(productDetailPageObjects.backgroundHeader).should('be.visible').and('have.text', 'Background')
        // verify product background details
        backgroundDetails.forEach((backgroundDetail) => {
            cy.xpath(productDetailPageObjects.backgroundDetailsBlock).contains(backgroundDetail);
        })
    }

    verifyWarningMessage(warningMessage){
        //verify warning meesage
        cy.xpath(productDetailPageObjects.warningMessage).should('be.visible').and('have.text', warningMessage)
    }

    //verify brand of the product
    verifyBrandName(brandName){
        cy.xpath(productDetailPageObjects.brandName).should('be.visible').and('have.text', brandName)
    }

    //verify brand URL of the product
    verifyBrandURL(url){
        cy.xpath(productDetailPageObjects.brandURL).should('be.visible').and('have.attr','href', url)
    }

    //verify weight of the product
    verifyWeight(weight){
        cy.xpath(productDetailPageObjects.weight).should('be.visible').and('have.text', weight)
    }

    //verify THC of the product
    verifyTHC(THC){
        cy.xpath(productDetailPageObjects.THC).should('be.visible').and('have.text', THC)
    }

    //verify THC/dollar of the product
    verifyTHCdollar(THC_dollar){
        cy.xpath(productDetailPageObjects.THC_dollar).should('be.visible').and('have.text', THC_dollar)
    }

    //verify Strain of the product
    verifyStrain(strain){
        cy.xpath(productDetailPageObjects.strain).should('be.visible').and('have.text', strain)
    }


    verifyVolumePricingtable(volumePricingTable){

        const rowLength = 4
        const columnlength = 3

        //verify table rows and column lenght
        //row Length
        cy.xpath(productDetailPageObjects.volumePricingTableRows).should('have.length', rowLength)
        //column length
        cy.xpath(productDetailPageObjects.volumePricingTableColumns).should('have.length', columnlength)

        //verify rowise details from the column
        for (let i = 1; i <= rowLength; i++) {
            //verify number of Units
            cy.xpath("//table[@class='table']/tbody/tr[" + i + "]/td[1]").should('be.visible').should('have.text', volumePricingTable.unit[i-1])

            //verify weight of the product
            cy.xpath("//table[@class='table']/tbody/tr[" + i + "]/td[2]").should('be.visible').should('have.text', volumePricingTable.weight[i-1])

            //verify pricing per Units
            cy.xpath("//table[@class='table']/tbody/tr[" + i + "]/td[3]/child::span[@class='text-primary']").should('be.visible').should('have.text', volumePricingTable.pricePerUnit[i-1])
          }

    }



    verifyProductDetails(productDetails){
        //verify page URL
        if('url' in productDetails){
            cy.url().should('include', productDetails.url)
        }

        //verify Product Name
        if('productName' in productDetails){
            cy.xpath(productDetailPageObjects.productName).should('be.visible').should('have.text', productDetails.productName)
        }

        //verify product image
        //verify image alt title 
        if('imageAltTitle' in productDetails && 'imageSource' in productDetails){
            this.verifyProductImageWithAltName(productDetails.imageSource,productDetails.imageAltTitle)
        }
        
        //verify discounted price
        if('discountPrice' in productDetails){
            this.verifyDiscountedPrice(productDetails.discountPrice)
        }
            
        //verify actual price displayed
        if('discountPrice' in productDetails){
            this.verifyActualPrice(productDetails.actualPrice)
        }

        //verify backgroud description of the product
        if('background' in productDetails){
            this.verifyBackGroundDetails(productDetails.background)
        }

        //verify the warning message
        if('warning' in productDetails){
            this.verifyWarningMessage(productDetails.warning)
        }

        //verify brand name
        if('brand' in productDetails){
            this.verifyBrandName(productDetails.brand)
        }

        //verify brandURL of the product
        if('brandURL' in productDetails){
            this.verifyBrandURL(productDetails.brandURL)
        }

        //verify weight of the product
        if('weight' in productDetails){
            this.verifyWeight(productDetails.weight)
        }

        //verify THC of the product
        if('THC' in productDetails){
            this.verifyTHC(productDetails.THC)
        }

        //verify THC/dollar of the product
        if('THC_dollar' in productDetails){
            this.verifyTHCdollar(productDetails.THC_dollar)
        }

        //verify Strain of the product
        if('Strain' in productDetails){
            this.verifyStrain(productDetails.Strain)
        }

        //verify volume pricing table
        if('volume_pricing_table' in productDetails){
            this.verifyVolumePricingtable(productDetails.volume_pricing_table)
        }
    }
}

const productDetailPageVerification = new ProductDetailsPageVerification()
export default productDetailPageVerification