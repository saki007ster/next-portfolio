'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/BlogCard';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featuredImage: string;
}

export default function BlogList({ blogPosts }: { blogPosts: BlogPost[] }) {
  return (
    <div className="py-20 px-4 max-w-7xl mx-auto">
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-2 text-center">Blog</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 text-center">
          Thoughts, stories, and ideas about web development
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogCard key={post.slug} post={post} index={index} />
        ))}
      </div>
    </div>
  );
} 