
import React, { useState } from "react";

const initialHistory = [
  "whoami",
  "John Doe – Cybersecurity Automation Engineer",
  "",
  "skills",
  "Python, Bash, React, Threat Intel, Detection-as-Code",
  "",
];

function getCommandOutput(input: string): string {
  switch (input.trim()) {
    case "whoami":
      return "John Doe – Cybersecurity Automation Engineer";
    case "skills":
      return "Python, Bash, Detection-as-Code, React";
    case "projects":
      return "github.com/johndoe";
    default:
      return `command not found: ${input}`;
  }
}

export const TerminalIntro: React.FC = React.memo(() => {
  const [history, setHistory] = useState<string[]>(initialHistory);
  const [input, setInput] = useState("");

  const handleCommand = () => {
    if (input.trim() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }
    const output = getCommandOutput(input);
    setHistory([...history, input, output, ""]);
    setInput("");
  };

  return (
    <section className="min-h-screen bg-black text-green-400 font-mono p-6" aria-label="Terminal Introduction">
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
            aria-label="Terminal command input"
          />
        </div>
      </div>
    </section>
  );
});
