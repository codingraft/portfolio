import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Coderafttalk from '../assets/coderafttalk.png'
import Voiceless from '../assets/voiceless.png'
import Giphy from '../assets/giphy.png'
import Cira from '../assets/cira.png'
import Blogs from '../assets/blogs.png'

const projects = [
  {
    title: 'CodeRaftTalk',
    description: 'A full-stack Chat application built with React, Node.js, and MongoDB',
    image: Coderafttalk,
    github: 'https://github.com/codingraft/CodeRaftTalk',
    live: 'https://coderafttalk.onrender.com/',
  },
  { 
    title: 'Voiceless',
    description: 'A anonymous feedback app built with Next.js and MongoDB',
    image: Voiceless,
    github: 'https://github.com/codingraft/voiceless',
    live: 'https://voiceless-zeta.vercel.app/',
  },
  { 
    title: 'Cira Store',
    description: 'A full-stack e-commerce app built with React and firebase',
    image: Cira,
    github: 'https://github.com/codingraft/CIRA-store',
    live: 'https://cira-store-1qmot3z00-codingrafts-projects.vercel.app/',
  },
  { 
    title: 'Codingraft Blogs',
    description: 'A full-stack blog app built with React and Appwrite',
    image: Blogs,
    github: 'https://github.com/codingraft/codingraft-blogs',
    live: 'https://codingraft-blogs.vercel.app/',
  },
  {
    title: 'Giphy Clone',
    description: 'A simple Giphy clone built with React and the Giphy API',
    image: Giphy,
    github: 'https://github.com/codingraft/giphy-clone',
    live: 'https://giphy-clone-pi.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900" id='projects'>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-12">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <Github className="w-5 h-5 mr-1" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                      <ExternalLink className="w-5 h-5 mr-1" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;