import React from 'react';
import '../style/mission.css';

import { Container, Row, Col, Card } from 'react-bootstrap';

function MissionStatement() {
    return (
        <div className="mission">
            <Container>
                <Row>
                    <Col>
                        <p>
                            Our goal: educate Canadians about their health benefits and help them save money
                        </p>


                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MissionStatement;
