import Image from "next/image";
import Link from "next/link";
import { type HtmlHTMLAttributes } from "react";
import ExternalLink from "./ExternalLink";

type NavLink = {
	text: string;
	href: string;
	external?: true;
};
type NavProps = { links?: NavLink[] } & HtmlHTMLAttributes<HTMLDivElement>;
export default function Navigation({ links, ...props }: NavProps) {
	return (
		<>
			<nav
				{...props}
				className=" fixed z-20 flex w-full flex-row-reverse  justify-around bg-purple opacity-90 "
				style={{ height: 68 }}
			>
				{links?.map((link) =>
					link.external ? (
						<ExternalLink
							key={link.text}
							className="flex flex-wrap   content-center text-white "
							href={link.href}
						>
							{link.text}
						</ExternalLink>
					) : (
						<Link
							key={link.text}
							className="flex flex-wrap   content-center text-white "
							href={link.href}
						>
							{link.text}
						</Link>
					),
				)}
				<Image
					className="justify-center pl-4  pt-4"
					width={100}
					height={30}
					src="../logo-no-border.svg"
					alt={""}
				/>
			</nav>
		</>
	);
}
