'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt, FaTag } from 'react-icons/fa';

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  featuredImage: string;
};

const gradients = [
  'from-blue-600 via-purple-600 to-pink-500 dark:from-blue-900 dark:via-purple-900 dark:to-pink-800',
  'from-green-500 via-teal-500 to-cyan-500 dark:from-green-900 dark:via-teal-900 dark:to-cyan-800',
  'from-yellow-500 via-orange-500 to-red-500 dark:from-yellow-900 dark:via-orange-900 dark:to-red-800',
  'from-indigo-500 via-blue-500 to-purple-500 dark:from-indigo-900 dark:via-blue-900 dark:to-purple-800',
  'from-pink-500 via-fuchsia-500 to-violet-500 dark:from-pink-900 dark:via-fuchsia-900 dark:to-violet-800',
];

const svgPatterns = [
  // Pattern 1: Circles and lines (original)
  (
    <svg key="pattern-1" className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiPatternGradientCard1" x1="0" y1="0" x2="400" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#60A5FA" />
          <stop offset="0.5" stopColor="#A78BFA" />
          <stop offset="1" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="48" r="36" stroke="url(#aiPatternGradientCard1)" strokeWidth="3" />
      <circle cx="150" cy="48" r="24" stroke="url(#aiPatternGradientCard1)" strokeWidth="2" />
      <circle cx="250" cy="48" r="30" stroke="url(#aiPatternGradientCard1)" strokeWidth="2" />
      <circle cx="350" cy="48" r="18" stroke="url(#aiPatternGradientCard1)" strokeWidth="1.5" />
      <line x1="86" y1="48" x2="126" y2="48" stroke="url(#aiPatternGradientCard1)" strokeWidth="1.5" />
      <line x1="174" y1="48" x2="220" y2="48" stroke="url(#aiPatternGradientCard1)" strokeWidth="1.5" />
      <line x1="280" y1="48" x2="332" y2="48" stroke="url(#aiPatternGradientCard1)" strokeWidth="1.5" />
      <circle cx="100" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
      <circle cx="200" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
      <circle cx="300" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
    </svg>
  ),
  // Pattern 2: Wavy lines
  (
    <svg key="pattern-2" className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiPatternGradientCard2" x1="0" y1="0" x2="400" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="0.5" stopColor="#06B6D4" />
          <stop offset="1" stopColor="#818CF8" />
        </linearGradient>
      </defs>
      <path d="M0 48 Q100 0 200 48 T400 48" stroke="url(#aiPatternGradientCard2)" strokeWidth="4" fill="none" />
      <path d="M0 70 Q100 30 200 70 T400 70" stroke="url(#aiPatternGradientCard2)" strokeWidth="2" fill="none" />
      <circle cx="100" cy="48" r="6" fill="#fff" fillOpacity="0.7" />
      <circle cx="300" cy="70" r="6" fill="#fff" fillOpacity="0.7" />
    </svg>
  ),
  // Pattern 3: Dots and grid
  (
    <svg key="pattern-3" className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiPatternGradientCard3" x1="0" y1="0" x2="400" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FBBF24" />
          <stop offset="0.5" stopColor="#F59E42" />
          <stop offset="1" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      <rect x="40" y="20" width="320" height="56" stroke="url(#aiPatternGradientCard3)" strokeWidth="2" rx="16" />
      <circle cx="80" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
      <circle cx="160" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
      <circle cx="240" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
      <circle cx="320" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
    </svg>
  ),
  // Pattern 4: Diagonal lines
  (
    <svg key="pattern-4" className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiPatternGradientCard4" x1="0" y1="0" x2="400" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366F1" />
          <stop offset="0.5" stopColor="#EC4899" />
          <stop offset="1" stopColor="#F59E42" />
        </linearGradient>
      </defs>
      <line x1="40" y1="20" x2="360" y2="76" stroke="url(#aiPatternGradientCard4)" strokeWidth="4" />
      <line x1="40" y1="76" x2="360" y2="20" stroke="url(#aiPatternGradientCard4)" strokeWidth="2" />
      <circle cx="200" cy="48" r="8" fill="#fff" fillOpacity="0.7" />
    </svg>
  ),
  // Pattern 5: Concentric circles
  (
    <svg key="pattern-5" className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="aiPatternGradientCard5" x1="0" y1="0" x2="400" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EC4899" />
          <stop offset="0.5" stopColor="#F472B6" />
          <stop offset="1" stopColor="#A78BFA" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="48" r="36" stroke="url(#aiPatternGradientCard5)" strokeWidth="3" />
      <circle cx="200" cy="48" r="24" stroke="url(#aiPatternGradientCard5)" strokeWidth="2" />
      <circle cx="200" cy="48" r="12" stroke="url(#aiPatternGradientCard5)" strokeWidth="2" />
      <circle cx="200" cy="48" r="4" fill="#fff" fillOpacity="0.7" />
    </svg>
  ),
];

export function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug}`} className="block h-full group">
        <div className={`relative w-full h-48 bg-gradient-to-r ${gradients[index % gradients.length]} overflow-hidden`}>
          {svgPatterns[index % svgPatterns.length]}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
            <h3 className="text-xl font-bold drop-shadow-lg">{post.title}</h3>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
            <div className="flex items-center mr-4">
              <FaCalendarAlt className="mr-2" />
              <span>{post.date}</span>
            </div>
            <span>•</span>
            <span className="ml-4">{post.readTime}</span>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-xs flex items-center"
              >
                <FaTag className="mr-1 text-xs" />
                {tag}
              </span>
            ))}
          </div>
          
          <div className="text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center">
            Read more
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
} 