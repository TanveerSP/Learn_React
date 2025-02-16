import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

// provider Component
export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  //Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Applay theme class to body
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <ThemeProvider value={{ theme, toggleTheme }}>{children}</ThemeProvider>
  );
};

// custom hook for easy eccesss
export const useTheme = () => useContext(ThemeContext);
