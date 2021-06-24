import React, { useState } from "react"
import { FormattedMessage } from "react-intl"

import ContactModal from "./ContactModal"

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        id="openContactBtn"
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-1 transition ease-in duration-200 rounded-full focus:outline-none border-2 border-gray-200 hover:bg-gray-200 hover:text-gray-800 dark:border-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
      >
        <FormattedMessage id="contactBtnText" />
      </button>

      <ContactModal visible={isOpen} close={() => setIsOpen(false)} />

      {/* Hidden forms that match the real one for netlify to detect --> due to how react-modal renders dynamically */}
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
    </>
  )
}

export default Contact
