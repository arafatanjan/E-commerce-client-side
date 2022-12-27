import React from 'react';
import Card from 'react-bootstrap/Card';
import "./Quote.css"

const Quote = () => {
    return (
        <div class="last-container">
            <div class="col">
                <h5>About Us</h5>
                <h6>We are here to serve you. </h6>
                <h6>Our mission, your destination </h6>
            </div>
            <div class="col">
                <h5>Contact</h5>
                <h6>Cell: 0190000000</h6>
                <h6>Email: abc@abc.com </h6>
                <h6>Address: Dhaka, Bangladesh</h6>
            </div>
            <div class="col">
                <h5>Newsletter</h5>
                <div><input type="text" placeholder="Type here" class="input input-bordered input-xs w-full max-w-xs" /></div>
                <div><button class="btn btn-block">Subscribe</button></div>
            </div>
        </div>

    );
};

export default Quote;