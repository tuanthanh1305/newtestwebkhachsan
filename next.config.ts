import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {protocol: 'https', hostname: 'hanoi.intercontinental.com'},
      {protocol: 'https', hostname: 'd3rx7ba35c2ox5.cloudfront.net'},
      {protocol: 'https', hostname: 'images.trvl-media.com'}
    ]
  }
};

export default nextConfig;
