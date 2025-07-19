export default function AboutMe() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-slate-800 text-white p-8">
          <h1 className="text-4xl font-bold mb-2">About Me</h1>
          <p className="text-xl text-slate-300">Getting to know Pablo</p>
        </div>

        <div className="p-8 space-y-8">
          {/* Professional Background */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b-2 border-slate-200 pb-2">
              Professional Background
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              I'm a cybersecurity automation engineer passionate about building resilient systems 
              and protecting digital infrastructure. My expertise spans across security automation, 
              threat detection, and implementing robust defense mechanisms.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a focus on proactive security measures, I develop automated solutions that 
              enhance organizational security posture while maintaining operational efficiency.
            </p>
          </section>

          {/* Interests & Passions */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b-2 border-slate-200 pb-2">
              Interests & Passions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">🔒 Cybersecurity</h3>
                <p className="text-gray-700 text-sm">
                  Threat hunting, vulnerability assessment, and security automation
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">⚙️ Automation</h3>
                <p className="text-gray-700 text-sm">
                  DevSecOps, CI/CD pipelines, and infrastructure as code
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">🌐 Web Technologies</h3>
                <p className="text-gray-700 text-sm">
                  Modern frameworks, secure application development
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-slate-800 mb-2">📚 Continuous Learning</h3>
                <p className="text-gray-700 text-sm">
                  Staying current with emerging threats and technologies
                </p>
              </div>
            </div>
          </section>

          {/* Personal Philosophy */}
          <section>
            <h2 className="text-2xl font-semibold text-slate-800 mb-4 border-b-2 border-slate-200 pb-2">
              Philosophy
            </h2>
            <blockquote className="border-l-4 border-slate-300 pl-4 italic text-gray-700">
              "Security is not a product, but a process. I believe in building systems that are 
              secure by design, not as an afterthought."
            </blockquote>
          </section>
        </div>
      </div>
    </div>
  );
}
