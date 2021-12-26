import React, { useState, useContext, useEffect, createContext } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState("")

  const setTheme = (themeName) => {
    document.documentElement.classList.add(themeName)
    setSelectedTheme(themeName)
    localStorage.setItem("theme", themeName)
  }

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"))
    } else {
      const preferredTheme =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      setTheme(preferredTheme)
    }
  }, [])

  const switchTheme = () => {
    if (selectedTheme === "dark") {
      document.documentElement.classList.remove("dark")
      setTheme("light")
    } else {
      document.documentElement.classList.remove("light")
      setTheme("dark")
    }
  }

  return (
    <ThemeContext.Provider
      value={{
        selectedTheme,
        switchTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

const useThemeContext = () => {
  return useContext(ThemeContext)
}

export { ThemeProvider, useThemeContext }
