/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // async redirects() {
    //     return [
    //         {
    //             source: '/',
    //             destination: '/login',
    //             permanent: false,
    //         },
    //     ]
    // },
    reactStrictMode: false,
    experimental: {
        appDir: false,
    },
    /* настройки */
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
