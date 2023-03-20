import AuthField from "./components/AuthField";
import SubmitBtn from "./components/SubmitBtn";

export default function Signup() {
	return (
		<form action="" className="">
			<h1 className="my-5 text-center text-white text-3xl font-semibold">
				Sign Up
			</h1>
			<div className="flex flex-row justify-between">
				<AuthField label="FirstName" placeholder="First Name" type={"text"}/>
				<AuthField label="LastName" placeholder="Last Name" type={"text"}/>
			</div>
			<AuthField label="Email" placeholder="Email Address" type={"text"}/>
			<AuthField label="Password" placeholder="Password" type={"password"}/>
			<AuthField label="Confirm Password" placeholder="Confirm Password" type={"password"}/>
			<SubmitBtn label="Get Started"/>
		</form>
	);
}
