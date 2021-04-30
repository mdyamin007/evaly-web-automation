import { by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { BasePage } from "./basePage.po";

export class tvsMotorBikePage extends BasePage {
    brandName: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div/div[2]/div[3]/div/span[2]/a[1]"));
    quantityButton: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div/div[2]/div[5]/div/div[1]/button"));
    selectFour: ElementFinder = element(by.xpath("//div[@id='custom-popover']/div/div/ul/div[4]/li/div/p"));
    colorButton: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div/div[2]/div[5]/div/div[2]/button"));
    colorList: ElementArrayFinder = element(by.xpath("/html/body/div[3]/div/div/ul")).all(by.tagName('li'));
    checkAvailableShopButton: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div/div[2]/div[6]/button"));
    noAvailableShopText: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[3]/div[2]/div/div/p"));
}