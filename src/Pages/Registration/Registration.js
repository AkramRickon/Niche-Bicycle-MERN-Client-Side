import React from 'react';
import './Registration.css';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import swal from 'sweetalert';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Registration = () => {
    const { registerUser, error, user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
        if (data.password !== data.password2) {
            swal("Password Didnt match");
            return;

        }
        registerUser(data.email, data.password, data.name, history);
        reset();
    }

    return (
        <div className="registration-form">
            <form onSubmit={handleSubmit(onSubmit)} className="form-style">

                <h2 className="text-center my-5"><span className="bg-white px-5 py-1 rounded">Register Here! </span></h2>

                <input className="form-control" type="text"{...register("name", { required: true, pattern: /^[a-zA-Z ]+$/ })} placeholder="name" />
                {errors.name && <span className="text-white">Name Required & can contain only letters</span>}

                <input className="form-control" defaultValue="" type="email" {...register("email", { required: true })} placeholder="email" />

                <input className="form-control" defaultValue="" type="password" {...register("password", { required: true })} placeholder="password" />

                <input className="form-control" defaultValue="" type="password"{...register("password2", { required: true })} placeholder="confirm password" />

                <input className="form-control btn btn-success" type="submit" value="Submit" />
                <span className="text-white">{error}</span>
                <Link to='/registration' className="text-decoration-none text-white "><h6>Already Have An Account ? Click Here</h6> </Link>
            </form>
        </div>
    );
};

export default Registration;