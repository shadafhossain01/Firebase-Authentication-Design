import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const ProfileCard = () => {
    const {user}=useAuthContext()
  return (
    <div className="shadow-xl p-[25px]">
      <div className="border-b px-12 pb-[17px]">
        <div className="text-center">
          {user?.photoURL ? (
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto"
              src={user.photoURL}
              alt="Profile image"
            />
          ) : (
            <img
              className="w-24 h-24 mb-3 rounded-full shadow-lg mx-auto"
              src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Profile image"
            />
          )}
          <h5 className=" mt-3 text-xl font-medium">
            Dispaly Name : {user?.displayName || "User"}
          </h5>
        </div>
      </div>
        <div className="flex flex-col gap-2  text-gray-800 mb-4 mt-[18px]">
          <h5 className="mb-3 text-xl font-medium">Email : {user?.email}</h5>
          <span className="text-xl font-medium">
            Email Verified : {user?.emailVerified ? "Yes" : "No"}
          </span>
      </div>
    </div>
  );
};

export default ProfileCard;
