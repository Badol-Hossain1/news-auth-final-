import { createContext, useEffect, useState } from 'react'

import {
    getAuth,
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import app from '../firebase/firebase.config'

export const AuthContext = createContext()
const auth = getAuth(app)

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const CreateNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const out = async () => {
        try {
            await signOut(auth)
            console.log('User signed out successfully!')
        } catch (error) {
            console.error('Error signing out:', error)
        }
    }
    const loginWithUser = (email, pass) => {
        return signInWithEmailAndPassword(auth, email, pass)
    }

    const authInfo = {
        user,
        setUser,
        CreateNewUser,
        out,
        loginWithUser,
        loading,
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider
