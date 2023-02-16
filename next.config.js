module.exports = {
    async redirects() {
        
        return [
            {
                source: '/directory',
                destination: '/directory/teams',
                permanent: false,
            },
        ]
    },
}