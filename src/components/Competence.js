import React from 'react'

import Img from "gatsby-image"

const Competence = (props) => {
    const catName = props.cat.name
    const img = props.img

    const name = img.name.substring(2).replace('_', '/')

    return (
        <div
            data-tip={name}
        >
            <Img
                key={img.id}
                fluid={img.childImageSharp.fluid}
                alt={catName + " " + name}
            ></Img>
        </div>
    )
}

export default Competence
