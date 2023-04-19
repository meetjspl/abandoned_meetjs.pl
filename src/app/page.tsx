import { Inter } from "next/font/google";

const _inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<h1>Hello meetjs.pl!</h1>
		</main>
	);
}
