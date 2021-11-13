import React from 'react';
import { Card, CardGroup, Col, Container, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Product = (props) => {
    const { model, brand, price, stock, photo, _id } = props.product;
    return (

        <CardGroup>
            <Card className="shadow rounded-3 ">
                <Card.Img variant="top" src={photo} />
                <Card.Body className="text-center">
                    <Card.Title className="text-dark" ><small>{model}</small></Card.Title>
                    <Card.Text>
                        <h5 className="text-danger fw-bold">{brand}</h5>
                        <h6 className="text-dark fw-bold"> Price : {price} BDT</h6>
                        <h6><i className="fas fa-check text-success me-1"></i>{stock}</h6>
                    </Card.Text>
                </Card.Body>
                <Card.Footer className=" border border-0 bg-white">
                    <Link to={`/order/${_id}`} ><button className="btn btn-success w-100"> <i className="fas fa-shopping-cart me-2"></i>Order Now</button></Link>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default Product;