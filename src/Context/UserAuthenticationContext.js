import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
} from 'firebase/auth'
import { auth } from "../firebase";
const userAuthContext = createContext();
const UserAuthenticationContext = ({ children }) => {
    const [user, setUser] = useState()
    const signup = (email, password, name) => {
        return createUserWithEmailAndPassword(auth, email, password, name)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const signOutUser = () => {
       return signOut(auth);
    }

    const googleAuthentication = () => {
        const googleAuth = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            return (() => {
                unsubscribe();
            })
        })
    }, [])

    return <userAuthContext.Provider value={{ user, signup, login, signOutUser, googleAuthentication }}>{children}</userAuthContext.Provider>
}

export const useAuth = () => {
    return useContext(userAuthContext);
}


export default UserAuthenticationContext;