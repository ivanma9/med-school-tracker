import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';

import NavBar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Information from "./components/Information";


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
            <About />
          </Route>
          <Route path="/dashboard">
            <Information />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
