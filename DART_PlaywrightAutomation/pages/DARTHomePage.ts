import { Page, Locator, expect } from "@playwright/test";
import BaseClass from "./baseClass";


export class DARTHomePage extends BaseClass {
  
  private readonly DisclaimerOKBtn: Locator;
  private readonly EmailInput: Locator;
  private readonly cookiesCloseBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.DisclaimerOKBtn = page.getByRole("button", { name: "OK" });
    this.EmailInput = page.getByPlaceholder("Enter Email");
    this.cookiesCloseBtn = page.getByLabel("Cookie banner").getByLabel("Close");
  }

  async clickCookiesCloseBtn() {
    await this.cookiesCloseBtn.waitFor({ state: "visible" });
    await this.page.waitForTimeout(5000);
    await this.cookiesCloseBtn.click();
  }

  async clickOKOnDisclaimer() {
    await this.DisclaimerOKBtn.waitFor({ state: "visible" });
    await this.DisclaimerOKBtn.click();
  }

  async enterEmail(Email: string) {
    await this.EmailInput.click();

    await this.EmailInput.fill(Email);
  }

  async initiateSubscriptionAsNonDeloitteAccount(Email: string) {
    // await this.clickCookiesCloseBtn();
    // await this.clickOKOnDisclaimer();
    await this.page.waitForTimeout(5000);
    await this.enterEmail(Email);
    await this.clickContinueButton();
  }
}
