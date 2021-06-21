import React, { useState, useEffect } from "react"

import { Link, animateScroll } from "react-scroll"
import { StaticImage } from "gatsby-plugin-image"
import { FaChevronDown } from "react-icons/fa"
import { FormattedMessage, useIntl } from "react-intl"
import styled from "styled-components"

import LangSelector from "./LangSelector"

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`

const Navigation = () => {
  const [visible, setVisible] = useState(false)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const intl = useIntl()

  const links = [
    {
      label: intl.formatMessage({ id: "navBioText" }),
      to: "bio",
    },
    {
      label: intl.formatMessage({ id: "navCompText" }),
      to: "competences",
    },
    {
      label: intl.formatMessage({ id: "navProjectText" }),
      to: "projets",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 140) {
        if (!visible) {
          setVisible(true)
        }
      } else {
        setVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
  }, [visible])

  const openContactForm = () => {
    let e = document.getElementById("openContactBtn")
    if (e) e.click()
    setIsDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  const closeDrawer = () => setIsDrawerOpen(false)

  return (
    <nav
      id="navbar"
      className={
        "z-50 shadow fixed w-full transition-transform duration-300 ease-in-out" +
        (visible ? " transform translate-y-0" : " transform -translate-y-full")
      }
    >
      <div className="px-5 md:px-12 bg-white dark:bg-gray-800 flex items-center justify-between h-16">
        <div className="flex items-center">
          <button
            className="flex-shrink-0 cursor-pointer outline-none"
            onClick={() => {
              setIsDrawerOpen(false)
              animateScroll.scrollToTop()
            }}
          >
            <StaticImage
              className="h-8 w-8 dark:hidden"
              src="../../images/icon.png"
              alt="icon nav bar"
              placeholder="tracedSVG"
            />
            <StaticImage
              className="h-8 w-8 hidden dark:block"
              src="../../images/iconWhite.png"
              alt="icon nav bar"
              placeholder="tracedSVG"
            />
          </button>
          <div className="hidden md:flex ml-10 justify-center items-baseline space-x-4">
            {links.map((link, i) => (
              <Link
                key={i}
                className="cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                activeClass="link-active"
                spy
                smooth
                offset={-70}
                duration={500}
                to={link.to}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="outline-none cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              onClick={openContactForm}
            >
              <FormattedMessage id="contactBtnText" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex ml-4 items-center md:ml-6">
          <LangSelector />
        </div>
        <button
          onClick={toggleDrawer}
          className="-mr-2 flex md:hidden text-gray-800 dark:text-white hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none select-none"
        >
          <FaChevronDown
            size={20}
            className={`transition-transform transform duration-300 ${
              isDrawerOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </div>
      {isDrawerOpen && (
        <>
          <div
            id="navbarDrawer"
            className="md:hidden px-2 pt-2 pb-3 sm:px-3 bg-white dark:bg-gray-800 "
          >
            {links.map((link, i) => (
              <Link
                key={i}
                className="cursor-pointer text-gray-500 dark:text-gray-200 hover:text-gray-900  block px-3 py-2 rounded-md text-base font-medium"
                to={link.to}
                activeClass="link-active"
                spy
                smooth
                offset={-70}
                duration={500}
                onClick={closeDrawer}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="outline-none cursor-pointer text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={openContactForm}
            >
              <FormattedMessage id="contactBtnText" />
            </button>
            <LangSelector mobile closeNavDrawer={closeDrawer} />
          </div>
          <Overlay
            id="navbarOverlay"
            className="md:hidden"
            onClick={closeDrawer}
          />
        </>
      )}
    </nav>
  )
}

export default Navigation
