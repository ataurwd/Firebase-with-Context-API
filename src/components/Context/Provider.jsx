import React, { createContext } from 'react';

export const FormContext = createContext(null)

const Provider = ({children}) => {
    return (
        <FormContext.Provider value={}>
            {children}
        </FormContext.Provider>
    );
};

export default Provider;