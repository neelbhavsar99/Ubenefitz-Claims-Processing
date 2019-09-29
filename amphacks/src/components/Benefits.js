import React, { Component } from 'react';

import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import '../style/benefits.css';
import data from './../data.json';

import Info from './Info';

import travelIcon from './../airplane.png';
import healthIcon from './../first-aid-kit.png';
import dentalIcon from './../tooth.png';
import visionIcon from './../eyeglasses.png';

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
