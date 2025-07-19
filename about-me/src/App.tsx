import { resumeData } from './resumeData';

function App() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>{resumeData.name}</h1>
      <h2>{resumeData.title}</h2>

      <section>
        <h3>Skills</h3>
        <ul>
          {resumeData.skills.map(skill => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3>Experience</h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index}>
            <strong>{exp.role}</strong> @ {exp.company} ({exp.years})
            <p>{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default App;
