import { ComponentProps } from "react";


interface InputGroupProps extends ComponentProps<"input">{
    label:string;
}

export default function AuthField({label,ref,...rest}:InputGroupProps) {
	return (
		<div className="mb-5 min-h-[10%] bg-white">
			<input ref={ref} {...rest}  className="h-10 pl-1"/>
		</div>
	);
}
