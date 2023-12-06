# DesignSystemsJS
A JavaScript library which offers a Design Systems API for aiding standardization and AI integration

## Features
- DesignSystemsJS aims to standardize implementation of a Design System, thereby mitigating the associated challenges
- DesignSystemsJS is a JavaScript library that provides a structured and consistent framework for implementing a Design System via a JSON-based specification derived from a well-researched [Design System checklist](https://www.DesignSystemsChecklist.com)
- Includes a HTML example under /build folder which demonstrates implementation of SampleDesignSystem via DesignSystemsJS. SampleDesignSystem is based on [Atlassian Design System](https://www.atlassian.design).

## Stack
- TypeScript v4
- Testing with Jest
- Linting with Eslint and Prettier
- Pre-commit hooks with Husky
- VS Code debugger scripts
- Local development with Nodemon

## Dependencies
- NodeJS
- TypeScript
- Jest
- ESLint
- Prettier
- copyfiles

## Upcoming feature support:
1.  Compile-time dependency: Add support for Webpack -
    - Problem: https://stackoverflow.com/questions/65551383/typescript-node-error-err-module-not-found-cannot-find-module
    - Solution: https://codedamn.com/news/typescript/typescript-webpack-step-by-step-guide
2.  Feature: Add support for Design System component library (every component has a template, props, CSS styles and event handlers) via a rendering engine. Factor in JS library supported on every component.
3.  Example: Add complete support for Radio Button and Dropdown
4.  Example: AI integration example
5.  Feature: Evaluate integration of Amazon Style Dictionary and related TypeScript types, instead of currently offered custom JSON object structure and TypeScript types.

### Starter project
This project has been built using simple-typescript-starter. See links below:
- https://khalilstemmler.com/blogs/typescript/node-starter-project/
- https://github.com/stemmlerjs/simple-typescript-starter

### Commands

#### `npm run start:dev`

Starts the application in development using `nodemon` and `ts-node` to do hot reloading.

#### `npm run start`

Starts the app in production by first building the project with `npm run build`, and then executing the compiled JavaScript at `build/index.js`.

#### `npm run build`

Builds the app at `build`, cleaning the folder first.

#### `npm run test`

Runs the `jest` tests once.

#### `npm run test:dev`

Run the `jest` tests in watch mode, waiting for file changes.

#### `npm run prettier-format`

Format your code.

#### `npm run prettier-watch`

Format your code in watch mode, waiting for file changes.

### Running DesignSystemsJS Test
1.  In VSCode, Press Cmd + Shift + P > Live Preview: Start Server
2.  Open URL in browser: http://127.0.0.1:3000/build/index.html