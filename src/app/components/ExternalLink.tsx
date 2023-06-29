import NextLink, { type LinkProps as NextLinkProps } from "next/link";
import { twMerge } from "tailwind-merge";
import { variants, shapes, defaultStyles } from "./Button";

const buttonDefaultStyles = defaultStyles;

type ButtonStyleProps =
	| {
			shape: keyof typeof shapes;
			variant: keyof typeof variants;
			className?: string;
			button: true;
	  }
	| {
			button?: false;
			shape?: keyof typeof shapes;
			variant?: keyof typeof variants;
			className?: string;
	  };

type ExternalLinkProps = ButtonStyleProps & NextLinkProps;

function ExternalLink({
	children,
	className,
	button,
	shape,
	variant,
	...props
}: React.PropsWithChildren<ExternalLinkProps>) {
	let mergedClasses;
	if (button) {
		mergedClasses = twMerge(buttonDefaultStyles, variants[variant], shapes[shape], className);
	}

	return (
		<NextLink className={mergedClasses} target="_blank" prefetch={false} {...props}>
			{children}
		</NextLink>
	);
}

export default ExternalLink;
