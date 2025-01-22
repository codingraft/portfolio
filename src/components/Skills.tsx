import { motion } from 'framer-motion';
import { DiMongodb } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FaCss3,  FaGitAlt, FaGithub, FaHtml5, FaJs } from 'react-icons/fa6';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript, SiExpress } from 'react-icons/si';

const skills = [
  { name: "HTML", icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3 /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Next.js', icon: <RiNextjsFill /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'MongoDB', icon: <DiMongodb /> },
  { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'GitHub', icon: <FaGithub /> },
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-gray-100 dark:bg-gray-900" id='skills'>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
                  <div className="flex justify-center items-center">
                    <span className="text-3xl text-blue-600 dark:text-blue-400 mr-2">
                      {skill.icon}
                    </span>
                    <span className="text-xl font-medium text-gray-800 dark:text-white">
                      {skill.name}
                    </span>
                  </div>
                  {/* <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3">
                    <motion.div
                      className="bg-blue-600 dark:bg-blue-400 h-3 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div> */}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
