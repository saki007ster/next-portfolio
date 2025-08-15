'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaRobot, FaBrain, FaFileAlt, FaHospital, FaShieldAlt, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiKubernetes, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiRedis, SiOpenai, SiHuggingface, SiVercel, SiGithub } from 'react-icons/si';
import { aiProjects } from '@/content/projects/ai-projects';

type Project = {
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
  icon: React.ReactNode;
  status: string;
  year: string;
  role: string;
  features: string[];
  challenge: string;
  demoLink: string;
  githubLink?: string;
  summary: string;
  techStack: string;
};

const techIcons: Record<string, React.ReactNode> = {
  'React': <FaReact className="text-sky-500" title="React" />,
  'Node.js': <FaNodeJs className="text-green-600" title="Node.js" />,
  'MongoDB': <SiMongodb className="text-green-700" title="MongoDB" />,
  'Docker': <FaDocker className="text-blue-500" title="Docker" />,
  'Kubernetes': <SiKubernetes className="text-blue-400" title="Kubernetes" />,
  'AWS': <FaAws className="text-yellow-500" title="AWS" />,
  'TypeScript': <SiTypescript className="text-blue-600" title="TypeScript" />,
  'Tailwind CSS': <SiTailwindcss className="text-cyan-400" title="Tailwind CSS" />,
  'Express': <SiExpress className="text-gray-800" title="Express" />,
  'PostgreSQL': <SiPostgresql className="text-blue-700" title="PostgreSQL" />,
  'Redis': <SiRedis className="text-red-600" title="Redis" />,
  'Python': <FaPython className="text-yellow-400" title="Python" />,
  'OpenAI': <SiOpenai className="text-green-500" title="OpenAI" />,
  'LangChain': <FaRobot className="text-teal-500" title="LangChain" />,
  'CrewAI': <FaRobot className="text-purple-500" title="CrewAI" />,
  'Hugging Face': <SiHuggingface className="text-yellow-600" title="Hugging Face" />,
  'Next.js': <FaReact className="text-black dark:text-white" title="Next.js" />,
  // AI/ML specific icons
  'Ollama': <FaBrain className="text-purple-500" title="Ollama" />,
  'GPT-4o': <SiOpenai className="text-green-500" title="GPT-4o" />,
  'Markdown': <FaFileAlt className="text-blue-600" title="Markdown" />,
  'OpenMRS': <FaHospital className="text-blue-500" title="OpenMRS" />,
  'LangGraph': <FaRobot className="text-indigo-500" title="LangGraph" />,
  'T-RBAC': <FaShieldAlt className="text-red-500" title="T-RBAC" />,
  'RAG': <FaBrain className="text-orange-500" title="RAG" />,
  'Custom Dataset': <FaDatabase className="text-green-600" title="Custom Dataset" />,
  'Vercel': <SiVercel className="text-black dark:text-white" title="Vercel" />,
  'FastAPI': <FaPython className="text-teal-500" title="FastAPI" />,
  'GitHub Actions': <SiGithub className="text-gray-800" title="GitHub Actions" />,
  'Fine-tuned LLM': <FaBrain className="text-pink-500" title="Fine-tuned LLM" />,
};

// Project card with a CSS gradient and icon as a placeholder for a real image
function ProjectImagePlaceholder({ title, gradient, icon }: { title: string, gradient: string, icon: React.ReactNode }) {
  return (
    <div className={`w-full h-48 bg-gradient-to-r ${gradient} flex flex-col items-center justify-center p-6 relative overflow-hidden group`}>
      <div className="absolute inset-0 opacity-10 flex items-center justify-center">
        <div className="text-white text-9xl">
          {icon}
        </div>
      </div>
      <div className="backdrop-blur-sm bg-white/10 p-4 rounded-lg z-10 transform transition-transform duration-300 group-hover:scale-110">
        <h3 className="text-2xl font-bold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
}

// Add export to make the ProjectCard component reusable elsewhere
export function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [expanded, setExpanded] = useState<boolean>(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300"
    >
      <ProjectImagePlaceholder 
        title={project.title} 
        gradient={project.gradient} 
        icon={project.icon} 
      />
      
      <div className="p-6 flex-1 flex flex-col">
        {/* Project status badge */}
        <div className="flex justify-between items-center mb-3">
          <span className={`px-3 py-1 text-xs rounded-full font-medium ${
            project.status === 'Completed' 
              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' 
              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
          }`}>
            {project.status}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{project.year}</span>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          {project.description}
        </p>
        
        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="flex items-center gap-1 px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full text-sm shadow-sm"
            >
              {techIcons[tech]}
              {tech}
            </span>
          ))}
        </div>
        
        {/* Expandable details */}
        <div className="mt-2 mb-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
          >
            {expanded ? 'Hide details' : 'Show details'}
            {expanded ? <FaChevronUp className="ml-1" /> : <FaChevronDown className="ml-1" />}
          </button>
          
          {expanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-3 border-t border-gray-200 dark:border-gray-700 pt-3 text-sm"
            >
              <div className="mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">My Role</h4>
                <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
              </div>
              
              <div className="mb-2">
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Key Features</h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                  {project.features.map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-900 dark:text-white mb-1">Challenges</h4>
                <p className="text-gray-600 dark:text-gray-400">{project.challenge}</p>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Project links */}
        <div className="flex gap-3 mt-auto">
          <a
            href={project.demoLink}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg shadow hover:from-blue-700 hover:to-blue-800 transition-all"
          >
            <FaExternalLinkAlt className="text-xs" />
            Live Demo
          </a>
          {project.githubLink && (
            <a
              href={project.githubLink}
              className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const projects: Project[] = aiProjects;

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-blue-50/60 via-white to-blue-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Here are some of the projects I&apos;ve worked on
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 