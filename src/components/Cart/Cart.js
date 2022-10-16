import React, { useContext } from 'react';
import { AuthContext } from '../../UserContext/UserContext';

const Cart = () => {
    console.log(useContext(AuthContext))
    const { user  } = useContext(AuthContext);
    console.log(user)

    return (
        <div>
            <h1 className='font-bold text-3xl text-center'> Wellcome Mr.{user?.email} </h1>
        </div>
    );
}

export default Cart;
