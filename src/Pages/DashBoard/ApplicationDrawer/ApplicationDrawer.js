import 'react-bootstrap-drawer/lib/style.css';
import { Drawer, } from 'react-bootstrap-drawer';
import {
    Col, Collapse, Container, Row,
} from 'react-bootstrap';
import {
    BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch
} from "react-router-dom";
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import './ApplicationDrawer.css';

const ApplicationDrawer = ({ url }) => {
    const { logOut, admin } = useAuth();
    const [open, setOpen] = useState(false);

    const handleToggle = () => setOpen(!open);

    return (
        <Drawer>
            <Drawer.Toggle onClick={handleToggle} />

            <Collapse in={open}>
                <Drawer.Overflow>
                    <Drawer.ToC >
                        <ul>
                            <li className="list-style">
                                <Link className="text-decoration-none fw-bold" to={`${url}`}>DashBoard</Link>
                            </li>
                            <li>
                                <Link className="text-decoration-none fw-bold" to='/home'>Home</Link>
                            </li>

                            {
                                (!admin) && <>
                                    <li>
                                        <Link className="text-decoration-none fw-bold" to={`${url}/addReview`}>Add Review</Link>
                                    </li>

                                    <li>
                                        <Link className="text-decoration-none fw-bold" to={`${url}/myOrders`}>My Orders</Link>
                                    </li>

                                    <li>
                                        <Link className="text-decoration-none fw-bold" to={`${url}/pay`}>Make Payment</Link>
                                    </li>
                                </>
                            }


                            {
                                (admin) && <>
                                    <li>
                                        <Link className="text-decoration-none fw-bold" to={`${url}/makeAdmin`}>Make Admin</Link>
                                    </li>

                                    <li>
                                        <Link className="text-decoration-none fw-bold" to={`${url}/manageOrders`}>Manage Orders</Link>
                                    </li>

                                    <li>
                                        <Link className="text-decoration-none fw-bold" to={`${url}/manageProducts`}>Manage Products</Link>
                                    </li>

                                    <li>
                                        <Link className="text-decoration-none fw-bold" to={`${url}/addProducts`}>Add Products</Link>
                                    </li>
                                </>
                            }

                            <li>
                                <button className="btn btn-outline-info mt-1 fw-bold" onClick={logOut}>LogOut</button>
                            </li>
                        </ul>
                    </Drawer.ToC>
                </Drawer.Overflow>
            </Collapse>
        </Drawer>
    );
};

export default ApplicationDrawer;