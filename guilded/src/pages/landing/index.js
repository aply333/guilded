import React from "react"
import BannerText from "./bannerText";
import FormContianer from "./formContainer";
import "./styles.css";

function Login() {
  return (
    <div className="mainContainer">
      <FormContianer/>
      <BannerText/>
    </div>
  );
  }

export default Login;

