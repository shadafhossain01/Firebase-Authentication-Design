import { signOut, updatePassword } from "firebase/auth";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { auth } from "../firebase/firebase.config";

const UpdatePassword = () => {
  const { user } = useAuthContext();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (newPassword != confirmPassword) {
      setMessage("Password Does Not Match");
      return;
    } else if (!newPassword || !confirmPassword) {
      setMessage("Password Must be Required ");
      return;
    } else if (newPassword.length < 6) {
      setMessage("Password length Must be 7 characters ");
      return;
    }
    updatePassword(user, newPassword)
      .then(() => {
        setMessage("Password Update Successfully");
        setConfirmPassword("");
        setNewPassword("");
        signOut(auth)
          .then(() => {})
          .catch((error) => {
            setMessage(error.message);
          });
      })
      .catch((error) => {
        setMessage(error.message);
      });

    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center h-[90vh] w-full">
      <div className=" shadow-lg p-[35px]">
        <form>
          <div className="mb-4">
            <label className="block mb-2 font-medium text-[19px]">
              New Password :
            </label>
            <input
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className=" border w-[280px] focus:outline-0 px-[7px] py-[5px] rounded-[5px] border-gray-400"
              type="text"
              placeholder="Enter New Password"
            />
          </div>
          <div className="mb-7">
            <label className="block mb-2 font-medium text-[19px]">
              Confirm Password :
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className=" border w-[280px] focus:outline-0 px-[7px] py-[5px] rounded-[5px] border-gray-400"
              type="text"
              placeholder="Confirm New Password"
            />
          </div>

          {/* Message Show Here */}
          {message.includes("Successfully") ? (
            <p className="font-[23px] italic text-green-500 mb-[15px]">
              {message}
            </p>
          ) : (
            <p className="font-[23px] italic text-red-500 mb-[15px]">
              {message}
            </p>
          )}
          <button
            onClick={handleUpdatePassword}
            className="bg-blue-500 w-full  py-[9px] font-bold text-white cursor-pointer rounded-[7px]"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
