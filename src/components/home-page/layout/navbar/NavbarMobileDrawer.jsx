import React from "react"

import { motion } from "framer-motion"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"

import { fadeIn } from "../../../utils/framer-motion-variants"
import { slideInNav } from "./Navbar"
import NavLinks from "./NavLinks"

const Overlay = styled(motion.div)`
  position: fixed;
  margin-top: -10px;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`

const NavbarMobileDrawer = ({
  links,
  closeNavDrawer,
  contactBtnVisible,
  blogBtnVisible,
  pathname,
  openContactForm,
  labelContactLink,
  labelBlogLink,
}) => {
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
        <NavLinks links={links} pathname={pathname} closeNavDrawer={closeNavDrawer} />
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
  )
}

export default NavbarMobileDrawer
