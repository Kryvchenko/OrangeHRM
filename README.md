# OrangrHRM 

## Introduction 

This repository was created for functional test automation of the OrangeHRM open source web application.
The framework chosen to implement this automated testing is [WebdriverIO](https://webdriver.io) and uses JavaScript as the underlying implementation language. The page object model was selected for this case. The below section gives a brief overview of how WDIO is used in this testing.

In each test blog I used the triple AAA method: - Arrange - Action- Assert
The main files that you will see across these tests are: 

 - main.e2e.js 
 - page.js 
 - login.page.js 
 - admin.page.js
 - user.mng.page.js
 - search.page.js
 - delete.page.js
 - elementUtil.js
 - constants.js
 - config.js
 - urls.js

# Instruction

## Setup

- clone this repository
- Install all dependencies for this project with "npm install"
- Testing environment is set to "qa", to change it navigate to package.json, and add desired enviroment to the test script "test": "ENV=qa|prod|dev npx wdio run ./wdio.conf.js". 

## Running test

Code snippets were implemented to make commands shorter and easier to type. Works in the same way from the IDE and the terminal.

- Open terminal
- Navigate to the project directory 
- To run the test type: "npm run test"
- To run the test, generate and open report type: "npm run test && npm run report" 
