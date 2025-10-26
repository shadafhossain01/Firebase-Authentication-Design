import { Link } from "react-router-dom";
import SocialIcon from "../common/SocialIcon";

const LoginForm = () => {
  return (
    <div className="flex justify-center items-center min-h-[90vh] flex-col">
      <div className="bg-white shadow-xl p-10 rounded-[10px]">
        <h2 className="font-bold text-center text-2xl mb-8">Please Login</h2>

        {/* Form Start Here */}
        <form>
          {/* Email Field */}
          <div className="space-y-3">
            <label className="block font-medium">Email:</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mb-[15px] w-[350px] border border-gray-300 focus:outline-none py-[5px] px-[15px] rounded-[5px] focus:border-blue-500"
            />
          </div>
          {/* Password Field */}
          <div className=" space-y-3">
            <label className="block font-medium">Password:</label>
            <input
              type="text"
              placeholder="Enter your password"
              className="mb-[25px] w-[350px] border border-gray-300 focus:outline-none py-[5px] px-[15px] rounded-[5px] focus:border-blue-500"
            />
          </div>
          {/* Login Btn */}
          <button className="btn bg-blue-600 block w-full p-[7px] rounded-[5px] cursor-pointer text-white">
            Login
          </button>
        </form>

        <p className="font-light text-center my-5 text-[17px]">Or login with</p>

        {/* Social Icons */}
        <SocialIcon />

        <p className=" text-center mt-[27px] text-[16px]">Don't have any account? Plaese <Link to="/signup" className="text-blue-500 font-medium">Sign up</Link></p>

      </div>
    </div>
  );
};

export default LoginForm;
