import { type ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const defaultStyles = "cursor-pointer m-10 w-60 px-9  py-5 text-2xl";
const shapes = {
	square: "",
	pill: "rounded-full ",
};
const variants = {
	default: "primary",
	social: twMerge(defaultStyles, "primary"),
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
	shape?: keyof typeof shapes;
	variant?: keyof typeof variants;
};

export default function Button({
	className,
	variant = "default",
	shape = "square",
	...props
}: ButtonProps) {
	return <button className={twMerge(shapes[shape], variants[variant], className)} {...props} />;
}
