import React, { useEffect, useRef } from 'react';
import styles from './Cockpit.module.css';

/**
 * React Hooks: A function provided by React that allows you to hook into react features
 * from your function components 
 * 
 * - React Hooks can be used in functional componets in newer versions of React.
 * - Lifecycle hooks are used in class components
 * - UseEffect: (A React Hook) combines the uses case and functionality of all 
 *   lifecycle hooks in one react hook.
 * 
 */

/**
 * A "dumb" presentational component is functional component that does not manage state, even
 * though you could with React Hook useState() is good practice to restrict this to a few
 * component.
 * @param {*} props 
 */
export default React.memo(props => {
    // React.createRef() is only available within class based stateful components
    // So in functional stateless components we use a react hook for the same functionality
    const toggleBtnRef = useRef(null);

    // Use effect runs for every update
    // We can use it for all the things we did in componentDidMount and componentDidUpdate
    // Runs for every render cycle, including the first one
    // Combines componentDidMount and componentDidUpdate
    useEffect(() => {
        // At this point the render method has been called so we now have a ref to button
        toggleBtnRef.current.click();

        console.log('[Cockpit.js] useEffect');
        // Http request...
        setTimeout(() => {
            console.log('[Cockpit.js] simulation of a complete API call');
        }, 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []); // the state / props changes to which this useEffect should fire on

    // pass an empty array to tell react to run the useEffect once, e.g. componentDidMount
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    // will join all the strings to create one string
    // let classes = ['red', 'bold'].join(' '); 

    let classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.length <= 2) {
        classes.push(styles.red);
    }

    if (props.length <= 1) {
        classes.push(styles.bold);
    }
    
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                ref={toggleBtnRef}
                className={btnClass} 
                onClick={props.toggle}>Toggle Persons
            </button>
        </div>
    );
});