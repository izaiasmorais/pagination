import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children?: ReactNode;
	extraStyle?: string;
}

export function Button({ children, extraStyle, ...rest }: ButtonProps) {
	return (
		<button
			className={`bg-slate-200 hover:bg-slate-300 h-8 w-[43px] rounded cursor-pointer
			text-lg flex items-center justify-center font-medium ${extraStyle}`}
			{...rest}
		>
			{children}
		</button>
	);
}
