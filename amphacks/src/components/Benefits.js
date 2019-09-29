import React, { Component } from 'react';

import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import '../style/benefits.css';
import data from './../data.json';

import Info from './Info';



class Benefits extends Component {
    render() {
        return (
            <div>
                <Info />
            </div>
        );
    }

}

export default Benefits;
