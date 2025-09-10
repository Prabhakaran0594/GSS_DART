import { Locator, Page } from "@playwright/test";
import BaseClass from "../baseClass";

export  class PaymentForProductAccordion extends BaseClass {

   
    private readonly accordion3: Locator;
    private readonly expandButton: Locator;
     
    private readonly creditCardOption: Locator;
    private readonly invoiceOption: Locator;

    private readonly creditCardTypeHeader: Locator;
    private readonly creditCardNumber: Locator;
    private readonly nameOnCard: Locator;
    private readonly expirationMonth: Locator;
    private readonly expirationYear: Locator;
    private readonly cvc: Locator;
    private readonly creditCardCountry: Locator;

    //invoice
    private readonly invoiceContact: Locator;
    private readonly invoiceContactEmail: Locator;

    constructor(page: Page) {
        super(page);
       
        this.accordion3 = page.locator('#3-header');
        this.expandButton = page.locator(".MuiAccordionSummary-expandIconWrapper.css-1fx8m19").nth(2);
        this.creditCardOption = page.getByLabel("Credit Card");
        this.invoiceOption = page.getByLabel("Invoice (bill me later)");

        this.creditCardTypeHeader = page.locator("#form-label-creditCardType");
        this.creditCardNumber = page.locator("input[name=field_creditCardNumber]");
        this.nameOnCard = page.locator("input[name=field_creditCardHolderName]");
        this.expirationMonth = page.locator("#input-creditCardExpirationMonth");
        this.expirationYear = page.locator("#input-creditCardExpirationYear");
        this.cvc = page.locator("#input-cardSecurityCode");
        this.creditCardCountry = page.locator("input-creditCardCountry");

        this.invoiceContact = page.locator("input[name=contact]");
        this.invoiceContactEmail = page.locator("input[name=email]");
    }

    async expandAccordion() {
        if(await this.accordion3.getAttribute('aria-disabled')==='false')
        await this.expandButton.click();
        await this.isAccordionExpanded();
    }

    async isAccordionExpanded(): Promise<boolean> {
        return await this.accordion3.getAttribute('aria-expanded') === 'true';
    }

    async selectCreditCardOption() {
        await this.creditCardOption.click();
        await this.creditCardOption.isChecked();
    }
    async selectInvoiceOption() {
        await this.invoiceOption.click();
        await this.invoiceOption.isChecked();
    }

    async fillAllCreditCardNumberForUSPackage(cardNumber: string, nameOnCard: string, expirationMonth: string, expirationYear: string, cvc: string) {
        await this.creditCardOption.isChecked();
        await this.creditCardTypeHeader.waitFor({ state: 'visible' });
        await this.creditCardNumber.fill(cardNumber);
        await this.nameOnCard.fill(nameOnCard);
        await this.expirationMonth.selectOption(expirationMonth);
        await this.expirationYear.selectOption(expirationYear);
        await this.cvc.fill(cvc);
        await this.clickSubmitButton();
    }

    async fillAllInvoiceDetails(contact: string, email: string) {
        await this.invoiceOption.isChecked();
        await this.invoiceContact.fill(contact);
        await this.invoiceContactEmail.fill(email);
        await this.clickSubmitButton();
    }
}