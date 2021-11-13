import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const ProductDetails = ({ product, handleShow }) => {
    const { model, brand, price, stock, color, details, photo } = product;

    return (
        <Container>
            <Row>
                <Col md={7}>
                    <img src={photo} alt="" className="img-fluid"></img>
                </Col>
                <Col md={5} className="d-flex flex-column justify-content-center lh-lg ">

                    <h4>Model : {model}</h4>
                    <h5>Brand : {brand}</h5>
                    <h6>Price : {price} BDT </h6>
                    <h6>Color : {color}</h6>
                    <h6> <i className="fas fa-check text-success"></i> {stock}</h6>
                    <h6 className="my-3">{details}</h6>
                    <Button className="btn btn-success mt-1" onClick={handleShow}>
                        <h6><i className="fas fa-shopping-cart me-2"></i> Order Now</h6>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;