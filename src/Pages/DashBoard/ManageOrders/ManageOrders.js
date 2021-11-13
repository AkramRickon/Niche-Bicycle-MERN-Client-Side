import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('https://lit-fjord-01579.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
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
                            if (data.deletedCount) {
                                swal("Your Order has been deleted!", { icon: "success", });
                                setControl(!control);
                            }
                            else {
                                setControl(false);
                            }
                        })
                }
            });
    }

    const handleUpdate = (id) => {
        swal({
            title: "Are you sure?",
            text: "Do you want to update shipping Status ?",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`https://lit-fjord-01579.herokuapp.com/orders/${id}`, {
                        method: "PUT",
                        headers: { "content-type": "application/json" },
                        body: JSON.stringify({ status: "Shipped" })
                    })
                        .then(res => res.json())
                        .then(data => {
                            if (data.modifiedCount) {
                                swal("Shipping Updated successfully", { icon: "success", });
                                setControl(!control);
                            }
                            else if(data.modifiedCount===0 && data.acknowledged===true)
                            {
                                swal("Already Updated", { icon: "success", });
                            }
                            else {
                                setControl(false);
                            }
                        })
                }
            });
    }


    return (
        <Container>
            <h2 className="text-center my-3">Manage All Orders</h2>
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

                                <td><button onClick={() => handleUpdate(order._id)} className="btn btn-success">{order?.status}</button> </td>

                                <td><button onClick={() => handleDelete(order._id)} className="btn bg-danger text-white px-3 py-1"> <i className="far fa-trash-alt me-2"></i>Delete</button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageOrders;