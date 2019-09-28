import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import LandingPage from './LandingPage'
import Benefits from './Benefits'

import '../App.css';




function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={ROUTES.HOME} component={LandingPage} />
          <Route path={ROUTES.BENEFITZ} component={Benefits} />
          <Route path={ROUTES.HOME} component={LandingPage} />
        </Switch>
      </Router>
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
