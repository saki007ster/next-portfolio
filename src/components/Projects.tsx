'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp, FaRobot, FaBrain, FaFileAlt, FaHospital, FaShieldAlt, FaDatabase, FaCode } from 'react-icons/fa';
import { SiMongodb, SiKubernetes, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiRedis, SiOpenai, SiHuggingface, SiVercel, SiGithub } from 'react-icons/si';
import { aiProjects, Project } from '@/content/projects/ai-projects';

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

// Professional project header with full-width image
function ProjectHeader({ project, isExpanded }: { project: Project, isExpanded: boolean }) {
  return (
    <div className="relative w-full h-64 md:h-80 overflow-hidden">
      {/* Background gradient with professional overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-all duration-500 ${
        isExpanded ? 'scale-105' : 'scale-100'
      }`}>
        {/* Professional pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-4 right-4 w-32 h-32 border-2 border-white/20 rounded-full"></div>
          <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/20 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full"></div>
        </div>
        
        {/* Project icon and title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
          <div className="text-6xl md:text-7xl mb-4 opacity-90">
            {project.icon}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-center leading-tight">
            {project.title}
          </h3>
          <div className="mt-3 flex items-center gap-2">
            <span className={`px-3 py-1 text-xs rounded-full font-medium ${
              project.status === 'Completed' 
                ? 'bg-green-500/20 text-green-100 border border-green-300/30' 
                : project.status === 'Live'
                ? 'bg-blue-500/20 text-blue-100 border border-blue-300/30'
                : 'bg-yellow-500/20 text-yellow-100 border border-yellow-300/30'
            }`}>
              {project.status}
            </span>
            <span className="text-white/80 text-sm">{project.year}</span>
            {project.demoLink !== '#' && (
              <span className="px-2 py-1 text-xs bg-green-500/30 text-green-100 border border-green-300/50 rounded-full">
                Demo Available
              </span>
            )}
          </div>
        </div>
        
        {/* Subtle overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>
    </div>
  );
}

// Accordion-style project card
export function ProjectCard({ project, index }: { project: Project, index: number }) {
  const [expanded, setExpanded] = useState<boolean>(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
    >
      {/* Professional header image */}
      <ProjectHeader project={project} isExpanded={expanded} />
      
      <div className="p-6">
        {/* Project summary */}
        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg leading-relaxed">
          {project.description}
        </p>
        
        {/* Tech stack badges */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="flex items-center gap-2 px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg text-sm font-medium shadow-sm border border-gray-200 dark:border-gray-600"
            >
              {techIcons[tech] || <FaCode className="text-gray-500" />}
              {tech}
            </span>
          ))}
        </div>
        
        {/* Expandable details */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
          <button 
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full text-left text-lg font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <span>Project Details</span>
            {expanded ? <FaChevronUp className="text-blue-600" /> : <FaChevronDown className="text-gray-400" />}
          </button>
          
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4 space-y-4"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">My Role</h4>
                    <p className="text-gray-600 dark:text-gray-400">{project.role}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Tech Stack</h4>
                    <p className="text-gray-600 dark:text-gray-400">{project.techStack}</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                    {project.features.map((feature: string, i: number) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Challenges</h4>
                  <p className="text-gray-600 dark:text-gray-400">{project.challenge}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Project links */}
        <div className="flex gap-3 mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a
            href={project.demoLink !== '#' ? project.demoLink : undefined}
            className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg shadow-lg transition-all duration-200 font-medium ${
              project.demoLink !== '#'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 cursor-pointer'
                : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed opacity-60'
            }`}
            {...(project.demoLink === '#' ? { 'aria-disabled': true, tabIndex: -1 } : {})}
            title={project.demoLink === '#' ? 'Demo not available yet' : 'View project demo'}
          >
            <FaExternalLinkAlt className="text-sm" />
            {project.status === 'Live' ? 'Live Demo' : 'View Project'}
          </a>
          {project.githubLink ? (
            <a
              href={project.githubLink}
              className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 font-medium"
              title="View source code on GitHub"
            >
              <FaGithub />
              Code
            </a>
          ) : (
            <button
              disabled
              className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-lg text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-60"
              aria-label="GitHub link not available"
              title="Source code not publicly available"
            >
              <FaGithub />
              Code
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

const projects: Project[] = aiProjects;

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI & Machine Learning Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A collection of innovative AI projects showcasing expertise in LLM applications, 
            multi-agent systems, healthcare AI, and privacy-first AI development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 