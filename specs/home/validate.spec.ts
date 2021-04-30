import { browser, ElementFinder, ExpectedConditions } from "protractor";
import { havitSpeakerPage } from "../../pages/havitSpeakerPage.po";
import { maxPricedMiSpeakerPage } from "../../pages/maxPricedMiSpeakerPage.po";
import { speakerPage } from "../../pages/speakerPage.po";
import { miSpeakersPage } from "../../pages/miSpeakersPage.po";
import { maxPricedHavitSpeakerPage } from "../../pages/maxPricedHavitSpeakerPage.po";
import { checkoutPage } from "../../pages/checkoutPage.po";


describe('Brand Validation', () => {
    let speakerPg: speakerPage;
    let miSpeakersPg: miSpeakersPage;
    let maxPricedMiSpeakerPg: maxPricedMiSpeakerPage;
    let havitSpeakerPg: havitSpeakerPage;
    let maxPricedHavitSpeakerPg: maxPricedHavitSpeakerPage;
    let checkoutPg: checkoutPage;
    let link1: string;
    let link2: string;
    browser.waitForAngularEnabled(false);

    beforeEach(() => {
        // browser.wait(async () =>
        // await browser.driver.executeScript('return document.readyState;') === 'loading', 2000)
        // .then(() => true, () => true);
        // browser.wait(async () =>
        // await browser.driver.executeScript('return document.readyState;') === 'complete', 5000);
    });

    afterEach(() => {
        // browser.sleep(5000);
    });

    it('Click MI', async () => {
        speakerPg = new speakerPage();
        link1 = await speakerPg.brandlinks.get(1).getAttribute('href');
        link2 = await speakerPg.brandlinks.get(2).getAttribute('href');

        console.log(link1);
        await speakerPg.navigateTo(link1);
    });

    it('Click Max Price Product', async () => {
        miSpeakersPg = new miSpeakersPage();
        await browser.wait(ExpectedConditions.presenceOf(miSpeakersPg.maxPricedSpeaker), 100000, 'Element taking too long to appear in the DOM');
        await miSpeakersPg.maxPricedSpeaker.click();
    });

    it('Validate MI', async () => {
        maxPricedMiSpeakerPg = new maxPricedMiSpeakerPage();
        await browser.wait(ExpectedConditions.presenceOf(maxPricedMiSpeakerPg.brandName), 100000, 'Element taking too long to appear in the DOM');
        let speakerName: string = await maxPricedMiSpeakerPg.speakerNameTag.getText(); 
        await expect(maxPricedMiSpeakerPg.brandName.getText()).toBe('MI');
        await browser.sleep(10000);
        await maxPricedMiSpeakerPg.checkAvailableShopButton.click();
        await browser.wait(ExpectedConditions.presenceOf(maxPricedMiSpeakerPg.shopNameTag), 100000, 'Element taking too long to appear in the DOM');
        let shopName: string = await maxPricedMiSpeakerPg.shopNameTag.getText();
        await maxPricedMiSpeakerPg.buyNowButton.click();
        await browser.wait(ExpectedConditions.presenceOf(maxPricedMiSpeakerPg.proceedToCheckoutButton), 100000, 'Element taking too long to appear in the DOM');
        await maxPricedMiSpeakerPg.proceedToCheckoutButton.click();
        checkoutPg = new checkoutPage();
        await browser.wait(ExpectedConditions.presenceOf(checkoutPg.shopNameTag), 100000, 'Element taking too long to appear in the DOM');
        await expect(checkoutPg.shopNameTag.getText()).toBe(shopName);
        await expect(checkoutPg.productNameTag.getText()).toBe(speakerName);
        await checkoutPg.myCartButton().click();
        await checkoutPg.itemDeleteButton().click();
    });

    it('Goto Max Priced Havit Speaker Page', async () => {
        await browser.get(link2);
        await browser.sleep(5000);
        havitSpeakerPg = new havitSpeakerPage();
        await browser.wait(ExpectedConditions.presenceOf(havitSpeakerPg.maxPricedSpeaker), 100000, 'Element taking too long to appear in the DOM');
        await havitSpeakerPg.maxPricedSpeaker.click();
    });

    it('Validate Havit', async () => {
        maxPricedHavitSpeakerPg = new maxPricedHavitSpeakerPage();
        await browser.wait(ExpectedConditions.presenceOf(maxPricedHavitSpeakerPg.brand), 100000, 'Element taking too long to appear in the DOM');
        let speakerName: string = await maxPricedMiSpeakerPg.speakerNameTag.getText(); 
        await expect(maxPricedHavitSpeakerPg.brand.getText()).toBe('havit');
        await browser.sleep(10000);
        await maxPricedHavitSpeakerPg.checkAvailableShopButton.click();
        await browser.wait(ExpectedConditions.presenceOf(maxPricedHavitSpeakerPg.shopNameTag), 100000, 'Element taking too long to appear in the DOM');
        let shopName: string = await maxPricedHavitSpeakerPg.shopNameTag.getText();
        await maxPricedHavitSpeakerPg.buyNowButton.click();
        await browser.wait(ExpectedConditions.presenceOf(maxPricedHavitSpeakerPg.proceedToCheckoutButton), 100000, 'Element taking too long to appear in the DOM');
        await maxPricedHavitSpeakerPg.proceedToCheckoutButton.click();
        checkoutPg = new checkoutPage();
        await browser.wait(ExpectedConditions.presenceOf(checkoutPg.shopNameTag), 100000, 'Element taking too long to appear in the DOM');
        await expect(checkoutPg.shopNameTag.getText()).toBe(shopName);
        await expect(checkoutPg.productNameTag.getText()).toBe(speakerName);
        await checkoutPg.myCartButton().click();
        await browser.wait(ExpectedConditions.presenceOf(checkoutPg.itemDeleteButton()), 100000, "Item Couldn't Delete");
        await checkoutPg.itemDeleteButton().click();
        checkoutPg.navigateTo('https://evaly.com.bd');
    });
});