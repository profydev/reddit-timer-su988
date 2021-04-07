import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Search from './pages/Search';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search/:slug">
          <Search />
        </Route>
        <Route path="/terms" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
