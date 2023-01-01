import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './AddService.css'
import axios from 'axios';
import { Alert } from '@mui/material';



const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://arafatanjan-ecommerce.onrender.com/services', data)
            // axios.post('https://cryptic-tor-20048.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    // alert('added successfully')
                    setIsLoading(true);
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

            {isLoading && <div class="alert shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>Added  Successfully</span>
                </div>
            </div>};
        </div>
    );
};

export default AddService;