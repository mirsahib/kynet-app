import React from "react";

interface ButtonGroupProps extends React.ComponentProps<"button">{
    label:string
}

export default function SubmitBtn({label,ref,...rest}:ButtonGroupProps) {
	return (
		<div className="flex bg-red-500 justify-center my-6 sm:mx-3">
				<button ref={ref} {...rest}  className="bg-green-800 w-full py-3 text-white">
					{label}
				</button>
			</div>
	);
}
