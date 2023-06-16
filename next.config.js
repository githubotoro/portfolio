/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		mdxRs: true,
	},
	images: {
		domains: ["image.lexica.art"],
	},
};

const withMDX = require("@next/mdx")();
module.exports = withMDX(nextConfig);
