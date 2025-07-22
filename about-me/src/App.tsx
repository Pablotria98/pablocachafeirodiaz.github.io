import React from "react";
import Navbar from "./components/Navbar";
import { TerminalIntro } from "./components/TerminalIntro";
import { ExperienceSection } from "./components/ExperienceSection";
import { BlogSection } from "./components/BlogSection";
import { useDarkMode } from "./hooks/useDarkMode";

const sections = [
  {
    id: "home",
    title: "Welcome to My Portfolio",
    content: <TerminalIntro />,
    className: "bg-gray-50 dark:bg-gray-900",
    headingLevel: "h1",
  },
  {
    id: "about",
    title: "About Me",
    content: <ExperienceSection />,
    className: "bg-white dark:bg-gray-800",
    headingLevel: "h2",
  },
  {
    id: "blog",
    title: "Blog",
    content: <BlogSection />,
    className: "bg-gray-100 dark:bg-gray-700",
    headingLevel: "h2",
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <div className="space-y-2">
        <p>Email: <a href="mailto:your@email.com" className="text-blue-600 dark:text-blue-400 underline">your@email.com</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/yourprofile" className="text-blue-600 dark:text-blue-400 underline">linkedin.com/in/yourprofile</a></p>
      </div>
    ),
    className: "bg-white dark:bg-gray-800",
    headingLevel: "h2",
  },
];

const App: React.FC = () => {
  const [isDark, setDarkMode] = useDarkMode();

  return (
    <div className={isDark ? "dark" : ""}>
      <Navbar />
      <main>
        {sections.map(({ id, title, content, className, headingLevel }) => (
          <section
            key={id}
            id={id}
            className={`h-screen flex flex-col items-center justify-center transition-colors duration-300 ${className}`}
          >
            {React.createElement(headingLevel, { className: "text-4xl font-bold mb-6" }, title)}
            <div className="w-full max-w-3xl px-4">{content}</div>
          </section>
        ))}
      </main>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDark ? "🌙" : "☀️"}
      </button>
    </div>
  );
};

export default App;
