class OrderDetailPageObjects {
  constructor() {
    this.orderDetailHeader = "//div[@class='schedule-title d-none d-lg-block order-details-header']"
    this.verifyTotalBillPaid = "//small[text() ='TOTAL']/following-sibling::div[1]/child::span"
    this.verifyBillDueOnDelivery = "//small[text() ='DUE ON DELIVERY']/following-sibling::div/child::span"
    this.verifyDebitCardPaid = "//small[text() ='DEBIT CARD']/following-sibling::div/child::span"
    this.verifyWalletAmountUsed = "//small[text() ='WALLET AMOUNT USED']/following-sibling::div/child::span"
    this.verifyCustomerID = "//small[text() ='CUSTOMER ID']/following-sibling::p"
    this.verifyCustomerName = "//small[text() ='CUSTOMER NAME']/following-sibling::p"
    this.verifyCustomerAddress = "//small[text() ='CUSTOMER ADDRESS']/following-sibling::p"
    this.verifySubtotal = "//div[text()='Subtotal']/following-sibling::div"
    this.verifyBundleDiscount = "//div[text()='Bundle Discount']/following-sibling::div"
    this.verifyNetSubtotal = "//div[text()='Net Subtotal']/following-sibling::div"
    this.verifyTotalTaxes = "//div[(contains(text(),'Total Taxes & Fees'))]/following-sibling::div/child::span[2]"
    this.verifyTotalFee = "//div[text()='Total (All Fees Included)']/following-sibling::div"
    this.verifyTip = "//span[text()='Tip']/parent::div/following-sibling::div"
    this.verifyTotalAmount = "//span[contains(text(),'Total Amount Payable')]/parent::div/following-sibling::div"
    this.verifyProductImage = "//div[@class='img-list-item']/child::picture/child::img"
    this.verifyProductName = "//div[@class='item-name']"
    this.calcelOrderButton = "//button[text() ='Cancel Order']"
    this.selectReason = "//label[text() ='I did not intend to order']/preceding-sibling::input"
    this.yesButton = "//button[text() ='Yes']"
    this.cancelOrderSuccessMessage = "//div[text() = 'Order cancelled successfully']"

  }
}

const orderDetailPageObject = new OrderDetailPageObjects()
export default orderDetailPageObject