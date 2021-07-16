import React, { useState, useEffect } from "react"

import { Link, animateScroll } from "react-scroll"
import { FaChevronDown } from "@react-icons/all-files/fa/FaChevronDown"
import styled from "styled-components"
import { Link as GatsbyLink } from "gatsby"

import LangSelector from "./LangSelector"

import NavIcon from "../../../../images/svg/favicon.svg"
import { graphql } from "gatsby"
import useScrolled from "../../../hooks/use-scroll"
import useWindowWidth from "../../../hooks/use-window-width"

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`

const Navigation = ({
  data: { links, contactBtnVisible: isContactVisible, labelContactLink },
  location,
  alwaysDisplayed,
}) => {
  const { scrolled } = useScrolled()
  const { isMobile } = useWindowWidth()
  const [visible, setVisible] = useState(scrolled)
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (scrolled || alwaysDisplayed) return
      if (
        e.clientY <
        10 * parseFloat(getComputedStyle(document.documentElement).fontSize)
      ) {
        setVisible(true)
      } else {
        setVisible(false)
        setIsNavDrawerOpen(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled])

  useEffect(() => {
    if (alwaysDisplayed) return
    if (scrolled) {
      setVisible(true)
    } else {
      setVisible(false)
      setIsNavDrawerOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled])

  const openContactForm = () => {
    let e = document.getElementById("openContactBtn")
    if (e) e.click()
    setIsNavDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setIsNavDrawerOpen(!isNavDrawerOpen)
  }

  const closeNavDrawer = () => setIsNavDrawerOpen(false)

  return (
    <nav
      id="navbar"
      className={
        "z-50 shadow w-full transition-transform duration-300 ease-in-out transform" +
        (alwaysDisplayed
          ? " sticky top-0"
          : !visible
          ? " -translate-y-full fixed"
          : " fixed")
      }
    >
      <div className="px-5 md:px-12 bg-white dark:bg-gray-800 flex items-center  h-16">
        <div className="flex-grow flex items-center h-full py-3">
          {location.pathname.replace(/(\/(..)\/)\?/).trim() === "/" ||
          location.pathname.replace(/(\/(..)\/)\?/).trim() === " " ? (
            <button
              className="flex-shrink-0 cursor-pointer outline-none h-full"
              onClick={() => {
                closeNavDrawer()
                animateScroll.scrollToTop()
              }}
            >
              <NavIcon id="navIcon" />
            </button>
          ) : (
            <GatsbyLink
              className="flex-shrink-0 cursor-pointer outline-none h-full"
              to="/"
            >
              <NavIcon id="navIcon" />
            </GatsbyLink>
          )}

          {!isMobile && (
            <ul className="flex ml-10 justify-center items-baseline space-x-4">
              {links.map((link, i) => (
                <li key={i}>
                  {link.target.includes("/") ? (
                    <GatsbyLink
                      className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      to={location.pathname.match(/(\/(..))/)[1] + link.target}
                    >
                      {link.label}
                    </GatsbyLink>
                  ) : (
                    <Link
                      className="cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                      activeClass="link-active"
                      spy
                      smooth
                      offset={-70}
                      duration={800}
                      to={link.target}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {!isMobile && (
          <>
            {isContactVisible && (
              <button
                className="outline-none cursor-pointer text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-full text-sm font-medium"
                onClick={openContactForm}
              >
                {labelContactLink}
              </button>
            )}
            <div className="flex ml-4 items-center md:ml-6">
              <LangSelector
                navVisible={visible || alwaysDisplayed}
                location={location}
              />
            </div>
          </>
        )}
        {isMobile && (
          <button
            onClick={toggleDrawer}
            className="-mr-2 inline-flex text-gray-800 dark:text-white hover:text-gray-400  items-center justify-center p-2 rounded-md focus:outline-none select-none"
          >
            <FaChevronDown
              size={20}
              className={
                "transition-transform transform duration-300" +
                (isNavDrawerOpen && " rotate-180")
              }
            />
          </button>
        )}
      </div>
      {isMobile && isNavDrawerOpen && (
        <>
          <div
            id="navbarDrawer"
            className="-mt-1 px-2 pt-2 pb-3 sm:px-3 bg-white dark:bg-gray-800"
          >
            <ul>
              {links.map((link, i) => (
                <li>
                  <Link
                    key={i}
                    className="cursor-pointer text-gray-500 dark:text-gray-200 hover:text-gray-900  block px-3 py-2 rounded-md text-base font-medium"
                    to={link.target}
                    activeClass="link-active"
                    spy
                    smooth
                    offset={-70}
                    duration={800}
                    onClick={closeNavDrawer}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              className="outline-none cursor-pointer text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white px-3 py-2 rounded-md text-base font-medium"
              onClick={openContactForm}
            >
              {labelContactLink}
            </button>
            <LangSelector
              mobile
              closeNavDrawer={closeNavDrawer}
              navVisible={visible}
              location={location}
            />
          </div>
          {visible && <Overlay id="navbarOverlay" onClick={closeNavDrawer} />}
        </>
      )}
    </nav>
  )
}

export default Navigation

export const fragmentNavbar = graphql`
  fragment Navbar on DatoCmsNavbar {
    links {
      id
      label
      target
    }
    contactBtnVisible
    labelContactLink
  }
`
