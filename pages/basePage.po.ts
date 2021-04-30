import { browser, element, by, ElementFinder } from 'protractor';

/**
 * Class representing generic page.
 * Methods/properties for global elements should go here. 
 * 
 * @export
 * @class BasePage
 */
export class BasePage {
  constructor() { }

  public searchBar: ElementFinder = element(by.xpath("//input[@value='']"));
  public searchButton: ElementFinder = element(by.xpath("//div[@id='__next']/div/div[2]/div/div/div/div/div/figure"));


  async navigateTo(url: string) {
    browser.get(url);
  }

  loginButton() {
    return element(by.xpath('/html/body/div[1]/div/div[2]/div[1]/div/div[2]/div/button'));
  }

  myCartButton() {
    return element(by.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div[2]/div/div[1]/button"));
  }

  itemDeleteButton() {
    return element(by.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div[2]/div/div[1]/div/div/div/ul/li/div/button"));
  }

  cartCloseButton() {
    return element(by.xpath("/html/body/div[1]/div/div[2]/div[1]/div/div[2]/div/div[1]/div/div/div/div[1]/button"));
  }
}
