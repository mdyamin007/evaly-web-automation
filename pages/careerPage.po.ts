import { by, element, ElementArrayFinder, ElementFinder } from "protractor";
import { BasePage } from "./basePage.po";


export class careerPage extends BasePage {
    div1: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div/div"));
    div2: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[2]/div"));
    div3: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[3]/div"));
    div4: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[4]/div"));
    div5: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[5]/div"));
    div6: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[6]/div"));
    div7: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[7]/div"));
    div8: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[8]/div"));
    div9: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[9]/div"));
    div10: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[10]/div"));
    div11: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div/div[11]/div"));
    emails: ElementArrayFinder = element.all(by.css(".text-blue-500"));
}