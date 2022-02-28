import React from "react"

import Navigation from "./navbar/Navbar"
import Footer from "./Footer"
import SkipToMainContent from "./skip-to-main/SkipToMainContent"

import { ThemeProvider } from "../../utils/context/theme-context"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Navigation />
      <SkipToMainContent />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
