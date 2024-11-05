/** @type {import('next').NextConfig} */

module.exports = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '**',
         },
      ],
   },
}

//next.config.js