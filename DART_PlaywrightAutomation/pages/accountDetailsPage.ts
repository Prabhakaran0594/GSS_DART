import {Locator, Page} from "@playwright/test";
import BaseClass from "./baseClass";

export class DART_AccountDetails extends BaseClass{

    private readonly accountDetailsHeader : Locator;
    private readonly countryInput : Locator;
    private readonly firstNameInput : Locator;
    private readonly lastNameInput : Locator;
    private readonly companyInput : Locator;
    private readonly addressInput : Locator;
    private readonly zipcodeInput : Locator;
    private readonly cityInput : Locator;
    private readonly stateInput : Locator;
    private readonly checkbox : Locator;

    constructor(page:Page) {
        super(page);
        this.accountDetailsHeader = page.locator('text=Account Details');
        this.countryInput = page.locator('input#select-country');
        this.firstNameInput = page.locator('input[name=firstName]');
        this.lastNameInput = page.locator('input[name=lastName]');
        this.companyInput = page.locator('input[name=companyFullName]');
        this.addressInput = page.locator('input[name=address]');
        this.zipcodeInput = page.locator('input[name=zipCode]');
        this.cityInput = page.locator('input[name=city]');
        this.stateInput = page.locator('input[name=state]');
        this.checkbox = page.locator('input[type=checkbox]').nth(0);

    }
    async accountDetails(country:string, firstName:string, lastName:string, company:string, address:string, zipcode:string, city:string, state:string){
        await this.accountDetailsHeader.waitFor({state:'visible'});
        await this.countryInput.selectOption(country);
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.companyInput.fill(company);
        await this.addressInput.fill(address);
        await this.zipcodeInput.fill(zipcode);
                await this.stateInput.selectOption(state);
        await this.cityInput.fill(city);
        await this.checkbox.check();
        await this.clickContinueButton();
    }
}
