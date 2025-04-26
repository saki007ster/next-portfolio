'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython } from 'react-icons/fa';
import { SiMongodb, SiKubernetes, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiRedis, SiDjango, SiNextdotjs } from 'react-icons/si';

const skillIcons = {
  'React': <FaReact className="text-sky-500 text-xl" />,
  'Next.js': <SiNextdotjs className="text-black dark:text-white text-xl" />,
  'TypeScript': <SiTypescript className="text-blue-600 text-xl" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400 text-xl" />,
  'Node.js': <FaNodeJs className="text-green-600 text-xl" />,
  'Express': <SiExpress className="text-gray-800 dark:text-gray-200 text-xl" />,
  'Python': <FaPython className="text-yellow-400 text-xl" />,
  'Django': <SiDjango className="text-green-800 text-xl" />,
  'MongoDB': <SiMongodb className="text-green-700 text-xl" />,
  'PostgreSQL': <SiPostgresql className="text-blue-700 text-xl" />,
  'Redis': <SiRedis className="text-red-600 text-xl" />,
  'Docker': <FaDocker className="text-blue-500 text-xl" />,
  'Kubernetes': <SiKubernetes className="text-blue-400 text-xl" />,
  'AWS': <FaAws className="text-yellow-500 text-xl" />,
};

const skills: (keyof typeof skillIcons)[] = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'Express', 'Python', 'Django',
  'MongoDB', 'PostgreSQL', 'Redis',
  'Docker', 'Kubernetes', 'AWS',
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-8">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            I&apos;m an AI Developer & Full Stack Engineer with 13+ years of experience building modern web applications and intelligent systems. I love bridging AI and web technologies to deliver scalable, user-centric solutions.
          </p>
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Skills & Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill: keyof typeof skillIcons) => (
                <span key={skill} className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow text-gray-700 dark:text-gray-200 text-sm font-medium">
                  {skillIcons[skill]}
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <Link href="/about" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow hover:shadow-lg transition-all font-medium">
            Read my full story
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 