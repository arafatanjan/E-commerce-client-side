import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';




const UserOrder = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const p = user?.email
    // console.log(p)
    const [singleorder, setSingleorder] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://arafatanjan-ecommerce.onrender.com/orders/${user?.email}`)
                .then(res => res.json())
                .then(data => setSingleorder(data))
        }

    }, [user?.email])
    // console.log(singleorder)

    // delete an user
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://arafatanjan-ecommerce.onrender.com/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: { "content-type": "application/json" },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        setIsDeleted(true);
                        const remainingUsers = singleorder.filter(pd => pd._id !== id)
                        setSingleorder(remainingUsers);
                    } else {
                        setIsDeleted(false);
                    }
                });
        }

    }
    // const handleAddToCart = (index, id) => {
    //     const data = singleorder[index];
    //     // data.status = 'updated';
    //     console.log(singleorder[index])
    //     const url = `https://arafatanjan-ecommerce.onrender.com/orders/${id}`
    //     console.log(url)
    //     // useEffect(() => {
    //     fetch(`https://arafatanjan-ecommerce.onrender.com/orders/update/${id}`, {
    //         //  method: "POST",
    //         //  headers: { 'content-type': 'application/json' },
    //         // body: JSON.stringify(data),
    //         method: "PUT",
    //         headers: { 'content-type': 'application/json' },
    //         body: JSON.stringify(data),
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             console.log(result);
    //         })
    //     // }, [id])
    // }
    return (
        <div>
            <h1>My Cart: {singleorder?.length}</h1>
            {/* <ul>
                {
                    singleorder.map((pd, index) => <li key={pd._id}>{pd.a}::{pd.b} */}

            {/* <button>Order Status:{singleorder[index]?.status}</button> */}

            {/* {<button onClick={() => handleDelete(pd._id)}>X</button>} */}



            {/* </li>)
                }
            </ul> */}
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Client</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            singleorder.map((pd, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{pd.a}</td>
                                <td>{pd.b}</td>
                                <td>{singleorder[index]?.status}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserOrder;