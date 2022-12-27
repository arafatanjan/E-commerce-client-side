// import e from 'cors';
import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const AddUser = () => {
    const { serviceId } = useParams();
    const nameRef = useRef();
    const emailRef = useRef();
    const handleAddUser = e => {
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newUser = { serviceId };
        // const newUser = { name, email };
        // console.log(newUser);
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    // console.log(data.insertedId)
                    alert('successfully added the user.')
                    e.target.reset();
                }
            });
        e.preventDefault();
    };
    // if (isLoading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            <h2> Add an User</h2>
            <Button onSubmit={handleAddUser} variant="info">Booking Service {serviceId}</Button>
            {/* <form onSubmit={handleAddUser}>
                <input type='text' ref={nameRef} />
                <input type='email' name="" id="" ref={emailRef} />
                <input type='submit' value='Add' />
            </form> */}
        </div>
    );
};

export default AddUser;