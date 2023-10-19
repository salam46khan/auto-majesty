import PropTypes from "prop-types"
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({children}) => {
    const {user, loader} = useContext(AuthContext)
    if(loader){
        return <div className="h-screen w-full flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }
    
    if(user){
        return children
    }
    return <Navigate to={'/login'}></Navigate>
};
PrivateRouter.propTypes = {
    children: PropTypes.node
}
export default PrivateRouter;