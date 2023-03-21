import InputField from "../../components/InputField";
import SubmitBtn from "../../components/SubmitBtn";

import { useForm, SubmitHandler } from 'react-hook-form';

type IFormInput = {
  email: string;
  password: string;
};



export default function Login() {
	const {register,handleSubmit} = useForm<IFormInput>()
	const onSubmit:SubmitHandler<IFormInput> = data=>console.log(data)
  
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
