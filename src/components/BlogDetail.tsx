'use client';

import { motion } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaTag, FaArrowLeft, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import MarkdownRenderer from '@/components/MarkdownRenderer';

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

export default function BlogDetail({ post }: { post: BlogPost }) {
  // Social share URLs (window is only available client-side)
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = encodeURIComponent(post.title);
  const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${shareText}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8">
          <FaArrowLeft className="mr-2" /> Back to all posts
        </Link>
        <div className="relative w-full mb-12">
          <div className="h-40 w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-800 rounded-2xl flex items-center justify-center overflow-hidden shadow-lg">
            {/* AI pattern: neural net/circuit SVG */}
            <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 800 160" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="aiPatternGradient" x1="0" y1="0" x2="800" y2="160" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60A5FA" />
                  <stop offset="0.5" stopColor="#A78BFA" />
                  <stop offset="1" stopColor="#F472B6" />
                </linearGradient>
              </defs>
              <circle cx="100" cy="80" r="60" stroke="url(#aiPatternGradient)" strokeWidth="4" />
              <circle cx="300" cy="80" r="40" stroke="url(#aiPatternGradient)" strokeWidth="3" />
              <circle cx="500" cy="80" r="50" stroke="url(#aiPatternGradient)" strokeWidth="3" />
              <circle cx="700" cy="80" r="30" stroke="url(#aiPatternGradient)" strokeWidth="2" />
              <line x1="160" y1="80" x2="260" y2="80" stroke="url(#aiPatternGradient)" strokeWidth="2" />
              <line x1="340" y1="80" x2="450" y2="80" stroke="url(#aiPatternGradient)" strokeWidth="2" />
              <line x1="550" y1="80" x2="670" y2="80" stroke="url(#aiPatternGradient)" strokeWidth="2" />
              <circle cx="200" cy="80" r="6" fill="#fff" fillOpacity="0.7" />
              <circle cx="400" cy="80" r="6" fill="#fff" fillOpacity="0.7" />
              <circle cx="600" cy="80" r="6" fill="#fff" fillOpacity="0.7" />
            </svg>
            <span className="relative z-10 text-3xl font-bold text-white drop-shadow-lg">AI Blog</span>
          </div>
        </div>
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 mb-8">
            <div className="flex items-center mr-6 mb-2">
              <FaCalendarAlt className="mr-2" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center mb-2">
              <FaClock className="mr-2" />
              <span>{post.readTime}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-8">
            {post.tags && post.tags.map((tag: string, i: number) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full text-sm flex items-center"
              >
                <FaTag className="mr-1 text-xs" />
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="prose-container">
          <MarkdownRenderer content={post.content} />
        </div>
        {/* Social Sharing Section */}
        <div className="mt-12 flex flex-col items-center">
          <span className="text-gray-700 dark:text-gray-300 font-semibold mb-4">Share this post:</span>
          <div className="flex gap-4">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
              aria-label="Share on Twitter"
            >
              <FaTwitter /> Twitter
            </a>
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors font-medium"
              aria-label="Share on Facebook"
            >
              <FaFacebook /> Facebook
            </a>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link href="/blog" className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline">
            <FaArrowLeft className="mr-2" /> Back to all posts
          </Link>
        </div>
      </motion.div>
    </div>
  );
} 