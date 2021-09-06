class ProductDetailsPageObjects{

    constructor() {
        this.addToCartButton = "//button[contains(text(),'Add to Cart')]"
        this.addToCardSuccessMessage = "//div[contains(text(),'Product successfully added to cart')]"
        this.verifyCartCount = "//span[@class='cart-item-count']"
        this.cartButton = "//a[@class='btn right-btn h-cart-btn']"
        this.productImage = "//div[@class='image-magnify-container']/child::img"
        this.productName = "//h1[@class='product-name bold']"
        this.discountedPrice = "//span[@class='price discount price text-primary']"
        this.actualPrice = "//small[@class='strike-text']"
        this.backgroundHeader = "//div[@class='bold one-rem-mt half-rem-mb']"
        this.backgroundDetailsBlock = "(//div[@class='bold one-rem-mt half-rem-mb']/following-sibling::div)[1]"
        this.warningMessage = "//small[@class='p-text']"
        this.brandName = "//div[@class='mb-1']"
        this.brandURL = "//a[@class='grey-color']"
        this.weight = "//div[contains(text(),'Weight')]/preceding-sibling::div"
        this.THC = "//div[text() ='THC']/preceding-sibling::div"
        this.THC_dollar = "//div[text() ='THC/dollar']/preceding-sibling::div"
        this.strain = "//div[text() ='Strain']/preceding-sibling::div"
        this.addToCartConfirmButton = "//button[contains(text(),'Confirm')]"
        this.volumePricingTableColumns = "//table[@class='table']/tbody/tr[1]/td"
        this.volumePricingTableRows = "//table[@class='table']/tbody/tr"
    }
}

const productDetailPageObjects = new ProductDetailsPageObjects()

export default productDetailPageObjects