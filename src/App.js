import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <Switch>
        <Route exact path="/" />
        <Route path="/search" />
        <Route path="/terms" />
      </Switch>
    </Router>
  );
}

export default App;
