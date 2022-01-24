import React, { useState, useEffect, useContext } from "react"

import ReactCountryFlag from "react-country-flag"
import { navigate } from "gatsby-link"
import styled from "styled-components"
import CmsDataContext from "../../../utils/context/data-context"

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

const LangSelectorDrawer = styled.div`
  position: absolute;
  right: 0px;
  width: 14rem;
  margin-top: 0.5rem;
  transform-origin: top right;
  box-shadow: 0px 2px 12px 2px hsl(0deg 0% 0% / 5%);
  border-radius: 0.375rem;
`

const LangSelector = ({ navVisible, extSlug }) => {
  const { location } = useContext(CmsDataContext)
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState(location.pathname.includes("en") ? "US" : "FR")
  const linkExtension = extSlug ? extSlug : ""

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

  return (
    <div
      className="relative inline-block text-left mr-1 md:mr-0"
      onFocus={onFocusHandler}
      onBlur={onBlurHandler}
      role="menu"
    >
      <button
        type="button"
        className="shadow-sm flex items-center justify-center w-full rounded-md px-4 py-2 border border-gray-300 bg-white dark:border-gray-400 dark:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-gray-400  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-gray-400"
        id="langSelector"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="menu"
        aria-expanded={isOpen}
      >
        <ReactCountryFlag countryCode={selectedLang} svg className="text-lg" />
      </button>
      {isOpen && navVisible && (
        <LangSelectorDrawer id="langSelectorDrawer" className="bg-white dark:bg-gray-700">
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
                  navigate(l.redirect + linkExtension)
                }}
              >
                <ReactCountryFlag svg countryCode={l.countryCode} className="text-lg" />
                <span className="ml-2">{l.title}</span>
              </button>
            ))}
          </div>
        </LangSelectorDrawer>
      )}
    </div>
  )
}

export default LangSelector
