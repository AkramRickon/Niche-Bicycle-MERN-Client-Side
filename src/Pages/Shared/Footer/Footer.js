import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div>
            <div className="bg-dark w-100 ">
                <Container className="pb-3">
                    {/* Footer is devided into three columns */}
                    <Row xs={1} md={3} lg={3} className="g-4">
                        <Col className="text-white">
                            <ul>
                                <li><h5>Our Services</h5></li>
                            </ul>
                            <ul>
                                <li><h6>Home Delivery</h6></li>
                                <li><h6>Service Warrenty</h6></li>
                                <li><h6>Monthly EMI</h6></li>
                                <li><h6> After Sell Service</h6></li>
                            </ul>
                        </Col>

                        <Col>
                            <div className=" text-white mb-3  text-center">

                                <ul>
                                    <h5>FOLLOW US</h5>
                                    <i className="fab fa-linkedin-in"></i>
                                    <i className="fab fa-pinterest"></i>
                                    <i className="fab fa-youtube"></i>
                                    <i className="fab fa-facebook"></i>
                                    <i className="fab fa-instagram"></i>
                                    {/* <i className="fab fa-twitter"></i> */}
                                </ul>
                            </div>

                        </Col>

                        <Col className=" text-white text-lg-end">
                            <ul>
                                <h5>CONTACT US</h5>
                                <h6 className="phone-num-color "><i className="fas fa-phone-alt"></i>+88 58050442-3</h6>
                                <h6 className="phone-num-color "><i className="fas fa-phone-alt"></i>+8801944480902</h6>

                                <h6><i className="far fa-envelope me-2"></i>info@NicheBicycle.com</h6>
                                <h6><i className="far fa-envelope me-2"></i>nichebikes@gmail.com</h6>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <p className="text-center  mb-0 copyright-bg text-secondary py-1">©Copyright 2017-2021 | Niche Bicycle</p>
            </div>

        </div>
    );
};

export default Footer;