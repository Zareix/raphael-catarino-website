import React, { useEffect, useState } from "react"

const LightDarkSwitch = ({ className }) => {
  const [selectedTheme, setSelectedTheme] = useState("")

  const setTheme = (themeName) => {
    document.documentElement.classList.add(themeName)
    setSelectedTheme(themeName)
  }

  useEffect(() => {
    if (localStorage.getItem("theme")) {
      setTheme(localStorage.getItem("theme"))
    } else {
      const preferredTheme =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      saveTheme(preferredTheme)
      setTheme(preferredTheme)
    }
  }, [])

  const saveTheme = (theme) => {
    localStorage.setItem("theme", theme)
  }

  const switchTheme = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark")
      saveTheme("light")
      setTheme("light")
    } else {
      document.documentElement.classList.remove("light")
      setTheme("dark")
      saveTheme("dark")
    }
  }

  return (
    <div
      className={
        "relative inline-block w-10 align-middle select-none transition duration-200 ease-in " +
        className
      }
    >
      <input
        type="checkbox"
        onClick={switchTheme}
        name="toggle"
        id="light-dark-switch"
        className={
          "absolute block w-6 h-6 rounded-full bg-white border-4 transition-[left] appearance-none cursor-pointer" +
          (selectedTheme === "dark" ? " left-[40%] border-gray-500" : " left-0")
        }
      />
      <label
        htmlFor="light-dark-switch"
        className={
          "shadow-hover block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer transition-none" +
          (selectedTheme === "dark" ? " bg-gray-700" : "")
        }
      >
        {" "}
      </label>
    </div>
  )
}

export default LightDarkSwitch
