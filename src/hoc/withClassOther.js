import React from 'react';

// Uses a regular JS function, where 1st param is wrapped component
// 2nd is what is needed in the wrapped component
// This HOC has the job of adding styles / class names to wrapped component
// Returns a function body that returns a functional component
export default (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} />
        </div>
    );
};