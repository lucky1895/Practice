import { ElementFinder,element,by } from "protractor";
import { Driver } from "../Utilities/WebDriver";


export class LoginPage extends Driver{

    passwordField:ElementFinder = element(by.id("password"));
    logInButton:ElementFinder  =element(by.xpath("//span[contains(text(),'Log in')]"));;
    accountButton:ElementFinder =element(by.xpath("//span[contains(text(),'Account')]"));;
    userInfo:ElementFinder = element(by.xpath(".//div[@class='user-profile-info']/span[1]"));
    
    logInPageIdentifier:ElementFinder= element(by.className('wk-login-screen'));
    logInPageIdentifierValue:string= "wk-login-screen";

    driver: Driver;

   public constructor() {
    super();
    this.driver = new Driver();

   }


  public async navigateToHomePage(password: string) {
 
  await  this.driver.sendInputOP(this.passwordField, password);
  await  this.driver.clickElementOP(this.logInButton);

   }

   public async validateLogInPage():  Promise<string> {

    return this.getAttributeOP(this.logInPageIdentifier);

  }


} 