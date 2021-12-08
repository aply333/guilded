import {useForm} from "react-hook-form";

function LoginForm({formToggler}){
    const signUpClick = e =>{
        e.preventDefault()
        formToggler()
    }
    const {register, handleSubmit} = useForm();
    const onSubmit = data => {
        console.log(data)
    }
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="login">
            <button onClick={e=>signUpClick(e)} className="signupBtn">
                SIGN UP
            </button>
            <div className="formDecoration">
                <hr />
            </div>
            <input {...register("email", {required:true})} 
                type='email'/>
            <input {...register("password", {required:true})} 
                type='password'/>
            <button className="loginBtn" type='submit'>
                Login
            </button>
        </form>
        </>
    )
}

export default LoginForm;