import { by, element, ElementFinder } from "protractor";
import { BasePage } from "./basePage.po";

export class motorbikePage extends BasePage {
    range1_bar: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div[1]/div/form/input[1]"));
    range2_bar: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div[1]/div/form/input[2]"));
    rangeSearchButton: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div/div/div/div/form/button"));
    categoriesCheckbox: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div[2]/div[1]/ul/li[1]/label/input"));
    brandsCheckbox: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div[2]/div[2]/ul/li[3]/label/input"));
    colorsCheckbox: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div[2]/div[4]/ul/li/label/input"));
    colorLabel: ElementFinder = element(by.xpath("/html/body/div[1]/div/div[3]/div/div[1]/div/div[2]/div[4]/ul/li/label/span[1]"));
    finalProduct: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[3]/div/div[2]/div[2]/div/a/div/div[2]/p"));
}