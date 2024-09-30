/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/index-2',
                destination: '/not-found',
                permanent: true, 
            },
            {
                source: '/index-3', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/index-4', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/index-5', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/index-6', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/index-7', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/index-8', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/about-2', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/about-3', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/about-4', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/about-5', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/blog', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/blog-details', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/forget-password', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/links', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/login', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/register', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/services-2', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/services-3', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/services-4', 
                destination: '/not-found',
                permanent: true,
            },
            
            {
                source: '/services-5', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/services-details-3', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/services-details-4', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/services-details-5', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/team', 
                destination: '/not-found',
                permanent: true,
            },  
            {
                source: '/team-2', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/team-3', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/team-4', 
                destination: '/not-found',
                permanent: true,
            },
            {
                source: '/team-details', 
                destination: '/not-found',
                permanent: true,
            },

        ];
    },
};

module.exports = nextConfig;
