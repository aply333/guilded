import React from "react";
import {Outlet} from "react-router-dom"
import TopBar from "../../components/topBar/topBar";
import useAuthCheck from "../../hooks/useAuthCheck";
import MainFeed from "./mainFeed";



function Dashboard(){
    useAuthCheck()
    return(
        <>
            <TopBar/>
            <Outlet/>
        </>
    )
}

export default Dashboard;