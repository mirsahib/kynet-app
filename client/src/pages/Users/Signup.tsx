import InputField from "../../components/InputField";
import SubmitBtn from "../../components/SubmitBtn";

import { useForm, SubmitHandler } from "react-hook-form";
import ErrorComponent from "../../components/ErrorComponent";

type IFormInput = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	cPassword: string;
};

export default function Signup() {
	const { register, handleSubmit, watch,formState: { errors }} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
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
