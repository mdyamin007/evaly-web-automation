import { by, element, ElementFinder } from "protractor";
import { BasePage } from "./basePage.po";

export class maxPricedMiSpeakerPage extends BasePage {
    
    brandName: ElementFinder = element(by.linkText('MI'));
    checkAvailableShopButton: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div/div/div/div[2]/div[6]/button"));
    buyNowButton: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[3]/div[2]/div/div/div[2]/button[2]/span[2]"));
    proceedToCheckoutButton: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[2]/div/div/div[2]/div/div/div/div/div/div[2]/button/span[2]"));
    speakerNameTag: ElementFinder = element(by.xpath('/html/body/div[1]/div/div[3]/div/div[1]/div/div/div[2]/div[2]/h2'));
    shopNameTag: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[3]/div[2]/div[1]/div/div[1]/div[2]/h4"));
    
}