import React from "react";
import { useAuthContext } from "../../context/AuthContext";

const UserCard = () => {
      const { user } = useAuthContext();
  return (
    <div className="w-full max-w-sm bg-white rounded-lg shadow-xl p-[35px] ">
      <div className="flex flex-col items-center pb-10">
        {user?.photoURL ? (
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={user.photoURL}
            alt="Profile image"
          />
        ) : (
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src="https://img.freepik.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2205.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Profile image"
          />
        )}

        <h5 className="mb-4 mt-3 text-xl font-medium">
          Name : {user?.displayName || "User"}
        </h5>
        <h5 className="mb-4 text-xl font-medium">Email : {user?.email}</h5>
        <span className="text-xl font-medium">
          Email Verified : {user?.emailVerified ? "Yes" : "No"}
        </span>
      </div>
    </div>
  );
};

export default UserCard;
