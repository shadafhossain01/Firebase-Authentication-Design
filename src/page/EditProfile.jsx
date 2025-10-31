import ProfileCard from "../components/profile/ProfileCard";
import ProfileForm from "../components/profile/ProfileForm";

const EditProfile = () => {
  return <div className="flex gap-x-[140px] items-center h-[90vh] w-[900px] mx-auto">
  <div className="w-[45%]">
    <ProfileCard/>
  </div>
  <div className="w-[40%]">
    <ProfileForm/>
  </div>
  </div>;
};

export default EditProfile;
