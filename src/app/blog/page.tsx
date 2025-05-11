import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogList from '@/components/BlogList';
import type { Metadata } from 'next';

async function getAllBlogPosts() {
  const postsDirectory = path.join(process.cwd(), 'content/blog');
  const filenames = fs.readdirSync(postsDirectory);
  const posts = filenames
    .filter((file) => file.endsWith('.md'))
    .map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug: data.slug || filename.replace(/\.md$/, ''),
        title: data.title,
        excerpt: data.excerpt,
        date: data.date,
        readTime: data.readTime,
        tags: data.tags,
        featuredImage: data.featuredImage,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return posts;
}

export const metadata: Metadata = {
  title: 'AI & Machine Learning Blog | Saket Kumar',
  description: 'Discover insightful articles on Artificial Intelligence, Machine Learning, LLMs, MLX, and practical AI development by [Saket Kumar]. Stay updated with the latest trends and tutorials.',
  openGraph: {
    title: 'AI & Machine Learning Blog | Saket Kumar',
    description: 'Insightful articles and tutorials on AI, ML, LLMs, and more.',
    url: 'https://saketkmr.com/blog',
    images: [ /* ... specific OG image for blog index ... */ ],
  },
  twitter: {
    title: 'AI & Machine Learning Blog | Saket Kumar',
    description: 'Insightful articles and tutorials on AI, ML, LLMs, and more.',
  },
};

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();
  return <BlogList blogPosts={blogPosts} />;
} 