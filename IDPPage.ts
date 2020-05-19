
import { ElementFinder, element, by, browser } from "protractor";
import { Driver } from "../Utilities/WebDriver";
//import {Observable} from 'rxjs';

export class IDPPage  {

    
    userIdField: ElementFinder = element(by.xpath("//input[@id='userId']"));
    continueButton: ElementFinder = element(by.xpath("//button[contains(text(),'Continue')]"));

    idpPageIdentifier: ElementFinder = element(by.xpath("//div[@class='wk-login-screen authorization-page']"));
    idpPageIdentifierValue: String = "wk-login-screen authorization-pa";

    driver: Driver;

   
  public constructor() {

    this.driver = new Driver();

  }

    public async navigatoLoginPage(userID: string) {

        await this.driver.sendInputOP(this.userIdField, userID);
        await this.driver.clickElementOP(this.continueButton);

    }

     public async validateIDPPage(): Promise<string> {
        

        return await this.driver.getAttributeOP(this.idpPageIdentifier);
     
     }
    }


