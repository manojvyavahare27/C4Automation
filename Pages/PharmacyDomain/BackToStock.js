class BackToStock {
    constructor(page) {
        this.page = page;

        // Sidebar
        this.batchQty = page.locator("xpath=//input[contains(@data-testid, 'Batch')]");
        this.reasonforReturn=page.locator("xpath=//textarea[@data-testid='Reason for Return']")
        this.SaveButton=page.locator("xpath=//div[contains(text(),'Save')]")
        
    }

    async enterBatchQty() {
        await this.batchQty.fill('5');
    }

    async enterReasonforReturn()
    {
        await this.reasonforReturn.fill('Added for testing')
    }
    async clickOnSavebutton()
    {
        await this.SaveButton.click()
    }
   
}

module.exports = BackToStock;
