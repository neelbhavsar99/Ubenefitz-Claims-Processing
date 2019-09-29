import React from 'react';

import Title from './Title';
import MissionStatement from './MissionStatement';
import Offer from './Offer';
import Testimonials from './Testimonials';
import Portal from './Portal';
import '../style/landing.css';

import { Container, Row, Col, Card } from 'react-bootstrap';
function LandingPage() {
    return (
        <div class="landing">
            <Title />
            <Container>
                <MissionStatement />
                {/* <Offer /> */}
                <Testimonials />
                <Portal />
            </Container>
        </div>
    );
}

export default LandingPage;
