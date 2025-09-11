import { Locator, Page } from "@playwright/test";

export class AccountDetailsAccordion {

  readonly page: Page;
  private readonly accordion1:Locator;
  private readonly accordionHeader: Locator;
  private readonly expandButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.accordion1 = page.locator('[id="1-header"]');
    this.accordionHeader = page.locator("text=Account Details");
    this.expandButton = page.locator(".MuiAccordionSummary-expandIconWrapper.css-1fx8m19").nth(0);
  }

  async expandAccordion() {
    await this.accordionHeader.waitFor({ state: 'visible' });
    await this.expandButton.click();
    await this.isAccordionExpanded();
  }
  async isAccordionExpanded(): Promise<boolean> {
    return await this.accordion1.getAttribute('aria-expanded') === 'true';
  }
}