import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import useAuth from '../../Hook/useAuth';

const Booking = () => {
    const { user } = useAuth();
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    // console.log(service);
    const a = service.name;
    const b = user?.displayName;
    const email = user?.email;
    const status = 'pending';

    useEffect(() => {
        fetch(`https://arafatanjan-ecommerce.onrender.com/services/${serviceId}`)
            // fetch(`https://cryptic-tor-20048.herokuapp.com/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])
    const handleAddUser = e => {
        // const name = nameRef.current.value;
        // const email = emailRef.current.value;
        // const newUser = { serviceId };
        const newUser = { a, b, email, status };
        // console.log(newUser);

        fetch('https://arafatanjan-ecommerce.onrender.com/orders', {
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
                    alert('successfully placed the order.')
                    e.target.reset();
                }
            });
        e.preventDefault();


    }

    //     
    // };

    return (
        <div >
            <br />
            <br />
            <br />
            <h2> {a}   </h2>
            <p>{service.explanation}   </p>
            <h2>For purchasing please fillup your address</h2>
            <br />
            <Form onSubmit={handleAddUser} >
                <Row className="mb-3 px-5">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Name: {b}</Form.Label>
                        {/* <Form.Control type="" /> */}
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email: {user?.email}</Form.Label>
                        {/* <Form.Control type="password" placeholder="Password" /> */}
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3 " controlId="formGridAddress1">
                    <Form.Label required>Address</Form.Label>
                    <Form.Control placeholder="House no. Street no." required />
                </Form.Group>

                <Row className="mb-3 px-5 ">
                    <Form.Group as={Col} className="px-3" controlId="formGridCity">
                        <Form.Label >City</Form.Label>
                        <Form.Control required />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>Dhaka</option>

                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required />
                    </Form.Group>
                </Row>

                {/* <Form.Group className="mb-3 px-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}

                <button className="btn btn-primary" type="submit">
                    Submit
                </button>
            </Form>
            {/* <Button variant="info">Booking Service {serviceId}</Button> */}
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>

    );
};

export default Booking;