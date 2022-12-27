import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import Usefirebase from '../../../src/Hook/Usefirebase';
import auth from '../../../src/Hook/Usefirebase'
import useAuth from '../../Hook/useAuth';
import Loading from '../Loggedin/Loading';

const AdminRoute = ({ children }) => {
    const { user, isLoading, admin } = useAuth();
    const location = useLocation();

    if (!user.email && !admin) {
        return <Navigate to="/home" state={{ from: location }} replace />;
    }
    return children;


};

export default AdminRoute;