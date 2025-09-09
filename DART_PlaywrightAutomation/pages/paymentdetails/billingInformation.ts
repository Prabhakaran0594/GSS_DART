import { Locator, Page } from "@playwright/test";
import BaseClass from "../baseClass";

export class BillingInformationAccordion extends BaseClass {
  private readonly billingInformationHeader: Locator;
  private readonly expandButton: Locator;
  private readonly accordion2: Locator;

  private readonly billingContactEmail: Locator;
  private readonly billingContactCompany: Locator;
  private readonly billingContactCountry: Locator;
  private readonly billingContactFirstName: Locator;
  private readonly billingContactLastName: Locator;
  private readonly billingContactPhoneNumber: Locator;
  private readonly billingContactDepartment: Locator;
  private readonly billingContactAddress: Locator;
  private readonly billingContactAddress2: Locator;
  private readonly billingContactCity: Locator;
  private readonly billingContactState: Locator;
  private readonly billingContactZipcode: Locator;

  private readonly clearButton: Locator;

  constructor(page: Page) {
    super(page);
    this.billingInformationHeader = page.locator("text=Billing Information");
    this.expandButton = page
      .locator(".MuiAccordionSummary-expandIconWrapper.css-1fx8m19")
      .nth(1);
    this.accordion2 = page.locator("#2-header");
    this.billingContactEmail = page.locator("input[name=email]");
    this.billingContactCountry = page.locator("input#select-country");
    this.billingContactFirstName = page.locator("input[name=firstName]");
    this.billingContactLastName = page.locator("input[name=lastName]");
    this.billingContactPhoneNumber = page.locator("input[name=phone]");
    this.billingContactCompany = page.locator("input[name=companyFullName]");
    this.billingContactDepartment = page.locator("input[name=department]");
    this.billingContactAddress = page.locator("input[name=address]");
    this.billingContactAddress2 = page.locator("input[name=address2]");
    this.billingContactCity = page.locator("input[name=city]");
    this.billingContactState = page.locator("input[name=state]");
    this.billingContactZipcode = page.locator("input[name=zipCode]");
    this.clearButton = page.getByRole("button", { name: "Clear" });
  }

  async expandAccordion() {
    await this.billingInformationHeader.waitFor({ state: "visible" });
    await this.expandButton.click();
    await this.isAccordionExpanded();
  }

  async isAccordionExpanded(): Promise<boolean> {
    return (await this.accordion2.getAttribute("aria-expanded")) === "true";
  }

  async fillBillingContactEmail(email: string) {
    await this.billingContactEmail.fill(email);
  }
  async fillBillingContactCountry(country: string) {
    await this.billingContactCountry.fill(country);
    await this.page.keyboard.press("Enter");
  }
  async fillBillingContactFirstName(firstName: string) {
    await this.billingContactFirstName.fill(firstName);
  }
  async fillBillingContactLastName(lastName: string) {
    await this.billingContactLastName.fill(lastName);
  }
  async fillBillingContactPhoneNumber(phoneNumber: string) {
    await this.billingContactPhoneNumber.fill(phoneNumber);
  }
  async fillBillingContactCompany(company: string) {
    await this.billingContactCompany.fill(company);
  }
  async fillBillingContactDepartment(department: string) {
    await this.billingContactDepartment.fill(department);
  }
  async fillBillingContactAddress(address: string) {
    await this.billingContactAddress.fill(address);
  }
  async fillBillingContactAddress2(address2: string) {
    await this.billingContactAddress2.fill(address2);
  }
  async fillBillingContactCity(city: string) {
    await this.billingContactCity.fill(city);
  }
  async selectBillingContactState(state: string) {
    await this.billingContactState.selectOption(state);
  }
  async fillBillingContactZipcode(zipcode: string) {
    await this.billingContactZipcode.fill(zipcode);
  } 
  async clickClearButton() {
    await this.clearButton.click();
  }
  async clickContinueButton() {
    await this.clickContinueButton();
  }
}
