import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import './MakeAdmin.css';

const MakeAdmin = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://lit-fjord-01579.herokuapp.com/makeAdmin',{
            method:"PUT",
            headers : {"content-type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount)
            {
                swal("Admin Made Successfully", { icon: "success", });
            }
            else {
                swal("User not Found. Please Register", { icon: "warning", });
            }
        })
    }
    return (
        <Container className="admin-form my-5">

            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className="mb-5"><span className="bg-success text-white rounded py-1 px-5">Admin Pannel</span></h2>
                <input type='text' className='form-control'{...register("email", { required: true })} placeholder="Email" />
                <button  className='btn btn-success' type="submit"><h6> <i className="me-2 fas fa-user-shield"></i>Make Admin</h6></button>
            </form>
        </Container>
    );
};

export default MakeAdmin;