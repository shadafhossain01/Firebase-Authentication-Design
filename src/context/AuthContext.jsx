/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, use, useEffect, useState } from "react" 
import {auth} from "../firebase/firebase.config"
import { onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"

const AuthContext=createContext()

export const AuthProvider=({children})=>{

    const [user,setUser]=useState(null)
    const [isLoading,setIsLoading]=useState(true)
    const navigate=useNavigate()
    const value={setUser,user}

    useEffect(() => {
      const subscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
          setIsLoading(false)
          navigate("/")
        } else {
          setUser(null);
        }
      });

      return () => subscribe();
    }, []);

    if(user && isLoading){
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-10 animate-[spin_0.8s_linear_infinite] fill-blue-600 block mx-auto"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
            data-original="#000000"
          />
        </svg>
      );
    }

    return(
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>use(AuthContext)