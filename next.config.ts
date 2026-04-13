import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {protocol: 'https', hostname: 'hanoi.intercontinental.com'},
      {protocol: 'https', hostname: 'images.trvl-media.com'}
    ]
  }
};

export default nextConfig;
