/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"autocampus-directus.ronico-billy.fr",
			"images.unsplash.com"
		]
	}
};

module.exports = nextConfig;
