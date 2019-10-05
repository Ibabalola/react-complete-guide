import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

/**
 * Component Lifecycle - Lifecycle Hooks
 * 
 * Only available in Class-based Components!
 * 
 * constructor(props) 
 *  - Received the props of a component
 *  - Setting an initial state
 *  - DON'T send HTTP request, save to localhost, call setTimeouts
 * 
 * getDerivedStateFromProps(props, state)
 *  - Added with React 16.3 
 *  - Invoked right before calling the render method
 *  - When props change for class based component you can sync your state to them
 *  - DON'T send HTTP request, save to localhost, call setTimeouts
 * 
 * shouldComponentUpdate(nextProps, nextState)
 *  - May cancel updating process
 *  - DO: Decide whether to continue or not 
 *  - DON'T: Cause Side Effects
 *  - Used to prevent unecessary updates
 * 
 * render()
 *  - Returns JSX (Prepate & Structure your JSX Code)
 *  - Contructs Virtual DOM and check to see if the real DOM needs to be updated
 *  - DON'T send HTTP request, save to localhost, call setTimeouts or block the rendering process
 *  - Will render Child Components and will mount only when all child components have fully rendered
 * 
 * getSnapshotBeforeUpdate(prevProps, prevState)
 *  - Used for last minute DOM operations, not so much changes but the state of DOM elements
 * 
 * componentDidMount()
 * - Important, good place to make HTTP request to get new data
 * - DON'T Update state (triggers re-render)
 * - DON'T call setState(); 'synchronously' - will trigger a rerender cycle, bad for performance
 * 
 * componentDidUpdate()
 *  - Signal that the update is now done and the render method has been executed
 *  - Can cause side effects here e.g. make http requests
 *  - Don't call setState() Synchronously here could cause unecessary re-renders
 *  
 * 
 * componentDidCatch()
 * componentWillUnmount()
 * shouldComponentUpdate()
 * 
 * 
 * 
 * 
 * 
 */