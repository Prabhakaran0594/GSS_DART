import {test,Page,expect} from '@playwright/test';
import { DARTHomePage } from '../pages/DARTHomePage';

test('create-DART-subscription',async({page}) =>{

    await page.goto('https://sglobalsubscriptionservices.aaps.deloitte.com/subscribe/dart');
    await page.pause();

    //ObjectForDARTHomePage
    const dartTHomePage=new DARTHomePage(page);

    //Initiate Subscription as Non Deloitte Account

    dartTHomePage.initiateSubscriptionAsNonDeloitteAccount('abdc@efg.com');




});