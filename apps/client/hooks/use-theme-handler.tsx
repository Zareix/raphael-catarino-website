import { useEffect, useState } from "react";

function useThemeHandler() {
  const [themeState, setThemeState] = useState("light");

  useEffect(() => {
    const setTheme = (theme: string) => {
      document.documentElement.classList.remove(
        theme === "dark" ? "light" : "dark"
      );
      document.documentElement.classList.add(theme);
      setThemeState(theme);
    };

    const callback = () => {
      const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
      setTheme(matches ? "dark" : "light");
    };

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", callback);

    callback();

    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", callback);
    };
  }, []);

  return { theme: themeState };
}

export default useThemeHandler;
