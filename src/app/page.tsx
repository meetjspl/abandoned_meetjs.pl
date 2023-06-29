import { Inter } from "next/font/google";

import { FaFacebook, FaDiscord } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import Logo from "./components/Logo";
import ExternalLink from "./components/ExternalLink";
const _inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center bg-purple p-10">
				<Logo />

				<ExternalLink
					button
					shape="pill"
					variant="social"
					className="bg-blue text-center text-white duration-300 ease-in hover:scale-110"
					href="/facebook"
				>
					{" "}
					<FaFacebook className="mb-1 mr-2 inline" />
					Facebook
				</ExternalLink>

				<ExternalLink
					button
					shape="pill"
					variant="social"
					className="bg-blue text-center text-white duration-300 ease-in hover:scale-110"
					href="/discord"
				>
					<FaDiscord className="mb-1 mr-2 inline" />
					Discord
				</ExternalLink>

				<ExternalLink
					button
					shape="pill"
					variant="social"
					className="bg-blue text-center text-white duration-300 ease-in hover:scale-110"
					href="/summit/2023"
				>
					<CgWebsite className="mb-1 mr-2 inline" />
					Summit
				</ExternalLink>
			</main>
		</>
	);
}
