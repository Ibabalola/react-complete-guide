import React, { Component } from 'react';
import Person from './Person/Person';

export default class Persons extends Component {
     static getDerivedStateFromProps(props, state) {
        console.log('[Person.js] getDerivedStateFromProps');
        return state;
    } 

    /**
     * Props received for this update, looks to be a legacy hook
     * @param {*} props 
     */
    // componentWillReceiveProps(props) {
    //     console.log('[Persons.js] componentWillReceiveProps', props);
    // }

    shouldComponentUpdate(props, nextState) {
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    /**
     * Run Just before component did update, shouldn't really be used legacy
     * @param {*} props 
     */
    // componentWillUpdate (props) {

    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Persons.js] componentDidUpdate', Snapshot);
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
                    changed={(event) => this.props.changed(event, person.id)}
                />
            );
        });
    }
}