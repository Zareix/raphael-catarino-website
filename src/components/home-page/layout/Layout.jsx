import React from "react"

import Navigation from "./navbar/Navbar"
import Footer from "./Footer"

import { ThemeProvider } from "../../utils/context/theme-context"

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <Navigation />
      {children}
      <Footer />
    </ThemeProvider>
  )
}

export default Layout
