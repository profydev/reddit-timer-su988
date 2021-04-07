import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Header />
      <Footer />
      <Switch>
        <Route exact path="/">
          <Hero />
        </Route>
        <Route path="/search" />
        <Route path="/terms" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
