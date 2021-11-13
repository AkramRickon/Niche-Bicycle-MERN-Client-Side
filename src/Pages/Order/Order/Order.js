import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../../Shared/Footer/Footer';
import BookingModal from '../BookingModal/BookingModal';
import ProductDetails from '../ProductDetails/ProductDetails';
import Navigation from '../../Shared/Navigation/Navigation';

const Order = () => {
    const { productId } = useParams();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [product, setProduct] = useState({});


    useEffect(() => {
        fetch(`https://lit-fjord-01579.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    return (
        <>
            <Navigation></Navigation>
            <Container className="my-5 pb-5">
                <h2 className="text-center pb-3"><span className="border border-primary border-2 text-secondary px-3 py-1 rounded">Place Your Order</span></h2>
                <ProductDetails product={product} handleShow={handleShow} ></ProductDetails>

                <BookingModal
                    handleClose={handleClose}
                    show={show}
                    product={product}
                ></BookingModal>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default Order;