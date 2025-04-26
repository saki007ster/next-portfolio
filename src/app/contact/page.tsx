'use client';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="pt-20 pb-8 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text mb-8">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
            Have a project in mind or just want to say hello? I&apos;d love to hear from you!
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m active on LinkedIn, open-source some of my work on Github, and showcase experiments on YouTube.
          </p>
        </motion.div>
      </div>
      <Contact />
    </main>
  );
} 