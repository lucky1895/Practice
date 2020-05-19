import { WebElement, browser } from "protractor";

export class Driver {

  public async clickElementOP(ele: WebElement) {

    await ele.click();

  }

  public async sendInputOP(ele: WebElement, text: string) {
    
    await browser.waitForAngularEnabled(false);
    await ele.sendKeys(text);

  }
 
  public async getAttributeOP(ele: WebElement) : Promise<string> {

   return await ele.getAttribute('class');
    
  }

}
