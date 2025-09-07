import {Locator, Page} from "@playwright/test";

export default class BaseClass{
   
    readonly page: Page;
    private readonly cancelButton: Locator;
    private readonly continueButton: Locator;
    private readonly backButton: Locator;

    constructor(page:Page){
        this.page = page;
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.continueButton = page.getByRole('button', { name: 'Continue' });
        this.backButton = page.getByRole('button', { name: 'Back' });
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
}