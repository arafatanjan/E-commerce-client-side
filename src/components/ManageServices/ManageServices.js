import React, { useEffect, useState } from 'react';
import { Alert } from '@mui/material';

const ManageServices = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/services')

            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = id => {
        const url = `https://arafatanjan-ecommerce.onrender.com/services/${id}`;
        // const url = `https://cryptic-tor-20048.herokuapp.com/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    // alert('deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                    setIsLoading(true);
                }

            })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            {services.map(service => <div key={service._id}>
                <h3>{service.name}</h3>
                <button onClick={() => handleDelete(service._id)}>Delete</button>
            </div>
            )
            }
            {isLoading ? <Alert severity="info">successfully placed the order</Alert> : null}
        </div>
    )
};

export default ManageServices;