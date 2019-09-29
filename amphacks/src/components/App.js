import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as ROUTES from "../constants/routes";

import LandingPage from './LandingPage'
import Benefits from './Benefits'
import home from '../house.png';
import hat from '../mortarboard.png';
import folder from '../folder.png';
import list from '../menu.png';
import '../App.css';
import { Nav } from 'react-bootstrap';

import Footer from './Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedin: false };
  }

  render() {

    return (
      <div className="app" >
        <Nav
          activeKey="/home"
          style={{ 'background': '#67D09C', 'padding': '0.5em' }}
        >
          <Nav.Item>
            <Nav.Link href="/home"></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ 'color': 'white' }} href="/"><strong>U-Benefitz</strong></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ 'color': 'white' }} href="https://www.utsc.utoronto.ca/home/">University</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link style={{ 'color': 'white' }} href="https://student.greenshield.ca/en-ca">Insurance</Nav.Link>
          </Nav.Item>
          <Nav.Item >
            <Nav.Link style={{ 'color': 'white' }}><img style={{ 'width': '1.5em', 'margin-left': '70vw' }} src={list} /></Nav.Link>
          </Nav.Item>

        </Nav>
        <Router>
          <Switch>
            <Route exact path={ROUTES.HOME} component={LandingPage} />
            <Route path={ROUTES.BENEFITZ} component={Benefits} />
            <Route path={ROUTES.HOME} component={LandingPage} />
          </Switch>
        </Router>

        <Footer />

      </div >
    );
  }

}

export default App;





