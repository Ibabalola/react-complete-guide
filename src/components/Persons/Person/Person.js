import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Auxiliary from '../../../hoc/Auxiliary';
import withClassOther from '../../../hoc/withClassOther';
import AuthContext from '../../../context/auth-context';

import styles from './Person.module.css'; 
/**
 * Class components
 * ES6 function syntax which provides some advantages when using the this keyword
 * @return {*}
 */
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount() {
        console.log(`[Person.js] ${this.props.name} has focus`);
        //this.inputElement.focus();
        this.inputElementRef.current.focus();
        console.log(`[Person.js] authenticated ${this.context.authenticated}`);
    }

    // render() {
    //     console.log('[Person.js] component rendering...');
    //     return ([
    //         <p key="i1" onClick={this.props.click}>
    //             I'm {this.props.name} and I am {this.props.age} years old!
    //         </p>,
    //         <p key="i2">{this.props.children}</p>,
    //         <input
    //             key="i3"
    //             type="text"
    //             onChange={this.props.changed}
    //             value={this.props.name}
    //         />
    //     ])
    // }

    // render() {
    //     console.log('[Person.js] fragment component rendering...');
    //     return (
    //         <Fragment>
    //             <p onClick={this.props.click}>
    //                 I'm {this.props.name} and I am {this.props.age} years old!
    //             </p>
    //             <p>{this.props.children}</p>
    //             <input
    //                 type="text"
    //                 onChange={this.props.changed}
    //                 value={this.props.name}
    //             />
    //         </Fragment>
    //     );
    // }

    // The limitation of being able to return on JSX element is pure JS thing
    // When we return a JSX element we're calling React.createElement()
    // Benefits of this approach is that root JSX element is not rendered to the real DOM
    render() {
        console.log(`[Person.js] ${this.props.name} component rendering...`);
        return (
            <Auxiliary>
                {/* <AuthContext.Consumer>
                    {context => context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                </AuthContext.Consumer> */}
                {this.context.authenticated ? <p>Authenticated!</p> : <p>Please log in</p>}
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref = {this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxiliary>
        );
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClassOther(Person, styles.Person);