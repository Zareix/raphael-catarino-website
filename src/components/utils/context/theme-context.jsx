import React, { useState, useContext, useEffect, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("");

  const setTheme = (themeName) => {
    setSelectedTheme(themeName);
    if (themeName === "auto") {
      document.documentElement.classList.add(getOsTheme());
    } else {
      document.documentElement.classList.add(themeName);
    }
    localStorage.setItem("theme", themeName);
  };

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"));
    } else {
      setTheme("auto");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const switchTheme = () => {
    switch (selectedTheme) {
      case "light":
        document.documentElement.classList.remove("light");
        setTheme("dark");
        break;
      case "dark":
        document.documentElement.classList.remove("dark");
        setTheme("auto");
        break;
      case "auto":
        document.documentElement.classList.remove("light");
        document.documentElement.classList.remove("dark");
        document.documentElement.classList.remove("auto");
        setTheme("light");
        break;
      default:
        break;
    }
  };

  const getOsTheme = () =>
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useThemeContext = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useThemeContext };
