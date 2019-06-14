import Person from './Person/Person';
import React, {Component} from 'react';

import './App.css';

/**
 * class-based components
 * also referred to as "containers", "smart" or "stateful" components
 */
class App extends Component {

    // state is managed from within a Component
    state = {
        persons: [
            {
                id:"a1",
                name: 'Isaac',
                age: 32,
                hobbies: 'My Hobbies: Football, Gym, Reading'
            },
            {
                id:"a2",
                name: 'Theresa',
                age: 30
            },
            {
                id:"a3",
                name: 'Jacob',
                age: 1
            }
        ],
        showPersons: false
    };

    // need to have a render method for React to be able to render
    // HTML to the screen / DOM
    render() {
        // use inline style in order to scope style changes to a single element
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        // because React is JS we can pull out the Persons JSX to check the state before we render the element
        let persons = null;

        // recommended method to render conditional elements
        if(this.state.showPersons) {
           persons = (
               <div>
                   {this.state.persons.map((person, index) => {
                       return <Person
                           click={() => this.deletePersonHandler(index)}
                           name={person.name}
                           age={person.age}
                           key={person.id}
                           changed={(event) => this.nameChangeHandler(event, person.id)}/>
                   })}
               </div>
           );
        }

        // this is JSX - syntactical sugar invented by the react team it will transpile to valid JS
        return (
            // we used className because class is a reserved word
            // typically the render method returns just one root element
            <div className="App">
                <h1>Hi, I'm a React 1.0</h1>
                <p>This is really working!</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Toggle Persons
                </button>
                {persons}
            </div>
        );

        // this line is an equivalent to JSX above, the above will transpile to this
        // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
    }

    /**
     * With Arrow functions, the preferred way to the create handlers
     * Because we can make use of the this keyword
     *
     * @private
     */
    switchNameHandler = newName => {
        console.log("A switch button was clicked");

        this.state.persons.forEach(person => {
            console.log("Person", person.name);
            console.log("Age", person.age);
        });

        //DON'T DO THIS:
        //this.state.persons[0].name = 'Olabode';

        // React merges changes in the object provided with the object
        // Currently stored in the state variable
        this.setState({
            persons: [
                {
                    name: newName,
                    age: 32,
                    hobbies: 'My Hobbies: Football, Gym, Reading'
                },
                {
                    name: 'Theresa',
                    age: 30
                },
                {
                    name: 'Jacob',
                    age: 1.5
                }
            ]
        })
    };

    /**
     * Two way binding
     *
     * Render -> onChange -> Handler -> changeState -> Render
     * @param event
     * @param {String} id
     */
    nameChangeHandler = (event, id) => {
        const index = this.state.persons.findIndex(person => {
            return person.id === id;
        });

        // JS object are reference types so use the ... spread operator to get shallow copy
        const person = {
            ...this.state.persons[index]
        };

        // Alternative option
        //const person = Object.assign({}, this.state.persons[index]);

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[index] = person;

        this.setState({persons: persons});
    };

    /**
     * When setting the state it is a good practice to get a shallow copy of the
     * the data you want to alter before you set the state.
     *
     * Altering pointer that point to the original object in memory could lead
     * to unpredictable behaviour
     *
     * Because JS objects are reference types always change the data held in state in an immutable fashion
     *  - Create a copy
     *  - Change the copy
     *  - Then update the state with setState
     * @param index
     */
    deletePersonHandler = (index) => {

        // The splice() method changes the contents of an array by removing or replacing
        // existing elements and/or adding new elements

        // The slice() method returns a shallow copy of a portion of an array into a new array object
        // selected from begin to end (end not included). The original array will not be modified.

        // this returns a full shallow copy of the array
        //const persons = this.state.persons.slice();

        // An alternative is to use an ES6 feature, the ... spread operator
        // It spreads out the elements in this array into a list of elements, which simply just gets
        // add to the new array, ensure we don't store a pointer the original array
        const persons = [...this.state.persons];

        // this removes one element from the array
        persons.splice(index, 1);
        this.setState({persons: persons});
    };

    /**
     * Toggles the show person's property of the state
     * which alters the path taken by the JS ternary construct
     */
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    };

    /**
     * Typically methods that handle events will be suffixed with the word handler
     *  needs this._bindSwitchNameHandler.bind(this);
     * @private
     */
    bindSwitchNameHandler() {
        console.log("A switch button was clicked");

        this.state.persons.forEach(person => {
            console.log("Person", person.name);
            console.log("Age", person.age);
        });
    }
}

// ES6 feature
export default App;
