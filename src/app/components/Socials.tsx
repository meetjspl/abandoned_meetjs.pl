import { BsTwitter, BsLinkedin, BsFacebook, BsDiscord } from "react-icons/bs";
import ExternalLink from "./ExternalLink";

export default function Socials() {
	return (
		<>
			<div className="flex flex-row content-center px-7 py-5">
				<ExternalLink href={""}>
					<BsTwitter className="mx-2 text-xl text-white"></BsTwitter>
				</ExternalLink>
				<ExternalLink href={""}>
					<BsLinkedin className="mx-2 text-xl text-white"></BsLinkedin>
				</ExternalLink>
				<ExternalLink href={""}>
					<BsFacebook className="mx-2 text-xl text-white"></BsFacebook>
				</ExternalLink>
				<ExternalLink href={""}>
					<BsDiscord className="mx-2 text-xl text-white"></BsDiscord>
				</ExternalLink>
			</div>
		</>
	);
}
