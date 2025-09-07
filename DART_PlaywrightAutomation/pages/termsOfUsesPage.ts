import {test,Locator, Page} from "@playwright/test";
import BaseClass from "./baseClass";

export class DART_TermsOfUse extends BaseClass{
   
    private readonly termsOfUseHeader : Locator;
    private readonly content : Locator;
    private readonly checkbox1 : Locator;
    private readonly checkbox2 : Locator;

    constructor(page:Page) {
        super(page);
        this.termsOfUseHeader = page.getByText('Terms of Use - US');
        this.content = page.locator('.content');
        this.checkbox1 = page.getByTestId('CheckBoxOutlineBlankIcon').nth(0);
        this.checkbox2 = page.getByTestId('CheckBoxOutlineBlankIcon').nth(1);
    }

    async termsOfUse(){
        await this.termsOfUseHeader.waitFor({state:'visible'});
        await this.content.waitFor({state:'visible'});
        await this.checkbox1.click();
        await this.checkbox2.click();   
        await this.clickContinueButton();
    }

}