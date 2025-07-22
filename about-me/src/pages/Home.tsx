
import React from "react";
import { resumeData } from "../data/resume";

type Experience = {
  title: string;
  company: string;
  from: string;
  to: string;
  description: string;
};

const Home: React.FC = React.memo(() => {
  const { name, title, summary, skills } = resumeData;
  const experience: Experience[] = resumeData.experience.map((item: any) => ({
    title: item.role,
    company: item.company,
    from: item.period.split(' to ')[0],
    to: item.period.split(' to ')[1] || 'Present',
    description: item.responsibilities.join(' '),
  }));

  return (
    <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8" aria-label="Home Page">
      <header className="mb-6">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-sm text-gray-600 mt-1">{title}</p>
      </header>

      <section className="mb-6" aria-label="Summary">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Summary</h2>
        <p>{summary}</p>
      </section>

      <section className="mb-6" aria-label="Skills">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h2>
        <ul className="list-disc list-inside">
          {skills.map((skill: string, i: number) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section aria-label="Experience">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Experience</h2>
        {experience.map((item, i) => (
          <article key={i} className="mb-4" aria-label={`Experience at ${item.company}`}> 
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="italic text-gray-600 text-sm">
              {item.company} — {item.from} to {item.to}
            </p>
            <p>{item.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
});

export default Home;
