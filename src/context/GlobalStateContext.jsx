import { createContext, useContext, useState } from 'react';

const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [totalWorth, setTotalWorth] = useState('Default Value');

    return (
    <GlobalStateContext.Provider value={{ totalWorth, setTotalWorth }}>
      {children}
    </GlobalStateContext.Provider>
    );
};

// Custom hook (optional for cleaner use)
export const useGlobalState = () => useContext(GlobalStateContext);