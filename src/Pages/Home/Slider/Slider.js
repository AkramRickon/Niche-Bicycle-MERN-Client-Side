import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/zrHn9N3/rsz-1.jpg"
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Jqv3tdj/rsz-2.jpg"
                    alt="Second slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/mBQZQpw/rsz-6.jpg"
                    alt="Third slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/Brf7qXN/rsz-4.jpg"
                    alt="Third slide"
                />
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="https://i.ibb.co/qWcT7GB/rsz-5.jpg"
                    alt="Third slide"
                />
               
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;