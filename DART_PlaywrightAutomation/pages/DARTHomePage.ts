import {Page, Locator, expect} from '@playwright/test'

export class DARTHomePage{

    private readonly page:Page;
    private readonly DisclaimerOKBtn:Locator;
    private readonly EmailInput:Locator;
    private readonly ContinueBtn:Locator;
    private readonly cookiesCloseBtn:Locator;

    constructor(page:Page){
        this.page = page;
        // this.DisclaimerOKBtn=this.page.getByRole('dialog',{name:'DART Disclaimer'});
        // this.DisclaimerOKBtn=this.page.locator("//button[text()='OK']");
        this.DisclaimerOKBtn=this.page.getByRole('button',{name:'OK'});
        this.EmailInput=this.page.getByPlaceholder('Enter Email');
        this.ContinueBtn=this.page.getByRole('button',{name:'Continue'});
        this.cookiesCloseBtn=this.page.locator('#onetrust-close-btn-container');

    }

    async clickCookiesCloseBtn(){

        // await expect(this.cookiesCloseBtn).toBeVisible();
        await this.cookiesCloseBtn.waitFor({state:'visible'});
        await this.page.waitForTimeout(5000);
        await this.cookiesCloseBtn.hover();
     
        }
    
    async clickOKOnDisclaimer(){

        // const discpopup = this.DisclaimerOKBtn;
        await this.DisclaimerOKBtn.waitFor({state:'visible'});
        // await this.page.waitForTimeout(50000);
        await this.DisclaimerOKBtn.click();
        // const isVisibledisc:boolean=await discpopup.isVisible({timeout:50000});
        // if(isVisibledisc){  
        //     discpopup.getByRole('button',{name:'OK'}).click();
        // }
    }
    

    async enterEmail(Email:string){

        await this.EmailInput.click();

        await this.EmailInput.fill(Email);
    }

    async clickContinueBtn(){

        await this.ContinueBtn.click();
    }

    async initiateSubscriptionAsNonDeloitteAccount(Email:string){

        // await this.clickCookiesCloseBtn();
        // await this.clickOKOnDisclaimer();
        await this.page.waitForTimeout(5000);
        await this.enterEmail(Email);
        await this.clickContinueBtn();
    }


}