import { createContext, useEffect, useState } from "react";

const AuthContext  =createContext()

const AuthProvider = ({children})=>{
    const [ isLoggedIn, setIsLoggedIn] = useState(false)
    const [username, setUsername] = useState(null)

    useEffect(()=>{
        const login_status = localStorage.getItem('isLoggedIn')
        let user_info = localStorage.getItem('email')
        if (login_status === 'true' && user_info !== null) {
            setIsLoggedIn(true)
            user_info = JSON.parse(user_info)
            user_info = user_info.split('@')[0]
            setUsername(user_info)
        }
    }, [])
    return (
        <AuthContext.Provider value={{isLoggedIn, username, setIsLoggedIn, setUsername}}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext,
    AuthProvider
}