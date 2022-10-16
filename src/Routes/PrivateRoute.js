import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';

const PrivateRoute = ({children}) => {
    const { user, loading} = useContext(AuthContext);
    if(loading){
        return <div className='h-screen w-full bg-indigo-500 flex justify-center align-middle'>
                    <button type="button" class=" text-white px-3 py-2 ">
                        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
                        
                        </svg>
                        Processing...
                    </button>
                </div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/login' ></Navigate>
}

export default PrivateRoute;
