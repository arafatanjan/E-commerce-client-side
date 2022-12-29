import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { updateNamedExports } from 'typescript';

const UpdateUser = () => {
    const [user, setUser] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const url = `https://arafatanjan-ecommerce.onrender.com/users/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    // update user
    const handleNameChange = e => {
        const updateName = e.target.value;
        const updateUser = { name: updateName, email: user.email };
        setUser(updateUser);
        // console.log(e.target.value)
    }

    const handleUpdateUser = e => {

    }
    return (
        <div>
            <h2>Update: {user.nam}</h2>
            <p><small>{id}</small></p>
            <form onSubmit={handleUpdateUser}>
                <input type='text' onChange={handleNameChange} value={user.nam || ""} />
                <input type='email' value={user.email || ""} />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;