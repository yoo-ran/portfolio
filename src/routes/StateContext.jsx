import { createContext, useState } from 'react';

const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [sharedState, setSharedState] = useState(); // Initialize the state
  return (
    <StateContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </StateContext.Provider>
  );
};

export { StateContext, StateProvider };
