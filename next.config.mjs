/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    transpilePackages: ['swiper', 'react-slick'],
    images: {
        domains: ['i.ibb.co'],
      },
    webpack: (config) => {
        // config.module.rules.push({
        //   test: /\.css$/,
        //   use: ["style-loader", "css-loader"],
        // });
        return config;
    },
    sassOptions: {
        includePaths: ['./node_modules'],
    },    
};

export default nextConfig;
