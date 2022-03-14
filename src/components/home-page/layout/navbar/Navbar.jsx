import React, { useState, useEffect, useContext } from "react";

import { Link as GatsbyLink, graphql } from "gatsby";
import { AnimatePresence, motion } from "framer-motion";

import LangSelector from "./LangSelector";

import ArrowDownIcon from "../../../../images/svg/icons/arrowDown.svg";
import NavIcon from "../../../../images/svg/favicon.svg";
import useScroll from "../../../hooks/use-scroll";
import useWindowWidth from "../../../hooks/use-window-width";
import LightDarkSwitch from "../../light-dark-switch/LightDarkSwitch";
import CmsDataContext from "../../../utils/context/data-context";
import NavbarMobileDrawer from "./NavbarMobileDrawer";
import NavLinks from "./NavLinks";

export const slideInNav = {
  hidden: {
    y: "-105%",
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
    y: "-105%",
  },
};

const Navigation = ({ alwaysDisplayed, iconBtnTarget, langSlug }) => {
  const {
    pageLocation,
    layout: { navbar },
  } = useContext(CmsDataContext);
  const { scrolled, scrollAmount } = useScroll();
  const { isMobile } = useWindowWidth();
  const [visible, setVisible] = useState(scrolled);
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const pathname = pageLocation.pathname.match(/(\/(..)\/)/)
    ? pageLocation.pathname.match(/(\/(..)\/)/)[1].slice(0, -1)
    : "";

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (scrolled || alwaysDisplayed) return;
      if (e.clientY < 200) {
        setTimeout(() => {
          setVisible(true);
        });
      } else {
        setTimeout(() => {
          setIsNavDrawerOpen(false);
          setVisible(false);
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrolled]);

  useEffect(() => {
    if (alwaysDisplayed) return;
    if (scrolled) {
      setVisible(true);
    } else {
      setIsNavDrawerOpen(false);
      setVisible(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollAmount]);

  const openContactForm = () => {
    let e = document.getElementById("openContactBtn");
    if (e) e.click();
    setIsNavDrawerOpen(false);
  };

  const isHome = () =>
    pageLocation.pathname.replace(/(\/(..)\/)/, "").trim() === "/" ||
    pageLocation.pathname.replace(/(\/(..)\/)/, "").trim() === "";

  const toggleDrawer = () => setIsNavDrawerOpen(!isNavDrawerOpen);

  const closeNavDrawer = () => setIsNavDrawerOpen(false);

  return (
    <motion.nav
      variants={slideInNav}
      initial="hidden"
      animate={visible || alwaysDisplayed ? "visible" : "hidden"}
      exit="exit"
      id="navbar"
      className={
        "z-50 w-full shadow-md" + (alwaysDisplayed ? " sticky top-0" : " fixed")
      }
    >
      <div className="relative z-70 flex items-center bg-white px-5 pt-10 dark:bg-gray-800 md:px-12">
        <div className="flex h-full grow items-center py-3">
          {isHome() ? (
            <button
              className="h-10 shrink-0 cursor-pointer outline-none"
              onClick={() => {
                closeNavDrawer();
                window.scrollTo(0, 0);
              }}
            >
              <NavIcon id="navIcon" />
            </button>
          ) : (
            <GatsbyLink
              className="h-10 shrink-0 cursor-pointer outline-none"
              to={pathname + iconBtnTarget}
            >
              <NavIcon id="navIcon" />
            </GatsbyLink>
          )}
          {!isMobile && (
            <NavLinks
              links={navbar.links}
              pathname={pathname}
              className="ml-10 flex items-center justify-center space-x-4"
            />
          )}
        </div>
        {isMobile ? (
          <>
            <LightDarkSwitch className="nav-link mr-2" />
            <LangSelector
              navVisible={visible || alwaysDisplayed}
              extSlug={langSlug}
            />
            <button
              onClick={toggleDrawer}
              className="-mr-2 inline-flex select-none items-center justify-center  rounded-md p-2 text-gray-800 hover:text-gray-400 focus:outline-none dark:text-white"
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
            <div>
              {navbar.blogBtnVisible && (
                <GatsbyLink
                  className="nav-link cursor-pointer rounded-md px-3 py-2 text-sm font-medium"
                  activeClassName="link-active"
                  to="blog"
                >
                  {navbar.labelBlogLink}
                </GatsbyLink>
              )}
              {navbar.contactBtnVisible && (
                <button
                  className="nav-link cursor-pointer rounded-md px-3 py-2 text-sm font-medium"
                  onClick={openContactForm}
                >
                  {navbar.labelContactLink}
                </button>
              )}
            </div>
            <LightDarkSwitch className="nav-link mr-2" />
            <div className="flex items-center">
              <LangSelector
                navVisible={visible || navbar.alwaysDisplayed}
                extSlug={langSlug}
              />
            </div>
          </>
        )}
      </div>
      <AnimatePresence>
        {isMobile && isNavDrawerOpen && (
          <NavbarMobileDrawer
            closeNavDrawer={closeNavDrawer}
            openContactForm={openContactForm}
          />
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;

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
`;
