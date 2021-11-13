import React from 'react';
import { Modal } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import './BookingModal.css';


const BookingModal = ({ handleClose, show, product }) => {

    const { user } = useAuth();
    const { model, price, photo } = product;
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        data.status = "Pending";
        fetch('http://localhost:5000/addOrders', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    swal("Good Job!", "Order Placed Successfully! ", "success");
                    reset();
                    handleClose();
                }
            })
    }
    return (
        <div>
            {user?.email && <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Place Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-form">

                        <form onSubmit={handleSubmit(onSubmit)}>
                            {/* register your input into the hook by invoking the "register" function */}
                            <input defaultValue={user?.displayName} className='form-control' {...register("name", { required: true })} placeholder="Name" />

                            <input defaultValue={user?.email} className='form-control' {...register("email", { required: true })} placeholder="Email" />

                            <input type="number" className='form-control'{...register("mobileNumber", { required: true })} placeholder="Mobile Number" />

                            <input defaultValue={model} className='form-control'{...register("product", { required: true })} placeholder="Product" />

                            <input defaultValue={price} className='form-control' {...register("Price", { required: true })} placeholder="Price" />

                            <input defaultValue={photo} className='form-control' {...register("photo", { required: true })} placeholder="Product Img URL" />

                            <textarea className='form-control' {...register("address", { required: true })} placeholder="Address" />

                            <input className='btn btn-success form-control' type="submit" value="Place Order" />
                        </form>
                    </div>
                </Modal.Body>
            </Modal>}
        </div>
    );
};

export default BookingModal;