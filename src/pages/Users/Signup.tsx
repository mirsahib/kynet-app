import { Link } from "react-router-dom";
import AuthField from "./components/AuthField";
import SubmitBtn from "./components/SubmitBtn";

export default function Signup() {
	return (
		<div id="signup" className="authForm">
			<h1>Sign Up</h1>
			<form action="">
				<div className="formRow">
					<AuthField label="FirstName" type={"text"} placeholder="First Name"/>
					<AuthField label="LastName"  type={"text"} placeholder="Last Name"/>
				</div>
				<AuthField label="Email" type={"text"} placeholder="Email"/>
				<AuthField label="Password" type={"password"} placeholder="Password"/>
				<AuthField label="Confirm Password" type={"password"} placeholder="Confirm Password"/>
				<SubmitBtn label="Get Started"/>
			</form>
		</div>
	);
}
