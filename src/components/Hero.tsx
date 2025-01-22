
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ThreeBackground from './ThreeBackground';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <ThreeBackground />
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="backdrop-blur-sm bg-white/10 dark:bg-black/10 p-8 rounded-2xl"
        >
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl font-space-grotesk text-blue-600 dark:text-blue-400 mb-4"
          >
            Welcome to my portfolio
          </motion.h2>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold font-outfit text-gray-800 dark:text-white mb-6"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-blue-400 dark:to-violet-400">Vaibhav</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-space-grotesk"
          >
            Full Stack Developer 
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center space-x-4"
          >
            <a 
              href="https://github.com/codingraft" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-gray-800/90 dark:bg-gray-700/90 text-white hover:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/vaibhavg9/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-3 rounded-full bg-blue-600/90 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:gvaibhav864@gmail.com" 
              className="p-3 rounded-full bg-red-600/90 text-white hover:bg-red-700 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;