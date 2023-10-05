import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
export let AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    let googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    }
    let register=(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    let login=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)

    }





    let authorization={
        googleLogin,
        register,
        login
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;