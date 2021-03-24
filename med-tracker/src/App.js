import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/Home';


export default function App() {
  return (
    <Router>
      <div>
        <NavBar/>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/dashboard">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
