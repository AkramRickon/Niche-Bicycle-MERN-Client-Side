import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from './../images/error-404-concept-landing-page_52683-12757.jpg'

const PageNotFound = () => {
    return (
        <Container className="text-center">
            <div className="text-center">
                <img src={img} alt=""></img>
            </div>
            <Link to='/home'><button className="btn btn-danger">Back To home</button></Link>
        </Container>
    );
};

export default PageNotFound;