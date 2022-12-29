import React, { useEffect, useState } from 'react';
import Rating from './RatingContainer';
import './Rating.css'

const ReviewContainer = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/reviews')
            // fetch('https://cryptic-tor-20048.herokuapp.com/services')
            // fetch('services.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div className='service-container'>
            {
                reviews.map((review, index) => <Rating
                    key={review._id}
                    review={review}>
                </Rating>)

            }
        </div>
    );
};

export default ReviewContainer;