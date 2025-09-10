import {test,Page,expect} from "@playwright/test";
import { DART_TermsOfUse } from "../pages/termsOfUsesPage";
import { DART_AccountDetails } from "../pages/accountDetailsPage";
import { AccountDetailsAccordion } from "../pages/paymentdetails/accountDetailsAccordion";
import { BillingInformationAccordion } from "../pages/paymentdetails/billingInformation";
import { PaymentForProductAccordion } from "../pages/paymentdetails/paymentForProduct";
import dotenv from "dotenv";

dotenv.config();

test.beforeEach(async({page})=>{

    await page.goto(process.env.DART_URL!);
    const accountDetailsAccordion = new AccountDetailsAccordion(page);
    const billingInformationAccordion = new BillingInformationAccordion(page);
    const paymentForProductAccordion = new PaymentForProductAccordion(page);
    const accountDetails = new DART_AccountDetails(page);
    const termsOfUse = new DART_TermsOfUse(page);
});

test('dart subscription flow', async({page})=>{
 

});