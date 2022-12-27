import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Usefirebase from '../../../src/Hook/Usefirebase';
import auth from '../../../src/Hook/Usefirebase'
import useAuth from '../../Hook/useAuth';
import Loading from '../Loggedin/Loading';
// import { Route } from 'react-router-dom';
// import { Redirect } from 'react-router';




const RequiredAuth = ({ children }) => {
    // const [user, loading] = useAuthState(auth);
    // const { user, isLoading } = Usefirebase();
    const { user, isLoading } = useAuth();
    // const { user } = Usefirebase();
    // console.log(user);
    const location = useLocation();

    if (isLoading) {
        return <Loading></Loading>
    }

    if (!user.email) {
        return <Navigate to="/loggedin" state={{ from: location }} replace />;
    }
    return children;
}

//     

export default RequiredAuth;