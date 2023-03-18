import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Auth() {
	return (
		<div className="container main-container">
			<div className="formContainer">
				<ul className="tabGroup">
					<li className="tab active">
						<Link to="signup">Sign Up</Link>
					</li>
					<li className="tab">
						<Link to="login">Log In</Link>
					</li>
				</ul>
				<div className="tabContent">
                    <Outlet/>
				</div>
			</div>
		</div>
	);
}
