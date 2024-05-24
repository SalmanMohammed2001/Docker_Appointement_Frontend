import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home.tsx";
import Doctors from "../pages/Doctor/Doctors.tsx";
import DoctorDetails from "../pages/Doctor/DoctorDetails.tsx";
import Login from "../pages/Login.tsx";
import SignUp from "../pages/SignUp.tsx";
import Contact from "../pages/Contact.tsx";
import Service from "../pages/Service.tsx";
import MyAccount from "../dashboard/user-account/MyAccount.tsx";
import Dashboard from "../dashboard/doctor-account/Dashboard.tsx";
import ProtectedRoutes from "./ProtectedRoutes.tsx";



const routers  =()=>{
        return(
            <div>
                  <Routes>
                      <Route path="/"  element={<Home/>} />
                      <Route path="/home"  element={<Home/>} />
                      <Route path="/doctors"  element={<Doctors/>} />
                      <Route path="/doctors/:id"  element={<DoctorDetails/>} />
                      <Route path="/Login"  element={<Login/>} />
                      <Route path="/register"  element={<SignUp/>} />
                      <Route path="/contact"  element={<Contact/>} />
                      <Route path="/service"  element={<Service/>} />
                      <Route path="/users/profile/me"  element={<ProtectedRoutes allowRoutes={['patient']}> <MyAccount/> </ProtectedRoutes> } />
                      <Route path="/doctors/profile/me"  element={ <ProtectedRoutes allowRoutes={['doctor']}> <Dashboard/> </ProtectedRoutes>} />
                  </Routes>
            </div>
        )
}
export default routers;

