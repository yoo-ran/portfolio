// src/context/StateContext.js
import { createContext, useState } from 'react';

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
    const [sharedState, setSharedState] = useState();

    return (
        <StateContext.Provider value={{ sharedState, setSharedState }}>
            {children}
        </StateContext.Provider>
    );
};
