import React, { useEffect, useState } from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

import './MyOrders.css'

const MyOrders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch(`https://lit-fjord-01579.herokuapp.com/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [control])


    const handleDelete = (id) => {

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this  order!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    fetch(`https://lit-fjord-01579.herokuapp.com/orders/${id}`, {
                        method: "DELETE",
                        header: { "content-type": "application/json" },
                    })
                        .then(res => res.json())
                        .then(data => {
                           if(data.deletedCount)
                           {
                            swal("Your Order has been deleted!", { icon: "success", });
                            setControl(!control);
                           }
                           else
                           {
                            setControl(false);
                           }
                        })
                }
            });
    }

    return (
        <Container className="my-5">
            <h1 className="text-center my-3">My Orders</h1>
            <Table responsive="sm" className="table table-dark table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product Image</th>
                        <th>Product </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders?.map((order, index) => (
                            <tr key={order._id}>
                                <td>{index + 1}</td>
                                <td><img src={order?.photo} width="60px" height="35px" alt=""></img></td>
                                <td>{order?.product}</td>
                                <td>{order?.name}</td>
                                <td>{order?.email}</td>
                                <td className="text-warning">{order?.status}</td>
                                <td><button onClick={() => handleDelete(order._id)} className="btn bg-danger text-white px-3 py-1"> <i className="far fa-trash-alt me-2"></i>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>

        </Container>
    );
};

export default MyOrders;