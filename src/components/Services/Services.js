import React, { useEffect, useState } from 'react';
import Servicing from './Servicing';
import './Services.css'


const Services = () => {
    const [services, setServices] = useState([])
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            // fetch('https://cryptic-tor-20048.herokuapp.com/services')
            // fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);

    // const match = services.filter(d => d.name.toLowerCase().includes(searchText));
    // setSearchResult(match);

    // const handleSearchChange = event => {
    //     setSearchText(event.target.value);
    //}

    return (
        <div>
            <h2>Our Collection: {services.slice(0, 6).length}  and more..</h2>
            <div style={{ 'margin': '20px' }}>
                <input type="text" className="input input-bordered input-sm w-full max-w-xs" placeholder='search' />
            </div>
            <div className='service-container ' id="services">
                {
                    services.slice(0, 6).map((service, index) => <Servicing
                        key={service._id}
                        service={service}>
                    </Servicing>)

                }
            </div>
        </div>
    );
};

export default Services;