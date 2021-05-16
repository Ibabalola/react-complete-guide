import React from 'react';

// React createContext allows us to initialise our context with a default value
// The context is a globally available object
// Its availablity can defined
// It can also have an array, string a number as a value

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;