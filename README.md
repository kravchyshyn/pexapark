# Pexapark
This is a test app for Pexapark. App allows you to get information about efficency of certain wind farm for specific date range.
If you want to see the landing page, you need to login to the system. Now I implemented only log in functionality (there are no posibility to register new account).
Also a lot of features was implemented: 
  - Table and visual view of a results
  - If you click on each row in table or in ghaphic column it will open for you dialog window with hourly wind farm efficiency for this date (presented as a visual view)
  - If you choose a red row and click on it, dialog window with warning (about count of values used to calculate efficency of WF) and hourly wind farm efficiency for this date will presented
  - Added page guard, if you are not logged in you can't see dashboard and it will automaticaly redirects you for log in page
  - Implemented a service which randomly generates data for each wind farm (can discuss the way it implemented if needed)

Project is deployed on Heroku: https://pexapark-test.herokuapp.com/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
