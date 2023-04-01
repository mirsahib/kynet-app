import InputField from "../../components/InputField";
import SubmitBtn from "../../components/SubmitBtn";
import { useForm, SubmitHandler } from 'react-hook-form';
import { IUser, logIn } from "./api/api-auth";
import { useNavigate } from "react-router-dom";
import { authenticated } from "./function/auth-helper";



export default function Login() {
	const {register,handleSubmit} = useForm<IUser>()
	
	const navigate = useNavigate()

	const onSubmit:SubmitHandler<IUser> =async (data) =>{
		console.log(data)
		const response = await logIn(data)
		if(!response.error){
			console.log(response)
			authenticated(response.id)
		}else{
			console.log(response)			
		}
	};
  
	return (
		<form onSubmit={handleSubmit(onSubmit)} className="sm:w-[500px] lg:w-full">
			<h1 className="my-4 text-center text-white text-3xl font-semibold">
				Log In
			</h1>
			<InputField {...register("email")} required={true} placeholder="Email Address"  type={"email"}/>
			<InputField {...register("password")} required={true} placeholder="Password" type={"password"}/>
			<SubmitBtn label="Login"/>
		</form>
	);
}
