import React, { Component } from 'react';

import { InputGroup, Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';

import CheckBox from './CheckBox';
import '../style/benefits.css';
import data from './../data.json';
import Confetti from './Confetti';
import travelIcon from './../airplane.png';
import healthIcon from './../first-aid-kit.png';
import dentalIcon from './../tooth.png';
import visionIcon from './../eyeglasses.png';

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = { total: 0, checks: [false, false, false, false], vals: [5000, 800, 200, 5000000] };
        this.handleChecked = this.handleChecked.bind(this); // set this, because you need get methods from CheckBox 
    }

    handleChecked(e, index) {
        // e.stopPropagation();
        // e.preventDefault();
        console.log(index);
        let checks = this.state.checks;
        checks[index] = !checks[index];
        let total = 0;
        let vals = this.state.vals;
        for (let i = 0; i < 4; i++) {
            if (checks[i])
                total += vals[i];
        }
        total = total.toLocaleString();
        this.setState({ isChecked: !this.state.isChecked });
        this.setState({ total: total })
    }

    render() {
        let school = data.school;
        let provider = data.provider;
        let icons = [healthIcon, dentalIcon, visionIcon, travelIcon]
        let benefits = data.benefits;

        let cards = Object.keys(benefits).map((key, idx) => {
            let row1 = benefits[key]["row1"];
            let row2 = benefits[key]["row2"];
            let row3 = benefits[key]["row3"];
            let icon = benefits[key]["icon"];
            let header = benefits[key]["header"];
            let maxVal = benefits[key]["max-value"];
            let cardBody = [];
            for (let i = 0; i < row1.length; i++) {
                cardBody.push(

                    <Row style={{ 'font-weight': i == 0 ? 'bold' : '', 'background': i % 2 == 1 ? '#e3fdff' : 'white' }}>

                        <Col style={{ 'font-weight': i == 0 ? 'bold' : '' }}>
                            {row1[i]}
                        </Col>
                        <Col>
                            {row2[i]}
                        </Col>
                        <Col>
                            {row3[i]}
                        </Col>
                    </Row>

                );
            }

            let confetti = this.state.total > 5000 ? <Confetti /> : null;

            return (
                <div>
                    <Row class="row">
                        <Col xs="11">
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant="link" eventKey={key} style={{ 'display': 'flex', 'color': 'black' }}>

                                        <div>
                                            <img className="icon" src={icons[idx]} />
                                            {header}
                                        </div>



                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey={key}>
                                    <Card.Body>
                                        <Container>
                                            {cardBody}
                                        </Container>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                        </Col>
                        <Col>
                            <CheckBox id={idx} handleChecked={this.handleChecked} checked={this.state.checks[idx]} />
                        </Col>

                    </Row>
                </div>


            );
        });
        return (
            <div >

                <Accordion>
                    {cards}
                </Accordion>
                <Row>

                </Row>
                <h2 style={{ 'color': 'white', 'background': '#67D09C', 'margin': '2em -25vw', 'padding': '1em', 'text-align': 'center' }}>Total money saved through health benefits: <strong>${this.state.total}</strong></h2>

            </div>
        );
    }

}

export default Info;
