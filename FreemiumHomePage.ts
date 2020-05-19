import { browser, ElementFinder, element, by, WebDriver } from "protractor";
import { Driver } from '../Utilities/WebDriver';
import { LoginPage } from "./LogInPage";
export class FreemiumACHomePage {

  homeLink: ElementFinder = element(by.linkText("Home"));
  codeSectionLink: ElementFinder = element(by.linkText("Code Sections"));
  logInLink: ElementFinder = element(by.linkText("Login"));
  homePageTitle: ElementFinder = element(by.xpath("//title[contains(text(),'CCH AnswerConnect | Wolters Kluwer')]"));
  driver: Driver;


  public constructor() {

    this.driver = new Driver();

  }

  public async navigateToIDPPage() {

    await this.driver.clickElementOP(this.logInLink);
    

  }

}