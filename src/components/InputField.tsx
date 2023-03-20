import { ComponentProps } from "react";

interface InputGroupProps extends ComponentProps<"input"> {
	label: string;
}

export default function InputField({ label, ref, ...rest }: InputGroupProps) {
	return (
		<div className="bg-white mb-4 sm:mx-3">
			<input
				ref={ref}
				{...rest}
				className="pl-2 py-2 outline-none w-full placeholder-slate-500"
			/>
		</div>
	);
}
