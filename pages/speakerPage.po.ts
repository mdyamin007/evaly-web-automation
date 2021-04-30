import { browser, by, element, ElementArrayFinder } from "protractor";
import { BasePage } from "./basePage.po";

export class speakerPage extends BasePage {

    brands: ElementArrayFinder = element(by.css('.CategoryBrand__GridCategory-sc-17tjxen-0')).all(by.tagName('p'));
    brandlinks: ElementArrayFinder = element(by.css('.CategoryBrand__GridCategory-sc-17tjxen-0')).all(by.tagName('a'));

}