import { useContext } from "react";
import {AuthContext} from "../Provider/AuthProvider"
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user && user?.email) {
        return children;
    }
    return (
        
        <Navigate to={"/auth/login"}></Navigate>
    );
};

export default PrivateRoute;