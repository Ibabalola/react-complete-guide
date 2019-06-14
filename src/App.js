import Person from './Person/Person';
import React, { Component } from 'react';
import './App.css'

/**
 * class-based components
 * also referred to as "containers", "smart" or "stateful" components
 */
class App extends Component {

  // state is managed from within a Component
  state = {
    persons: [
      {
        name: 'Isaac',
        age: 32,
        hobbies: 'My Hobbies: Football, Gym, Reading'
      },
      {
        name: 'Theresa',
        age: 30
      },
      {
        name: 'Jacob',
        age: 1
      }
    ]
  };

  // need to have a render method for React to be able to render
  // HTML to the screen / DOM
  render() {
    // this is JSX - syntactical sugar invented by the react team it will transpile to valid JS

      return (
        // we used className because class is a reserved word
        // typically the render method returns just one root element
        <div className="App">
          <h1>Hi, I'm a React  1.0</h1>
          <p>This is really working!</p>
          <button onClick={this._switchNameHandler}>Switch Name</button>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>{(this.state.persons[0].hobbies) ?
              this.state.persons[0].hobbies : ""}</Person>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>{(this.state.persons[1].hobbies) ?
              this.state.persons[1].hobbies : ""}</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>{(this.state.persons[2].hobbies) ?
              this.state.persons[2].hobbies : ""}</Person>
        </div>
      );

    // this line is an equivalent to JSX above, the above will transpile to this
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
  }

  /**
   * Typically methods that handle events will be suffixed with the word handler
   *
   * @private
   */
  _bindSwitchNameHandler()
  {
    console.log("A switch button was clicked");

    this.state.persons.forEach(person => {
      console.log("Person", person.name);
      console.log("Age", person.age);
    });
  }

  /**
   * With Arrow functions
   *
   * @private
   */
  _switchNameHandler = () =>
  {
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
          name: 'Olabode',
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
  }
}

// ES6 feature
export default App;
