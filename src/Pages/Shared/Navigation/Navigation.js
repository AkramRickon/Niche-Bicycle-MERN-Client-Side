import React from 'react';
import './Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Navigation = () => {
    const { user, logOut } = useFirebase();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Niche Bicycle</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                    <NavLink className="NavLink-style" to='/home'>Home</NavLink>
                        <NavLink className="NavLink-style" to='/products'>Explore BiCycle</NavLink>
                        <NavLink className="NavLink-style" to='/dashBoard'>DashBoard</NavLink>
                        {user?.email && <span style={{ color: "orange", padding: "5px 20px" ,fontSize:'18px',fontWeight:'bold'}}>{user.displayName}</span>}
                        {
                            (user?.email) ?
                                <button className="logout-button px-2" onClick={logOut}>Logout <i className="fas fa-sign-out-alt"></i></button> :
                                <NavLink className="NavLink-style" to='login'>Login</NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;