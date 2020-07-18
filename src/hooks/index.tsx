import React from 'react';
import { GlobalProvider } from './global';
import { ProductsProvider } from './product';

const AppProvider: React.FC = ({ children }) => {
  return (
    <GlobalProvider>
      <ProductsProvider>{children}</ProductsProvider>
    </GlobalProvider>
  );
};

export default AppProvider;
