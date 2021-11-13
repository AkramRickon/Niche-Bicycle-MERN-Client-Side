import React from 'react';
import './AddProduct.css';
import { useForm } from "react-hook-form";
import swal from 'sweetalert';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch('https://lit-fjord-01579.herokuapp.com/addProduct', {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    swal("Good job!", "Product Inserted Successfully!", "success");
                    reset();
                }
            })

    }
    return (
        <div className="product-form ">

            <form onSubmit={handleSubmit(onSubmit)}>
                {/* register your input into the hook by invoking the "register" function */}
                <h2 className="my-4"><span className="text-white bg-success px-5 rounded">Add Products</span></h2>
                <input className='form-control' {...register("model", { required: true })} placeholder="Product Name/Model" />
                <input className='form-control' {...register("brand", { required: true })} placeholder="Brand In Block Letters" />
                <input type="number" className='form-control'{...register("price", { required: true })} placeholder="Price" />
                <input className='form-control'{...register("color", { required: true })} placeholder="Color" />
                <input className='form-control'{...register("stock", { required: true })} placeholder="Stock" />
                <textarea className='form-control' {...register("details", { required: true })} placeholder="Details" />
                <input className='form-control'{...register("photo", { required: true })} placeholder="Photo URL" />
                <button className='btn btn-success ' type="submit" ><h6><i className="fas fa-plus me-2"></i>Submit</h6></button>
            </form>
        </div>
    );
};

export default AddProduct;