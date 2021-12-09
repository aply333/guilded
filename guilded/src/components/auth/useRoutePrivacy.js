import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";


function useRoutePrivacy(){
    const {isAuthenticated} = useAuth0();
    let navigate = useNavigate()
    useEffect(()=>{
        if(isAuthenticated === false){
            navigate("/", {replace: true})
        }
    },[])
    return;
}

export default useRoutePrivacy