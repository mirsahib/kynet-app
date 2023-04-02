import React, { createContext, SetStateAction, useState } from "react";
import { json } from "stream/consumers";

interface AuthContextInterface {
    user:boolean|null,
    setUser:React.Dispatch<SetStateAction<boolean|null>>
    saveUser:(userId:string)=>void
    deleteUser:()=>void
}
const defaultAuthContext: AuthContextInterface = {
    user:null,
    setUser:()=>{},
    saveUser:()=>{},
    deleteUser:()=>{},
};

export const AuthContext = createContext<AuthContextInterface>(
	defaultAuthContext
);

const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [user,setUser] = useState<boolean|null>(null)

    const saveUser = (userId:string)=>{
        setUser(true)
        sessionStorage.setItem('userId', userId)
    }
    const deleteUser = ()=>{
        setUser(false)
        sessionStorage.setItem('userId', "")
    }

	return (
		<AuthContext.Provider value={{ user,saveUser,deleteUser,setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
