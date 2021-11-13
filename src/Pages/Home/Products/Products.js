import React, { useEffect, useState } from 'react';
import { Container, Row, CardGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useProducts from '../../../Hooks/useProducts';
import Product from '../Product/Product';


const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data =>{
                setProducts(data);
                setLoading(false);
            })
    }, [])

    // Show only 6 products at home
    const homeProducts = products?.slice(0, 6);
    return (
        <Container className="my-5 text-center">
            {
                (loading) && <Spinner animation="border" variant="info" />
            }
            <h2 className="my-5"><span className="text-success fw-bold">Exclusive</span> Products</h2>


            <Container>
                <Row xs={1} md={1} lg={3} className="g-5">
                    {
                        homeProducts?.map(product => <Product product={product} key={product._id}></Product>)
                    }
                </Row>
            </Container>
            <div className="text-center mt-4 ">
                <Link to='/products'>
                    
                        <button className="btn btn-outline-info fw-bold "> View All Products <i className="ms-2 fas fa-arrow-right"></i></button>
                    
                </Link>
            </div>
        </Container >
    );
};

export default Products;