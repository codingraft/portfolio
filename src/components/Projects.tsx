import { Github, ExternalLink } from 'lucide-react';
import Coderafttalk from '../assets/coderafttalk.png'
import Voiceless from '../assets/voiceless.png'
import Giphy from '../assets/giphy.png'
import Cira from '../assets/cira.png'
import Blogs from '../assets/blogs.png'

const projects = [
  {
    title: 'CodeRaftTalk',
    description: 'Real-time chat platform with presence, secure rooms, and message history powered by React, Node.js, and MongoDB.',
    image: Coderafttalk,
    github: 'https://github.com/codingraft/CodeRaftTalk',
    live: 'https://coderafttalk.onrender.com/',
  },
  { 
    title: 'Voiceless',
    description: 'Privacy-first feedback hub built with Next.js and MongoDB, enabling anonymous submissions and streamlined moderation.',
    image: Voiceless,
    github: 'https://github.com/codingraft/voiceless',
    live: 'https://voiceless-zeta.vercel.app/',
  },
  { 
    title: 'Cira Store',
    description: 'Modular e-commerce experience with dynamic catalogues, checkout flow, and Firebase-backed inventory management.',
    image: Cira,
    github: 'https://github.com/codingraft/CIRA-store',
    live: 'https://cira-store-1qmot3z00-codingrafts-projects.vercel.app/',
  },
  { 
    title: 'Codingraft Blogs',
    description: 'Content publishing platform with rich text editing, role-based access, and Appwrite-powered APIs.',
    image: Blogs,
    github: 'https://github.com/codingraft/codingraft-blogs',
    live: 'https://codingraft-blogs.vercel.app/',
  },
  {
    title: 'Giphy Clone',
    description: 'Snappy GIF explorer that surfaces trending searches, built with React and the public Giphy API.',
    image: Giphy,
    github: 'https://github.com/codingraft/giphy-clone',
    live: 'https://giphy-clone-pi.vercel.app/',
  },
];

const Projects = () => {
  return (
    <section id='projects' className="scroll-mt-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Projects</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
            Real-world products built with modern stacks.
          </h2>
          <p className="max-w-3xl text-base md:text-lg text-slate-600 dark:text-slate-300">
            A snapshot of platforms I’ve led—from privacy-first feedback tools to full-featured commerce experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-slate-200/60 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-slate-900 dark:hover:text-white"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;