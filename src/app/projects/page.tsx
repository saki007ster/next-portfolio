'use client';
import { motion } from 'framer-motion';
import { FaReact, FaCloud, FaServer } from 'react-icons/fa';

// Import the ProjectCard component for consistent display
import { ProjectCard } from '@/components/Projects';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with real-time inventory management, payment processing, and analytics dashboard.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    gradient: 'from-blue-500 to-purple-600',
    icon: <FaReact />,
    status: 'Completed',
    year: '2023',
    role: 'Full Stack Developer',
    features: [
      'Real-time inventory tracking',
      'Secure payment processing',
      'Admin dashboard',
      'Customer analytics',
    ],
    challenge: 'Optimizing database queries for large product catalogs while maintaining fast page loads.',
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'Cloud Infrastructure',
    description: 'A scalable cloud infrastructure solution for deploying and managing microservices.',
    technologies: ['Docker', 'Kubernetes', 'AWS', 'Terraform'],
    gradient: 'from-green-500 to-teal-600',
    icon: <FaCloud />,
    status: 'In Progress',
    year: '2023',
    role: 'DevOps Engineer',
    features: [
      'Automated deployment',
      'Load balancing',
      'Monitoring and logging',
      'Auto-scaling',
    ],
    challenge: 'Designing a cost-effective auto-scaling solution that handles traffic spikes efficiently.',
    demoLink: '#',
    githubLink: '#'
  },
  {
    title: 'API Gateway',
    description: 'A high-performance API gateway for managing and securing microservices communication.',
    technologies: ['Node.js', 'Redis', 'JWT', 'Nginx'],
    gradient: 'from-orange-500 to-red-600',
    icon: <FaServer />,
    status: 'Completed',
    year: '2022',
    role: 'Backend Developer',
    features: [
      'Rate limiting',
      'Authentication',
      'Request routing',
      'Caching',
    ],
    challenge: 'Implementing a robust rate-limiting system that works across multiple server instances.',
    demoLink: '#',
    githubLink: '#'
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I&apos;ve worked on, showcasing my skills and expertise.
          </p>
        </motion.div>

        {/* Detailed Project Cards */}
        <div className="space-y-12 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Project Image */}
                <div className={`w-full h-full bg-gradient-to-r ${project.gradient} flex flex-col items-center justify-center p-6 relative overflow-hidden group lg:col-span-1`}>
                  <div className="absolute inset-0 opacity-10 flex items-center justify-center">
                    <div className="text-white text-9xl">
                      {project.icon}
                    </div>
                  </div>
                  <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg z-10 text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">
                      {project.title}
                    </h2>
                    <div className="flex justify-center mt-2">
                      <span className={`px-3 py-1 text-xs rounded-full font-medium bg-white/20 text-white`}>
                        {project.status} • {project.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-8 lg:col-span-2">
                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                      My Role
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.role}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-center text-gray-600 dark:text-gray-400"
                        >
                          <svg
                            className="w-5 h-5 mr-2 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Technologies
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 border-b border-gray-200 dark:border-gray-700 pb-2">
                      Challenge
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.challenge}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={project.demoLink}
                      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                    >
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      className="inline-block px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                    >
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Small Project Cards */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            More Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
} 