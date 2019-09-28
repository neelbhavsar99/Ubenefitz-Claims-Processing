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
    </div>
  );
}

export default App;





