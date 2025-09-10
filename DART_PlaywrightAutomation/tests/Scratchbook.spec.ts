import {test,Page,expect,Locator} from '@playwright/test'

test('Scratchbook',async({page})=>{


    await page.goto('https://sglobalsubscriptionservices.aaps.deloitte.com/subscribe/dart');

    await page.locator('#onetrust-close-btn-container').click();


})