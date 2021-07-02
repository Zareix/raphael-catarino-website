import React from "react"
import Navigation from "./Navbar/Navbar"
import Footer from "./Footer"

const Layout = ({ data, children, location }) => {
  return (
    <>
      <Navigation data={data.datoCmsNavbar} location={location} />
      {children}
      <Footer
        dataContact={data.datoCmsContactForm}
        message={data.datoCmsSiteConfig.footerMessage}
      />
    </>
  )
}

export default Layout
