import React, { useContext } from "react";

import { Link as GatsbyLink } from "gatsby";
import { CSSTransition } from "react-transition-group";
import styled from "styled-components";

import NavLinks from "./NavLinks";
import CmsDataContext from "../../../utils/context/data-context";

const Overlay = styled.div`
  position: fixed;
  margin-top: -10px;
  width: 100%;
  height: 120vh;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
`;

const NavbarMobileDrawer = ({
  closeNavDrawer,
  pathname,
  openContactForm,
  visible,
}) => {
  const {
    layout: { navbar },
  } = useContext(CmsDataContext);

  return (
    <>
      <div
        id="navbarDrawer"
        className={`fixed z-60 w-full bg-white px-2 pt-8 pb-3 shadow-md transition-all duration-1000 dark:bg-gray-800 sm:px-3 ${
          visible ? "top-8" : "-top-[30%]"
        }`}
      >
        <NavLinks pathname={pathname} closeNavDrawer={closeNavDrawer} />
        <div className="flex divide-x divide-gray-300">
          {navbar.blogBtnVisible && (
            <GatsbyLink
              className={
                "nav-link block cursor-pointer p-2 text-base font-medium" +
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
                "nav-link cursor-pointer p-2 text-base font-medium" +
                (navbar.blogBtnVisible ? " w-1/2 text-left" : " mx-auto")
              }
              onClick={openContactForm}
            >
              {navbar.labelContactLink}
            </button>
          )}
        </div>
      </div>
      <CSSTransition in={visible} timeout={750} unmountOnExit classNames="fade">
        <Overlay id="navbarOverlay" onClick={closeNavDrawer} />
      </CSSTransition>
    </>
  );
};

export default NavbarMobileDrawer;
