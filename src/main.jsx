import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login.jsx";
import SignUp from "./page/SignUp.jsx";
import Home from "./page/Home.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import Private from "./page/Private.jsx";
import EditProfile from "./page/EditProfile.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <Routes>
        <Route  path="/" element={  <Private>    <App />   </Private>    } >
          <Route  index  element={  <Private>   <Home />   </Private>    }/>
        </Route>
        <Route path="/edit-profile" element={<Private> <EditProfile/> </Private>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </AuthProvider>
  </BrowserRouter>
);
