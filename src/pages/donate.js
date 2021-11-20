import React from "react"
import styled from "styled-components"

const Main = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const DonatePage = () => {
  return (
    <Main>
      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="55A4HQT5GF83W" />
        <input
          type="image"
          src="https://www.paypalobjects.com/fr_FR/FR/i/btn/btn_donate_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Bouton Faites un don avec PayPal"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/fr_FR/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>
    </Main>
  )
}

export default DonatePage
