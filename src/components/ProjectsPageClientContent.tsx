"use client";

import React from 'react';
import { ProjectCard } from './Projects';
import { aiProjects } from '@/content/projects/ai-projects';

export default function ProjectsPageClientContent() {
  return (
    <div className="py-20 bg-gradient-to-b from-blue-50/60 via-white to-blue-100/60 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            AI & Machine Learning Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            A collection of innovative AI projects showcasing expertise in LLM applications, 
            multi-agent systems, healthcare AI, and privacy-first AI development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiProjects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Additional Info Section */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">AI/ML Technologies</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  LangChain, Ollama, GPT-4o, RAG, Fine-tuning, Multi-agent Systems
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Development Stack</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Next.js, FastAPI, Docker, PostgreSQL, TypeScript, Python
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Domain Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Cybersecurity, Healthcare, Nutrition, Mental Health, Privacy-first AI
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 