import React from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data)
        axios.post('http://localhost:5000/services', data)
            // axios.post('https://cryptic-tor-20048.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully')
                    reset();
                }
            })
    };
    return (
        <div className='add-service'>
            <h2>Add a new Service</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" className="input input-bordered input-sm w-full max-w-xs" {...register("name", { required: true, maxLength: 100 })} placeholder="Name" />
                <textarea className="textarea textarea-bordered max-w-xs" {...register("description")} placeholder="Description" />
                <input className="input input-bordered input-md w-full max-w-xs" type="number" {...register("price")} placeholder="Price" />
                <input className="input input-bordered input-md w-full max-w-xs" type="img" src="alt"  {...register("img")} placeholder="Image URL" />
                <input value="press" className="btn btn-secondary w-full max-w-xs" type="submit" />
            </form>

        </div>
    );
};

export default AddService;