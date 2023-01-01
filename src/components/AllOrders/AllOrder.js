import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllOrder = () => {
    const [users, setUsers] = useState([]);

    //not

    useEffect(() => {
        fetch('https://arafatanjan-ecommerce.onrender.com/orders')
            // fetch('https://cryptic-tor-20048.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleUpdate = e => {

    }
    return (
        <div>
            <h2>Users Available:{users.length}</h2>
            <ul>
                {

                    users.map(user => <li key={user._id}>{user.a}::{user.b}
                        <Link to={`/users/update/${user._id}`}> <button>pending</button></Link>
                        {/* {<button onClick={() => handleDelete(user._id)}>X</button>} */}

                    </li>)
                }
            </ul>
            <form onSubmit={handleUpdate}>
                <input type='text' value={users.a || ''} />
                <input type='text' value={users.b || ''} />
                <input type='email' value={users.email || ''} />
                <input type='submit' value='submit' />
            </form>
        </div>
    );
};

export default AllOrder;