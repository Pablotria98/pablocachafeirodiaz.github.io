import { resumeData } from "../data/resume";

export default function Home() {
  const { name, title, summary, skills, experience } = resumeData;

  return (
    <div className="max-w-3xl w-full bg-white shadow-md rounded-lg p-8">
      <header className="mb-6">
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-sm text-gray-600 mt-1">{title}</p>
      </header>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Summary</h2>
        <p>{summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Skills</h2>
        <ul className="list-disc list-inside">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold border-b border-gray-300 pb-1 mb-3">Experience</h2>
        {experience.map(({ role, company, period, responsibilities }, i) => (
          <article key={i} className="mb-4">
            <h3 className="text-xl font-bold">{role}</h3>
            <p className="italic text-gray-600 text-sm">
              {company} — {period}
            </p>
            <ul className="list-disc list-inside">
              {responsibilities.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
}
