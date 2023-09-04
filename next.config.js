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
const { withContentlayer } = require("next-contentlayer");
module.exports = withContentlayer(withMDX(nextConfig));
