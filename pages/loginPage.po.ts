import {browser, element, by, ExpectedConditions} from 'protractor';
import {BasePage} from "./basePage.po";

/**
 * Class representing generic page.
 * Methods/properties for global elements should go here.
 *
 * @export
 * @class loginPage
 */
export class loginPage extends BasePage{


    phoneTextBox() {
        return element(by.id('phone'));
    }

    passwordTextBox() {
        return element(by.id('password'));
    }

    loginSubmitButton() {
        return element(by.xpath('/html/body/div[1]/div/div[3]/div/div/div/div/form/button'));
    }

    ads() {
        return element(by.xpath('/html/body/reach-portal[1]/div'));
    }

    adCloseButton() {
        return element(by.xpath('/html/body/reach-portal[1]/div/div/div/section/div/button'));
    }

    /**
     * Opens global header's Institutional Sign In modal and
     * signs in using specified username/password.
     *
     * @param {string} phone Phone to login as
     * @param {string} password Password to login as
     */
    async login(phone: string, password: string) {
        this.phoneTextBox().sendKeys(phone);
        this.passwordTextBox().sendKeys(password);
        this.loginSubmitButton().click();
    }

}
