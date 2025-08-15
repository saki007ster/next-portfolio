'use client';

import { motion } from 'framer-motion';
import { BlogCard } from '@/components/BlogCard';
import { FaBookOpen, FaLightbulb, FaRocket } from 'react-icons/fa';

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
      {/* Hero Section - Full Width Banner */}
      <div className="relative w-full mb-16">
        <div className="h-64 md:h-80 w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-800 flex items-center justify-center overflow-hidden shadow-2xl">
          {/* Enhanced AI pattern: neural net/circuit SVG */}
          <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 800 256" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="aiPatternGradient" x1="0" y1="0" x2="800" y2="256" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6366F1" />
                <stop offset="0.5" stopColor="#A855F7" />
                <stop offset="1" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            {/* Neural network nodes */}
            <circle cx="100" cy="128" r="8" fill="url(#aiPatternGradient)" />
            <circle cx="200" cy="96" r="6" fill="url(#aiPatternGradient)" />
            <circle cx="300" cy="128" r="8" fill="url(#aiPatternGradient)" />
            <circle cx="400" cy="160" r="6" fill="url(#aiPatternGradient)" />
            <circle cx="500" cy="128" r="8" fill="url(#aiPatternGradient)" />
            <circle cx="600" cy="96" r="6" fill="url(#aiPatternGradient)" />
            <circle cx="700" cy="128" r="8" fill="url(#aiPatternGradient)" />
            
            {/* Connections */}
            <line x1="108" y1="128" x2="192" y2="96" stroke="url(#aiPatternGradient)" strokeWidth="2" />
            <line x1="208" y1="96" x2="292" y2="128" stroke="url(#aiPatternGradient)" strokeWidth="2" />
            <line x1="308" y1="128" x2="392" y2="160" stroke="url(#aiPatternGradient)" strokeWidth="2" />
            <line x1="408" y1="160" x2="492" y2="128" stroke="url(#aiPatternGradient)" strokeWidth="2" />
            <line x1="508" y1="128" x2="592" y2="96" stroke="url(#aiPatternGradient)" strokeWidth="2" />
            <line x1="608" y1="96" x2="692" y2="128" stroke="url(#aiPatternGradient)" strokeWidth="2" />
            
            {/* Additional decorative elements */}
            <circle cx="150" cy="200" r="4" fill="url(#aiPatternGradient)" opacity="0.6" />
            <circle cx="450" cy="64" r="4" fill="url(#aiPatternGradient)" opacity="0.6" />
            <circle cx="650" cy="200" r="4" fill="url(#aiPatternGradient)" opacity="0.6" />
          </svg>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaBookOpen className="text-4xl md:text-5xl text-white/90" />
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">Saket&apos;s Blog</h1>
            </div>
            <p className="text-lg md:text-xl text-white/90 font-medium">
              AI Insights • Machine Learning • Tech Innovation
            </p>
          </div>
        </div>
      </div>

      {/* Blog Stats & Introduction */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Latest Insights & Discoveries
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
            Exploring the frontiers of AI, machine learning, and technology. 
            From practical tutorials to cutting-edge research insights.
          </p>
          
          {/* Blog Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FaLightbulb className="text-2xl text-yellow-500" />
              <span className="text-lg font-medium">{blogPosts.length} Articles</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FaRocket className="text-2xl text-blue-500" />
              <span className="text-lg font-medium">AI & ML Focus</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Blog Posts Grid - Magazine Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <BlogCard post={post} index={index} />
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Stay Updated with AI & ML
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Get the latest insights on artificial intelligence, machine learning, and emerging technologies. 
            Join the conversation and explore the future of tech.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium">
              AI Ethics
            </span>
            <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium">
              LLM Applications
            </span>
            <span className="px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium">
              Machine Learning
            </span>
            <span className="px-4 py-2 bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300 rounded-full text-sm font-medium">
              Tech Innovation
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
} 