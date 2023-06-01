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
			<main className="flex min-h-screen flex-col items-center bg-purple p-10">
				<Logo />
				<Button
					shape="pill"
					variant="social"
					className=" bg-blue text-white duration-300 ease-in hover:scale-110"
				>
					<Link href="/facebook">
						{" "}
						<FaFacebook className="mb-1 mr-2 inline" />
						Facebook
					</Link>
				</Button>

				<Button
					shape="pill"
					variant="social"
					className="bg-blue text-white duration-300 ease-in hover:scale-110"
				>
					<Link href="/discord">
						<FaDiscord className="mb-1 mr-2 inline" />
						Discord
					</Link>
				</Button>

				<Button
					shape="pill"
					variant="social"
					className="bg-blue text-white duration-300 ease-in hover:scale-110"
				>
					<Link href="/summit/2023">
						<CgWebsite className="mb-1 mr-2 inline" />
						Summit
					</Link>
				</Button>
			</main>
		</>
	);
}
