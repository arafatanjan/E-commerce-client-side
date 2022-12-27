
import React, { useRef } from 'react';
import { CircularProgress, Alert } from '@mui/material';
import initializeAuthentication from '../../Firebase/firebase.initialize';
import { getAuth, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { useState } from 'react';
import useAuth from '../../Hook/useAuth';
import { useNavigate, useLocation } from 'react-router-dom';
import './Loggedin.css';
import Usefirebase from '../../Hook/Usefirebase';
import { useForm } from "react-hook-form";


initializeAuthentication();


const auth = getAuth();



const Loggedin = () => {
    const { reset } = useForm();
    const { signInUsingGoole } = Usefirebase();
    const { user, registerUser, processlogin, error } = useAuth();
    // const navigate = useNavigate();
    // const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    // const [error, setError] = useState('');
    const [islogin, setIslogin] = useState(false);
    const [users, setUsers] = useState({
        name: "",
        email: "",
        uid: "",
    });
    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUsers({});
            })
    }

    const toggleLogin = e => {
        setIslogin(e.target.checked);
    }
    // const verifyEmail = () => {
    //     sendEmailVerification(auth.currentUser)
    //         .then(result => {
    //             // Email verification sent!
    //             // ...
    //             // console.log(result);
    //         });
    // }

    // const navigate = useNavigate();
    const handleRegitrtion = e => {


        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        // console.log(name, email, password);
        //     if (password.length < 6) {
        //         setError('Pasword must be 6')
        //         return;
        //     }
        //     if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
        //         setError('Password must contain 2 uppercase')
        //         return;
        //     }
        //registerUser(email, password);
        islogin ? processlogin(email, password) : registerUser(name, email, password);
        e.preventDefault();
        e.target.reset();

    }
    // function processlogin(email, password) {
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // Signed in 
    //             const user = result.email;
    //             const password = result.password;
    //             // (user);
    //             createNewUser(email, password);
    //             setError('');
    //             // ...

    //             // if (!user.email) {
    //             //     setError('Wrong Mail')
    //             //     return;
    //             // }
    //             if (user.email) {
    //                 navigate('/home');
    //             }
    //         })
    //         .catch((error) => {

    //             const errorMessage = error.message;
    //             // (errorMessage);
    //             setError(errorMessage)
    //             // return
    //         })
    //         .finally(() => setIsLoading(false));
    // }
    // function createNewUser(email, password) {
    //     setIsLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // Signed in 
    //             const user = result.user;
    //             // 
    //             setError('');
    //             // ...
    //             verifyEmail();
    //         })
    //         .catch((error) => {

    //             const errorMessage = error.message;
    //             setError(errorMessage);
    //             // ..
    //         })
    //         .finally(() => setIsLoading(false));
    // }
    // }


    return (

        <div className="container mx-auto w-50">
            {/* <h3 className='text-primary my-2'>Please {islogin ? 'Login' : 'Register'}</h3>

            <br />
            <br /> */}
            <h3 className='text-primary my-2'>Please {islogin ? 'Login' : 'Register'}</h3>
            {!isLoading && <form onSubmit={handleRegitrtion}>

                <div className="row mb-3" style={{ 'textAlign': 'left' }}>
                    <label htmlFor="" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                        <input type="" ref={nameRef} placeholder='Enter Name' className="form-control" id="" required />
                    </div>
                </div>
                <div className="row mb-3" style={{ 'textAlign': 'left' }}>
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input type="email" ref={emailRef} placeholder='Enter Email' className="form-control" id="inputEmail3" required />
                    </div>
                    {/* <div className="col-sm-10">
                        <input onBlur={handleEmailChange} type="email" ref={emailRef} placeholder='Enter Email' className="form-control" id="inputEmail3" required />
                    </div> */}
                </div>
                <div className="row mb-3" style={{ 'textAlign': 'left' }}>
                    <label htmlFor="inputPassword3" className="col-sm-2  col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input type="password" placeholder='Enter Password' ref={passwordRef} className="form-control" id="inputPassword3" required />
                    </div>
                    {/* <div className="col-sm-10">
                        <input onBlur={handlePasswordChange} type="password" placeholder='Enter Password' ref={passwordRef} className="form-control" id="inputPassword3" required />
                    </div> */}
                </div>
                <div>
                    <div className="col-sm-10 offset-sm-2 ">
                        <div className="form-check">
                            <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
                            <label className="form-check-label" htmlFor="gridCheck1">
                                Already Registered
                            </label>
                        </div>
                    </div>
                </div>
                {/* <div className="row mb-3 text-danger">{error}</div> */}
                <button type="submit" className="btn btn-primary">{islogin ? 'Login' : 'Register'}</button>
            </form>}
            {isLoading && <CircularProgress />}
            {user?.email && <Alert severity="info">You are registered successfully</Alert>}
            {error && <Alert severity="error">{error}</Alert>}
            <br />
            <br />
            <br />
            {/* <h2>Please Log in</h2> */}
            {/* {user?.email || user.uid ?
                <button onClick={handleSignOut} className='btn btn-primary m-2'>  Sign Out</button>
                :
                <div>
                    <button onClick={signInUsingGoole} className='btn btn-primary m-2'> Google Sign in</button>

                </div>
            } */}
            <br />

            <br />
            <br />
            <br />

        </div>


    );
};


export default Loggedin;