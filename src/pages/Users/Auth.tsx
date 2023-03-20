import { Link, Outlet, Route, Routes } from "react-router-dom";

export default function Auth() {
	return (
		<div className="flex items-center  justify-center w-96 sm:w-full max-w-screen-lg  mx-auto mb-7">
			<div className="flex flex-col lg:w-[520px] sm:w-[5/6] bg-green-600 ">
				<ul className="flex flex-row bg-green-500">
					<li className="flex w-[50%] bg-green-600">
						<Link
							to="signup"
							className="flex w-full justify-center py-4 text-white font-semibold"
						>
							Sign Up
						</Link>
					</li>
					<li className="flex w-[50%] ">
						<Link
							to="login"
							className="flex  w-full justify-center py-4 text-white font-semibold"
						>
							Log In
						</Link>
					</li>
				</ul>
				<Outlet/>
			</div>
		</div>
	);
}
