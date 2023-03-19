import { ComponentProps } from "react";


interface InputGroupProps extends ComponentProps<"input">{
    label:string;
}

export default function AuthField({label,ref,...rest}:InputGroupProps) {
	return (
		<div className="fieldWrap bgWhite">
			<input ref={ref} {...rest} />
		</div>
	);
}
