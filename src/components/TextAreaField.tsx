import { ComponentProps } from "react";

interface InputGroupProps extends ComponentProps<"textarea"> {
	label: string;
}

export default function TextAreadField({
	label,
	ref,
	...rest
}: InputGroupProps) {
	return (
		<div className="lg:w-[600px] mb-4 sm:mx-3">
			<textarea {...rest} className="w-full outline-none pl-2 placeholder-slate-500"
                ref={ref}
			/>
		</div>
	);
}
