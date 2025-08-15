import { FaHospital, FaAppleAlt, FaShieldAlt, FaHeart } from 'react-icons/fa';

export type Project = {
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

export const aiProjects: Project[] = [
  {
    title: 'Cybersecurity Risk Assessment Platform',
    description: 'Built at UB\'s Cybersecurity Clinic, this multi-agent AI system analyzes structured risk inputs and generates detailed markdown reports for leadership.',
    technologies: ['LangChain', 'Ollama', 'GPT-4o', 'Markdown', 'PostgreSQL'],
    gradient: 'from-indigo-500 to-purple-600',
    icon: <FaShieldAlt />,
    status: 'Completed',
    year: '2024',
    role: 'AI Developer & Full Stack Engineer',
    features: [
      'Multi-agent system for cybersecurity risk evaluation',
      'Modular agent orchestration architecture',
      'Secure input processing and validation',
      'Detailed markdown report generation for leadership',
      'Structured risk analysis workflows'
    ],
    challenge: 'Designing context-aware, explainable AI responses for different risk profiles while maintaining security and privacy.',
    demoLink: '#',
    githubLink: 'https://github.com/saki007ster/ResilienceAI',
    summary: 'Built at UB\'s Cybersecurity Clinic, this multi-agent AI system analyzes structured risk inputs and generates detailed markdown reports for leadership. The architecture supports modular agent orchestration and secure input processing.',
    techStack: 'LangChain, Ollama, GPT-4o, Markdown, PostgreSQL'
  },
  {
    title: 'AI for Patient Navigation',
    description: 'Designed a secure, persona-aware conversational agent system to assist patients with appointment scheduling, language support, chronic care, and transport issues.',
    technologies: ['OpenMRS', 'LangGraph', 'GPT-4o', 'T-RBAC', 'PostgreSQL'],
    gradient: 'from-blue-500 to-teal-600',
    icon: <FaHospital />,
    status: 'Completed',
    year: '2024',
    role: 'AI Developer & Healthcare Systems Engineer',
    features: [
      'Persona-aware conversational agent system',
      'Real-time EMR data integration',
      'Time-based role-based access control (T-RBAC)',
      'Dynamic persona filtering for security',
      'Multi-language support and chronic care assistance',
      'Transport coordination and appointment scheduling'
    ],
    challenge: 'Implementing healthcare-grade security while maintaining user-friendly patient interactions and real-time data synchronization.',
    demoLink: '#',
    githubLink: 'https://github.com/saki007ster',
    summary: 'Designed a secure, persona-aware conversational agent system to assist patients with appointment scheduling, language support, chronic care, and transport issues. Real-time EMR data is integrated with a time-based role-based access model and dynamic persona filtering for healthcare-grade security.',
    techStack: 'OpenMRS, LangGraph, GPT-4o, T-RBAC, PostgreSQL'
  },
  {
    title: 'Nutrition Assistant AI',
    description: 'A context-aware AI nutritionist fine-tuned on books like Metabolical and Nourishing Traditions, this assistant combines RAG pipelines with user goals to deliver precise diet advice.',
    technologies: ['Ollama', 'RAG', 'Custom Dataset', 'Vercel'],
    gradient: 'from-green-500 to-emerald-600',
    icon: <FaAppleAlt />,
    status: 'Live',
    year: '2024',
    role: 'AI Developer & ML Engineer',
    features: [
      'Context-aware AI nutritionist system',
      'Fine-tuned on nutrition literature (Metabolical, Nourishing Traditions)',
      'RAG pipelines for knowledge retrieval',
      'User goal-based personalized recommendations',
      'Precise diet advice and meal planning',
      'Deployed on Vercel for accessibility'
    ],
    challenge: 'Creating a nutritionist AI that provides accurate, personalized advice while maintaining ethical boundaries and user safety.',
    demoLink: 'https://nutrition-assistant-two.vercel.app/',
    githubLink: 'https://github.com/saki007ster',
    summary: 'A context-aware AI nutritionist fine-tuned on books like Metabolical and Nourishing Traditions, this assistant combines RAG pipelines with user goals to deliver precise diet advice.',
    techStack: 'Ollama, RAG, Custom Dataset, Vercel'
  },
  {
    title: 'OllamaStack – Privacy-first AI Boilerplate',
    description: 'An open-source starter kit to build and deploy LLM-powered apps with privacy and performance in mind. A local-first AI stack for devs focused on control and scalability.',
    technologies: ['Ollama', 'LangChain', 'Next.js', 'FastAPI', 'Docker', 'GitHub Actions'],
    gradient: 'from-orange-500 to-red-600',
    icon: <FaShieldAlt />,
    status: 'Live',
    year: '2024',
    role: 'Full Stack Developer & Open Source Maintainer',
    features: [
      'Privacy-first AI development stack',
      'Local-first LLM deployment with Ollama',
      'Next.js frontend with FastAPI backend',
      'Docker containerization for easy deployment',
      'GitHub Actions for CI/CD automation',
      'Comprehensive documentation and examples'
    ],
    challenge: 'Building a developer-friendly boilerplate that balances ease of use with privacy and performance requirements.',
    demoLink: '#',
    githubLink: 'https://github.com/saki007ster/OllamaStack',
    summary: 'An open-source starter kit to build and deploy LLM-powered apps with privacy and performance in mind. A local-first AI stack for devs focused on control and scalability.',
    techStack: 'Ollama, LangChain, Next.js, FastAPI, Docker, GitHub Actions'
  },
  {
    title: 'ResilienceAI – AI for Psychological Wellness',
    description: 'An empathetic AI chatbot designed for resilience building. Trained on trauma-informed therapy content and cognitive strategies.',
    technologies: ['Fine-tuned LLM', 'Custom Dataset', 'LangChain'],
    gradient: 'from-pink-500 to-purple-600',
    icon: <FaHeart />,
    status: 'In Development',
    year: '2024',
    role: 'AI Developer & Mental Health Tech Engineer',
    features: [
      'Empathetic AI chatbot for resilience building',
      'Trauma-informed therapy content training',
      'Cognitive behavioral therapy strategies',
      'Ethical AI safety boundaries',
      'Gentle, guided mental health support',
      'Privacy-focused user interactions'
    ],
    challenge: 'Developing an AI system that provides genuine mental health support while maintaining strict ethical boundaries and user safety protocols.',
    demoLink: 'https://resilience-ai.vercel.app/',
    githubLink: 'https://github.com/saki007ster/ResilienceAI',
    summary: 'An empathetic AI chatbot designed for resilience building. Trained on trauma-informed therapy content and cognitive strategies, the system provides gentle, guided mental health support within ethical and safety bounds.',
    techStack: 'Fine-tuned LLM, Custom Dataset, LangChain'
  }
];
