import React from "react"
import Navigation from "./Navbar/Navbar"
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
