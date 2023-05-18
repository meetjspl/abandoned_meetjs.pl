import { Inter } from "next/font/google";

import { FaFacebook, FaDiscord } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Link from "next/link";
import Logo from "./components/Logo";
import Button from "./components/Button";
const _inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-10 ">
				<Logo />
				<Link href="https://facebook.com/meetjspl/">
					<Button shape="pill" variant="social" className=" duration-300 ease-in hover:scale-110">
						<FaFacebook className="mb-1 mr-2 inline  " />
						Facebook
					</Button>
				</Link>
				<Link href="https://discord.gg/UycCSpRh6j">
					<Button shape="pill" variant="social" className=" duration-300 ease-in hover:scale-110">
						<FaDiscord className="mb-1 mr-2 inline " />
						Discord
					</Button>
				</Link>
				<Link href="https://summit.meetjs.pl/2023/">
					<Button shape="pill" variant="social" className=" duration-300 ease-in hover:scale-110">
						<CgWebsite className="mb-1 mr-2 inline " />
						Summit
					</Button>
				</Link>
			</main>
		</>
	);
}
