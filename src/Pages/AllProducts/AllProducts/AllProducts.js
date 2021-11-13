import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import SingleProduct from '../SingleProduct/SingleProduct';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://lit-fjord-01579.herokuapp.com/products')
            .then(res => res.json())
            .then(data =>{
                setAllProducts(data);
                setLoading(false);
            })
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Container className="my-5 pb-5">
                <div className="text-center">
                    {
                        (loading) &&   <Spinner animation="border" variant="info" />
                    }
                </div>
                <h2 className="text-center my-5">Our All <span className="text-success">Products</span></h2>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-5">
                        {
                            allProducts.map(product => <SingleProduct product={product} key={product._id}></SingleProduct>)
                        }
                    </Row>
                </Container>
            </Container>
            <Footer></Footer>
        </>
    );
};

export default AllProducts;