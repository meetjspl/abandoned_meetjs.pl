"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type HtmlHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";
import { useIsAboveBreakpoint } from "../hooks/useIsAboveBreakpoint";
import ExternalLink from "./ExternalLink";
import Socials from "./Socials";
type NavLink = {
	text: string;
	href: string;
	external?: true;
};
type NavProps = { links?: NavLink[] } & HtmlHTMLAttributes<HTMLDivElement>;
const itemStyles = "ease h-0.5 w-6 bg-white transition duration-300";
export default function Navigation({ links, ...props }: NavProps) {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const isAboveBreakpoint = useIsAboveBreakpoint({ breakpoint: 640 });
	const isOpen = isMobileMenuOpen && !isAboveBreakpoint;
	const toggleMenu = () => {
		setIsMobileMenuOpen(!isOpen);
		console.log(isOpen ? "open" : "closed");
	};

	return (
		<>
			<nav
				{...props}
				className={twMerge(
					"fixed z-20 flex h-16 w-full flex-row overflow-y-auto bg-purple sm:relative sm:flex sm:flex-col sm:gap-5 sm:overflow-y-visible sm:py-0 sm:text-sm",
					isOpen ? "h-full" : "h-16",
				)}
			>
				<div className="absolute mr-0 pl-4  pt-4">
					<Image width={100} height={30} src="../logo-no-border.svg" alt={""} />
				</div>
				<button
					onClick={toggleMenu}
					className={twMerge(
						" right-4 z-40 my-4 flex h-8 w-8 flex-col items-center justify-center gap-1.5 sm:hidden",
						isOpen ? "fixed" : "absolute",
					)}
				>
					<div className={twMerge(itemStyles, isOpen && "translate-y-2 rotate-45")} />
					<div className={twMerge(itemStyles, isOpen ? "opacity-0" : "opacity-100")} />
					<div className={twMerge(itemStyles, isOpen && "-translate-y-2 -rotate-45")} />
				</button>
				<div
					className={twMerge(
						"mb-auto flex  w-full flex-col items-center justify-center gap-10 self-center px-7 sm:flex-row sm:justify-end sm:gap-5",
					)}
				>
					<ul
						className={twMerge(
							"bg-primary fixed inset-0 z-30 flex flex-col items-center gap-5 overflow-y-auto py-3 text-xl text-white max-sm:py-20 sm:relative sm:my-1 sm:flex  sm:flex-row sm:items-center sm:justify-around  sm:overflow-y-visible ",
							isOpen ? "flex" : "hidden",
						)}
					>
						{links?.map((link) =>
							link.external ? (
								<li key={link.text}>
									<ExternalLink className="sm:px-7" href={link.href}>
										{link.text}
									</ExternalLink>
								</li>
							) : (
								<li key={link.text}>
									<Link className="sm:px-7" key={link.text} href={link.href}>
										{link.text}
									</Link>
								</li>
							),
						)}
					</ul>
					<Socials
						className={twMerge("s relative top-96 sm:static sm:flex", isOpen ? "block" : "hidden")}
					/>
				</div>
			</nav>
		</>
	);
}
