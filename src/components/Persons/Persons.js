import React, { PureComponent } from 'react';
import Person from './Person/Person';

/**
 * PureComponent is component that runs a shallow props and state check to 
 * decided whether it should update or not, should not be used for components
 * that have complex data structures within the props or state as changes within
 * the object may not be detected, consider using immutable data structures for props 
 * and states so that changes can be easily detected.
 */
export default class Persons extends PureComponent {
    constructor (props) {
        super(props);

        this.state = {};
    }

     static getDerivedStateFromProps(props, state) {
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    } 

    /**
     * Props received for this update, looks to be a (legacy) hook
     * @param {*} props 
     */
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    /**
     * Used to decide whether we should rerender this component can be 
     * useful for performance optimisations. Used in Class based components.
     * @param {*} nextProps 
     * @param {*} nextState 
     */
    // shouldComponentUpdate(nextProps, nextState) {
    //     const update = nextProps.persons !== this.props.persons;
    //     console.log(`[Persons.js] shouldComponentUpdate ${update}`);

    //     return update;
    // }

    /**
     * Run just before component did update, shouldn't really be used (legacy)
     * @param {*} props 
     */
    // componentWillUpdate (props) {
    // }

    /**
     * 
     * @param {*} prevProps 
     * @param {*} prevState 
     * @returns {*} Data package - to save some state to use before the update
     * e.g. scroll poisition 
     */    
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    /**
     * Information taken from getSnapshotBeforeUpdate can be taken from
     * snapshoot to render the information given e.g. scroll position 
     * 
     * Called after the update finished, when you need to fetch new data from server
     * @param {*} prevProps 
     * @param {*} prevState 
     * @param {*} snapshot 
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate', snapshot);
        console.log(snapshot);
    }

    /**
     * Used for clean up work, called when the component will be removed from the DOM
     * Clear timers, remove event listeners
     */
    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount');
    }

    render () {
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click={() => this.props.clicked(index)}
                    name={person.name}
                    age={person.age}
                    key={person.id}
                    changed={event => this.props.changed(event, person.id)}
                />
            );
        });
    }
}