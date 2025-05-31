/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export',
	basePath: isGithubPages ? '' : '',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
