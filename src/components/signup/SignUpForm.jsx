import { Link, useNavigate } from "react-router-dom";
import SocialIcon from "../common/SocialIcon";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const SignUpForm = () => {
  const { setUser } = useAuthContext();
  const navigate=useNavigate()
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[error,setError]=useState('')

  // handle SingUp Button
  const handleSignUp=(e)=>{
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        setUser(user)
        setError("")
        setEmail("")
        setPassword("")
        navigate('/')
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage)
        setEmail("");
        setPassword("");
      });

  }

  return (
    <div className="flex justify-center items-center min-h-[80vh] flex-col">
      <div className="bg-white shadow-xl p-10 rounded-[10px]">
        <h2 className="font-bold text-center text-2xl mb-8">Sign up Form</h2>

        {/* Form Start Here */}
        <form>
          {/* Email Field */}
          <div className="space-y-3">
            <label className="block font-medium">Email:</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="mb-[15px] w-[350px] border border-gray-300 focus:outline-none py-[5px] px-[15px] rounded-[5px] focus:border-blue-500"
            />
          </div>
          {/* Password Field */}
          <div className=" space-y-3">
            <label className="block font-medium">Password:</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="Enter your password"
              className="mb-[25px] w-[350px] border border-gray-300 focus:outline-none py-[5px] px-[15px] rounded-[5px] focus:border-blue-500"
            />
          </div>

          {/* Error Text shown here */}

          {error && <p className="mb-[15px] italic text-red-700">{error}</p>}

          {/* Signup Btn */}
          <button
            className="btn bg-blue-600 block w-full p-[7px] rounded-[5px] cursor-pointer text-white"
            onClick={handleSignUp}
          >
            Sign up
          </button>
        </form>

        <p className="font-light text-center my-5 text-[12px]">
          Or Sign up with
        </p>

        {/* Social Icons */}
        <SocialIcon setError={setError} />

        <p className=" text-center mt-[27px] text-[16px]">
          Do have any account? Plaese{" "}
          <Link to="/login" className="text-blue-500 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
