import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container, Row } from 'react-bootstrap';
import img from '../../../images/profile picture3.svg.png';
import Rating from 'react-rating';
import './Review.css';

const Review = () => {

    const [reviews, setReviews] = useState();
    useEffect(() => {
        fetch('https://lit-fjord-01579.herokuapp.com/allReviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])


    return (
        <Container className="my-5">
            <h2 className="text-center my-5">Customers <span className="text-success fw-bold">Feedback</span></h2>
            <Container>
                <Row xs={1} md={2} lg={3} className="g-5">
                    {
                        reviews?.map(review => (
                            <CardGroup key={review?._id} >
                                <Card  className="shadow rounded border border-secondary ">
                                    <Card.Img variant="top" src={img} className="profile-picture pt-2" />
                                    <Card.Body className="text-center">
                                        <Card.Title className="fw-bold text-info">{review?.name}</Card.Title>
                                        <Card.Text>
                                            <p className="fst-italic fw-bold">{review?.review}</p>
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer className=" border border-0 mb-1 bg-white text-center" >
                                    <span className="me-2 fw-bold rating-text"> Rating : {review?.rating}</span>
                                        <Rating
                                            initialRating={review?.rating}
                                            emptySymbol="far fa-star icon-color"
                                            fullSymbol="fas fa-star icon-color"
                                            readonly
                                        />
                                       

                                    </Card.Footer>
                                </Card>
                            </CardGroup>
                        ))
                    }

                </Row>
            </Container>

        </Container>
    );
};

export default Review;