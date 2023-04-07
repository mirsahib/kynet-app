import config from '../../../../config/config'
export interface IUser {
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
	phone:string;
	cPassword?: string;
}

const signIn = async (data: IUser) => {
	try {
        const {cPassword,...user} = data 
		let response = await fetch(`/api/users`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
        return await response.json()
	} catch (error) {
        console.log(error)
    }
};

const logIn = async (data:IUser) => {
    try {
        let response = await fetch(`/auth/login`, {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		return await response.json()
    } catch (error) {
        console.log(error)
    }
};

export {
	signIn,
	logIn,
};
