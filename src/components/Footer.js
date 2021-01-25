import React from "react"

import { Link } from "gatsby"

const footerStyles = {
  backgroundColor: "#424242",
  color: "#BDBDBD",
  height: "15rem",
  marginTop: "-120px",
}

const Footer = () => {
  return (
    <div
      style={footerStyles}
      className="grid grid-cols-1 content-end justify-items-center p-10"
    >
      {/*<Link to="/contact" className="underline">Contactez moi</Link>*/}
      <a href="mailto:raphcatarino@gmail.com" className="underline">
        Contactez moi
      </a>
      <p>Raphaël Catarino - Portofolio ©</p>
    </div>
  )
}

export default Footer
