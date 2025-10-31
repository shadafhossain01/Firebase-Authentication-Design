import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const ProfileForm = () => {
    const { user, updateUser } = useAuthContext();

    const [displayName,setDisplayName]=useState("")
    const [photo,setPhoto]=useState("")
    const [message,setMessage]=useState("")

    const handleUpdateProfile=(e)=>{
        e.preventDefault()
        const newUserData = {
          displayName: displayName || user.displayName,
          photoURL: photo || user.photoURL,
        };
         updateUser(newUserData);
        setMessage("User Profile Updated Successfully.")
        setPhoto("")
        setDisplayName("")
        setTimeout(()=>{
            setMessage("")
        },3000)
    }

  return (
    <div>
      <h2 className="font-medium mb-[30px] text-[25px] italic text-blue-600">
        Update Details
      </h2>

      {/* Success Message Show Here */}
    {
        message && <p className="font-[23px] italic text-green-500 mb-[15px]">{message}</p>
    }

      <form>
        {/* Display name Input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-[19px]">
            Display Name :
          </label>
          <input
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            type="text"
            placeholder="Enter Your Display Name"
            className=" border w-full focus:outline-0 px-[7px] py-[5px] rounded-[5px] border-gray-400"
          />
        </div>

        {/* Photo Input */}
        <div className="mb-4">
          <label className="block mb-2 font-medium text-[19px]">
            New Photo Url :
          </label>
          <input
            type="text"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
            placeholder="https://"
            className=" border w-full focus:outline-0 px-[7px] py-[5px] rounded-[5px] border-gray-400"
          />
        </div>

        {/* Update Profile Btn */}
        <button
          onClick={handleUpdateProfile}
          className="bg-blue-500 w-full mt-[11px] py-[9px] rounded-[7px] font-bold text-white cursor-pointer"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
