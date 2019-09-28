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

      <iframe
        title="chatbot"
        sandbox="allow-scripts"
        style={{ width: '100vw', height: '100vh' }}
        src="https://landbot.io/u/H-268342-0G8YPULSV3BGIP4X/index.html"
      />
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
