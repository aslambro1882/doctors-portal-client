import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const location = useLocation
    const { user, admin, isLoading } = useAuth();
    if (isLoading) {
        return <CircularProgress />
    }
    if (user.email && admin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} />

};

export default AdminRoute;