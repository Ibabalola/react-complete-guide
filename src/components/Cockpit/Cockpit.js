import React from 'react';
import styles from './Cockpit.module.css';

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
            <h1>Hi, I'm a React 1.0</h1>
            <p className={classes.join(' ')}>This is really working!</p>
            <button
                className={btnClass} 
                onClick={props.toggle}>Toggle Persons
            </button>
        </div>
    );
}

export default cockpit;