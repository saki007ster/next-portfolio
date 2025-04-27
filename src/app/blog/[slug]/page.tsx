import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import BlogDetail from '@/components/BlogDetail';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featuredImage: string;
  content: string;
}

async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  return {
    slug: data.slug || slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime,
    tags: data.tags,
    featuredImage: data.featuredImage,
    content,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const awaitedParams = await params;
  const slug = typeof awaitedParams.slug === 'string' ? awaitedParams.slug : awaitedParams.slug?.[0] || '';
  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();
  return <BlogDetail post={post} />;
} 