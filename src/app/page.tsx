import { Inter } from 'next/font/google'

import { FaFacebook, FaDiscord } from 'react-icons/fa'
import { CgWebsite } from 'react-icons/cg'
import Link from 'next/link'
import Logo from './components/Logo'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<>
			<main className="flex min-h-screen flex-col items-center p-10 ">
				<Logo />
				<Link href="https://facebook.com/meetjspl/">
					<button className=" text-2xl rounded-full bg-blue-600 px-9 py-5 text-white cursor-pointer hover:scale-110 ease-in duration-300 button-blue w-60 m-10">
						<FaFacebook className="mr-2 inline mb-1  " />
						Facebook
					</button>
				</Link>
				<Link href="https://discord.gg/UycCSpRh6j">
					<button className=" text-2xl rounded-full bg-blue-600 px-9 p-5 text-white cursor-pointer hover:scale-110 ease-in duration-300 button-blue w-60 m-10">
						<FaDiscord className="mr-2 inline mb-1 " />
						Discord
					</button>
				</Link>
				<Link href="https://summit.meetjs.pl/2023/">
					<button className=" text-2xl rounded-full bg-blue-600 px-9 p-5 text-white cursor-pointer hover:scale-110 ease-in duration-300 button-blue w-60 m-10">
						<CgWebsite className="mr-2 inline mb-1 " />
						Summit
					</button>
				</Link>
			</main>
		</>
	)
}
