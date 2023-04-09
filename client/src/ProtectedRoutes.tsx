import  { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { Circles } from "react-loader-spinner";

export default function ProtectedRoutes() {
	const [isloading, setIsloading] = useState(true);
	const { user } = useContext(AuthContext);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsloading(false);
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	if (isloading) {
		return (
			<div className="flex items-center  justify-center w-96 sm:w-full max-w-screen-lg  mx-auto mb-7">
				<Circles
					height="80"
					width="80"
					color="#4fa94d"
					ariaLabel="circles-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</div>
		);
	}

	return user ? <Outlet /> : <Navigate to={"/form"} replace />;
}
