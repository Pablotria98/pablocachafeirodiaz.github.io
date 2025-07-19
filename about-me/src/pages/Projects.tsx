export default function Projects() {
  const projects = [
    {
      title: "Security Automation Framework",
      description: "Automated threat detection and response system using Python and cloud services",
      technologies: ["Python", "AWS", "Docker", "Kubernetes"],
      status: "Active",
      link: "#"
    },
    {
      title: "Vulnerability Scanner",
      description: "Custom vulnerability assessment tool with automated reporting",
      technologies: ["Python", "PostgreSQL", "React", "REST API"],
      status: "Completed",
      link: "#"
    },
    {
      title: "DevSecOps Pipeline",
      description: "CI/CD pipeline with integrated security scanning and compliance checks",
      technologies: ["Jenkins", "Docker", "Terraform", "SAST/DAST"],
      status: "Active",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-slate-800 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">Projects</h1>
          <p className="text-xl text-slate-300">Featured work and contributions</p>
        </div>

        <div className="p-8">
          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-slate-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === 'Active' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link}
                  className="inline-flex items-center text-slate-600 hover:text-slate-800 transition-colors"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
          
          {/* GitHub Link */}
          <div className="mt-8 text-center">
            <a 
              href="https://github.com/pablotria98"
              className="inline-flex items-center px-6 py-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors"
            >
              📂 View All Projects on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
