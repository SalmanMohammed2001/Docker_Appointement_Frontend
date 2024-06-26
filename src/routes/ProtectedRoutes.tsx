import {useContext} from "react";
import {authContext} from "../context/AuthContext.tsx";
import {Navigate} from "react-router-dom";

// @ts-ignore
const  ProtectedRoutes=({children,allowRoles})=>{

    const {token,role}=useContext(authContext);

    const  isAllowed= allowRoles.includes(role)
    const accessibleRoute= token && isAllowed ? children :<Navigate to={"/login"} replace={true}/>

    return accessibleRoute;

}
export  default ProtectedRoutes;