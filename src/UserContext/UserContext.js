import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();


const UserContext = ({children}) => {
    
    const auth = getAuth(app);
    
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true)
    
    const gogoleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInWithGoogle = () => {
        return signInWithPopup(auth, gogoleProvider)
    }

    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })

        return () =>{
            unsubscribe();
        }

    } ,[auth])

    const logOut = () =>{
        signOut(auth);
    }

    const authInfo = { user, loading,  createUser, signIn, logOut, signInWithGoogle }



    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
}

export default UserContext;
