import React from 'react';

import Person from './Person/Person';

/**
 * ES6 Arrow function notation which omits the return statement if the return is a single line 
 * Belew parenthesis have been used over mutiple lines.
 * JSX can be returned by the arrow function.
 * @param {*} props return a list of perons that we want to transfor to a list of JSX elements
 */
const persons = (props) => {
    console.log('[Persons.js] rendering...');
    return props.persons.map((person, index) => {
        return (
            <Person
                click={() => props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => props.changed(event, person.id)}
            />
        );
    });
};

export default persons;
