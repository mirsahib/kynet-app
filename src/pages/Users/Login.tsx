import InputField from "../../components/InputField";
import SubmitBtn from "../../components/SubmitBtn";

export default function Login() {
	return (
		<form action="" className="sm:w-[500px] lg:w-full">
			<h1 className="my-4 text-center text-white text-3xl font-semibold">
				Log In
			</h1>
			<InputField label="Email" placeholder="Email Address" type={"text"}/>
			<InputField label="Password" placeholder="Password" type={"password"}/>
			<SubmitBtn label="Login"/>
		</form>
	);
}
