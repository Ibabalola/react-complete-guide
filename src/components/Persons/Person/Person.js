import React, { Component } from 'react';
import Auxiliary from '../../../hoc/Auxiliary';
import withClassOther from '../../../hoc/withClassOther';

import styles from './Person.module.css'; 
/**
 * Class components
 * ES6 function syntax which provides some advantages when using the this keyword
 * @return {*}
 */
class Person extends Component {
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
        console.log('[Person.js] auxiliary component rendering...');
        return (
            <Auxiliary>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
            </Auxiliary>
        );
    }
}

export default withClassOther(Person, styles.Person);