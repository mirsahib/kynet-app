import React from "react";
import { Navigate } from "react-router-dom";

interface IProtectedRoute {
	user: string | boolean;
	children: JSX.Element;
}

export default function ProtectedRoute({ user, children }: IProtectedRoute) {
    if(!user){
        return <Navigate to={'/auth/signup'}  replace/>
    }
	return children
}
