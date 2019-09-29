import React, { Component } from 'react';

import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import '../style/benefits.css';
import data from './../data.json';

import Info from './Info';
class Benefits extends Component {
    render() {
        return (

            <Container className="benefits">

                <h3 className="blurb">Hi <em>Stew Dent!</em> Your school, {data.school}, is using {data.provider}, as an insurance provider. Check out all your benefits!</h3>

                <Info />

            </Container>

        );
    }

}

export default Benefits;
