'use client';

import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDocker, FaAws, FaPython, FaBrain, FaRocket, FaGraduationCap, FaHeart, FaLightbulb, FaUsers, FaCode, FaCloud } from 'react-icons/fa';
import { SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiRedis, SiDjango, SiNextdotjs, SiOpenai, SiHuggingface } from 'react-icons/si';

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
  'Terraform': <FaCloud className="text-orange-500 text-xl" />,
  'AWS': <FaAws className="text-yellow-500 text-xl" />,
  'OpenAI': <SiOpenai className="text-green-500 text-xl" />,
  'Hugging Face': <SiHuggingface className="text-yellow-600 text-xl" />,
};

const skills: (keyof typeof skillIcons)[] = [
  'React', 'Next.js', 'TypeScript', 'Tailwind CSS',
  'Node.js', 'Express', 'Python', 'Django',
  'MongoDB', 'PostgreSQL', 'Redis',
  'Docker', 'Terraform', 'AWS', 'OpenAI', 'Hugging Face',
];

const education = [
  {
    degree: 'Master of Science, Management Information System',
    school: 'University at Buffalo, SUNY',
    period: 'June 2025',
    gpa: 'GPA: 4.0/4.0',
    icon: <FaGraduationCap className="text-3xl text-blue-500" />,
    description: 'Specialized in AI/ML applications and modern information systems'
  },
  {
    degree: 'Bachelor of Technology, Information Technology',
    school: 'Vellore Institute of Technology',
    period: 'May 2011',
    gpa: 'GPA: 3.9/4.0',
    icon: <FaGraduationCap className="text-3xl text-green-500" />,
    description: 'Foundation in software engineering and web technologies'
  },
];

const experiences = [
  {
    role: 'Practice Lead Frontend and Modern Interfaces',
    company: 'QED42 Engineering Pvt. Ltd.',
    location: 'Pune, India',
    period: 'Apr. 2020 – Feb. 2024',
    icon: <FaUsers className="text-2xl text-purple-500" />,
    bullets: [
      'Provided strategic leadership and vision, setting direction for frontend development and integrating cutting-edge technologies with design thinking to deliver complex digital solutions that foster business growth.',
      'Led development of user-centric designs and applications, emphasizing Agile delivery and precision.',
      'Spearheaded inter-practice collaborations and built strong partnerships to deliver bespoke digital solutions, harnessing collective expertise of team for project excellence.',
    ],
  },
  {
    role: 'Technical Architect',
    company: 'QED42 Engineering Pvt. Ltd.',
    location: 'Pune, India',
    period: 'May 2017 – Apr. 2020',
    icon: <FaCode className="text-2xl text-blue-500" />,
    bullets: [
      'Managed architectural design and implementation of web applications, resulting in 25% increase in efficiency.',
      'Collaborated with cross-functional teams to align technical solutions with business objectives, resulting in enhanced customer satisfaction.',
    ],
  },
  {
    role: 'UI / UX Lead',
    company: 'QED42 Engineering Pvt. Ltd.',
    location: 'Pune, India',
    period: 'Apr. 2015 – May 2017',
    icon: <FaLightbulb className="text-2xl text-yellow-500" />,
    bullets: [
      'Directed UI/UX design of web applications, improving user engagement.',
      'Established design standards and best practices, enhancing consistency and quality of user interfaces.',
      'Conducted usability testing and feedback sessions to inform design decisions, leading to more intuitive user experience.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'QED42 Engineering Pvt. Ltd.',
    location: 'Pune, India',
    period: 'Feb. 2011 – Apr. 2015',
    icon: <FaRocket className="text-2xl text-green-500" />,
    bullets: [
      'Developed and maintained high-quality, scalable web solutions.',
      'Implemented responsive design principles, ensuring websites were accessible across various devices and platforms.',
      'Optimized website performance and speed, achieving improvement in load times.',
    ],
  },
];

const passions = [
  {
    title: 'AI & Machine Learning',
    description: 'Exploring the frontiers of artificial intelligence and building intelligent systems that solve real-world problems.',
    icon: <FaBrain className="text-3xl text-purple-500" />
  },
  {
    title: 'Open Source',
    description: 'Contributing to the developer community and building tools that help others create amazing applications.',
    icon: <FaHeart className="text-3xl text-red-500" />
  },
  {
    title: 'Innovation',
    description: 'Constantly learning new technologies and finding creative ways to solve complex challenges.',
    icon: <FaLightbulb className="text-3xl text-yellow-500" />
  }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <FaBrain className="text-2xl text-white" />
              </div>
              <h1 className="text-5xl sm:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                About Me
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto mb-8 leading-relaxed">
              I&apos;m an <span className="font-semibold text-blue-600 dark:text-blue-400">AI Developer & Full Stack Engineer</span> with <span className="font-semibold text-purple-600 dark:text-purple-400">13+ years</span> of experience building modern web applications and intelligent systems. I love bridging AI and web technologies to deliver scalable, user-centric solutions.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
              >
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">13+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
              >
                <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects Delivered</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg"
              >
                <div className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">4.0</div>
                <div className="text-gray-600 dark:text-gray-400">GPA Master&apos;s</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill: keyof typeof skillIcons, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 text-gray-700 dark:text-gray-200 text-sm font-medium hover:shadow-xl transition-all duration-200"
                >
                  {skillIcons[skill]}
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Passions Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            What Drives Me
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {passions.map((passion, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 text-center group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                  {passion.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {passion.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {passion.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Education Journey
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-100 dark:border-gray-700 text-center group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-200">
                  {edu.icon}
                </div>
                <div className="font-bold text-xl text-gray-900 dark:text-white mb-2">{edu.school}</div>
                <div className="text-gray-700 dark:text-gray-300 mb-2">{edu.degree}</div>
                <div className="text-blue-600 dark:text-blue-400 font-semibold mb-2">{edu.gpa}</div>
                <div className="text-gray-500 dark:text-gray-400 mb-3">{edu.period}</div>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {edu.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Professional Experience
          </motion.h2>
          <div className="space-y-8 max-w-5xl mx-auto">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.01, x: 5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-l-4 border-blue-500 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:scale-110 transition-transform duration-200">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                          {exp.role}
                        </h3>
                        <p className="text-lg text-gray-600 dark:text-gray-400 mb-1">
                          {exp.company}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                          {exp.location}
                        </p>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4 space-y-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="leading-relaxed">{bullet}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s collaborate on your next AI-powered project or discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-200"
              >
                View My Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 