import React from 'react';
import logo from './../logo.png'
import { Jumbotron, Button } from 'react-bootstrap';

import '../style/title.css';

function Title() {
    return (
        <div className="title">
            <Jumbotron style={{ 'padding-left': '5em', 'width': '100%', 'background': '#67D09C' }}>
                <h1 style={{ 'color': 'white' }}>U-Benefitz</h1>
                <p style={{ 'color': 'white' }}>
                    Save more money by getting more out of your health benefits.
  </p>
                <p>
                    <Button href="#id" variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default Title;
