import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { Moon, Sun } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
        <header className="sticky top-0 z-40 border-b border-slate-200/70 dark:border-slate-800/70 bg-slate-50/90 dark:bg-slate-950/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur">
          <div className="max-w-5xl mx-auto flex items-center justify-between h-16 px-4 sm:px-6">
            <a
              href="#hero"
              className="text-sm font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400"
            >
              Codingraft
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600 dark:text-slate-300">
              <a
                href="#about"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="#skills"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="hover:text-slate-900 dark:hover:text-white"
              >
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden sm:inline-flex items-center rounded-full border border-slate-300/70 dark:border-slate-700/70 px-4 py-2 text-xs font-medium uppercase tracking-wider text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600"
              >
                Say hello
              </a>
              <button
                onClick={toggleTheme}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 dark:border-slate-700/70 bg-white/70 dark:bg-slate-900/70 text-slate-600 dark:text-slate-300 hover:border-slate-400 dark:hover:border-slate-600"
                aria-label="Toggle theme"
              >
                {darkMode ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 sm:px-6 py-16 space-y-24 md:space-y-32">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}

export default App;
