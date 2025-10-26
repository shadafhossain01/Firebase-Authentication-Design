import React from "react";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";

const SocialIcon = () => {
  return (
    <div className="flex justify-between items-center">
      {/* Google icon */}
      <button className="cursor-pointer flex justify-between items-center gap-x-2 bg-[#C5172B] hover:bg-[#c21025da] py-[7px] px-[13px] rounded-[5px] text-white">
        <FaGoogle />
        <p>Google</p>
      </button>
      {/* Facebook icon */}
      <button className="cursor-pointer flex justify-between items-center gap-x-2 bg-[#4181EF] hover:bg-[#4181efec] py-[7px] px-[13px] rounded-[5px] text-white">
        <FaFacebookF />
        <p>Facebook</p>
      </button>
      {/* Github icon */}
      <button className="cursor-pointer flex justify-between items-center gap-x-2 bg-[#202936] hover:bg-[#202936e5] py-[7px] px-[13px] rounded-[5px] text-white">
        <FaGithub />
        <p>Github</p>
      </button>
    </div>
  );
};

export default SocialIcon;
