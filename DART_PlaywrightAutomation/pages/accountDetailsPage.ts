import { Locator, Page } from "@playwright/test";
import BaseClass from "./baseClass";

export class DART_AccountDetails extends BaseClass {

  private readonly accountDetailsHeader: Locator;
  private readonly countryInput: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly companyInput: Locator;
  private readonly addressInput: Locator;
  private readonly zipcodeInput: Locator;
  private readonly cityInput: Locator;
  private readonly stateInput: Locator;
  private readonly checkbox: Locator;
  private readonly position: Locator;
  private readonly phoneNumber: Locator;
  private readonly globalParentFullName: Locator;
  private readonly dunsNumber: Locator;
  private readonly department: Locator;
  private readonly address2: Locator;

  constructor(page: Page) {
    super(page);
    this.accountDetailsHeader = page.locator("text=Account Details");
    this.countryInput = page.locator("input#select-country");
    this.firstNameInput = page.locator("input[name=firstName]");
    this.lastNameInput = page.locator("input[name=lastName]");
    this.position = page.locator("input[name=position]");
    this.phoneNumber = page.locator("input[name=phone]");
    this.companyInput = page.locator("input[name=companyFullName]");
    this.globalParentFullName = page.locator("input[name=globalParentFullName]");
    this.dunsNumber = page.locator("input[name=duns]");
    this.department = page.locator("input[name=department]");
    this.addressInput = page.locator("input[name=address]");
    this.address2 = page.locator("input[name=address2]");
    this.zipcodeInput = page.locator("input[name=zipCode]");
    this.cityInput = page.locator("input[name=city]");
    this.stateInput = page.locator("input[name=state]");
    this.checkbox = page.locator("input[type=checkbox]").nth(0);
  }

  async fillCountry(country: string) {
    await this.countryInput.fill(country);
    await this.page.keyboard.press("Enter");
  }
  async fillFirstName(firstName: string) {
    await this.firstNameInput.fill(firstName);
  }
  async fillLastName(lastName: string) {
    await this.lastNameInput.fill(lastName);
  }
  async fillCompany(company: string) {
    await this.companyInput.fill(company);
  }
  async fillAddress(address: string) {
    await this.addressInput.fill(address);
  }
  async fillZipcode(zipcode: string) {
    await this.zipcodeInput.fill(zipcode);
  }
  async fillCity(city: string) {
    await this.cityInput.fill(city);
  }
  async selectState(state: string) {
    await this.stateInput.selectOption(state);
  }
  async checkCheckbox() {
    await this.checkbox.check();
  }

  async accountDetails(
    country: string,
    firstName: string,
    lastName: string,
    company: string,
    address: string,
    zipcode: string,
    city: string,
    state: string
  ) {
    await this.accountDetailsHeader.waitFor({ state: "visible" });
    await this.fillCountry(country);
    await this.fillFirstName(firstName);
    await this.fillLastName(lastName);
    await this.fillCompany(company);
    await this.fillAddress(address);
    await this.fillZipcode(zipcode);
    await this.selectState(state);
    await this.fillCity(city);
    await this.checkCheckbox();
    await this.clickContinueButton();
  }
}
