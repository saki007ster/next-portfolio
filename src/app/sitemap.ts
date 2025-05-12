import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saketkmr.com'; // Replace with your actual domain
  
  // Static pages
  const staticPages = [
    '',                // Home page
    '/about',          // About page
    //'/projects',       // Projects page
    '/blog',           // Blog index page
    '/contact',        // Contact page
  ].map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Comment out the blogPosts section until you implement getAllBlogPosts
  /*
  const blogPosts = getAllBlogPosts().map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));
  */
  
  return staticPages; // Just return staticPages for now
} 