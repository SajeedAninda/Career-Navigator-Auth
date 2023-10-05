import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase.init';
const auth = getAuth(app);
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
export let AuthContext = createContext(null);
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    let [currentUser, setCurrentUser] = useState(null);
    let [loading, setLoading] = useState(true);
    let googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    let githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    let register = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)

    }
    let logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    useEffect(() => {
        let unSubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [])




    let authorization = {
        googleLogin,
        register,
        login,
        githubLogin,
        logOut,
        currentUser,
        loading
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;