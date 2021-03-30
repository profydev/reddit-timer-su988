import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>Placeholder</div>
      <Switch>
        <Route path="/" />
        <Route path="/search" />
      </Switch>
    </Router>
  );
}

export default App;
