import { ElementFinder,element,by } from "protractor";
import { Driver } from "../Utilities/WebDriver";
import { DH_UNABLE_TO_CHECK_GENERATOR } from "constants";

export class ACHomePage extends Driver{


homeLink:ElementFinder;
codeSectionLink:ElementFinder;
logInBtnFrm: ElementFinder; 
userIdField:ElementFinder;
continueButton:ElementFinder;
userNameField:ElementFinder;
passwordField:ElementFinder;
logInButton2:ElementFinder;
homePageTitle:ElementFinder;
accountSection:ElementFinder;
userInfo:ElementFinder;

//homePageIdentifier:ElementFinder;

driver: Driver;
constructor()
{

    super();
    this.homeLink=element(by.linkText("Home"));
    this.codeSectionLink=element(by.linkText("Code Sections"));
    this.logInBtnFrm=element(by.linkText("Login"));
    this.userIdField=element(by.id("userId"));
    this.continueButton=element(by.xpath("//button[contains(text(),'Continue')]"));
    this.userNameField=element(by.id("username"));
    this.passwordField=element(by.id("password"));
    this.logInButton2=element(by.xpath("//span[contains(text(),'Log in')]"));
    this.homePageTitle=element(by.xpath("//title[contains(text(),'CCH AnswerConnect | Wolters Kluwer')]"));
    //this.accountSection=element(by.xpath("//span[contains(text(),'Account')]"));
   // this.accountSection=element(by.cssContainingText('ng-scope','Account'));

   this.accountSection=element(by.linkText('Account'));
    this.userInfo=element(by.xpath(".//div[@class='user-profile-info']/span[1]"));

    //this.homePageIdentifier=element(by.;
    this.driver = new Driver();

}


// public async validateHomePage():  Promise<string> {

//     return this.getAttributeOP(this.idpPageIdentifier);
// }




}