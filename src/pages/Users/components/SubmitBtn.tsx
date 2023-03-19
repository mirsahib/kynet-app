import React from "react";

interface ButtonGroupProps extends React.ComponentProps<"button">{
    label:string
}

export default function SubmitBtn({label,ref,...rest}:ButtonGroupProps) {
	return (
		<div className="buttonContainer">
			<button ref={ref} {...rest} className="button button-block">{label}</button>
		</div>
	);
}
