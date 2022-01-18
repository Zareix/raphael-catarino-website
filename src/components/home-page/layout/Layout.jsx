import React from "react"

import Navigation from "./navbar/Navbar"
import Footer from "./Footer"

import { ThemeProvider } from "../../utils/context/theme-context"

const Layout = ({ data, children, location }) => {
  return (
    <ThemeProvider>
      <Navigation data={data.datoCmsNavbar} location={location} />
      {children}
      <Footer dataContact={data.datoCmsContactForm} message={data.datoCmsFooter.footerMessage} />
    </ThemeProvider>
  )
}

export default Layout
