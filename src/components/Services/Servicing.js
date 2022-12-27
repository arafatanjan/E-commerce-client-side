import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Servicing.css'

const Servicing = ({ service, index }) => {
    // console.log(service);
    const { _id, name, description, price, img } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
        navigate(`/booking/${id}`);
    }
    return (
        <div className='servicing-container pb-3 card w-100 m-2 d-flex justify-content-center'>
            <img className='img-fluid card-img-top w-50' src={img} alt="" />
            <div className="card-body">
                <h4 className="card-title">{name}</h4>
                <p className='card-text'>{description}</p>
                <h6>{price}</h6>
                <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-warning d-grid gap-2 col-4 mx-auto'>Purchase</button>
            </div>



        </div>
    );
};

export default Servicing;