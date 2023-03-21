import React, { PropsWithoutRef, forwardRef } from "react";

interface InputGroupProps
	extends PropsWithoutRef<JSX.IntrinsicElements["input"]> {}

const InputField = forwardRef<HTMLInputElement, InputGroupProps>(
	({ children, ...props }, ref) => {
		return (
			<div className="bg-white mb-4 sm:mx-3">
				<input
					{...props}
					ref={ref}
					className="pl-2 py-2 outline-none w-full placeholder-slate-500"
				/>
			</div>
		);
	}
);

export default InputField