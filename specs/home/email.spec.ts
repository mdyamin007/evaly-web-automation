import { browser, ExpectedConditions } from "protractor";
import { careerPage } from "../../pages/careerPage.po";



describe('Final Test Case', () => {
    let careerPg: careerPage;
    browser.waitForAngularEnabled(false);

    
    it('email validation', async () => {
        await browser.get('https://evaly.com.bd/career');    
        careerPg = new careerPage();
        await browser.wait(ExpectedConditions.presenceOf(careerPg.div1), 100000, 'Div not loaded');
        await careerPg.div1.click();
        await careerPg.div2.click();
        await careerPg.div3.click();
        await careerPg.div4.click();
        await careerPg.div5.click();
        await careerPg.div6.click();
        await careerPg.div7.click();
        await careerPg.div8.click();
        await careerPg.div9.click();
        await careerPg.div10.click();
        await careerPg.div11.click();
        let flag: boolean = true;
        for(let i = 0;i < (await careerPg.emails).length; i++) {
            let email: string = await careerPg.emails.get(i).getText();
            if(email.search("@evaly.com.bd") == -1) {
                flag = false;
            }
        }
        if(flag) console.log("All Emails verified");
    });
});