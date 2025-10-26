import { Link, Outlet } from "react-router-dom"

function App() {

  return (
    <>
    <div className=" py-8 ">
    <nav>
      <ul className="flex justify-center gap-x-5 ">
        <li className="font-medium italic text-[18px]"><Link to="/">Home</Link></li>
        <li className="font-medium italic text-[18px]"><Link to="/login">Login</Link></li>
        <li className="font-medium italic text-[18px]"><Link to="/">Logout</Link></li>
      </ul>
    </nav>
    </div>
    <Outlet/>
    </>
  )
}

export default App
