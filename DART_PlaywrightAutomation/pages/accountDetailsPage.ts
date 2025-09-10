import { Locator, Page } from "@playwright/test";
import BaseClass from "./baseClass";
import { accountDetailsPageLocators } from "../locators/accountDetailsPageLocators";
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
  private readonly stateDropdown: Locator;
  constructor(page: Page) {
    super(page);
    this.accountDetailsHeader = page.locator(accountDetailsPageLocators.pageTitle);
    this.countryInput = page.locator(accountDetailsPageLocators.country);
    this.firstNameInput = page.locator(accountDetailsPageLocators.firstName);
    this.lastNameInput = page.locator(accountDetailsPageLocators.lastName);
    this.position = page.locator(accountDetailsPageLocators.position);
    this.phoneNumber = page.locator(accountDetailsPageLocators.phoneNumber);
    this.companyInput = page.locator(accountDetailsPageLocators.company);
    this.globalParentFullName = page.locator(accountDetailsPageLocators.globalParentFullName);
    this.dunsNumber = page.locator(accountDetailsPageLocators.dunsNumber);
    this.department = page.locator(accountDetailsPageLocators.department);
    this.addressInput = page.locator(accountDetailsPageLocators.address);
    this.address2 = page.locator(accountDetailsPageLocators.address2);
    this.zipcodeInput = page.locator(accountDetailsPageLocators.zipcode);
    this.cityInput = page.locator(accountDetailsPageLocators.city);
    this.stateInput = page.locator(accountDetailsPageLocators.state);
    this.stateDropdown = page.locator(accountDetailsPageLocators.stateDropdown.ul).locator(accountDetailsPageLocators.stateDropdown.li);
    this.checkbox = page.locator(accountDetailsPageLocators.checkbox.type).nth(accountDetailsPageLocators.checkbox.nth);
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
    if(await this.stateInput.isEnabled()){
      await this.stateInput.click();
      await this.stateDropdown.getByText(state).click();
    }
    
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
