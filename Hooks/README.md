
Hook	Usage
useState:- Manages local state in functional components. Returns a state variable and a function to update it.
useEffect :- Runs side effects in functional components. Used for data fetching, subscriptions, timers, and DOM manipulation.
useContext :- 	Provides a way to pass data through the component tree without passing props down manually at every level.
useReducer :-	Alternative to useState for more complex state logic. Similar to Redux’s reducer pattern.
useCallback	:-Returns a memoized version of a callback function that only changes if one of the dependencies has changed. Avoids unnecessary re-renders.
useMemo	:- Memoizes the result of a function to optimize performance, recalculating the result only if dependencies change.
useRef	:- Creates a mutable object that persists across renders. Often used for accessing DOM elements or keeping track of a value without causing a re-render.
useImperativeHandle :-	Customizes the instance value that is exposed to parent components when using ref. Often used with forwardRef.
useLayoutEffect :- 	Similar to useEffect, but runs synchronously after all DOM mutations. Useful for reading layout from the DOM and synchronizing re-renders.
useDebugValue :-	Displays a label in React DevTools for custom hooks. Helps with debugging.
useTransition :-	Allows marking a state update as non-urgent to improve UI responsiveness by deferring some updates (used in concurrent rendering).
useDeferredValue :-	Defers re-rendering of non-urgent updates, improving performance by allowing React to render higher-priority updates first.
useId	Generates a unique ID to be used for accessibility attributes or IDs in JSX elements.
useSyncExternalStore	Reads from an external store and subscribes to it, useful when integrating with libraries like Redux.
useInsertionEffect	Runs synchronously before React makes changes to the DOM, typically used for managing CSS-in-JS libraries.
 







# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
