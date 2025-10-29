import React, { Children } from "react";
import { useAuthContext } from "../context/AuthContext";
import LoginForm from "../components/login/LoginForm";

const Private = ({children}) => {
   const {user}= useAuthContext()
   if(!user) return <LoginForm/>
  return <>
  {children}
  </>;

};

export default Private;
