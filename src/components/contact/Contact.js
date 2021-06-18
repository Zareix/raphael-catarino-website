import React, { useState } from "react"
import { FormattedMessage } from "react-intl"

import ContactModal from "./ContactModal"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-1 transition ease-in duration-200 rounded-full hover:bg-gray-800  hover:text-white border-2 border-gray-800 focus:outline-none"
      >
        <FormattedMessage id="contactBtnText" />
      </button>

      {/* Hidden forms that match the real one for netlify to detect --> due to how modal works in js dynamically */}
      <form
        hidden
        name="contact"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="text" name="nom" />
        <input type="email" name="email" />
        <input type="text" name="sujet" />
        <textarea type="text" name="contenu" />
      </form>
      <ContactModal visible={isOpen} close={() => setIsOpen(false)} />
    </>
  )
}

export default Contact
