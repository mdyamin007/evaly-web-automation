import { browser, ExpectedConditions } from "protractor";
import { homePage } from "../../pages/homePage.po";
import { motorbikePage } from "../../pages/motorbikePage.po";
import { tvsMotorBikePage } from "../../pages/tvsMotorBikePage.po";


describe("Test Case 3", () => {
    let homePg: homePage;
    let motorbikePg: motorbikePage;
    let bikeColor: string;
    let tvsMotorBikePg: tvsMotorBikePage;
    browser.waitForAngularEnabled(false);

    beforeAll(() => {
        homePg = new homePage();
    });

    it('Search Motor Bike', async () => {
        await browser.wait(ExpectedConditions.presenceOf(homePg.searchBar), 100000, 'Searchbar Not Found!');
        await homePg.searchBar.sendKeys('motor bike');
        await browser.wait(ExpectedConditions.presenceOf(homePg.searchButton), 100000, 'Search Button Not Found');
        await homePg.searchButton.click();
    });

    it('Filter Product', async () => {
        motorbikePg = new motorbikePage();
        browser.sleep(10000);
        await browser.wait(ExpectedConditions.presenceOf(motorbikePg.range1_bar), 100000, 'Price Ragne bar not found!');
        await motorbikePg.range1_bar.clear();
        await motorbikePg.range1_bar.sendKeys('90000');
        await motorbikePg.range2_bar.clear();
        await motorbikePg.range2_bar.sendKeys('200000');
        await motorbikePg.rangeSearchButton.click();
        await browser.wait(ExpectedConditions.presenceOf(motorbikePg.categoriesCheckbox), 100000, 'Categories checkbox not found');
        await motorbikePg.categoriesCheckbox.click();
        await browser.wait(ExpectedConditions.presenceOf(motorbikePg.brandsCheckbox), 100000, 'Brands checkbox not found');
        await motorbikePg.brandsCheckbox.click();
        await browser.wait(ExpectedConditions.presenceOf(motorbikePg.colorsCheckbox), 100000, 'Colors checkbox not found');
        bikeColor = await motorbikePg.colorLabel.getText();
        await motorbikePg.colorsCheckbox.click();
        await browser.wait(ExpectedConditions.presenceOf(motorbikePg.finalProduct), 100000, 'Product checkbox not found');
        await motorbikePg.finalProduct.click();
        
    });

    it('Validate Motor Bike', async() => {
        tvsMotorBikePg = new tvsMotorBikePage();
        await browser.wait(ExpectedConditions.presenceOf(tvsMotorBikePg.brandName), 100000, 'Brand Name not found!');
        await expect(tvsMotorBikePg.brandName.getText()).toBe("TVS");
        await browser.wait(ExpectedConditions.presenceOf(tvsMotorBikePg.quantityButton), 100000, 'Element Not found!');
        await tvsMotorBikePg.quantityButton.click();
        await tvsMotorBikePg.selectFour.click();
        await tvsMotorBikePg.colorButton.click();
        let blueFlag: boolean = false;
        for (let i = 0;i < (await tvsMotorBikePg.colorList).length; i++) {
            if(await tvsMotorBikePg.colorList.get(i).getText() == "Blue")
                blueFlag = true;
        }
        await tvsMotorBikePg.colorList.get(0).click();
        console.log(blueFlag ? "Blue Color found!" : "Blue Color Not found");
        await browser.wait(ExpectedConditions.presenceOf(tvsMotorBikePg.checkAvailableShopButton), 100000, 'Check Available Shop Button not found');
        await tvsMotorBikePg.checkAvailableShopButton.click();
        await expect(tvsMotorBikePg.noAvailableShopText.getText()).toBe("NO SHOP FOUND RELEATED TO THIS PRODUCT");
    });


});