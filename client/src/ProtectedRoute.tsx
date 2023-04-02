import React, { useContext, useEffect } from "react";
// import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "./context/AuthContext";
import { Circles } from "react-loader-spinner";

interface IProtectedRoute {
	children: JSX.Element;
}

export default function ProtectedRoute({ children }: IProtectedRoute) {
	const { user,setUser } = useContext(AuthContext);
	const navigate = useNavigate();

	useEffect(() => {
        console.log('user state',user)
		if (user === null){
            setUser(false)
        };
		if (!user) {
			navigate("/auth/");
		}
	}, [user, navigate]);

	if (user === null) {
		return (
			<Circles
				height="80"
				width="80"
				color="#4fa94d"
				ariaLabel="circles-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		);
	}

	return children;
}
