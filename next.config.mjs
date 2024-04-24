/** @type {import('next').NextConfig} */
const nextConfig = {
   
      images: {
        remotePatterns: [
          {
            protocol: 'https', // Protocolo (http o https)
            hostname: 'firebasestorage.googleapis.com', // Nombre de dominio o dirección IP

          },
          // Puedes agregar más patrones aquí si es necesario
        ],
      },
};

export default nextConfig;
