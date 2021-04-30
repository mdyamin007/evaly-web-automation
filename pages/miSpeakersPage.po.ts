import { by, element, ElementFinder } from "protractor";
import { BasePage } from "./basePage.po";

export class miSpeakersPage extends BasePage {
    maxPricedSpeaker: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[3]/a[2]/div/div[2]/p"));
}