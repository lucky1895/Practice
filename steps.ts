import { Given, When, Then } from "cucumber";
import { browser } from "protractor";
import { LoginPage } from '../PageObjects/LogInPage';
import { FreemiumACHomePage } from '../PageObjects/FreemiumHomepage';
import { IDPPage } from "../PageObjects/IDPPage";
import chai from "chai";



let frmHomePage = new FreemiumACHomePage();
let idpPage = new IDPPage();
let logInPage = new LoginPage();

var expect = chai.expect;

Given('I will navigate to AnswerConnect app', async () => {

    await browser.get("https://answerconnect.stg.cch.com");

});

When('You click on Login button',  async () => {

   
   await frmHomePage.navigateToIDPPage();

});

Then('You are redirected to IDP page',  async () => {

  
    await browser.waitForAngularEnabled(false);

    await idpPage.validateIDPPage().then(function (text) {

expect(text, 'Assertion Failed value does not match lucky').to.equal(idpPage.idpPageIdentifierValue);

 })
 
});

Then('You enter {string} on emailid field and click on Continue button', async (string) => {

      await idpPage.navigatoLoginPage(string);

});

Then('You are redirected to Login page',  async () => {

  await logInPage.validateLogInPage().then(function (text) {
     
    expect(text, 'Assertion Failed value does not match').to.equal(logInPage.logInPageIdentifierValue);

   })
 
});

Then('You enter {string} on password field and click on Log in button', async (string) => {

    await logInPage.navigateToHomePage(string);
  
});

Then('You are redirected to Home page', async () => {

    console.log("Home page is displayed");

});

