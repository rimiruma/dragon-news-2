import { createContext, useEffect, useState } from "react";
import App from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(App);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    console.log(loading, user);
    
      
    const createNewUser = (email, password) => {
        setLoading(true);
        // console.log(password);
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email,password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
        loading,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])
    return (
    
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
        
};

export default AuthProvider;