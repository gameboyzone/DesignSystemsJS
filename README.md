# DesignSystemsJS
Building a JavaScript API for Design Systems: Facilitating Standardization and AI Integration

## Features
- Minimal
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

## Development
This project has been built using simple-typescript-starter. See links below:
- https://khalilstemmler.com/blogs/typescript/node-starter-project/
- https://github.com/stemmlerjs/simple-typescript-starter

## To Do:
1.  Add support for Webpack: 
    - Problem: https://stackoverflow.com/questions/65551383/typescript-node-error-err-module-not-found-cannot-find-module
    - Solution: https://codedamn.com/news/typescript/typescript-webpack-step-by-step-guide

### Scripts

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