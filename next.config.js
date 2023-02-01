/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
    swcPlugins: [
      [
        'next-superjson-plugin',
        {
          excluded: [],
        },
      ],
    ],
  },
}

module.exports = nextConfig
