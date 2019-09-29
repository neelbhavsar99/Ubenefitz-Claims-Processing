import React from 'react';

import before from './../before.jpg'
import after from './../after.jpg'

import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';


import '../style/test.css';

function Testimonials() {
    return (
        <div id="id" className="testimonial">
            <Container style={{ 'padding-top': '2em' }}>
                <Row>
                    <Col>
                    </Col>
                    <Col>
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={before}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>Before</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={after}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>After</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={before}
                                    alt="Third slide"
                                />

                                <Carousel.Caption>
                                    <h3>Before</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col>
                    </Col>


                </Row>
            </Container>





        </div >
    );
}

export default Testimonials;
