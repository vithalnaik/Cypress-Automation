# Cypress-Automation 


# Framework folder structure

## Integration folder 
- Will have all the Test

## Pages
-Basically design for page objet model view
-Will need to created seperate package based on the Page name
-Will have 3 different files

### PageObjects 
-Will have all the page elements store as object so that we can use or call them wherever require

### PageTask
-Will have all the task that we perform on that particular page

## PageVerification
-Will have all the verification function that need to be perform on that page

## Fixture
-will have all test files that will have the require data to run the test

## How to run test
1. Using TestRunner
-run this command to oopen TestRunner node_modules\.bin\cypress open

2. Using Command to run inside Command Line
-node_modules\.bin\cypress run

-To run specific test node_modules\.bin\cypress run --spec "cypress\integration\productDetailsTest\*.js"
