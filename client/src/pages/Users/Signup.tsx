import InputField from "../../components/InputField";
import SubmitBtn from "../../components/SubmitBtn";

import { useForm, SubmitHandler } from "react-hook-form";
import ErrorComponent from "../../components/ErrorComponent";
import { IUser ,signIn} from "./api/api-auth";
import { useNavigate } from "react-router-dom";

export default function Signup() {
	const { register, handleSubmit, watch,formState: { errors }} = useForm<IUser>();
	const navigate = useNavigate()
	const onSubmit: SubmitHandler<IUser> = async (data) =>{
		console.log(data)
		const response = await signIn(data)
		if(response.error){
			console.log(response.error)
		}else{
			navigate('/')
		}
	};


	const pass = watch("password");
	const cPass = watch("cPassword");

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="">
			<h1 className="my-5 text-center text-white text-3xl font-semibold">
				Sign Up
			</h1>
			<div className="flex flex-row justify-between">
				<InputField
					{...register("firstName")}
					required={true}
					placeholder="First Name"
					type={"text"}
				/>
				<InputField
					{...register("lastName")}
					required={true}
					placeholder="Last Name"
					type={"text"}
				/>
			</div>
			<InputField
				{...register("email")}
				required={true}
				placeholder="Email Address"
				type={"email"}
			/>
			<InputField
				{...register("password")}
				required={true}
				placeholder="Password"
				type={"password"}
			/>
			{errors.password && <ErrorComponent message="field is required"/>}
			<InputField
				{...register("cPassword")}
				required={true}
				placeholder="Confirm Password"
				type={"password"}
			/>
			{pass !== cPass && <ErrorComponent message="Password must match"/>}
			<SubmitBtn label="Get Started" />
		</form>
	);
}
