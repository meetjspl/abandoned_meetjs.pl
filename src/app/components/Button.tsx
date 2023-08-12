import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles = "cursor-pointer bg-purple m-10  px-8 py-2 text-xl text-green";
const shapes = {
	square: "",
	pill: "rounded-full",
};
const variants = {
	default: "",
	social: twMerge(defaultStyles),
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	shape?: keyof typeof shapes;
	variant?: keyof typeof variants;
};

export default function Button({
	className,
	variant = "default",
	shape = "pill",
	...props
}: ButtonProps) {
	return (
		<button
			className={twMerge(shapes[shape], variants[variant], className, defaultStyles)}
			{...props}
		/>
	);
}
export { variants, shapes, defaultStyles };
