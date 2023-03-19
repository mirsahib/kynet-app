import { Link } from "react-router-dom";

export default function Signup() {
	return (
		<div id="signup" className="authForm">
			<h1>Sign Up</h1>
			<form action="">
				<div className="formRow">
					<div className="fieldWrap bgWhite">
						<input type="text" placeholder="First Name*" />
					</div>
					<div className="fieldWrap bgWhite">
						<input type="text" placeholder="Last Name*" />
					</div>
				</div>
				<div className="fieldWrap bgWhite">
					<input type="text" placeholder="Email*" />
				</div>
				<div className="fieldWrap bgWhite">
					<input type="password" placeholder="Password*" />
				</div>
				<div className="fieldWrap bgWhite">
					<input type="password" placeholder="Confirm password*" />
				</div>
				<div className="buttonContainer">
					<button className="button button-block">Get Started</button>
				</div>
			</form>
		</div>
	);
}
