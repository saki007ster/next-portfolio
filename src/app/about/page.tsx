'use client';

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

const education = [
  {
    degree: 'Master of Science, Management Information System',
    school: 'University at Buffalo, SUNY',
    period: 'June 2025',
  },
  {
    degree: 'Bachelor of Technology, Information Technology, GPA: 3.9/4.0',
    school: 'Vellore Institute of Technology',
    period: 'May 2011',
  },
];

const experiences = [
  {
    role: 'Practice Lead Frontend and Modern Interfaces',
    company: 'QED42 Engineering Pvt. Ltd. | Pune, India',
    period: 'Apr. 2020 – Feb. 2024',
    bullets: [
      'Provided strategic leadership and vision, setting direction for frontend development and integrating cutting-edge technologies with design thinking to deliver complex digital solutions that foster business growth.',
      'Led development of user-centric designs and applications, emphasizing Agile delivery and precision.',
      'Spearheaded inter-practice collaborations and built strong partnerships to deliver bespoke digital solutions, harnessing collective expertise of team for project excellence.',
    ],
  },
  {
    role: 'Technical Architect',
    company: 'QED42 Engineering Pvt. Ltd. | Pune, India',
    period: 'May 2017 – Apr. 2020',
    bullets: [
      'Managed architectural design and implementation of web applications, resulting in 25% increase in efficiency.',
      'Collaborated with cross-functional teams to align technical solutions with business objectives, resulting in enhanced customer satisfaction.',
    ],
  },
  {
    role: 'UI / UX Lead',
    company: 'QED42 Engineering Pvt. Ltd. | Pune, India',
    period: 'Apr. 2015 – May 2017',
    bullets: [
      'Directed UI/UX design of web applications, improving user engagement.',
      'Established design standards and best practices, enhancing consistency and quality of user interfaces.',
      'Conducted usability testing and feedback sessions to inform design decisions, leading to more intuitive user experience.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'QED42 Engineering Pvt. Ltd. | Pune, India',
    period: 'Feb. 2011 – Apr. 2015',
    bullets: [
      'Developed and maintained high-quality, scalable web solutions.',
      'Implemented responsive design principles, ensuring websites were accessible across various devices and platforms.',
      'Optimized website performance and speed, achieving improvement in load times.',
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen py-20 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/30 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 bg-gradient-to-r from-blue-600 to-purple-600 inline-block text-transparent bg-clip-text">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
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
        </motion.div>

        {/* Education Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Education
          </h2>
          <div className="flex flex-col gap-6 items-center">
            {education.map((edu, idx) => (
              <div key={idx} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 w-full max-w-xl">
                <div className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-1">{edu.school}</div>
                <div className="text-gray-900 dark:text-white mb-1">{edu.degree}</div>
                <div className="text-gray-500">{edu.period}</div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-xl border-l-4 border-blue-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {exp.role}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-4">
                  {exp.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
} 