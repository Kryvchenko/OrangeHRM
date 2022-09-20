# OrangrHRM 

## Introduction to the test case 

The framework chosen to implement this automated testing is WebdriverIO and uses JavaScript as the underlying implementation language. Page object model was chosen for this case. The below section gives a brief overview of how WDIO is used in this testing.

In each test blog I was using the triple AAA method: 
- Arrange 
- Action
- Assert

The main files that you will see across these tests are 

 - main.e2e.js 
 - page.js 
 - login.page.js 
 - admin..page.js 
 
 **main.e2e:**

The file where the "magic" happens. Straightforward structure consist of one "describe" block and 4 "it" blocks which are responsible for the different stages of the test suite, each it block used references to get functions from the appropriate pages. Also, before hook was iplemented. 

**page:**

The parental class Page represents the pass to target URL throught open() method, given a direction to all other pages. 

**login.page:**

Class LoginPage extends Page and is responsible for login to the target URL with valid credentials, few methods which are taking parametrs at the beginning like login() and open(). 

**admin.page:**

Class AdminPage extends Page and has the get functions for quick navigation through page elements. 

# Instruction

## Running test

Code snippets were implemented to make commands shorter and easier to type. Works in the same way from the IDE and the terminal.

To run the test just type: npm run test
To run the test, generate and open report type: npm run test && npm run report 

