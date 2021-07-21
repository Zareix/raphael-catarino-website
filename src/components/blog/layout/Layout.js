import React from "react"

import Footer from "../../home-page/layout/Footer"
import Navigation from "../../home-page/layout/navbar/Navbar"
import SidePanel from "./SidePanel"

const Layout = ({
  children,
  footerData,
  contactData,
  latestPosts,
  currentPostId,
  location,
  sidePanel,
  langSlug,
}) => {
  const navData = {
    links: [
      {
        label: "Home",
        target: "/blog",
      },
      {
        label: "Portfolio",
        target: "/",
      },
    ],
    labelContactLink: contactData.contactBtnText,
    contactBtnVisible: false,
    blogBtnVisible: false,
    labelBlogLink: "Blog",
  }

  return (
    <>
      <Navigation
        location={location}
        data={navData}
        alwaysDisplayed
        iconBtnTarget={
          (location.pathname.match(/(\/(..)\/)/)
            ? location.pathname.match(/(\/(..)\/)/)[1].slice(0, -1)
            : "") + "/blog/"
        }
        langSlug={langSlug}
      />
      <main
        className={
          "flex md:w-11/12 mx-auto mb-0 z-10" + (sidePanel ? "" : " flex-col")
        }
      >
        {children}
        {sidePanel && (
          <SidePanel
            latestPosts={latestPosts}
            currentPostId={currentPostId}
            location={location}
          />
        )}
      </main>
      <Footer dataContact={contactData} message={footerData.footerMessage} />
    </>
  )
}

export default Layout
