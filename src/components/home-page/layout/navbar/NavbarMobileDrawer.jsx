import React, { useContext } from "react"

import { motion } from "framer-motion"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

import { fadeIn } from "../../../utils/framer-motion-variants"
import { slideInNav } from "./Navbar"
import NavLinks from "./NavLinks"
import CmsDataContext from "../../../utils/context/data-context"

const Overlay = styled(motion.div)`
  position: fixed;
  margin-top: -10px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`

const NavbarMobileDrawer = ({ closeNavDrawer, pathname, openContactForm }) => {
  const {
    layout: { navbar },
  } = useContext(CmsDataContext)

  return (
    <>
      <motion.div
        id="navbarDrawer"
        className="px-2 pt-8 pb-3 sm:px-3 bg-white dark:bg-gray-800 w-full fixed z-60 shadow-md"
        variants={slideInNav}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <NavLinks pathname={pathname} closeNavDrawer={closeNavDrawer} />
        <div className="flex divide-x divide-gray-300">
          {navbar.blogBtnVisible && (
            <GatsbyLink
              className={
                "cursor-pointer nav-link block p-2 text-base font-medium" +
                (navbar.contactBtnVisible ? " w-1/2 text-right" : " mx-auto")
              }
              to="blog"
            >
              {navbar.labelBlogLink}
            </GatsbyLink>
          )}
          {navbar.contactBtnVisible && (
            <button
              className={
                "cursor-pointer nav-link p-2 text-base font-medium" +
                (navbar.blogBtnVisible ? " w-1/2 text-left" : " mx-auto")
              }
              onClick={openContactForm}
            >
              {navbar.labelContactLink}
            </button>
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
  )
}

export default NavbarMobileDrawer
