import { FiArrowLeftCircle } from "react-icons/fi";
import ProfileCard from "../components/profile/ProfileCard";
import ProfileForm from "../components/profile/ProfileForm";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate=useNavigate()
  const handleBack=()=>{
    navigate(-1)
  }

  return (
    <div className="flex gap-x-[140px] items-center h-[85vh] w-[900px] mx-auto">
      <div className="w-[45%]">
        <FiArrowLeftCircle className="text-[28px] mb-[31px] cursor-pointer" onClick={handleBack}/>
        <ProfileCard />
      </div>
      <div className="w-[40%] mt-[31px]">
        <ProfileForm />
      </div>
    </div>
  );
};

export default EditProfile;
