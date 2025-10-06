
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="scroll-mt-24">
      <div className="flex flex-col gap-8 md:gap-10">
          <div className="space-y-6">
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300">
          Hi, I'm Vaibhav aka Codingraft
        </p>
        <h1 className="text-4xl md:text-7xl font-semibold leading-tight text-slate-900 dark:text-slate-100">
          Full Stack Engineer
        </h1>
      </div>


        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-6 py-2 text-sm font-medium tracking-wide hover:bg-slate-700 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            See recent work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700/60 px-6 py-2 text-sm font-medium tracking-wide text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500"
          >
            Start a project
          </a>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-slate-500 dark:text-slate-400">
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <span>Delhi, India</span>
            <span>Available for full-time & freelance</span>
          </div>
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-300">
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
      </div>
    </section>
  );
};

export default Hero;