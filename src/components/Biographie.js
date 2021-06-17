import React from "react"
import styled from "styled-components"

const BioStyled = styled.div`
  text-align: center;
  width: 40%;
  background-color: white;
  margin: auto;
  padding: 2rem 4rem;
  padding-top: 1.5rem;
  border-radius: 16px;
  transform: translateY(-15vh);

  @media (max-width: 768px) {
    width: 90%;
    padding: 1rem 2rem;
    padding-bottom: 2rem;
  }
`

const Biographie = (props) => {
  return (
    <BioStyled id="bio" className="shadow-md">
      <h1 className="text-xl font-bold">Biographie</h1>
      <p className="text-base text-justify mx-auto">
        Depuis tout petit, je suis passionné par l'informatique et les nouvelles
        technologies. Ainsi, après avoir obtenu mon Baccalauréat général
        scientifique, puis mon DUT Informatique à l'IUT de Paris Rives de Seine
        (anciennement Descartes), je suis actuellement en alternance en tant que
        développeur full stack en parallèle d'un cursus d'ingénieur “Logiciels
        et SI” à EFREI Paris.
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
