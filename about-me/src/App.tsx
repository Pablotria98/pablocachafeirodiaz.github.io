import React from "react";
import Navbar from "./components/Navbar";
import { TerminalIntro } from "./components/TerminalIntro";
import { ExperienceSection } from "./components/ExperienceSection";
import { BlogSection } from "./components/BlogSection";
import { useDarkMode } from "./hooks/useDarkMode";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <section id="home" className="h-screen flex items-center justify-center bg-gray-50">
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </section>
      <section id="work" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl">About</h2>
      </section>
      <section id="about" className="h-screen flex items-center justify-center bg-gray-100">
        <ExperienceSection />
      </section>
      <section id="contact" className="h-screen flex items-center justify-center bg-white">
        <h2 className="text-3xl">Contact</h2>
      </section>
    </>
  );
};

export default App;
