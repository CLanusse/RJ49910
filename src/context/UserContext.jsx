import { createContext, useEffect, useState } from "react";
import { auth, provider } from "../firebase/config";
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const UserContext = createContext()

export const UserProvider = ({children}) => {
    const [user, setUser] = useState({
        email: null,
        logged: false,
        uid: null
    })

    console.log(user)

    const login = (values) => {
        signInWithEmailAndPassword(auth, values.email, values.password)
    }

    const register = (values) => {
        createUserWithEmailAndPassword(auth, values.email, values.password)
    }

    const logout = () => {
        signOut(auth)
    }

    const googleLogin = () => {
        signInWithPopup(auth, provider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            console.log("User:" , user)
            if (user) {
                setUser({
                    email: user.email,
                    uid: user.uid,
                    logged: true
                })
            } else {
                setUser({
                    email: null,
                    uid: null,
                    logged: false
                }) 
            }
        })
    }, [])

    return (
        <UserContext.Provider value={{user, googleLogin, login, register, logout}}>
            {children}
        </UserContext.Provider>
    )
}