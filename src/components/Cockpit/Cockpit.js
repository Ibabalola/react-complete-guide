import React from 'react';
import styles from './Cockpit.module.css';

/**
 * A "dumb" presentational component is functional component that does not manage state, even
 * though you could with React Hook useState() is good practice to restrict this to a few
 * component.
 * @param {*} props 
 */
const cockpit = (props) => {
    //let classes = ['red', 'bold'].join(' '); // will join all the strings to create one string

    let classes = [];
    let btnClass = '';

    if (props.showPersons) {
        btnClass = styles.Red;
    }

    if (props.persons.length <= 2) {
        classes.push(styles.red);
    }

    if (props.persons.length <= 1) {
        classes.push(styles.bold);
    }
    
    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass} 
                onClick={props.toggle}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;