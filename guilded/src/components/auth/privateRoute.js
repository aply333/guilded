import React ,{useEffect} from "react";
import { useNavigate } from "react-router";
import {useAuth0} from "@auth0/auth0-react";

function PrivateRoute({children}){
    // const {isAuthenticated} = useAuth0();
    // let navigate = useNavigate()
    // useEffect(()=>{
    //     if(isAuthenticated===false){
    //         navigate("/",{replace:true})
    //     }
    // },[])
    return(
        <>
        {children}
        </>
    )
}

export default PrivateRoute(); 
