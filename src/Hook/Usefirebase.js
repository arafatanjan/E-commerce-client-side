import { useState, useEffect, useRef } from 'react';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, onAuthStateChanged, updateProfile } from "firebase/auth";
import auth from '../Firebase/firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import initializeAuthentication from '../Firebase/firebase.initialize';
import { useForm } from "react-hook-form";
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth';


initializeAuthentication();

const Usefirebase = () => {
    const { reset } = useForm();
    const [user, setUser] = useState({});
    // const [loginuser, setLoginuser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin, setAdmin] = useState(false);
    const [error, setError] = useState('');
    // let navigate = useNavigate();
    // let location = useLocation();
    // let from = location.state?.from?.pathname || "/";
    const auth = getAuth();

    function processlogin(email, password) {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                reset();
                // navigate(from, { replace: true });
                setError('');
                // navigate('/home');
                // Signed in 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {

                const errorMessage = error.message;
                // console.log(errorMessage);
                setError(errorMessage)
                // return
            })
            .finally(() => setIsLoading(false));
        reset();
    }

    const registerUser = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('');
                reset();
                const newUser = { email, displayName: name };
                setUser(newUser);
                // console.log(newUser);
                saveUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    reset();
                }).catch((error) => {

                });
                // Signed in 
                // navigate(from, { replace: true });
                reset();
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorMessage)
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoole = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleuser = result.user;
                // console.log(googleuser);
                const { displayName, email } = result.user;
                const user = {
                    name: displayName,
                    email: email,

                };
                setUser(user);
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User

                setUser(user);

                // ...
            } else {
                // User is signed out
                setUser({})

            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    useEffect(() => {
        fetch(`https://arafatanjan-ecommerce.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
                // console.log(data)
            })
    }, [user.email])

    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://arafatanjan-ecommerce.onrender.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    return {
        processlogin,
        user,
        admin,
        error,
        signInUsingGoole,
        logout,
        registerUser,
        isLoading,
        // handleGithubSignIn
    };

};

export default Usefirebase;