# Sentryc Test Automation Project

The purpose of this project is to develop a test automation framework to automate the testing of the Sentryc web application, <https://login.sentryc.com/auth/login>

## Prerequisites 
### 1. System Requirement
* Windows 7 and above 
* MacOS 10.9 and above
* Linux Ubuntu 12.04 and above, Fedora 21 and Debian

### 2. NodeJs and NPM
### 3. An IDE (I used Visual Studio Code) 

## Installation 
 First, download and install node.js.
<https://nodejs.org/en/download/>

Create a *package.json* file using the *npm* command 
``` 
npm init -y
```

Then install cypress locally using the *npm* command again
``` 
npm install cypress --save-dev
```
Read more about cypress installation and setup via the link;
<https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements>

## Folder Structure
### *integration*
The integration folder contains the test (spec) files. The three tests are listed below.

* ForgotPassword
* Login
* TermsAndConditions


### *support*
In order to declutter the spec file, functions are created as custom commands in *support/commands.js* file which are referenced from the individual spec files. 

### *cypress.json* 
The base Url is defined in the *cypress.json* file and referenced with the ```cy.visit('/') ``` command. Also, cypress.json contains the repoter configuration. 

```yaml
{
   "baseUrl": "https://login.sentryc.com/auth/login", 
}
```

### *package.json*
The commands to execute the tests on a single browser and on multiple browsers, in headed and headless modes, are defined in scripts section of the package.json file.

```yaml
{
    "chrome:headed": "npx cypress run --headed --browser chrome",
    "chrome:headless": "npx cypress run --browser chrome",
    "firefox:headed": "npx cypress run --headed --browser firefox",
    "firefox:headless": "npx cypress run --browser firefox",
    "edge:headed": "npx cypress run --headed --browser edge",
    "edge:headless": "npx cypress run --browser edge",
    "all:browsers": "npm run chrome:headless && npm run firefox:headless && npm run edge:headless"
}
```

## Test Strategy

### Entry Criteria:
* AUT or SUT is available
* *Features to be Tested* are explicitly stated/defined
* Test data is available
* An optimal amount of test cases have been written
* Test environment is ready and the necessary set-up/configuration done

### Test Case Design:
The test cases are prepared based on exploratory testing since there was no test basis. Also the the test cases are defined in specs files contained in the integration folder.
 
### Test Case Execution:
A *Test Readiness Checklist* will checked before the execution Test scripts and the following testing type will be executed.
* Functional testing

## Steps to Run the Tests
* Click on the Terminal link
* Select *New Terminal* from the drop-down
* You will the project directory in the Terminal window
* Use the *npm run* command to run in either *headed* or *headless* mode as specified in package.json
e.g. 
    ```yaml C:\Cypress Projects\Cypress\SentrycAutomation> npm run chrome:headed
    ```

    ```yaml C:\Cypress Projects\Cypress\SentrycAutomation> npm run chrome:headless
    ```


### Exit Criteria: 
* All test cases designed for the project have been executed.
* Sufficient coverage of the features to be tested.
* Every identified bug has been fixed and closed
* No high priority or severity bug exists in the SUT/AUT
* Order from sponsor/executive management to close all pending tasks and end the project 
* Budget for the project has been depleted

### Test Reporting: 
The *mochawesome reporter* will be used as the reporting tool for the test results. The test results are stored in this directory, *cypress/reports/mocha*. Follow these links for details on how to install and configure Mocahwesome reporter. <https://www.npmjs.com/package/mochawesome>. <https://www.linkedin.com/pulse/cypress-test-automation-reporting-mochawesome-amarasiri-/>

### Source Control: 
A repository, *SentrycAutomation*, is created in GitHub. All commits will be pushed to this remote repository .

## Glossary
* *NPM:* Node Package Manager
* *AUT:* Application Under Test
* *SUT:* System Under Test