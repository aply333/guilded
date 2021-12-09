import Userfront from "@userfront/react";

Userfront.init("wbm4pgn4");
const LoginFormUfront = Userfront.build({
    toolId: "ddmalr"
  });

function LoginForm({ formToggler }) {
  const signUpClick = (e) => {
    e.preventDefault();
    formToggler();
  };

  return (
    <>
      <div className="login">
        <button onClick={(e) => signUpClick(e)} className="signupBtn">
          SIGN UP
        </button>
        <LoginFormUfront/>
      </div>

    </>
  );
}

export default LoginForm;
