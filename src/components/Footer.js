import React from "react"

import { Link } from "gatsby"

const footerStyles = {
  backgroundColor: "#EEEEEE",
  color: "#757575",
  height: "15rem",
  marginTop: "-120px",
}

const Footer = () => {
  return (
    <div
      style={footerStyles}
      className="grid grid-cols-1 content-end justify-items-center p-10"
    >
      <Link to="/contact" className="underline">Contactez moi</Link>
      <p>Raphaël Catarino - Portofolio ©</p>
    </div>
  )
}

export default Footer
