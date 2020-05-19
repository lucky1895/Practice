Feature: I am going to check login functionalities

# Scenario: I will navigate to Codesetion link from AC app

# Given I will navigate to AnswerConnect app
# When You click on "CodeSection" button
# Then CodeSection page should be displayed


Scenario Outline:  I will login to AnswerConnect app.

Given I will navigate to AnswerConnect app
When You click on Login button
Then You are redirected to IDP page 
Then You enter "<email id>" on emailid field and click on Continue button
Then You are redirected to Login page
Then You enter "<password>" on password field and click on Log in button
Then You are redirected to Home page

  Examples:
   | email id | password | 
   | ac5.all181@cch.com  | password1  | 
  # | ac5pt2.all181@cch.com  | password  | 
