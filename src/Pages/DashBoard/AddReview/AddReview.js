import React from 'react';
import './AddReview.css';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('http://localhost:5000/addReview', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Good job!", "Review Inserted Successfully!", "success");
                    reset();
                }
            })
    }


    return (
        <div className="review-form">

            {user?.email && <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <h2 className="my-5"><span className="bg-light px-4 rounded">Add Your Review</span></h2>
                <input defaultValue={user?.displayName} className='form-control' {...register("name", { required: true })} placeholder="Your Name" />

                <input defaultValue={user?.email} className='form-control' {...register("email", { required: true })} placeholder="email" />

                <input type='text' className='form-control'{...register("rating", { required: true, min: 1, max: 5 })} placeholder="Rating out of 5" />

                <textarea className='form-control' {...register("review", { required: true })} placeholder="Add Review" />

                <input className='btn btn-success' type="submit" />
            </form>}
        </div>
    );
};

export default AddReview;