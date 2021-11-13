import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="text-center">
            <h2 className="text-center">Our <span className="text-success fw-bold">Services</span></h2>
            <Row xs={1} md={2} lg={4} className="g-3 my-5">
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="fas fa-truck fs-1 text-primary "></i>
                        <h4 className="my-2 text-secondary ">Home Delivary</h4>

                        <p className="text-secondary">We provide Home Delivery On time with maximum care.</p>
                    </div>

                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="fas fa-tools fs-1 text-primary"></i>
                        <h4 className="my-2 text-secondary">Servicing</h4>
                        <p className="text-secondary">We provide any kind of reparing services 6 days in a week.</p>
                    </div>
                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="fas fa-calculator fs-1 text-primary" ></i>
                        <h4 className="my-2 text-secondary">Monthy EMI</h4>
                        <p className="text-secondary">We provide monthly EMI services for all of our products.</p>
                    </div>

                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="far fa-thumbs-up fs-1 text-primary"></i>
                        <h4 className="my-2 text-secondary">Service Warrenty</h4>
                        <p className="text-secondary">We provice service warrenty from 6 month to 1 year On Products.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Services;