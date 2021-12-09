import { useEffect } from "react";
import {useNavigate} from "react-router-dom";
import UserFront from "@userfront/react";


function useAuthCheck(){
    const navigate=useNavigate()
    useEffect(()=>{
        if(!UserFront.accessToken()){
            navigate("/login",{replace:true})
        }
    },[])
    return
}

export default useAuthCheck