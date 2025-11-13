import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import Loader from '../components/Loader';
import { AuthContext } from '../provider/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loader></Loader>
    }

    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivateRoute;