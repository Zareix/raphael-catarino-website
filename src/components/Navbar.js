import React, { useState, useEffect } from "react"

import { Link, animateScroll } from "react-scroll"
import { StaticImage } from "gatsby-plugin-image"
import { FaChevronDown } from "react-icons/fa"
import { FormattedMessage, useIntl } from "react-intl"

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
    function handleScroll() {
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
  }

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen)
  }

  return (
    <nav
      className={
        "bg-white dark:bg-gray-800 shadow fixed w-full z-30 transition-transform duration-300 ease-in-out" +
        (visible ? " transform translate-y-0" : " transform -translate-y-full")
      }
    >
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between h-16">
          <div className=" flex items-center">
            <button
              className="flex-shrink-0 cursor-pointer outline-none"
              onClick={animateScroll.scrollToTop}
            >
              <StaticImage
                className="h-8 w-8 dark:hidden"
                src="../images/icon.png"
                alt="icon nav bar"
                placeholder="blurred"
              />
              <StaticImage
                className="h-8 w-8 hidden dark:block"
                src="../images/iconWhite.png"
                alt="icon nav bar"
                placeholder="blurred"
              />
            </button>
            <div className="hidden md:block">
              <div className="ml-10 flex justify-center items-baseline space-x-4">
                {links.map((link) => (
                  <Link
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
          </div>
          {/*<div className="block">
            <div className="ml-4 flex items-center md:ml-6">languages selector + switchTheme</div>
          </div>*/}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleDrawer}
              className="text-gray-800 dark:text-white hover:text-gray-500 inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
            >
              <FaChevronDown
                size={20}
                className={`transition-transform transform duration-300 ${
                  isDrawerOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <Link
                className="cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                to={link.to}
                activeClass="link-active"
                spy
                smooth
                offset={-70}
                duration={500}
                onClick={() => setIsDrawerOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <button
              className="outline-none cursor-pointer text-gray-500 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={openContactForm}
            >
              <FormattedMessage id="contactBtnText" />
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
