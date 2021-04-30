import { BasePage } from "./basePage.po";
import {browser, element, by, ExpectedConditions, ElementFinder} from 'protractor';

export class homePage extends BasePage {
    public speakerButton: ElementFinder = element(by.linkText('Speaker'));
    adCloseButton() {
        return element(by.xpath('/html/body/reach-portal[1]/div/div/div/section/div/button'));
    }
}