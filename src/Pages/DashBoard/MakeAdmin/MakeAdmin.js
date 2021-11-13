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

        fetch('http://localhost:5000/makeAdmin',{
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
                <h2 className="my-3"><span className="bg-light text-dark px-5">Admin Pannel</span></h2>
                <input type='text' className='form-control'{...register("email", { required: true })} placeholder="Email" />
                <button  className='btn btn-success' type="submit"><h6>Make Admin</h6></button>
            </form>
        </Container>
    );
};

export default MakeAdmin;