import React from 'react';
import { Link } from "react-router-dom";

import * as ROUTES from "../constants/routes";
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

import rbcIcon from './../rbc-logo.png';

import '../style/portal.css';
function Portal() {
    return (
        <div>
            <Container>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>We use your <img src={rbcIcon} /> RBC Student account information to automatically find out what benefits are available to you</Form.Label>
                        <Form.Control type="text" placeholder="Enter your RBC Client ID" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        <Link to={ROUTES.BENEFITZ} className="link"> Go!</Link>
                    </Button>
                </Form>
            </Container>

        </div >
    );
}

export default Portal;
