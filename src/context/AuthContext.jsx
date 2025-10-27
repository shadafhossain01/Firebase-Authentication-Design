/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useState } from "react"

const AuthContext=createContext()

export const AuthProvider=({children})=>{
    const [user,setUser]=useState(null)
    const value={setUser,user}
    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>use(AuthContext)