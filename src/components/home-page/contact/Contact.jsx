import React, { useState } from "react"

import { graphql } from "gatsby"

import ContactModal from "./ContactModal"

const Contact = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const open = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft
    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)
    setIsOpen(true)
  }

  const close = () => {
    window.onscroll = () => {}
    setIsOpen(false)
  }

  return (
    <>
      <button
        id="openContactBtn"
        onClick={() => {
          isOpen ? close() : open()
        }}
        className="px-4 py-1 rounded-full focus:outline-none border-2 border-gray-200 hover:bg-gray-200 hover:text-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
        aria-label="Open contact modal"
      >
        {data.contactBtnText}
      </button>

      <ContactModal visible={isOpen} close={close} data={data} />

      {/* Hidden forms that match the real one for netlify to detect */}
      <form hidden name="contact" data-netlify="true" netlify-honeypot="bot-field">
        <input type="text" name="nom" />
        <input type="email" name="email" />
        <input type="text" name="sujet" />
        <textarea type="text" name="contenu" />
      </form>
    </>
  )
}

export default Contact

export const fragmentContact = graphql`
  fragment Contact on DatoCmsContactForm {
    contactTitle
    contactSentTitle
    contactSentSubtitle
    contactSendBtn
    contactPlaceholderName
    contactPlaceholderEmail
    contactPlaceholderSujet
    contactPlaceholderContenu
    contactBtnText
    contactErreurNom
    contactErreurEmail
    contactErreurSujet
    contactErreurContenu
  }
`
