import React, { createContext, useState, useCallback, useContext } from 'react';

interface GlobalContextData {
  globalLoading: boolean;
  setLoading(value: boolean): void;
}

const GlobalContext = createContext<GlobalContextData>({} as GlobalContextData);

const GlobalProvider: React.FC = ({ children }) => {
  const [globalLoading, setGlobalLoading] = useState<boolean>(false);

  const setLoading = useCallback((value: boolean) => {
    setGlobalLoading(value);
  }, []);

  return (
    <GlobalContext.Provider value={{ globalLoading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobal = (): GlobalContextData => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error('useGlobal must be used within GlobalProvider');
  }

  return context;
};

export { useGlobal, GlobalProvider };
