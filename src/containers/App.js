import React, {Component} from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

/**
 * class-based components
 * also referred to as "containers", "smart" or "stateful" components
 */
class App extends Component {

    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    // state is managed from within a Component, a more morden way to set initial state
    state = {
        persons: [
            { id: "a1", name: 'Isaac', age: 32, hobbies: 'My Hobbies: Football, Gym, Reading'},
            { id: "a2", name: 'Theresa', age: 30 },
            { id: "a3", name: 'Jacob', age: 1 }
        ],
        showPersons: false,
        showCockpit: true
    };

    /**
     * getDerivedStateFromProps is invoked right before calling the render method, both on the initial 
     * mount and on subsequent updates. It should return an object to update the state, 
     * or null to update nothing.
     * 
     * DO: Sync State to Props
     * DON'T: Cause Side-Effects e.g. HTTP Requests, Updates to Local Storage 
     * @param {*} props 
     * @param {*} state 
     */
    static getDerivedStateFromProps(props, state)
    {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    /**
     * Legacy lifecycle hook, called before componentWouldMount, used for perparing the state
     */
    //componentWillMount() {
    //    console.log('[App.js] componentWillMount');
    //}

    /**
     * is invoked immediately after a component is mounted (inserted into the tree). 
     * Initialization that requires DOM nodes should go here
     */
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    /**
     * shouldComponentUpdate has to return something, if the return 
     * statement is falsey then the update will not occur and the component
     * will not render, returns true by default
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
    }

    // need to have a render method for React to be able to render
    // HTML to the screen / DOM
    // The render method creates the re-rendered Virtual DOM
    // Access to real DOM is slow so React onluy does so if the Virtue DOM has been updated
    render() {
        console.log('[App.js] render');
        // because React is JS we can pull out the Persons JSX to check the state before we render the element
        let persons = null;

        // recommended method to render conditional elements
        if (this.state.showPersons) {
            persons = ( 
                <Persons 
                    persons={this.state.persons} 
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangeHandler}
                />
            );
        }

        // this is JSX - syntactical sugar invented by the react team it will transpile to valid JS
        // React components can only returns just one root JSX element, which can contain other JSX components
        return (
            // we used className because class is a reserved word
            // typically the render method returns just one root element
            <div className={styles.App}>
                <button onClick={() => {
                    this.setState({ showCockpit: false });
                    }}>Remove Cockpit
                </button>
                {this.state.showCockpit ? 
                <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPersons}
                    length={this.state.persons.length} 
                    toggle={this.togglePersonsHandler}/> : null}
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
