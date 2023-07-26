/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      'static.pap.fr', // Autorise le domaine "static.pap.fr"
      'freepik.com',   // Autorise le domaine "freepik.com"
      // Ajoutez d'autres domaines si nécessaire...
    ],
  },
};

module.exports = nextConfig;