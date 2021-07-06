import React, { useState, useEffect } from "react"

import ReactCountryFlag from "react-country-flag"
import { navigate } from "gatsby-link"

const lang = [
  {
    countryCode: "FR",
    title: "Français",
    redirect: "/fr/",
    locale: "fr",
  },
  {
    countryCode: "US",
    title: "English",
    redirect: "/en/",
    locale: "en",
  },
]

const LangSelector = ({ mobile, closeNavDrawer, navVisible, location }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(
    location.pathname.includes("en") ? "US" : "FR"
  )

  let timeOutId

  useEffect(() => {
    if (!navVisible) setIsOpen(false)
  }, [navVisible])

  const onBlurHandler = () => {
    timeOutId = setTimeout(() => {
      setIsOpen(false)
    })
  }

  const onFocusHandler = () => {
    clearTimeout(timeOutId)
  }

  if (mobile)
    return (
      <div className="flex justify-center border-t-2 dark:border-gray-400 w-3/5 mt-2 pt-2 mx-auto gap-2">
        {lang.map((l, i) => (
          <button
            key={i}
            className={
              "flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600 border rounded-md outline-none shadow-sm" +
              (selectedLang === l.countryCode
                ? " border-gray-300 "
                : " dark:border-gray-600")
            }
            onClick={() => {
              setSelectedLang(l.countryCode)
              closeNavDrawer()
              navigate(l.redirect, {
                replace: true,
              })
            }}
          >
            <ReactCountryFlag
              svg
              countryCode={l.countryCode}
              className="text-xl"
            />
          </button>
        ))}
      </div>
    )

  return (
    <div
      className="relative inline-block text-left"
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      role="menu"
    >
      <button
        type="button"
        className="shadow-sm flex items-center justify-center w-full rounded-md px-4 py-2 border border-gray-300 bg-white dark:border-gray-400 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-400 transition ease-in duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-gray-400"
        id="langSelector"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <ReactCountryFlag countryCode={selectedLang} svg className="text-lg" />
      </button>
      {isOpen && navVisible && (
        <div
          id="langSelectorDrawer"
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700"
        >
          <div className="py-1">
            {lang.map((l, i) => (
              <button
                key={i}
                className={
                  "w-full flex items-center px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600" +
                  (selectedLang === l.countryCode ? " font-semibold" : "")
                }
                onClick={() => {
                  setSelectedLang(l.countryCode)
                  navigate(l.redirect, {
                    replace: true,
                  })
                }}
              >
                <ReactCountryFlag
                  svg
                  countryCode={l.countryCode}
                  className="text-lg"
                />
                <span className="ml-2">{l.title}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default LangSelector
