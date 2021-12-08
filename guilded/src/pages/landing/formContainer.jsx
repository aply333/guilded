import { useState } from "react";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

function FormContianer() {
  const [loginState, setLoginState] = useState(true);

  const toggleFormHandler = () => {
    if (loginState === false) {
      setLoginState(true);
    } else {
      setLoginState(false);
    }
  };

  return (
    <>
      {loginState ? (
        <LoginForm formToggler={toggleFormHandler} />
      ) : (
        <RegisterForm formToggler={toggleFormHandler}/>
      )}
    </>
  );
}

export default FormContianer;
