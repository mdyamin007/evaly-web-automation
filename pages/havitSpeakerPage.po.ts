import { by, element, ElementFinder } from "protractor";
import { BasePage } from "./basePage.po";

export class havitSpeakerPage extends BasePage {
    maxPricedSpeaker: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[3]/a[5]/div/div[2]/p"));
}