import 'react-bootstrap-drawer/lib/style.css';
import React, { useState } from 'react';
import {
    Col, Collapse, Container, Row,
} from 'react-bootstrap';
import {
    BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch
} from "react-router-dom";
import ApplicationDrawer from '../ApplicationDrawer/ApplicationDrawer';
import AddReview from '../AddReview/AddReview';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment'
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import ManageOrders from '../ManageOrders/ManageOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import PrivateRoute from '../../Login/PrivateRoute/PrivateRoute';
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import Home from '../../Home/Home/Home';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import DashBoardNav from '../DashBoardNav/DashBoardNav';




const DashBoard = (props) => {
    const { path, url } = useRouteMatch();

    return (
        <>
        <DashBoardNav></DashBoardNav>
        <Container fluid>
            
            <Row className="flex-xl-nowrap">
                <Col xs={12} md={3} lg={2} className="">
                    <ApplicationDrawer url={url}></ApplicationDrawer>
                </Col>
                <Col xs={12} md={9} lg={10} className="" >
                
                        <Switch>
                            <Route exact path={path}>
                                <DashBoardHome></DashBoardHome>
                            </Route>


                            <Route path={`${path}/addReview`}>
                                <AddReview></AddReview>
                            </Route>

                            <Route path={`${path}/myOrders`}>
                                <MyOrders></MyOrders>
                            </Route>

                            <Route path={`${path}/pay`}>
                                <Payment></Payment>
                            </Route>

                            <AdminRoute path={`${path}/makeAdmin`}>
                                <MakeAdmin></MakeAdmin>
                            </AdminRoute>

                            <AdminRoute path={`${path}/addProducts`}>
                                <AddProduct></AddProduct>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manageOrders`}>
                                <ManageOrders></ManageOrders>
                            </AdminRoute>

                            <AdminRoute path={`${path}/manageProducts`}>
                                <ManageProducts></ManageProducts>
                            </AdminRoute>

                        </Switch>
                
                </Col>
            </Row>
        </Container>
        </>
    );
};

export default DashBoard;