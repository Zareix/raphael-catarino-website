import React from "react"

import Navigation from "./navbar/Navbar"
import Footer from "./Footer"
import SkipToMainContent from "./skip-to-main/SkipToMainContent"

const Layout = ({ data, children, location }) => {
  return (
    <>
      <SkipToMainContent buttonText={data.datoCmsLayout.skipToMainButtonText} />
      <Navigation data={data.datoCmsNavbar} location={location} />
      {children}
      <Footer dataContact={data.datoCmsContactForm} message={data.datoCmsFooter.footerMessage} />
    </>
  )
}

export default Layout
