import React, { Component } from 'react';

import { Container, Row, Col, Accordion, Card, Button } from 'react-bootstrap';
import '../style/benefits.css';
import data from './../data.json';

import travelIcon from './../airplane.png';
import healthIcon from './../first-aid-kit.png';
import dentalIcon from './../tooth.png';
import visionIcon from './../eyeglasses.png';

class Info extends Component {
    render() {
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
                    <Container>
                        <Row >
                            <Col>
                                {row1[i]}
                            </Col>
                            <Col>
                                {row2[i]}
                            </Col>
                            <Col>
                                {row3[i]}
                            </Col>
                        </Row>
                    </Container>
                );
            }

            return (
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={key}>
                            <img className="icon" src={icons[idx]} />
                            {header}
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey={key}>
                        <Card.Body>
                            {cardBody}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            );
        });
        return (
            <div>
                <Accordion>
                    {cards}
                </Accordion>
            </div>
        );
    }

}

export default Info;
