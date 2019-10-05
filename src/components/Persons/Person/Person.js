import React from 'react';

import styles from './Person.module.css';

/**
 * Functional components
 * also referred to as "presentational", "dumb" or "stateless" components
 *
 * A Component is a function that returns some JSX / some HTML
 *
 * ES6 function syntax which provides some advantages when using the this keyword
 * @return {*}
 */
const person = props => {
    console.log('[Person.js] rendering...');
    return (
        <div className={styles.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )    
};

export default person;