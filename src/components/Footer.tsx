
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/60 dark:border-slate-800/70">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              Codingraft
            </p>
            <p className="max-w-md text-sm text-slate-600 dark:text-slate-300">
              Full Stack Engineer focused on calm, intentional product experiences.
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400">
            <a
              href="https://github.com/codingraft"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/vaibhavg9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:gvaibhav864@gmail.com"
              className="hover:text-slate-900 dark:hover:text-white"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-sm text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {currentYear} Codingraft. All rights reserved.</p>
          <nav className="flex flex-wrap gap-4">
            <a href="#about" className="hover:text-slate-900 dark:hover:text-white">About</a>
            <a href="#skills" className="hover:text-slate-900 dark:hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-slate-900 dark:hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-slate-900 dark:hover:text-white">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;