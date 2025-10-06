import { DiMongodb } from 'react-icons/di';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { FaCss3, FaGitAlt, FaGithub, FaHtml5, FaJs } from 'react-icons/fa6';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiTypescript, SiExpress } from 'react-icons/si';

const skillGroups = [
  {
    title: 'Product surfaces',
    description: 'Equipping teams with accessible, responsive UI systems and component libraries.',
    skills: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Next.js', icon: <RiNextjsFill /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'Tailwind CSS', icon: <RiTailwindCssFill /> },
      { name: 'HTML & CSS', icon: <FaHtml5 /> },
    ],
  },
  {
    title: 'Platform core',
    description: 'Designing type-safe services, APIs, and data flows that scale with product ambitions.',
    skills: [
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Express', icon: <SiExpress /> },
      { name: 'MongoDB', icon: <DiMongodb /> },
    ],
  },
  {
    title: 'Delivery toolkit',
    description: 'Keeping releases dependable with automation, version control, and shared standards.',
    skills: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'CSS-in-JS', icon: <FaCss3 /> },
    ],
  },
];

const Skills = () => {
  return (
    <section id='skills' className="scroll-mt-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Skills</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
            A practical toolkit for full-stack delivery.
          </h2>
          <p className="max-w-2xl text-base md:text-lg text-slate-600 dark:text-slate-300">
            These are the frameworks and workflows I reach for when building resilient products end-to-end.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-slate-200/60 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40 p-6 flex flex-col gap-4"
            >
              <div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {group.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 mt-2">
                  {group.description}
                </p>
              </div>
              <ul className="space-y-3">
                {group.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-200">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
