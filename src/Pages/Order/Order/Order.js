import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import BookingModal from '../BookingModal/BookingModal';
import ProductDetails from '../ProductDetails/ProductDetails';

const Order = () => {
    const { productId } = useParams();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`http://localhost:5000/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <Container className="my-5 pb-5">
            <h2 className="text-center pb-3"><span className="border border-primary border-2 text-secondary px-3 py-1 rounded">Place Your Order</span></h2>
            <ProductDetails product={product} handleShow={handleShow} ></ProductDetails>

            <BookingModal
                handleClose={handleClose}
                show={show}
                product={product}
            ></BookingModal>
        </Container>
    );
};

export default Order;