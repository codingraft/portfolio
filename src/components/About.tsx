const highlights = [
  {
    title: 'System-first thinking',
    description: 'I plan APIs, data flows, and deployment pipelines early so the product stays fast, observable, and easy to extend.',
  },
  {
    title: 'Design-aware delivery',
    description: 'Interfaces honour typography, motion, and accessibility guidelines while staying tightly coupled with the underlying architecture.',
  },
  {
    title: 'Quality without drama',
    description: 'Automated checks, meaningful tests, and gradual rollouts keep features shippable and stakeholders informed.',
  },
  {
    title: 'Collaborative partner',
    description: 'Clear written updates and proactive feedback loops make async collaboration with designers and PMs straightforward.',
  },
];

const About = () => {
  return (
    <section id="about" className="scroll-mt-24">
      <div className="space-y-6">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">About</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
            Full-stack builder with product instincts.
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 max-w-3xl">
            I architect, build, and iterate on web platforms end-to-end—balancing clean interfaces with durable backends so every release feels confident and considered.
          </p>
        </div>

        <div className="grid md:grid-cols-[1.4fr,1fr] gap-10 md:gap-14 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200/60 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40 p-6"
              >
                <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-full">
            <div className="rounded-3xl overflow-hidden border border-slate-200/60 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=80"
                alt="Developer working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
