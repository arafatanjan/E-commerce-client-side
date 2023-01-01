import React, { useEffect, useState } from 'react';


const ManageProduct = () => {
    const [services, setServices] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/services')
            // fetch('https://cryptic-tor-20048.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
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
                        setIsLoading(true);
                        const remaining = services.filter(service => service._id !== id)
                        setServices(remaining);
                    }

                })
        }
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
            {isLoading && <div class="alert shadow-lg">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-info flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>deleted  Successfully</span>
                </div>
            </div>};
        </div>
    )
};

export default ManageProduct;