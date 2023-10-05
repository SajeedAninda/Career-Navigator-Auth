import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let { currentUser, loading } = useContext(AuthContext);
    let location = useLocation();

    if (loading) {
        return <p className='text-6xl font-bold'>Loading...</p>
    }
    if (currentUser) {
        return children;
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;
