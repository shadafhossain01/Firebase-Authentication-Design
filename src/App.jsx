import { Link, Outlet, useNavigate } from "react-router-dom"
import { useAuthContext } from "./context/AuthContext"
import { signOut } from "firebase/auth";
import { auth } from "./firebase/firebase.config";

function App() {
  const navigate=useNavigate()
  const {user,setUser}=useAuthContext()

  const handleSignOut=()=>{
    signOut(auth)
      .then(() => {
        setUser(null)
        navigate('/')
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  return (
    <>
      <div className=" py-8 ">
        <nav>
          <ul className="flex justify-center gap-x-5 ">
            <li className="font-medium italic text-[18px]">
              <Link to="/">Home</Link>
            </li>
            {!user && (
              <li className="font-medium italic text-[18px]">
                <Link to="/login">Login</Link>
              </li>
            )}
            <li className="font-medium italic text-[18px]">
              <button 
              onClick={handleSignOut} 
              className="cursor-pointer" >Logout</button>
            </li>
          </ul>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default App
