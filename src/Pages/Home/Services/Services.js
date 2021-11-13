import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Services = () => {
    return (
        <div className="text-center my-5 py-3">
            <h2 className="text-center">Our <span className="text-success fw-bold">Services</span></h2>
            <Row xs={1} md={2} lg={4} className="g-3 my-4">
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="fas fa-truck fs-1 text-info "></i>
                        <h4 className="my-2  ">Home Delivary</h4>

                        <p className="text-secondary fw-bold">We provide Home Delivery On time with maximum care.</p>
                    </div>

                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="fas fa-tools fs-1 text-info"></i>
                        <h4 className="my-2">Servicing</h4>
                        <p className="text-secondary fw-bold">We provide any kind of reparing services 6 days in a week.</p>
                    </div>
                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="fas fa-calculator fs-1 text-info" ></i>
                        <h4 className="my-2 ">Monthy EMI</h4>
                        <p className="text-secondary fw-bold">We provide monthly EMI services for all of our products.</p>
                    </div>

                </Col>
                <Col>
                    <div className="border border-1 p-2 rounded shadow border border-secondary border-1">
                        <i className="far fa-thumbs-up fs-1 text-info"></i>
                        <h4 className="my-2 ">Service Warrenty</h4>
                        <p className="text-secondary fw-bold">We provice service warrenty from 6 month to 1 year.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Services;