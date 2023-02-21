import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
	return (
		<button
			className="bg-slate-200 px-3 py-1 rounded cursor-pointer text-lg font-medium
		hover:bg-slate-300"
			{...rest}
		>
			{children}
		</button>
	);
}
