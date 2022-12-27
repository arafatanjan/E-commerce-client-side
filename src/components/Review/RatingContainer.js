import React from 'react';
import './Rating.css';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const RatingContainer = ({ review, index }) => {
    const { name, description, rating } = review;
    return (
        <div className='servicing-container pb-3 card w-100 m-2 d-flex justify-content-center'>


            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className='card-text'>{description}</p>
                {/* <h6>{rating}</h6> */}
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star icon-container"
                    fullSymbol="fas fa-star icon-container"
                />
            </div>
        </div>
    );
};

export default RatingContainer;