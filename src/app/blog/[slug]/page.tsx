import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogDetail, { type BlogPost } from '@/components/BlogDetail';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Removed BlogSlugPageProps type definition from here for this test

// This interface represents the raw data from your markdown files
interface FilePostData {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string; // Data from file might have optional readTime
  tags: string[];
  featuredImage: string;
  content: string;
}

// Interface for your actual params structure
interface MyPageParams {
  slug: string;
}

// Updated data fetching function
async function getPostData(slug: string): Promise<FilePostData> {
  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  if (!data.title || !data.excerpt || !data.date || !data.tags || !data.featuredImage) {
    console.error(`Missing frontmatter for slug: ${slug}`);
    notFound();
  }

  return {
    slug: data.slug || slug,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    readTime: data.readTime, // Stays optional from file
    tags: data.tags,
    featuredImage: data.featuredImage,
    content,
  } as FilePostData;
}

export async function generateMetadata(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any 
): Promise<Metadata> {
  const params = props.params as MyPageParams;
  const slug = params.slug;
  const postDataFromFile = await getPostData(slug);
  const siteUrl = 'https://saketkmr.com'; 

  return {
    title: `${postDataFromFile.title} | Saket Kumar's AI Blog`,
    description: postDataFromFile.excerpt,
    keywords: postDataFromFile.tags,
    openGraph: {
      title: `${postDataFromFile.title} | Saket Kumar's AI Blog`,
      description: postDataFromFile.excerpt,
      url: `${siteUrl}/blog/${slug}`,
      type: 'article',
      publishedTime: postDataFromFile.date,
      authors: ['Saket Kumar'],
      tags: postDataFromFile.tags,
      images: [{ url: `${siteUrl}${postDataFromFile.featuredImage}`, width: 1200, height: 630, alt: postDataFromFile.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${postDataFromFile.title} | Saket Kumar's AI Blog`,
      description: postDataFromFile.excerpt,
    },
  };
}

export default async function BlogPostPage(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: any
) {
  const params = props.params as MyPageParams;
  const postDataFromFile = await getPostData(params.slug);
  
  // Transform FilePostData to the imported BlogPost type expected by BlogDetail
  const postForBlogDetail: BlogPost = {
    ...postDataFromFile,
    readTime: postDataFromFile.readTime || "N/A", // Provide default if readTime is required string in BlogDetail's BlogPost
  };

  return <BlogDetail post={postForBlogDetail} />; 
} 