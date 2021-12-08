import {useForm} from "react-hook-form"

function RegisterForm({formToggler}){
    const loginClick = (e) => {
        e.preventDefault();
        formToggler();
      };

    const {register, handleSubmit} = useForm()
    const onSubmit = data => {
        console.log(data)
    }

    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)} className="login">
            <button onClick={e=>{loginClick(e)}} className="signupBtn">Login</button>
            <input {...register("tag",{required:true})} 
                type="text" 
                className="tag" />
            <input {...register("email",{required:true})} 
                type="email" 
                className="name" />
            <input {...register("name",{required:true})} 
                type="text" 
                className="email" />
            <input {...register("pass2",{required:true})} 
                type="password" 
                className="password" />
            <input {...register("pass2",{required:true})} 
                type="text" 
                className="password" />
            <button type="submit" className="loginBtn">register</button>
        </form>
        </>
    )
}

export default RegisterForm;