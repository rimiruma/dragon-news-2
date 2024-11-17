import { createContext, useEffect, useState } from "react";
import App from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext();
const auth = getAuth(App);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user);
    
      
    const createNewUser = (email, password) => {
        console.log(password);
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }


    const logOut = () => {
        return signOut(auth);
    }
    const authInfo = {
        user,
        setUser,
        createNewUser,
        logOut,
        userLogin,
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
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