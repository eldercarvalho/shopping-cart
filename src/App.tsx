import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import AppProvider from './hooks';

import { GlobalStyle } from './style/global';
import { theme } from './utils/theme';

import { store } from './store';

import Routes from './routes';

import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Navbar />
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    </AppProvider>
  );
};

export default App;
