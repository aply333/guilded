import {useForm} from "react-hook-form";
import RegisterForm from "./registerForm";

function LoginForm(){
    const signUpClick = e =>{
        e.preventDefault()

    }
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
    }

    return(
        <>
        <RegisterForm/>
        <form onSubmit={handleSubmit(onSubmit)} className="login">
            <button onClick={e=>signUpClick(e)} className="signupBtn">SIGN UP</button>
            <div className="formDecoration">
                <hr />
            </div>
            <input {...register("email", {required:true})} type='email'/>
            <input {...register("password", {required:true})} type='password'/>
            <button className="loginBtn" type='submit'>Login</button>
        </form>
        </>
    )
}

export default LoginForm;