This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

#Visual Math in React
The aim of the app is to provide visual cues, patterns and good understanding of <br>
fundemental mathematical concepts for middleschooler and younger students.

It's contrasted with applications that either complete solve the problems and <br>
those that provide no assistance.

I can be used without help, but it's mostly designed as a tool to help tutors,<br>
with examples and explaination. <br>

Functions will generate whatever generic term is put in and provide different values and<br>
signs. Some premade expressions will be provided and they can be used to compose more
complex expression.

Down the line I will add modal components that can take any term and provide <br>
a place to do manual solving with helper functionality.

## Components

- Expression: takes number object, provides container and number component to display it.
- Expression creator: Has menu to create expression object and Row component to display it.
- Containers: contain buttons, works like a parentheses does for numbers
- Fraction: holds top and bottom container component
- Buttons: displays values.
- Operator: displays operators.

## State/Store

- Create: holds array of objects that can be used to make expressions
- Expression UI: holds the state of each expressions UI etc.
- Expression Collection: Object of all the expressions in the state.
- History: Last 10 changes to each expression, and 10 longer term changes

## Dirs.

### public/

- index and manifest files

### src/

- actions: holds action type and action creator files.
- assets/JS: holds utility, state and number object modules.
- assets/SCSS: holds CSS/SCSS files.
- components: holds all the components.
- reducers: holds the reducers

##Reducers

- createReducer: Controls how blocks are created and composed to form expression.
- expressionReducer: Controls how expression control flows, actions that can be made on number object.
- editReducer: controls how edits are made to existing expressions, available if expression actions are not automated,<br>
  and have to be done manually through modal components.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
