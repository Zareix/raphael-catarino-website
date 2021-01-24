import * as React from "react"

import { Link } from "gatsby"

import "../styles/index.css"

const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <div>
        ERREUR 404 : Oups ! Revenez à mon site <Link to="/">ici</Link>
      </div>
    </main>
  )
}

export default IndexPage
