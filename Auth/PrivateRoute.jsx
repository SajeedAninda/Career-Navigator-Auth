import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    let { currentUser } = useContext(AuthContext);
    if (currentUser) {
        return children;
    }
    return <Navigate to="/login" />; 
};

export default PrivateRoute;
