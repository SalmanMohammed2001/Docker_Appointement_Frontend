import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Doctor from "../pages/Doctor/Doctor.tsx";
import DoctorDetails from "../pages/Doctor/DoctorDetails.tsx";
import Login from "../pages/Login.tsx";
import SignUp from "../pages/SignUp.tsx";
import Contact from "../pages/Contact.tsx";
import Service from "../pages/Service.tsx";



const routers  =()=>{
        return(
            <div>
                  <Routes>
                      <Route path="/"  element={<Home/>} />
                      <Route path="/home"  element={<Home/>} />
                      <Route path="/doctors"  element={<Doctor/>} />
                      <Route path="/doctors/:id"  element={<DoctorDetails/>} />
                      <Route path="/Login"  element={<Login/>} />
                      <Route path="/register"  element={<SignUp/>} />
                      <Route path="/contact"  element={<Contact/>} />
                      <Route path="/service"  element={<Service/>} />
                  </Routes>
            </div>
        )
}
export default routers;

