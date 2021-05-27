import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"


const AuthContext = React.createContext()

export function UseAuth() {
    return useContext(AuthContext)
}


export  function AuthProvider({children}) {
    
    const [currentUser,setcurrentUser] = useState()
    const[loading,setloading] = useState(true)

    function signup(email,password) {
        return auth.createUserWithEmailAndPassword(email,password)
    }



    function login(email,password)
    {
        return auth.signInWithEmailAndPassword(email,password)
    }

    function logout()
    {
        return auth.signOut()
    }

    function resetPassword(email)
{
    return auth.sendPasswordResetEmail(email)
}

    function updateEmail(newemail)
    {
        return currentUser.updateEmail(newemail)
    }

    function updatePassword(newpassword)
    {
        return currentUser.updatePassword(newpassword)
    }

    useEffect(() => {
        const unsubscribe =   auth.onAuthStateChanged(user => {
            setcurrentUser(user)
            setloading(false)

        })
        return unsubscribe
        
    },[])
    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword

    }
    return (
        <AuthContext.Provider value ={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
