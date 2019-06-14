import React from 'react';

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
    return (
        <div>
            <p>I'm a {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;