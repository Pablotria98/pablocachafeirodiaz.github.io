import { useState } from "react";

export const TerminalIntro = () => {
  const [history, setHistory] = useState<string[]>([
    "whoami",
    "John Doe – Cybersecurity Automation Engineer",
    "",
    "skills",
    "Python, Bash, React, Threat Intel, Detection-as-Code",
    "",
  ]);

  const [input, setInput] = useState("");

  const handleCommand = () => {
    let output = "";
    switch (input.trim()) {
      case "whoami":
        output = "John Doe – Cybersecurity Automation Engineer";
        break;
      case "skills":
        output = "Python, Bash, Detection-as-Code, React";
        break;
      case "projects":
        output = "github.com/johndoe";
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = `command not found: ${input}`;
    }

    setHistory([...history, input, output, ""]);
    setInput("");
  };

  return (
    <section className="min-h-screen bg-black text-green-400 font-mono p-6">
      <div className="bg-gray-900 rounded-lg p-4 max-w-2xl mx-auto shadow-lg">
        {history.map((line, i) => (
          <p key={i} className="whitespace-pre-wrap">{`> ${line}`}</p>
        ))}
        <div className="flex">
          <span>{">"}</span>
          <input
            className="bg-transparent outline-none ml-2 flex-grow"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleCommand()}
            autoFocus
          />
        </div>
      </div>
    </section>
  );
};
