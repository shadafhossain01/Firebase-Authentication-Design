import { sendPasswordResetEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate=useNavigate()
    const [message,setMessage]=useState("")
    const [email,setEmail]=useState()

    const handleResetPassword=(e)=>{
        e.preventDefault()

        sendPasswordResetEmail(auth, email)
          .then(() => {
            setMessage("Reset Password Sent to your Mail ")
            setTimeout(()=>{
                navigate("/")
            },4000)
          })
          .catch((error) => {
            const errorMessage = error.message;
            setMessage(errorMessage)
          });
    }

  return (
    <div className="flex justify-center items-center h-[90vh] w-full">
      <div className=" shadow-lg p-[35px]">
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-[19px]">
              Email :
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className=" border w-[280px] focus:outline-0 px-[7px] py-[5px] rounded-[5px] border-gray-400"
              type="text"
              placeholder="Enter your Email"
            />
          </div>

          {/* Message Show Here */}
          {message && (
            <p className="font-[23px] italic text-green-500 mb-[15px]">
              {message}
            </p>
          )}

          <button
            onClick={handleResetPassword}
            className="bg-blue-500 w-full  py-[9px] font-bold text-white cursor-pointer rounded-[7px]"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
