import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" />
        <Route path="/search" />
      </Switch>
    </Router>
  );
}

export default App;
