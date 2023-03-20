import { Link } from "react-router-dom";
import AuthField from "./components/AuthField";
import SubmitBtn from "./components/SubmitBtn";

export default function Signup() {
	return (
		<form action="" className="">
			<h1 className="my-4 text-center text-white text-3xl font-semibold">
				Sign Up
			</h1>
			<div className="flex flex-row justify-between">
				<div className="bg-white mb-4 sm:mx-3">
					<input
						type="text"
						placeholder="First Name"
						className="pl-2 py-2 outline-none w-full"
					/>
				</div>
				<div className="bg-white mb-4 sm:mx-3">
					<input
						type="text"
						placeholder="Last Name"
						className="pl-2 py-2 outline-none w-full"
					/>
				</div>
			</div>
			<div className="bg-white mb-4 sm:mx-3">
				<input
					type="text"
					placeholder="Email Address "
					className="pl-2 py-2 outline-none w-full"
				/>
			</div>
			<div className="bg-white mb-4 sm:mx-3">
				<input
					type="password"
					placeholder="Password"
					className="pl-2 py-2 outline-none w-full"
				/>
			</div>
			<div className="bg-white mb-4 sm:mx-3">
				<input
					type="password"
					placeholder="Confirm Password"
					className="pl-2 py-2 outline-none w-full"
				/>
			</div>
			<div className="flex bg-red-500 justify-center my-6 sm:mx-3">
				<button className="bg-green-800 w-full py-3 text-white">
					Get Started
				</button>
			</div>
		</form>
	);
}
