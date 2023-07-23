import Image from "next/image";

import { BsDiscord, BsDownload, BsFacebook, BsLinkedin, BsTwitter } from "react-icons/bs";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

export default function MainPage() {
	return (
		<>
			<main>
				<Navigation></Navigation>
				<Header></Header>

				<section className="p-5">
					<h2 className="py-4 text-center font-bold text-purple">#about-meet.js</h2>
					<p>
						<span className="font-bold">Annual conference</span> of the widest JavaScript community
						in Poland. The meet.js Summit is an annual conference bringing together local JavaScript
						communities from all across Poland. An event that gathers
						<span className="font-bold"> 500</span> web development professionals, front-end and
						back-end software engineers interested in modern JavaScript ecosystem and web
						technologies. Follow our social media and jump into
						<a className="font-bold underline decoration-solid" href="">
							meet.js Discord
						</a>
						to get the latest updates!
					</p>
				</section>

				<div className="my-4 bg-purple" style={{ paddingTop: "27px" }}>
					<Image height={425} width={390} src={"/coffe.png"} alt={"d"}></Image>
				</div>
				<section className="p-5">
					<p>
						Discover the latest trends, exchange ideas, and connect with like-minded developers who
						share your passion for all things JavaScript. With captivating keynotes, insightful
						workshops, and engaging panel discussions, meet.js is the go-to event for staying at the
						forefront of the JavaScript world. Don &apos t miss this opportunity to enhance your
						skills, build valuable connections, and be a part of the vibrant JavaScript community.
						Visit our website today and secure your spot at the most anticipated JavaScript
						conference in Poland!
					</p>
					<p>
						All proceeds from the conference are donated to charitable causes through siepomaga.pl.
						At meet.js, we believe in the power of JavaScript to make a positive impact not only in
						the tech world but also in the lives of those in need. By attending our conference, you
						not only expand your knowledge and network but also contribute to meaningful initiatives
						supported by siepomaga.pl. Together, we can harness the potential of JavaScript to make
						a difference and create a better world. Join us at meet.js and be a part of this
						inspiring journey of giving back.
					</p>
				</section>
				{/* divider */}
				<div
					className="flex flex-wrap content-center justify-center"
					style={{ width: "100%", height: "100px" }}
				>
					<div className="bg-purple" style={{ width: "95px", height: "6px" }}></div>
				</div>
				<section className=" flex flex-col p-5">
					<h2 className="py-4 text-center font-bold text-purple">#become-a-sponsor</h2>
					<p>
						Show your brand at the next in-person JavaScript conference after the long break. Come
						to meet.js Summit - attended by over 500 professionals. At the Summit you will meet
						experienced front-end developers and people working in the web technology space. Take
						action here and now - make a real connection in person and get your candidates
						emotionally engaged from the start! Download our Sponsorship Offer (PDF) to find out
						more and contact us directly to discuss sponsorship opportunities.
					</p>
					<button
						style={{
							paddingLeft: "30px",
							paddingRight: "30px",
							paddingTop: "8px",
							paddingBottom: "8px",
							lineHeight: "normal",
						}}
						className="place-self-center rounded-full bg-purple text-xl text-green"
					>
						<p>
							Download offer
							<BsDownload className="mb-1 ml-3 inline " />
						</p>
					</button>
				</section>
			</main>
			<footer
				className="flex flex-wrap content-start justify-between bg-purple text-white"
				style={{ width: "100%", height: "430px" }}
			>
				<div className="" style={{ padding: "28px 23px" }}>
					<Image className="" width={100} height={30} src="../logo-no-border.svg" alt={""} />
				</div>
				<div className="flex  flex-row" style={{ padding: "28px 23px" }}>
					<BsTwitter className="text-xl text-white" style={{ margin: "0px 8px" }}></BsTwitter>
					<BsLinkedin className="text-xl text-white" style={{ margin: "0px 8px" }}></BsLinkedin>
					<BsFacebook className="text-xl text-white" style={{ margin: "0px 8px" }}></BsFacebook>
					<BsDiscord className="text-xl text-white" style={{ margin: "0px 8px" }}></BsDiscord>
				</div>
				<div style={{ padding: "0px 23px" }} className="flex flex-col">
					<a style={{ fontSize: "14px", padding: "10px 0px " }} href="">
						Czym jest Meet.JS
					</a>
					<a style={{ fontSize: "14px", padding: "10px 0px " }} href="">
						Summit 2023
					</a>
					<a style={{ fontSize: "14px", padding: "10px 0px " }} href="">
						Wydarzenia
					</a>
					<a style={{ fontSize: "14px", padding: "10px 0px " }} href="">
						Działaj z nami
					</a>
					<a style={{ fontSize: "14px", padding: "10px 0px " }} href="">
						Wsparce
					</a>
					<a style={{ fontSize: "14px", padding: "10px 0px " }} href="">
						meet.js © 2023
					</a>
				</div>
				<div className="m-auto flex flex-col flex-wrap">
					<a style={{ fontSize: "14px", textAlign: "right", padding: "10px 0px " }} href="">
						#summit_2022
					</a>
					<a style={{ fontSize: "14px", textAlign: "right", padding: "10px 0px " }} href="">
						#summit_2021
					</a>
					<a style={{ fontSize: "14px", textAlign: "right", padding: "10px 0px " }} href="">
						#summit_2019
					</a>
					<a style={{ fontSize: "14px", textAlign: "right", padding: "10px 0px " }} href="">
						#summit_2018
					</a>
					<a style={{ fontSize: "14px", textAlign: "right", padding: "10px 0px " }} href="">
						#summit_2017
					</a>
					<a style={{ fontSize: "14px", textAlign: "right", padding: "10px 0px " }} href="">
						meet.js code of conduct
					</a>
				</div>
			</footer>
		</>
	);
}
