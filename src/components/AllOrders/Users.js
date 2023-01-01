import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import { Alert } from '@mui/material';
const Users = () => {
    const [users, setUsers] = useState([]);
    const [isDeleted, setIsDeleted] = useState(null);
    const [singleorder, setSingleorder] = useState([]);
    const { user } = useAuth();
    // console.log(singleorder)
    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/orders')
            .then(res => res.json())
            .then(data => setSingleorder(data));
    }, [singleorder]);
    // console.log(singleorder)
    // delete an user
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            // const url = `https://arafatanjan-ecommerce.onrender.com/orders/${id}`
            const url = `https://arafatanjan-ecommerce.onrender.com/orders/${id}`
            fetch(url, {
                method: 'DELETE',
                headers: { "content-type": "application/json" },
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        // alert('deleted successfully');
                        setIsDeleted(true);
                        const remainingUsers = users.filter(pd => pd._id !== id)
                        setUsers(remainingUsers);

                    } else {
                        setIsDeleted(false);
                    }
                });
        }

    }
    const handleAddToCart = (index, id) => {
        // console.log('k')
        const data = singleorder[index];
        // data.status = 'updated';
        // console.log(singleorder[index])
        const url = `https://arafatanjan-ecommerce.onrender.com/orders/${id}`
        // console.log(url)
        // useEffect(() => {
        fetch(`https://arafatanjan-ecommerce.onrender.com/orders/update/${id}`, {
            //  method: "POST",
            //  headers: { 'content-type': 'application/json' },
            // body: JSON.stringify(data),
            method: "PUT",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Accepted successfully');
                    setIsDeleted(true);


                } else {
                    setIsDeleted(false);
                }
            })
        // }, [id])
    }
    return (
        <div>
            <h2>All Order: {singleorder?.length}</h2>
            <ul>
                {
                    singleorder.map((pd, index) => <li key={pd._id}>{pd.a}::{pd.b}
                        {/* <Link to={`/users/update/${user._id}`}> <button>update</button></Link> */}
                        <br />
                        <button className="btn btn-primary btn-sm" onClick={() => handleAddToCart(index, singleorder[index]?._id)}>{singleorder[index]?.status}</button>
                        {<button className="btn btn btn-danger btn-sm" onClick={() => handleDelete(pd._id)}>Reject</button>}

                    </li>)
                }
            </ul>
            {isDeleted ? <Alert severity="info">successfully deleted </Alert> : null}
        </div>
    )
};

export default Users;