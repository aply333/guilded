import React from "react"
import BannerText from "./bannerText";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";
import Logout from "../../components/logout";

function Login() {
  const {loginWithRedirect, user, isAuthenticated} = useAuth0();

  return (
    <>
    <div className="mainContainer">
      <BannerText/>
      <button className="enterBtn" onClick={
        ()=>{loginWithRedirect()}
      }>Enter</button>
      <Logout/>
      <button onClick={()=>{
        console.log(JSON.stringify(user, null, 2))
        console.log(isAuthenticated)
      }}>Test User</button>
    </div>
    </>
  );
  }

export default Login;

