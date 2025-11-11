import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const register = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignin = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

     const updateUserProfile = (displayName, photoURL) => {
            return updateProfile(auth.currentUser, {displayName, photoURL})
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        register,
        signIn,
        googleSignin,
        logOut,
        updateUserProfile,
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currUser) => {
        // console.log(currUser);
        setUser(currUser);
        setLoading(false);
    });
    return () =>{
        unsubscribe();
    } 
    },[])
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;

