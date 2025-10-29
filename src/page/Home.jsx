import React from "react";
import { useAuthContext } from "../context/AuthContext";
import UserCard from "../components/userCard/UserCard";

const Home = () => {
  const {user}=useAuthContext()
  return (
    <div className="flex items-center flex-col gap-y-[50px]">
      <h2 className="text-center font-bold mt-[35px] italic text-[29px]">
        Welcome,
        <span className="text-blue-600">{user?.displayName || "User"}</span>
      </h2>
      <UserCard />
    </div>
  );
};

export default Home;
