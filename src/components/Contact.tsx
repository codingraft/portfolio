import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Send } from 'lucide-react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_PUBLIC_KEY
      );
      toast.success('Message sent successfully!');
      formRef.current.reset();
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again.');
    }
    setIsSubmitting(false);
  };

  return (
    <section id='contact' className="scroll-mt-24">
      <div className="space-y-6 max-w-2xl mx-auto text-center">
        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">Contact</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 dark:text-slate-100">
            Tell me about your next launch.
          </h2>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-300">
            Share a quick brief and I’ll reply within a day with next steps and timelines.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-5 rounded-3xl border border-slate-200/60 dark:border-slate-800/70 bg-white/60 dark:bg-slate-900/40 p-6 sm:p-8 text-left"
        >
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Name
            </label>
            <input
              type="text" 
              name="from_name"
              id="name"
              required
              className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/40 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Email
            </label>
            <input
              type="email"
              name="from_email"
              id="email"
              required
              className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/40 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              className="w-full rounded-xl border border-slate-300/70 dark:border-slate-700/70 bg-white/80 dark:bg-slate-950/40 px-4 py-3 text-sm text-slate-900 dark:text-slate-100 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200 dark:focus:ring-slate-700"
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium tracking-wide text-white hover:bg-slate-700 disabled:opacity-60 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-slate-200"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'Sending…' : 'Send message'}</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;