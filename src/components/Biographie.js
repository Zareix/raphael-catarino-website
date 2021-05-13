import React from "react"
import styled from "styled-components"

const BioStyled = styled.div`
  text-align: center;
  width: 60%;
  background-color: white;
  margin: auto;
  padding: 2rem 4rem;
  border-radius: 16px;
  transform: translateY(-20vh);

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem 2rem;
    padding-bottom: 2rem;
    transform: translateY(-15vh);
  }
`

const Biographie = (props) => {
  return (
    <BioStyled id="bio" className="shadow-md">
      <h1 className="contTitle">Biographie</h1>
      <p className="contText text-justify mx-auto">
        Depuis tout petit, je suis passionné par l'informatique et les nouvelles
        technologies. Ainsi, après avoir obtenu mon Baccalauréat général
        scientifique, puis mon DUT Informatique à l'IUT de Paris Rives de Seine
        (anciennement Descartes), je suis à la recherche d’une alternance de 3
        ans dans le cadre de mon cursus ingénieur “Logiciels et SI” à l’EFREI.
        <br></br>
        J'aimerais ainsi continuer dans ce domaine pour en faire mon métier et
        vivre de ma passion.
        <br></br>
        Vous trouverez sur ce site l'intégralité de mes compétences dans ce
        domaine ainsi que mes divers projets.
      </p>
    </BioStyled>
  )
}

export default Biographie
