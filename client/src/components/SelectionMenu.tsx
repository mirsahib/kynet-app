import { ComponentProps } from "react";

interface InputGroupProps extends ComponentProps<"section"> {
	name: string;
    label:string
}

export default function TextAreadField({
	name,
    label,
	ref,
	...rest
}: InputGroupProps) {
	return (
		<div className="mb-4">
			<label htmlFor="" className="">
				{label}
			</label>
			<select name="" id="catagory" className="">
				<option value="mobile">Mobiles & Smartphone</option>
				<option value="home">Homes & livings</option>
				<option value="electronic">Electronics</option>
				<option value="car">Cars</option>
				<option value="property">Property</option>
				<option value="pet">Pets & animals</option>
				<option value="hobby">Hobbies, Sports & Kids</option>
			</select>
		</div>
	);
}
