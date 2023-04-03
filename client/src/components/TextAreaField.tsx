import { ComponentProps, forwardRef, PropsWithRef } from "react";

interface InputGroupProps
	extends PropsWithRef<JSX.IntrinsicElements["textarea"]> {}

const TextAreadField = forwardRef<HTMLTextAreaElement, InputGroupProps>(
	({ children, ...props }, ref) => {
		return (
			<div className="lg:w-[600px] mb-4 sm:mx-3">
				<textarea
					ref={ref}
					{...props}
					className="w-full outline-none pl-2 placeholder-slate-500"
				/>
			</div>
		);
	}
);

export default TextAreadField
