import React, { createContext } from 'react';
import { getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
const auth = getAuth(app);
import { GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
let AuthContext = createContext(null);


const AuthProvider = ({ children }) => {
    let googleLogin = () => {
        return signInWithPopup(auth, provider);
    }





    let authorization={
        googleLogin
    }
    return (
        <AuthContext.Provider value={authorization}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;