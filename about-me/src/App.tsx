import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';

import { TerminalIntro } from "./components/TerminalIntro";
import { ExperienceSection } from "./components/ExperienceSection";
import { BlogSection } from "./components/BlogSection";
import { useDarkMode } from "./hooks/useDarkMode";


function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="h-screen snap-y snap-mandatory overflow-scroll bg-gray-100 dark:bg-gray-900">
      <header className="p-4 text-right fixed top-0 right-0 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded"
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <section className="snap-start h-screen flex items-center justify-center">
        <TerminalIntro />
      </section>
      <section className="snap-start h-screen overflow-y-auto">
        <ExperienceSection />
      </section>
      <section className="snap-start h-screen overflow-y-auto">
        <BlogSection />
      </section>
    </div>
  );
}

export default App;
