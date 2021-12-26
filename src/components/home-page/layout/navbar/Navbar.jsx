import React, { useState, useEffect } from "react"

import { Link, animateScroll } from "react-scroll"
import styled from "styled-components"
import { Link as GatsbyLink, graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

import LangSelector from "./LangSelector"

import ArrowDownIcon from "../../../../images/svg/icons/arrowDown.svg"
import NavIcon from "../../../../images/svg/favicon.svg"
import useScroll from "../../../hooks/use-scroll"
import useWindowWidth from "../../../hooks/use-window-width"
import LightDarkSwitch from "../../light-dark-switch/LightDarkSwitch"
import { fadeIn } from "../../../utils/framer-motion-variants"

const slideIn = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: "-2.5rem",
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
  exit: {
    y: "-110%",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
}

const Overlay = styled(motion.div)`
  position: fixed;
  margin-top: -10px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`

const Navigation = ({
  data: { links, contactBtnVisible, labelContactLink, blogBtnVisible, labelBlogLink },
  alwaysDisplayed,
  iconBtnTarget,
  langSlug,
  location,
}) => {
  const { scrolled, scrollAmount } = useScroll()
  const { isMobile } = useWindowWidth()
  const [visible, setVisible] = useState(scrolled)
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (scrolled || alwaysDisplayed) return
      if (e.clientY < 200) {
        setTimeout(() => {
          setVisible(true)
        })
      } else {
        setTimeout(() => {
          setIsNavDrawerOpen(false)
          setVisible(false)
        })
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
      setIsNavDrawerOpen(false)
      setVisible(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollAmount])

  const openContactForm = () => {
    let e = document.getElementById("openContactBtn")
    if (e) e.click()
    setIsNavDrawerOpen(false)
  }

  const toggleDrawer = () => setIsNavDrawerOpen(!isNavDrawerOpen)

  const closeNavDrawer = () => setIsNavDrawerOpen(false)

  return (
    <AnimatePresence>
      {(visible || alwaysDisplayed) && (
        <motion.nav
          variants={slideIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          id="navbar"
          className={"z-50 w-full shadow-md" + (alwaysDisplayed ? " sticky top-0" : " fixed")}
        >
          <div className="px-5 md:px-12 pt-10 bg-white dark:bg-gray-800 flex items-center relative z-70">
            <div className="grow flex items-center h-full py-3">
              {location.pathname.replace(/(\/(..)\/)/, "").trim() === "/" ||
              location.pathname.replace(/(\/(..)\/)/, "").trim() === "" ? (
                <button
                  className="shrink-0 cursor-pointer outline-none h-10"
                  onClick={() => {
                    closeNavDrawer()
                    animateScroll.scrollToTop()
                  }}
                >
                  <NavIcon id="navIcon" />
                </button>
              ) : (
                <GatsbyLink
                  className="shrink-0 cursor-pointer outline-none h-10"
                  to={iconBtnTarget}
                >
                  <NavIcon id="navIcon" />
                </GatsbyLink>
              )}
              {!isMobile && (
                <ul className="flex ml-10 justify-center items-center space-x-4">
                  {links.map((link, i) => (
                    <li key={i} className="h-full flex items-center text-center">
                      {link.target.includes("/") ? (
                        <GatsbyLink
                          className="cursor-pointer nav-link px-3 py-2 rounded-md text-sm font-medium"
                          activeClassName="link-active"
                          to={
                            (location.pathname.match(/(\/(..)\/)/)
                              ? location.pathname.match(/(\/(..)\/)/)[1].slice(0, -1)
                              : "") + link.target
                          }
                        >
                          {link.label}
                        </GatsbyLink>
                      ) : (
                        <Link
                          className="cursor-pointer nav-link px-3 py-2 rounded-md text-sm font-medium"
                          activeClass="link-active"
                          spy
                          smooth
                          offset={link.target === "bio" ? -200 : -70}
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
                {blogBtnVisible && (
                  <GatsbyLink
                    className="outline-none cursor-pointer nav-link px-3 py-2 rounded-full text-sm font-medium"
                    activeClassName="link-active"
                    to="blog"
                  >
                    {labelBlogLink}
                  </GatsbyLink>
                )}
                {contactBtnVisible && (
                  <button
                    className="outline-none cursor-pointer nav-link px-3 py-2 rounded-full text-sm font-medium"
                    onClick={openContactForm}
                  >
                    {labelContactLink}
                  </button>
                )}
                <LightDarkSwitch className="mr-2 nav-link" />
                <div className="flex items-center">
                  <LangSelector
                    navVisible={visible || alwaysDisplayed}
                    location={location}
                    extSlug={langSlug}
                  />
                </div>
              </>
            )}

            {isMobile && (
              <>
                <LightDarkSwitch className="mr-2 nav-link" />
                <LangSelector
                  className="mr-1"
                  navVisible={visible || alwaysDisplayed}
                  location={location}
                  extSlug={langSlug}
                />
                <button
                  onClick={toggleDrawer}
                  className="-mr-2 inline-flex text-gray-800 dark:text-white hover:text-gray-400  items-center justify-center p-2 rounded-md focus:outline-none select-none"
                >
                  <ArrowDownIcon
                    className={
                      "h-6 w-6 transition-transform duration-500" +
                      (isNavDrawerOpen ? " rotate-180" : "")
                    }
                  />
                </button>
              </>
            )}
          </div>
          <AnimatePresence>
            {isMobile && isNavDrawerOpen && (
              <>
                <motion.div
                  id="navbarDrawer"
                  className="px-2 pt-8 pb-3 sm:px-3 bg-white dark:bg-gray-800 w-full fixed z-60 shadow-md"
                  variants={slideIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <ul>
                    {links.map((link, i) => (
                      <li key={i}>
                        {link.target.includes("/") ? (
                          <GatsbyLink
                            className="cursor-pointer w-max whitespace-nowrap nav-link block px-3 py-2 rounded-md text-base font-medium"
                            activeClassName="link-active"
                            to={
                              (location.pathname.match(/(\/(..)\/)/)
                                ? location.pathname.match(/(\/(..)\/)/)[1].slice(0, -1)
                                : "") + link.target
                            }
                            onClick={() => setTimeout(closeNavDrawer)}
                          >
                            {link.label}
                          </GatsbyLink>
                        ) : (
                          <Link
                            key={i}
                            className="cursor-pointer w-max whitespace-nowrap nav-link block px-3 py-2 rounded-md text-base font-medium"
                            to={link.target}
                            activeClass="link-active"
                            spy
                            smooth
                            offset={link.target === "bio" ? -200 : -70}
                            duration={800}
                            onClick={() => setTimeout(closeNavDrawer)}
                          >
                            {link.label}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                  <div className="flex divide-x">
                    {contactBtnVisible && (
                      <button
                        className={
                          "cursor-pointer nav-link p-2 text-base font-medium" +
                          (blogBtnVisible ? " w-1/2 text-right" : " mx-auto")
                        }
                        onClick={openContactForm}
                      >
                        {labelContactLink}
                      </button>
                    )}
                    {blogBtnVisible && (
                      <GatsbyLink
                        className={
                          "cursor-pointer nav-link block p-2 text-base font-medium" +
                          (contactBtnVisible ? " w-1/2 text-left" : " mx-auto")
                        }
                        to="blog"
                      >
                        {labelBlogLink}
                      </GatsbyLink>
                    )}
                  </div>
                </motion.div>
                <Overlay
                  id="navbarOverlay"
                  onClick={closeNavDrawer}
                  variants={fadeIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      )}
    </AnimatePresence>
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
    blogBtnVisible
    labelBlogLink
  }
`
