import { useEffect, useState } from "react";

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.theme === "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.theme = darkMode ? "dark" : "light";
  }, [darkMode]);

  return [darkMode, setDarkMode] as const;
};
