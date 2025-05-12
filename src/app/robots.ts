import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://saketkmr.com'; // Replace with your actual domain

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'], // Disallow crawling of API routes if you have any
    },
    sitemap: `${baseUrl}/sitemap.xml`, // If you have a sitemap
  };
} 