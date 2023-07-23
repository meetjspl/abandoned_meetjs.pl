export default function Header() {
	return (
		<>
			<div className="relative z-10 overflow-hidden">
				<div
					className="fixed absolute z-10 bg-purple"
					style={{
						transform: "rotate(-3.56deg)",

						top: "115px",
						width: "300px",
						height: "68px",
						paddingLeft: "25px",
					}}
				>
					<h2 className="font-bold text-green">meet.js</h2>
				</div>
				<div style={{ top: "170px", height: "min-content" }}>
					<div
						className="fixed absolute z-10 bg-purple"
						style={{
							transform: "rotate(-2.96deg)",
							overflow: "hidden",
							top: "170px",
							width: "410px",
							height: "140px",
							paddingLeft: "35px",
						}}
					>
						<h2 style={{ lineHeight: "50px" }} className="font-bold text-green">
							#Summit_2023{" "}
						</h2>

						<h2 style={{ paddingLeft: "5px", lineHeight: "50px" }} className="text-green">
							Save the date!
						</h2>
					</div>
				</div>
				<div
					className="w-screen bg-slate-100 bg-conference bg-cover"
					style={{ backgroundSize: "cover", backgroundPositionY: "60%", height: 463 }}
				></div>
			</div>
		</>
	);
}
