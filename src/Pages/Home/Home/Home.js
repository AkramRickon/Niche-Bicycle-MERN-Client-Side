import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';

import Navigation from '../../Shared/Navigation/Navigation';
import AboutUs from '../AboutUs/AboutUs';
import Products from '../Products/Products';
import Review from '../Review/Review';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Stores from '../Stores/Stores';

const Home = () => {
    return (
        <>
            <Navigation></Navigation>
            <Slider></Slider>
            <Container>
                <AboutUs></AboutUs>
                <Products></Products>
                <Services></Services>
                <Review></Review>
                <Stores></Stores>

            </Container>
            <Footer></Footer>
        </>
    );
};

export default Home;