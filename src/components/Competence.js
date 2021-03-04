import React from 'react'

import { GatsbyImage } from "gatsby-plugin-image";

const Competence = (props) => {
    const catName = props.cat.name
    const img = props.img

    const name = img.name.substring(2).replace('_', '/')

    return (
        <div
            data-tip={name}
        >
            <GatsbyImage
                image={img.childImageSharp.gatsbyImageData}
                key={img.id}
                alt={catName + " " + name} />
        </div>
    )
}

export default Competence
