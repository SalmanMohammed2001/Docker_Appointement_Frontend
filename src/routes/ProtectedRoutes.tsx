import {useContext} from "react";
import {authContext} from "../context/AuthContext.tsx";
import {Navigate} from "react-router-dom";

// @ts-ignore
const  ProtectedRoutes=({children,allowRoutes})=>{
const{token,role}=useContext<any>(authContext);

const isAllowed=allowRoutes.includes(role);

const accessibleRoutes= token && isAllowed ? children : <Navigate to={"/login"} replace={true}/>

    return accessibleRoutes;

}
export  default ProtectedRoutes;