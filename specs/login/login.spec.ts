import { browser, by, ElementArrayFinder, ExpectedConditions } from "protractor";
import { homePage } from "../../pages/homePage.po";
import { loginPage } from "../../pages/loginPage.po";
import { speakerPage } from "../../pages/speakerPage.po";
import { writeFileSync } from "fs";

describe('Login', () => {
    let loginPg: loginPage;
    let homePg: homePage;
    let speakerPg: speakerPage;
    browser.waitForAngularEnabled(false);
    
    beforeAll(() => {
        loginPg = new loginPage();
        loginPg.navigateTo('https://evaly.com.bd/login.php');
    });
    
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
    
    it('enter email and pass', async () => {
        await browser.wait(ExpectedConditions.presenceOf(loginPg.adCloseButton()), 100000, 'Ad not found!');
        await loginPg.adCloseButton().click();
        await loginPg.login('01915395544', 'Y@min787898');
    });
    it('click speaker', async () => {
        
        homePg = new homePage();
        await browser.wait(ExpectedConditions.presenceOf(homePg.speakerButton), 100000, 'Element taking too long to appear in the DOM');
        await homePg.speakerButton.click();
    });
    it('get brands and write to file', async () => {
        
        speakerPg = new speakerPage();
        await browser.wait(ExpectedConditions.presenceOf(speakerPg.brands.get(0)), 100000, 'Element taking too long to appear in the DOM');
        let brands: ElementArrayFinder = speakerPg.brands;
        let data: Object = new Object();
        for(let i = 0;i < (await brands).length; i++) {
            data[i+1] = await brands.get(i).getText();
        }
        //console.log(data);
        writeFileSync('speakerBrands.json', JSON.stringify(data));
    });
});