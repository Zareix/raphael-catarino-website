import React, { Fragment } from "react"
import Navigation from "./Navbar"
import Footer from "./Footer"

const Layout = (props) => {
  return (
    <Fragment>
      <Navigation />
      {props.children}
      <Footer />
    </Fragment>
  )
}

export default Layout
