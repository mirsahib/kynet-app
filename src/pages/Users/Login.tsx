import { Link } from "react-router-dom";
import AuthField from "./components/AuthField";
import SubmitBtn from "./components/SubmitBtn";

export default function Login() {
	return (
		<div id="signup" className="authForm">
			<h1>Login</h1>
			<form action="">
				<AuthField label="Email" type={"text"} placeholder="Email"/>
				<AuthField label="Password" type={"password"} placeholder="Password"/>
				<div className="linkWrap">
					<Link to="/">Forgot Password?</Link>
				</div>
				<SubmitBtn label="Login" />
			</form>
		</div>
	);
}
