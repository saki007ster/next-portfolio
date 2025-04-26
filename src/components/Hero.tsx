'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaBrain } from 'react-icons/fa';

// Animation variants
const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const rotatingAnimation = {
  animate: {
    rotate: 360,
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative Tech Icons (Floating) */}
      <div className="absolute inset-0 z-0 hidden lg:block">
        <motion.div 
          className="absolute text-blue-300 opacity-20 dark:opacity-10"
          style={{ fontSize: '6rem', top: '15%', left: '10%' }}
          variants={floatingAnimation}
          animate="animate"
        >
          <FaReact />
        </motion.div>
        <motion.div 
          className="absolute text-green-300 opacity-20 dark:opacity-10"
          style={{ fontSize: '5rem', bottom: '20%', left: '15%' }}
          variants={floatingAnimation}
          animate="animate"
          custom={1}
        >
          <FaNodeJs />
        </motion.div>
        <motion.div 
          className="absolute text-blue-300 opacity-20 dark:opacity-10"
          style={{ fontSize: '5rem', top: '25%', right: '15%' }}
          variants={floatingAnimation}
          animate="animate"
          custom={2}
        >
          <FaBrain />
        </motion.div>
        <motion.div 
          className="absolute text-purple-300 opacity-20 dark:opacity-10"
          style={{ fontSize: '4rem', bottom: '25%', right: '10%' }}
          variants={floatingAnimation}
          animate="animate"
          custom={3}
        >
          <FaDatabase />
        </motion.div>
      </div>
      
      {/* Rotating Circles Decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute rounded-full border-2 border-blue-100 dark:border-blue-900/20"
          style={{ width: '400px', height: '400px', top: '50%', left: '50%', marginLeft: '-200px', marginTop: '-200px' }}
          variants={rotatingAnimation}
          animate="animate"
        />
        <motion.div 
          className="absolute rounded-full border-2 border-purple-100 dark:border-purple-900/20"
          style={{ width: '600px', height: '600px', top: '50%', left: '50%', marginLeft: '-300px', marginTop: '-300px' }}
          variants={rotatingAnimation}
          animate="animate"
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
      
      <div className="max-w-7xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            I&apos;m Saket Kumar
          </h1>
          <div className="relative inline-block">
            <h2 className="text-2xl sm:text-4xl font-semibold text-gray-700 dark:text-gray-300">
              AI Developer & Full Stack Engineer
            </h2>
            <motion.div 
              className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />
          </div>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Bridging AI and web technologies to build intelligent, scalable solutions
          </p>
          <p className="text-md sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Specializing in LLM-based systems, multi-agent AI architectures, and seamless frontend integration
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="mailto:saki007ster@gmail.com"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Contact Me
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
            >
              View Projects
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 h-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
          <path 
            fill="rgb(239 246 255 / 0.6)" 
            fillOpacity="1" 
            d="M0,128L48,112C96,96,192,64,288,64C384,64,480,96,576,122.7C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            className="dark:fill-gray-900/50"
          ></path>
        </svg>
      </div>
    </section>
  );
} 