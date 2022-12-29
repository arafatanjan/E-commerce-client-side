import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { useForm } from "react-hook-form";
import useAuth from '../../Hook/useAuth';
import axios from 'axios';
import '../Review/Review.css'
import Rating from 'react-rating';


const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    // const element = <FontAwesomeIcon icon={faCoffee} />
    // const element = <FontAwesomeIcon icon={fa - solid fa-star} />
    const onSubmit = data => {
        // console.log(data)
        axios.post('https://arafatanjan-ecommerce.onrender.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Thanks for your review')
                    reset();
                }
            })
    };
    return (
        <div className='add-service'>
            <h2>Please Give Your Review</h2>
            {/* <Rating
                initialRating={3}
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
            /> */}

            {/* <form onSubmit={handleSubmit(onSubmit)}>
                {/* <a>Name: {user?.displayName}</a> */}
            {/* <option {...register("Name")} >{user?.displayName}</option> */}
            {/* <input {...register("name")} value={user?.displayName} /> */}
            {/* <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" /> */}
            {/* <textarea {...register("description")} placeholder="Description" /> */}

            {/* <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating" /> */}
            {/* <input {...register("img")} placeholder="Image URL" /> */}
            {/* <input type="submit" />
            </form> */}


            <form onSubmit={handleSubmit(onSubmit)} >
                <input type="text" className="input input-bordered input-md w-full max-w-xs" {...register("name")} value={user?.displayName} />
                {/* <textarea {...register("description")} placeholder="Description" /> */}
                <textarea class="textarea textarea-bordered max-w-xs" {...register("description")} placeholder="Comment"></textarea>
                <input type="number" {...register("rating", { min: 1, max: 5 })} placeholder="Rating" className="input input-bordered input-md w-full max-w-xs" />
                <input className='btn btn-secondary w-full max-w-xs' type="submit" />
            </form>


            {/* <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs block" />

<input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />

<input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" /> */}


            {/* <form>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" required></input>
                </div>
                <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required></input>
                </div>
                <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                        <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required></input>
                    </div>
                    <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                </div>
                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form> */}




        </div >
    );
};

export default Review;
