import { BsTwitter, BsLinkedin, BsFacebook, BsDiscord } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import ExternalLink from "./ExternalLink";
type props = { className?: string };
export default function Socials({ className }: props) {
	return (
		<>
			<div className={twMerge("flex flex-row content-center ", className)}>
				<ExternalLink href={""}>
					<BsTwitter className="mx-2 my-2 text-xl text-white"></BsTwitter>
				</ExternalLink>
				<ExternalLink href={""}>
					<BsLinkedin className="mx-2 my-2 text-xl text-white"></BsLinkedin>
				</ExternalLink>
				<ExternalLink href={""}>
					<BsFacebook className="mx-2 my-2 text-xl text-white"></BsFacebook>
				</ExternalLink>
				<ExternalLink href={""}>
					<BsDiscord className="mx-2 my-2 text-xl text-white"></BsDiscord>
				</ExternalLink>
			</div>
		</>
	);
}
