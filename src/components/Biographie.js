import React from "react"

const bioStyles = {
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  textAlign: "center",
}

const Biographie = (props) => {
  return (
    <div style={bioStyles} id={props.id}>
      <h1 className="contTitle">Biographie</h1>
      <p className="contText text-justify md:w-8/12">
        Depuis tout petit, je suis passionné par l'informatique et les nouvelles
        technologies. Ainsi, après avoir obtenu mon Baccalauréat général
        scientifique, je suis désormais en 2e année à l'IUT de Paris
        (anciennement Descartes) en Informatique. J'aimerais ainsi continuer
        dans ce domaine pour en faire mon métier et vivre de ma passion.
        <br></br>
        Vous trouverez sur ce site l'intégralité de mes compétences dans ce
        domaine ainsi que mes divers projets.
      </p>
    </div>
  )
}

export default Biographie
