import React, { useEffect, useState } from 'react';
import Servicing from './Servicing';
import './Services.css'

const Explore = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/services')
            // fetch('https://cryptic-tor-20048.herokuapp.com/services')
            // fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    return (
        <div>
            <h2>Our Collection:{services?.length}</h2>
            <div className='service-container' id="services">

                {
                    services.map((service, index) => <Servicing
                        key={service._id}
                        service={service}>
                    </Servicing>)

                }
            </div>
        </div>
    );
};

export default Explore;