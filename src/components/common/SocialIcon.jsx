import { signInWithPopup, GoogleAuthProvider,GithubAuthProvider,} from "firebase/auth";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import { auth } from "../../firebase/firebase.config";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SocialIcon = ({ setError }) => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  // Handle Google Btn
  const handleGoogleBtn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user);
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  // Handle Github Btn
  const handleGithubBtn=()=>{
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        setUser(user)
        navigate("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        setError(errorMessage)
      });
  }


  return (
    <div className="flex justify-between items-center">
      {/* Google icon */}
      <button
        onClick={handleGoogleBtn}
        className="cursor-pointer flex justify-between items-center gap-x-2 bg-[#C5172B] hover:bg-[#c21025da] py-[7px] px-[13px] rounded-[5px] text-white"
      >
        <FaGoogle />
        <p>Google</p>
      </button>

      {/* Facebook icon */}
      <button className="cursor-pointer flex justify-between items-center gap-x-2 bg-[#4181EF] hover:bg-[#4181efec] py-[7px] px-[13px] rounded-[5px] text-white">
        <FaFacebookF />
        <p>Facebook</p>
      </button>

      {/* Github icon */}
      <button onClick={handleGithubBtn}
      className="cursor-pointer flex justify-between items-center gap-x-2 bg-[#202936] hover:bg-[#202936e5] py-[7px] px-[13px] rounded-[5px] text-white">
        <FaGithub />
        <p>Github</p>
      </button>
    </div>
  );
};

export default SocialIcon;
