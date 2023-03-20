import InputField from "../../components/InputField";
import SubmitBtn from "../../components/SubmitBtn";

export default function Signup() {
	return (
		<form action="" className="">
			<h1 className="my-5 text-center text-white text-3xl font-semibold">
				Sign Up
			</h1>
			<div className="flex flex-row justify-between">
				<InputField label="FirstName" placeholder="First Name" type={"text"}/>
				<InputField label="LastName" placeholder="Last Name" type={"text"}/>
			</div>
			<InputField label="Email" placeholder="Email Address" type={"text"}/>
			<InputField label="Password" placeholder="Password" type={"password"}/>
			<InputField label="Confirm Password" placeholder="Confirm Password" type={"password"}/>
			<SubmitBtn label="Get Started"/>
		</form>
	);
}
