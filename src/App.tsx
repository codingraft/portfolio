import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { Moon, Sun } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <button
          onClick={toggleTheme}
          className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-50 hover:scale-110 transition-transform duration-300"
          aria-label="Toggle theme"
        >
          {darkMode ? (
            <Sun className="w-6 h-6 text-yellow-500" />
          ) : (
            <Moon className="w-6 h-6 text-gray-700" />
          )}
        </button>
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <Toaster position="bottom-right" />
      </div>
    </div>
  );
}

export default App;