import {Locator, Page} from "@playwright/test";

export default class BaseClass{
   
    readonly page: Page;
    private readonly cancelButton: Locator;
    private readonly continueButton: Locator;
    private readonly backButton: Locator;
    private readonly submitButton: Locator;
    constructor(page:Page){
        this.page = page;
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.backButton = page.getByRole('button', { name: 'Back' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
    }

    async clickCancelButton(){
        await this.cancelButton.click();
    }   
    async clickContinueButton(){
        await this.continueButton.waitFor({state:'visible'});
        if(await this.continueButton.isEnabled())
        await this.continueButton.click(); 
        else
        throw new Error("Continue button is not enabled");
    }   
    async clickBackButton(){
        await this.backButton.click();
    }
    async clickSubmitButton(){
        await this.submitButton.waitFor({state:'visible'});
        if(await this.submitButton.isEnabled())
        await this.submitButton.click(); 
        else
        throw new Error("Submit button is not enabled");
    }
    
}