import React from 'react';

// Regular functional component
// Adds something to child components
// Useful for error handling
export default props => (
    <div className={props.styles}>
        {props.children}
    </div>
);
