import {test,Locator, Page} from "@playwright/test";
import BaseClass from "./baseClass";
import { termsOfUseLocators } from "../locators/termsOfuseLocators";

export class DART_TermsOfUse extends BaseClass{
   
    private readonly termsOfUseHeader : Locator;
    private readonly content : Locator;
    private readonly checkbox1 : Locator;
    private readonly checkbox2 : Locator;

    constructor(page:Page) {
        super(page);
        this.termsOfUseHeader = page.getByText(termsOfUseLocators.termsOfUseHeader);
        this.content = page.locator(termsOfUseLocators.content);
        this.checkbox1 = page.getByTestId(termsOfUseLocators.checkbox1.testId).nth(termsOfUseLocators.checkbox1.nth);
        this.checkbox2 = page.getByTestId(termsOfUseLocators.checkbox2.testId).nth(termsOfUseLocators.checkbox2.nth);
    }

    async clickCheckbox1() {
        await this.checkbox1.click();
    }
    async clickCheckbox2() {
        await this.checkbox2.click();
    }

    async termsOfUse(){
        await this.termsOfUseHeader.waitFor({state:'visible'});
        await this.content.waitFor({state:'visible'});
        await this.clickCheckbox1();
        await this.clickCheckbox2();
        await this.clickContinueButton();
    }

}