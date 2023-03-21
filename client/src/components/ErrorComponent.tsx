import React from "react";

interface ErrorProps{
    message: string;
}

export default function ErrorComponent({message}:ErrorProps) {
	return (
		<div className="mb-4 sm:mx-3">
            <p className="text-red-700">{message}</p>
		</div>
	);
}
