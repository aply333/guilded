import Userfront from "@userfront/react";

Userfront.init("wbm4pgn4");

const SignupForm = Userfront.build({
  toolId: "knokam"
});

function RegisterForm({ formToggler }) {
  const loginClick = (e) => {
    e.preventDefault();
    formToggler();
  };



  return (
    <>
      <div className="login">
        <button
          onClick={(e) => {
            loginClick(e);
          }}
          className="signupBtn"
        >
          Login
        </button>
        <SignupForm/>
      </div>
    </>
  );
}

export default RegisterForm;
