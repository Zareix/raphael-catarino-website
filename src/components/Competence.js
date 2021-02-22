import React from 'react'

import Img from "gatsby-image"

const Competence = (props) => {
    const cat = props.cat
    const img = props.img

    const name = img.name.substring(2).replace('#','/')

    return (
        <div>
            <div
                data-tip={name}
            >
                <Img
                    key={img.id}
                    fluid={img.childImageSharp.fluid}
                    alt={`${cat != null ? cat.name : ""} ${name}`}
                ></Img>
            </div>
        </div>
    )
}

export default Competence
