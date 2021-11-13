import React from 'react';
import { Card, CardGroup, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { model, brand, price, color, details, stock, _id, photo } = product;
    return (
        <CardGroup>
            <Card className="shadow">
                <Card.Img variant="top" src={photo} />
                <Card.Body>
                    <Card.Title><small className="">{model}</small></Card.Title>
                    <Card.Text>
                        <h5 className="text-danger">{brand}</h5>
                        <h6><i className="fas fa-coins text-warning me-1 fw-bold"></i>{price} BDT</h6>
                        <h6>{color}</h6>
                        <h6><i className="fas fa-check text-success me-1 "></i>{stock}</h6>
                        <h6 className="fst-italic text-secondary">{details}</h6>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className=" border border-0 bg-white" >
                    <Link to={`/order/${_id}`} ><button className="btn btn-success w-100"><h6><i className="fas fa-shopping-cart me-2"></i> Order Now</h6></button></Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default SingleProduct;
