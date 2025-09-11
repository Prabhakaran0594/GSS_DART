import {test,Page,expect} from "@playwright/test";
import { DART_TermsOfUse } from "../pages/termsOfUsesPage";
import { DART_AccountDetails } from "../pages/accountDetailsPage";
import { AccountDetailsAccordion } from "../pages/paymentdetails/accountDetailsAccordion";
import { BillingInformationAccordion } from "../pages/paymentdetails/billingInformation";
import { PaymentForProductAccordion } from "../pages/paymentdetails/paymentForProduct";
import dotenv from "dotenv";
import { DARTHomePage } from "../pages/DARTHomePage";
dotenv.config();

let dartHomePage:DARTHomePage;
let accountDetailsAccordion:AccountDetailsAccordion;
let billingInformationAccordion:BillingInformationAccordion;
let paymentForProductAccordion:PaymentForProductAccordion;
let accountDetails:DART_AccountDetails;
let termsOfUse:DART_TermsOfUse;
test.beforeEach(async({page})=>{

    await page.goto(process.env.DART_URL!);
    dartHomePage = new DARTHomePage(page);
    accountDetailsAccordion = new AccountDetailsAccordion(page);
    billingInformationAccordion = new BillingInformationAccordion(page);
    paymentForProductAccordion = new PaymentForProductAccordion(page);
    accountDetails = new DART_AccountDetails(page);
    termsOfUse = new DART_TermsOfUse(page);
});

test.only('dart subscription flow', async({page})=>{

     await page.waitForTimeout(5000);
     await dartHomePage.clickCookiesCloseBtn();
     await dartHomePage.clickOKOnDisclaimer();
     
     await page.getByPlaceholder('Enter Email').fill('test123456@example.com');
     await dartHomePage.clickContinueButton();
     await page.waitForTimeout(20000);
     await dartHomePage.clickContinueButton();

     await termsOfUse.termsOfUse();
     await accountDetails.accountDetails('United States','test','test','testCompany','1st address','74512','city','Alabama');
     await billingInformationAccordion.clickContinueButton();
     await paymentForProductAccordion.isAccordionExpanded();
     await page.waitForTimeout(5000);
     await paymentForProductAccordion.fillAllCreditCardNumberForUSPackage(process.env.CreditCardNumber!,process.env.NameOnCard!,process.env.ExpirationMonth!,process.env.ExpirationYear!,process.env.CVC!);
     await page.waitForTimeout(5000);

});