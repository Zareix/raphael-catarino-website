import React, { useState, useEffect } from "react"

import { Link as GatsbyLink, graphql } from "gatsby"
import { AnimatePresence, motion } from "framer-motion"

import LangSelector from "./LangSelector"

import ArrowDownIcon from "../../../../images/svg/icons/arrowDown.svg"
import NavIcon from "../../../../images/svg/favicon.svg"
import useScroll from "../../../hooks/use-scroll"
import useWindowWidth from "../../../hooks/use-window-width"
import LightDarkSwitch from "../../light-dark-switch/LightDarkSwitch"
import NavbarMobileDrawer from "./NavbarMobileDrawer"
import NavLinks from "./NavLinks"

export const slideInNav = {
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
  const pathname = location.pathname.match(/(\/(..)\/)/)
    ? location.pathname.match(/(\/(..)\/)/)[1].slice(0, -1)
    : ""

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
    <motion.nav
      variants={slideInNav}
      initial="hidden"
      animate={visible || alwaysDisplayed ? "visible" : "hidden"}
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
                window.scrollTo(0, 0)
              }}
            >
              <NavIcon id="navIcon" />
            </button>
          ) : (
            <GatsbyLink
              className="shrink-0 cursor-pointer outline-none h-10"
              to={pathname + iconBtnTarget}
            >
              <NavIcon id="navIcon" />
            </GatsbyLink>
          )}
          {!isMobile && (
            <NavLinks
              links={links}
              pathname={pathname}
              className="flex ml-10 justify-center items-center space-x-4"
            />
          )}
        </div>
        {isMobile ? (
          <>
            <LightDarkSwitch className="mr-2 nav-link" />
            <LangSelector
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
        ) : (
          <>
            {blogBtnVisible && (
              <GatsbyLink
                className="cursor-pointer nav-link px-3 py-2 rounded-md text-sm font-medium"
                activeClassName="link-active"
                to="blog"
              >
                {labelBlogLink}
              </GatsbyLink>
            )}
            {contactBtnVisible && (
              <button
                className="cursor-pointer nav-link px-3 py-2 rounded-md text-sm font-medium"
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
      </div>
      <AnimatePresence>
        {isMobile && isNavDrawerOpen && (
          <NavbarMobileDrawer
            links={links}
            closeNavDrawer={closeNavDrawer}
            contactBtnVisible={contactBtnVisible}
            blogBtnVisible={blogBtnVisible}
            pathname={pathname}
            openContactForm={openContactForm}
            labelBlogLink={labelBlogLink}
            labelContactLink={labelContactLink}
          />
        )}
      </AnimatePresence>
    </motion.nav>
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
