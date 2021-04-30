import { by, element, ElementFinder } from "protractor";
import { BasePage } from "./basePage.po";

export class checkoutPage extends BasePage {
    productNameTag: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[1]/div/div/div/div/div/div/div/div/div[2]/div[1]/div[1]/p[1]"));
    shopNameTag: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div/div[1]/div/div/div/div/div/a/div/div/h3"));
}