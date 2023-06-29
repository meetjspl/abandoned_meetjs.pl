/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/UycCSpRh6j",
				permanent: false,
			},
			{
				source: "/facebook",
				destination: "https://facebook.com/meetjspl",
				permanent: true,
			},
			{
				source: "/summit/:slug",
				destination: "https://summit.meetjs.pl/:slug",
				permanent: false,
			},
		];
	},
};

module.exports = nextConfig;
