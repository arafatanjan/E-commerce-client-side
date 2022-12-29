import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/services')
            // fetch('https://cryptic-tor-20048.herokuapp.com/services')
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
                    alert('deleted')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining);
                }

            })
    }
    return (
        <div>
            <h2>Manage Services</h2>
            <div class="overflow-x-auto p-5">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>Operation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map(service => <tr key={service._id}>
                                <th>{service.name}</th>
                                <td></td>
                                <td></td>
                                <td><button className='btn btn-primary btn-sm mb-3' onClick={() => handleDelete(service._id)}>Delete</button></td>

                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
            {/* {services.map(service => <div key={service._id}>
                <h3>{service.name}</h3>
                <button className='btn btn-primary btn-sm mb-3' onClick={() => handleDelete(service._id)}>Delete</button>
            </div>
            )
            } */}
        </div>
    )
};

export default ManageProduct;