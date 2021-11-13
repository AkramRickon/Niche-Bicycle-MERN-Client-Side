import React from 'react';
import './Login.css';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';

const Login = () => {
    const { loginUser, error } = useAuth();
    const { register, handleSubmit } = useForm();

    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        console.log(data);
        loginUser(data.email, data.password, location, history);

    }
    return (
        <div className="login-form mb-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <h2 className="text-center my-5"><span className="bg-white px-5 py-1 rounded">Please Login !</span></h2>

                <input className="form-control" defaultValue="" type="email" {...register("email", { required: true })} placeholder="email" />

                <input className="form-control" type="password" {...register("password", { required: true })} placeholder="password" />
                <span className="text-white">{error}</span>
                <input type="submit" className="btn btn-success" value="Login" />

                <Link to='/registration' className="text-decoration-none text-white fs-6"><h6>Dont Have An Account ? Click Here</h6> </Link>
            </form>
        </div>
    );
};

export default Login;