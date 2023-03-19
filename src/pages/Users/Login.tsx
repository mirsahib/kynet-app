import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<div id="signup" className="authForm">
			<h1>Login</h1>
			<form action="">
				
				<div className="fieldWrap bgWhite">
					<input type="text" placeholder="Email*" />
				</div>
				<div className="fieldWrap bgWhite">
					<input type="password" placeholder="Password*" />
				</div>
				<div className="linkWrap">
					<Link to="/">Forgot Password?</Link>
				</div>
				<div className="buttonContainer">
					<button className="button button-block">Login</button>
				</div>
			</form>
		</div>
	);
}
