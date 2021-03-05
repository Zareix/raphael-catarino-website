import React from "react"
import styled from "styled-components"

const PresentationWrapper = styled.div`
    width: 100%;
    margin: 0;
    color: white;
  `
const PresentationStyled = styled.div`
    height: 70vh;
    background-color: rgba(37, 99, 235);
    display: grid;
    justify-content: center;
    align-items: center;
    font-size: 1.875rem;
    line-height: 2.25rem;
  `

const Presentation = () => {
  return (
    <PresentationWrapper>
      <PresentationStyled>
        <div className="text-center mt-12">
          <h1 className="font-bold text-4xl">Raphaël Catarino</h1>
          <h2>Etudiant en DUT Informatique</h2>
        </div>
      </PresentationStyled>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="h-full relative -top-2">
        <path fill="#2563EB" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,197.3C384,203,480,245,576,224C672,203,768,117,864,117.3C960,117,1056,203,1152,218.7C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" data-darkreader-inline-fill="" style={{ darkreaderInlineFill: "#1043b2" }}></path>
      </svg>
    </PresentationWrapper>
  )
}

export default Presentation
