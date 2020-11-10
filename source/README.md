Checkout
================

## Demo
Check out the live [demo](http://checkout.ksulourgeio.gr/)

## Project setup
1. Clone the project
1. In a terminal type ```yarn``` install dependencies
1. In a terminal type ```yarn start``` to run the project
1. A new browser window will be opene to the port specified in your .env
1. In a terminal type ```yarn test``` to run your tests
1. In a terminal type ```yarn build``` to make a production ready build

## Project's Stack

- [React](https://reactjs.org/).
- [Typescript](https://www.typescriptlang.org/).
- [Redux](https://redux.js.org/)
- [Styled-Components](https://styled-components.com)
- [Jest](https://jestjs.io/)

## Project's Best Practices and Architect
#### Motivations
- Styled-Components, if it's planned smart the components exported to a package to used in different projects (reusability), using  the `ThemeProvider` with a  different theme, you can change the project's styling
- Showcase Conetxt hook for state management (insteasd of redux)

### Best Practices
1. Single responsibility
1. Small Stateless Components instead of big Classes
1. Composable Components
1. Reusable
1. Meaningful
1. Declarative FP with Pure or Almost-Pure functions
1. Try to keep the Component's methods styles in the same folder

## ESLint
Yes, we lint our files.   
Lint will ensure that so best practices are followed. Search the error messages and learn with that.   
Make sure that all your .js files are passing the lint check before open a PR.      
There is pre-commit hook that won't allow you to commit without fixing the lint alerts.

## Unit Test
Following TDD you need first to write a small story, with an empty component and the unit tests and then we develop the component.