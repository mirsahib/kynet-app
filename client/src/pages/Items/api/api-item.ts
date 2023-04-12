import config from "../../../../config/config";

export interface IPublishField {
	catagory: string;
	location: string;
	title: string;
	description: string;
	price: number;
	image: any;
}

const publish = async (data: IPublishField) => {
	try {
		console.log("data", data);
		const formData = new FormData();
		let name: keyof typeof data;
		for (name in data) {
			if (name === "image") {
				formData.append(name, data[name][0]);
			}
			formData.append(name, data[name]);
		}
		let response = await fetch(`${config.host}/api/ads`, {
			method: "POST",
			credentials: "include",
			mode: "cors",
			body: formData,
		});
		return await response.json();
	} catch (error) {
		console.log(error);
	}
};

const readByCatagory = async (catagory: string, signal: AbortSignal) => {
	try {
		let response = await fetch(`${config.host}/api/ads/catagory/${catagory}`, {
			method: "GET",
			signal: signal,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data.ads;
	} catch (error) {
		console.log(error);
	}
};

const read = async (id: string, signal: AbortSignal) => {
	try {
		let response = await fetch(`${config.host}/api/ads/single/${id}`, {
			method: "GET",
			signal: signal,
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
		});
		const data = await response.json();
		return data.ads;
	} catch (error) {
		console.log(error);
	}
};

export { publish, readByCatagory, read };
