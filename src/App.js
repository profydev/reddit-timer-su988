import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './Header';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />
        <Switch>
          <Route path="/">Home</Route>
          <Route path="/search">Search</Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
