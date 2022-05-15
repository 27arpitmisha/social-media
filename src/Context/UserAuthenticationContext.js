import { createContext, useContext, useState, useEffect } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../firebase";
const userAuthContext = createContext();
const UserAuthenticationContext = ({ children }) => {
    const [user, setUser] = useState()
    const signup = (email, password) => {
        console.log(email, password)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);

            return (() => {
                unsubscribe();
            })
        })
    }, [])

    return <userAuthContext.Provider value={{ user, signup, login }}>{children}</userAuthContext.Provider>
}

export const useAuth = () => {
    return useContext(userAuthContext);
}


export default UserAuthenticationContext;