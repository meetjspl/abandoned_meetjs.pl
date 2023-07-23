import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
	return (
		<>
			<div
				className=" fixed z-20 flex w-full flex-row-reverse justify-around bg-purple opacity-90 md:bg-transparent"
				style={{ height: 68 }}
			>
				<Link className="flex text-end text-white " href={"#about"}>
					About meet.js
				</Link>
				<Link className="flex text-end text-white " href={"/"}>
					Summit 2023
				</Link>
				<Link className="flex text-end text-white " href={"/"}>
					Events
				</Link>
				<Link className="flex text-end text-white " href={"/"}>
					Join Us
				</Link>
				<Link className="flex text-end text-white " href={"/"}>
					Supprot
				</Link>
				<Image className="pl-4 pt-4" width={100} height={30} src="../logo-no-border.svg" alt={""} />
			</div>
		</>
	);
}
