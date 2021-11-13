import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const DashBoardNav = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light"  sticky="top" className="lh-lg">
            <Container>
                <Navbar.Brand  clasName="fw-bold">DashBoard</Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default DashBoardNav;