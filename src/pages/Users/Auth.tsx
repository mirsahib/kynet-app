import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Auth() {
	return (
		<div className="flex items-center  justify-center w-96 md:w-full max-w-screen-lg  mx-auto mb-6">
			<div className="formContainer">
				<ul className="tabGroup">
					<li className="tab active">
						<Link to="signup">Sign Up</Link>
					</li>
					<li className="tab">
						<Link to="login">Log In</Link>
					</li>
				</ul>
				<div className="tabContent bg-green-700">
                    <Outlet/>
				</div>
			</div>
		</div>
	);
}
